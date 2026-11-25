-- Live competitions for Count Me In.
--
-- Run this whole file once in your Supabase project: Dashboard > SQL Editor > New query,
-- paste, Run. Running it again is safe: it only adds what's missing and replaces functions.
--
-- How it stays safe on a public site
-- * Everyone gets the same public "anon" key. That key can't do anything by itself:
--   every table below has row level security, and the rules are written here.
-- * Only users listed in public.admins can create or change competitions. Nobody can
--   add themselves to that table from the site. You add an admin with the SQL editor
--   (see README) or scripts/create-admin.mjs.
-- * Questions stay hidden until a student joins a running competition, and the answer key
--   stays hidden from everyone but admins until the competition ends. Grading happens
--   here in the database, never in the browser.
-- * Students sign in anonymously (no email, no password) and pick a display name.

-- ---------------------------------------------------------------------------
-- Admins
-- ---------------------------------------------------------------------------

create table if not exists public.admins (
  user_id uuid primary key references auth.users (id) on delete cascade,
  note text,
  created_at timestamptz not null default now()
);

alter table public.admins enable row level security;
-- No policies on purpose: the site can't read or change this table at all.
revoke all on public.admins from anon, authenticated;

create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (select 1 from public.admins where user_id = (select auth.uid()));
$$;

-- ---------------------------------------------------------------------------
-- Competitions
-- ---------------------------------------------------------------------------

create table if not exists public.competitions (
  id uuid primary key default gen_random_uuid(),
  slug text not null unique
    check (slug ~ '^[a-z0-9]+(-[a-z0-9]+)*$' and char_length(slug) <= 60),
  title text not null check (char_length(title) between 1 and 120),
  summary text not null default '' check (char_length(summary) <= 500),
  rules text not null default '' check (char_length(rules) <= 4000),
  style text not null default 'AMC 8' check (char_length(style) <= 40),
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  -- Each student's own time limit, counted from when they join. It never runs past ends_at.
  duration_minutes integer not null default 40 check (duration_minutes between 1 and 1440),
  points_correct numeric(6, 2) not null default 1,
  points_blank numeric(6, 2) not null default 0,
  points_wrong numeric(6, 2) not null default 0,
  -- Hidden from students until this is true.
  published boolean not null default false,
  -- Show the leaderboard while the competition runs, not only after it ends.
  live_leaderboard boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint competitions_window check (ends_at > starts_at)
);

create table if not exists public.competition_problems (
  id uuid primary key default gen_random_uuid(),
  competition_id uuid not null references public.competitions (id) on delete cascade,
  position integer not null check (position between 1 and 200),
  body text not null check (char_length(body) between 1 and 10000),
  choices text[] not null check (cardinality(choices) between 2 and 6),
  constraint competition_problems_position unique (competition_id, position) deferrable initially deferred
);
create index if not exists competition_problems_competition on public.competition_problems (competition_id);

-- Kept apart from the questions so the answers can have stricter rules.
create table if not exists public.competition_answers (
  problem_id uuid primary key references public.competition_problems (id) on delete cascade,
  answer text not null check (answer in ('A', 'B', 'C', 'D', 'E', 'F')),
  solution text not null default '' check (char_length(solution) <= 10000)
);

create table if not exists public.competition_entries (
  id uuid primary key default gen_random_uuid(),
  competition_id uuid not null references public.competitions (id) on delete cascade,
  user_id uuid not null references auth.users (id) on delete cascade,
  display_name text not null check (char_length(display_name) between 1 and 40),
  -- Problem id -> chosen letter. Only written through save_answers(), which checks the clock.
  answers jsonb not null default '{}'::jsonb check (jsonb_typeof(answers) = 'object'),
  started_at timestamptz not null default now(),
  submitted_at timestamptz,
  -- Admins can hide an entry from the leaderboard, for a rude name or a disqualification.
  hidden boolean not null default false,
  constraint competition_entries_one_each unique (competition_id, user_id)
);
create index if not exists competition_entries_competition on public.competition_entries (competition_id);

create or replace function public.touch_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists competitions_touch on public.competitions;
create trigger competitions_touch before update on public.competitions
  for each row execute function public.touch_updated_at();

-- ---------------------------------------------------------------------------
-- Helpers used by the access rules
-- ---------------------------------------------------------------------------

-- True once the competition is published and over.
create or replace function public.competition_ended(p_competition uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.competitions
    where id = p_competition and published and ends_at <= now()
  );
$$;

-- True when the signed-in user has joined this competition.
create or replace function public.has_joined(p_competition uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.competition_entries
    where competition_id = p_competition and user_id = (select auth.uid())
  );
$$;

create or replace function public.problem_competition(p_problem uuid)
returns uuid
language sql
stable
security definer
set search_path = ''
as $$
  select competition_id from public.competition_problems where id = p_problem;
$$;

-- ---------------------------------------------------------------------------
-- Access rules
-- ---------------------------------------------------------------------------

alter table public.competitions enable row level security;
alter table public.competition_problems enable row level security;
alter table public.competition_answers enable row level security;
alter table public.competition_entries enable row level security;

revoke all on public.competitions, public.competition_problems, public.competition_answers, public.competition_entries
  from anon, authenticated;
grant select on public.competitions, public.competition_problems, public.competition_answers to anon, authenticated;
grant insert, update, delete on public.competitions, public.competition_problems, public.competition_answers to authenticated;
-- Entries: students only read their own. Joining and answering go through the functions below.
grant select, update, delete on public.competition_entries to authenticated;

drop policy if exists "Published competitions are public" on public.competitions;
create policy "Published competitions are public" on public.competitions
  for select using (published or (select public.is_admin()));
drop policy if exists "Admins add competitions" on public.competitions;
create policy "Admins add competitions" on public.competitions
  for insert to authenticated with check ((select public.is_admin()));
drop policy if exists "Admins change competitions" on public.competitions;
create policy "Admins change competitions" on public.competitions
  for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
drop policy if exists "Admins delete competitions" on public.competitions;
create policy "Admins delete competitions" on public.competitions
  for delete to authenticated using ((select public.is_admin()));

-- Questions: to students who joined, then to everyone once the competition ends.
drop policy if exists "Questions after joining" on public.competition_problems;
create policy "Questions after joining" on public.competition_problems
  for select using (
    (select public.is_admin())
    or public.has_joined(competition_id)
    or public.competition_ended(competition_id)
  );
drop policy if exists "Admins add questions" on public.competition_problems;
create policy "Admins add questions" on public.competition_problems
  for insert to authenticated with check ((select public.is_admin()));
drop policy if exists "Admins change questions" on public.competition_problems;
create policy "Admins change questions" on public.competition_problems
  for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
drop policy if exists "Admins delete questions" on public.competition_problems;
create policy "Admins delete questions" on public.competition_problems
  for delete to authenticated using ((select public.is_admin()));

-- Answer key: admins only, then everyone once the competition ends.
drop policy if exists "Answers after the end" on public.competition_answers;
create policy "Answers after the end" on public.competition_answers
  for select using (
    (select public.is_admin()) or public.competition_ended(public.problem_competition(problem_id))
  );
drop policy if exists "Admins add answers" on public.competition_answers;
create policy "Admins add answers" on public.competition_answers
  for insert to authenticated with check ((select public.is_admin()));
drop policy if exists "Admins change answers" on public.competition_answers;
create policy "Admins change answers" on public.competition_answers
  for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
drop policy if exists "Admins delete answers" on public.competition_answers;
create policy "Admins delete answers" on public.competition_answers
  for delete to authenticated using ((select public.is_admin()));

drop policy if exists "Students see their own entry" on public.competition_entries;
create policy "Students see their own entry" on public.competition_entries
  for select to authenticated using (user_id = (select auth.uid()) or (select public.is_admin()));
drop policy if exists "Admins change entries" on public.competition_entries;
create policy "Admins change entries" on public.competition_entries
  for update to authenticated using ((select public.is_admin())) with check ((select public.is_admin()));
drop policy if exists "Admins delete entries" on public.competition_entries;
create policy "Admins delete entries" on public.competition_entries
  for delete to authenticated using ((select public.is_admin()));

-- ---------------------------------------------------------------------------
-- What students call
-- ---------------------------------------------------------------------------

-- Joins a running competition, or returns the entry the student already has.
create or replace function public.join_competition(p_competition uuid, p_name text)
returns public.competition_entries
language plpgsql
security definer
set search_path = ''
as $$
declare
  c public.competitions;
  e public.competition_entries;
  uid uuid := auth.uid();
  clean text;
begin
  if uid is null then
    raise exception 'Sign in first.' using errcode = '28000';
  end if;
  select * into c from public.competitions where id = p_competition and published;
  if not found then
    raise exception 'That competition was not found.' using errcode = 'P0002';
  end if;
  select * into e from public.competition_entries where competition_id = c.id and user_id = uid;
  if found then
    return e;
  end if;
  if now() < c.starts_at then
    raise exception 'This competition has not started yet.' using errcode = 'P0001';
  end if;
  if now() >= c.ends_at then
    raise exception 'This competition has ended.' using errcode = 'P0001';
  end if;
  clean := btrim(regexp_replace(regexp_replace(coalesce(p_name, ''), '[[:cntrl:]]', '', 'g'), '\s+', ' ', 'g'));
  if char_length(clean) not between 1 and 40 then
    raise exception 'Pick a display name from 1 to 40 characters.' using errcode = '22023';
  end if;
  insert into public.competition_entries (competition_id, user_id, display_name)
  values (c.id, uid, clean)
  returning * into e;
  return e;
end;
$$;

-- Saves a student's answers, and hands them in when p_submit is true. Answers that arrive
-- after the student's time is up (plus 30 seconds for a slow connection) are ignored.
create or replace function public.save_answers(p_entry uuid, p_answers jsonb, p_submit boolean default false)
returns public.competition_entries
language plpgsql
security definer
set search_path = ''
as $$
declare
  e public.competition_entries;
  c public.competitions;
  deadline timestamptz;
  clean jsonb;
begin
  select * into e from public.competition_entries where id = p_entry for update;
  if not found or e.user_id is distinct from auth.uid() then
    raise exception 'That entry was not found.' using errcode = 'P0002';
  end if;
  if e.submitted_at is not null then
    return e;
  end if;
  select * into c from public.competitions where id = e.competition_id;
  deadline := least(e.started_at + make_interval(mins => c.duration_minutes), c.ends_at);

  if now() <= deadline + interval '30 seconds' then
    -- Keep only real questions in this competition, and only letters that are real choices.
    select coalesce(jsonb_object_agg(p.id::text, upper(p_answers ->> p.id::text)), '{}'::jsonb)
      into clean
      from public.competition_problems p
     where p.competition_id = c.id
       and jsonb_typeof(p_answers) = 'object'
       and p_answers ? p.id::text
       and upper(p_answers ->> p.id::text) in ('A', 'B', 'C', 'D', 'E', 'F')
       and position(upper(p_answers ->> p.id::text) in left('ABCDEF', cardinality(p.choices))) > 0;
    update public.competition_entries set answers = clean where id = e.id returning * into e;
  elsif not p_submit then
    raise exception 'Time is up, so this answer was not saved.' using errcode = 'P0001';
  end if;

  if p_submit then
    update public.competition_entries set submitted_at = least(now(), deadline) where id = e.id returning * into e;
  end if;
  return e;
end;
$$;

-- The leaderboard: finished entries only, best score first, then the fastest time.
-- It's empty until the competition ends, unless live_leaderboard is on. Admins always see it.
create or replace function public.leaderboard(p_competition uuid)
returns table (
  place bigint,
  display_name text,
  score numeric,
  correct integer,
  wrong integer,
  blank integer,
  seconds integer,
  is_me boolean
)
language plpgsql
stable
security definer
set search_path = ''
as $$
#variable_conflict use_column
declare
  c public.competitions;
  total integer;
begin
  select * into c from public.competitions where id = p_competition and (published or public.is_admin());
  if not found then
    return;
  end if;
  if not (public.is_admin() or now() >= c.ends_at or (c.live_leaderboard and now() >= c.starts_at)) then
    return;
  end if;
  select count(*) into total from public.competition_problems where competition_id = c.id;

  return query
  with graded as (
    select
      e.display_name,
      e.user_id,
      count(a.answer) filter (where e.answers ->> p.id::text = a.answer)::integer as n_correct,
      count(p.id) filter (where e.answers ? p.id::text)::integer as n_answered,
      greatest(0, extract(epoch from (
        coalesce(e.submitted_at, least(e.started_at + make_interval(mins => c.duration_minutes), c.ends_at)) - e.started_at
      )))::integer as n_seconds
    from public.competition_entries e
    left join public.competition_problems p on p.competition_id = e.competition_id
    left join public.competition_answers a on a.problem_id = p.id
    where e.competition_id = c.id
      and not e.hidden
      and (e.submitted_at is not null
           or now() >= least(e.started_at + make_interval(mins => c.duration_minutes), c.ends_at))
    group by e.id
  ),
  scored as (
    select
      g.*,
      g.n_correct * c.points_correct
        + (total - g.n_answered) * c.points_blank
        + (g.n_answered - g.n_correct) * c.points_wrong as n_score
    from graded g
  )
  select
    rank() over (order by s.n_score desc, s.n_seconds asc),
    s.display_name,
    s.n_score,
    s.n_correct,
    s.n_answered - s.n_correct,
    total - s.n_answered,
    s.n_seconds,
    coalesce(s.user_id = auth.uid(), false)
  from scored s
  order by 1, s.display_name
  limit 500;
end;
$$;

-- Lets the site check whether the signed-in user is an admin, to show or hide the dashboard.
-- It's only a convenience: every change is still checked by the rules above.
create or replace function public.am_i_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select public.is_admin();
$$;

revoke execute on function
  public.is_admin(), public.competition_ended(uuid), public.has_joined(uuid), public.problem_competition(uuid),
  public.join_competition(uuid, text), public.save_answers(uuid, jsonb, boolean), public.leaderboard(uuid),
  public.am_i_admin(), public.touch_updated_at()
  from public;
-- The access rules run these as the signed-in user, so those roles need them.
grant execute on function public.is_admin(), public.competition_ended(uuid), public.has_joined(uuid),
  public.problem_competition(uuid)
  to anon, authenticated;
grant execute on function public.leaderboard(uuid) to anon, authenticated;
grant execute on function public.join_competition(uuid, text), public.save_answers(uuid, jsonb, boolean),
  public.am_i_admin()
  to authenticated;
