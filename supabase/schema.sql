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
--   (see README).
-- * Questions stay hidden until a student joins a running competition, and the answer key
--   stays hidden from everyone but admins until the competition ends. Grading happens
--   here in the database, never in the browser.
-- * Students make an account with a username and password (no email). Each browser gets an
--   anonymous Supabase session, and signing in links that session to the account, so a
--   student can sign in on any device. Passwords are stored as bcrypt hashes that nobody,
--   admins included, can read. Repeated wrong passwords are slowed down.

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
-- Student accounts: a username and password, no email
-- ---------------------------------------------------------------------------

-- Supabase keeps pgcrypto in the "extensions" schema. It provides bcrypt.
create schema if not exists extensions;
create extension if not exists pgcrypto with schema extensions;

create table if not exists public.student_accounts (
  id uuid primary key default gen_random_uuid(),
  -- Stored in lowercase. Shown on the leaderboard.
  username text not null unique check (username ~ '^[a-z0-9_]{3,20}$'),
  password_hash text not null,
  created_at timestamptz not null default now()
);

-- Which signed-in browser sessions belong to which account. A student signed in on two
-- devices has two rows here.
create table if not exists public.student_sessions (
  user_id uuid primary key references auth.users (id) on delete cascade,
  account_id uuid not null references public.student_accounts (id) on delete cascade,
  signed_in_at timestamptz not null default now()
);
create index if not exists student_sessions_account on public.student_sessions (account_id);

-- Wrong passwords, to slow down guessing.
create table if not exists public.student_sign_in_failures (
  id bigint generated always as identity primary key,
  user_id uuid,
  account_id uuid references public.student_accounts (id) on delete cascade,
  at timestamptz not null default now()
);
create index if not exists student_sign_in_failures_user on public.student_sign_in_failures (user_id, at);
create index if not exists student_sign_in_failures_account on public.student_sign_in_failures (account_id, at);

alter table public.student_accounts enable row level security;
alter table public.student_sessions enable row level security;
alter table public.student_sign_in_failures enable row level security;
-- No policies: the site reaches these only through the functions below, and never sees a hash.
revoke all on public.student_accounts, public.student_sessions, public.student_sign_in_failures
  from anon, authenticated;

-- The student account the current browser session is signed in to, or null.
create or replace function public.current_account()
returns uuid
language sql
stable
security definer
set search_path = ''
as $$
  select account_id from public.student_sessions where user_id = (select auth.uid());
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
  -- Show the questions only while the browser is in full screen.
  require_fullscreen boolean not null default false,
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
  account_id uuid not null references public.student_accounts (id) on delete cascade,
  -- The username when the student joined, kept so the leaderboard doesn't change later.
  display_name text not null check (char_length(display_name) between 1 and 40),
  -- Problem id -> chosen letter. Only written through save_answers(), which checks the clock.
  answers jsonb not null default '{}'::jsonb check (jsonb_typeof(answers) = 'object'),
  started_at timestamptz not null default now(),
  submitted_at timestamptz,
  -- Admins can hide an entry from the leaderboard, for a rude name or a disqualification.
  hidden boolean not null default false,
  -- The student ticked the honor pledge when joining.
  pledged_at timestamptz,
  -- Reported by the student's browser, for admins to review. A browser can be made to report
  -- nothing, so these are hints, never proof. They can only go up.
  tab_leaves integer not null default 0 check (tab_leaves >= 0),
  seconds_away integer not null default 0 check (seconds_away >= 0),
  fullscreen_exits integer not null default 0 check (fullscreen_exits >= 0),
  -- The device couldn't go full screen (iPhones can't), in a competition that asks for it.
  no_fullscreen boolean not null default false,
  constraint competition_entries_one_each unique (competition_id, account_id)
);

-- For databases made before these columns existed.
alter table public.competitions add column if not exists require_fullscreen boolean not null default false;
alter table public.competition_entries add column if not exists pledged_at timestamptz;
alter table public.competition_entries add column if not exists tab_leaves integer not null default 0;
alter table public.competition_entries add column if not exists seconds_away integer not null default 0;
alter table public.competition_entries add column if not exists fullscreen_exits integer not null default 0;
alter table public.competition_entries add column if not exists no_fullscreen boolean not null default false;
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

-- True when the signed-in student has joined this competition.
create or replace function public.has_joined(p_competition uuid)
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.competition_entries
    where competition_id = p_competition and account_id = public.current_account()
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
  for select to authenticated using (account_id = (select public.current_account()) or (select public.is_admin()));
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
drop function if exists public.join_competition(uuid, text);
drop function if exists public.join_competition(uuid);
create or replace function public.join_competition(p_competition uuid, p_pledge boolean)
returns public.competition_entries
language plpgsql
security definer
set search_path = ''
as $$
declare
  c public.competitions;
  e public.competition_entries;
  acct public.student_accounts;
begin
  select a.* into acct from public.student_accounts a where a.id = public.current_account();
  if not found then
    raise exception 'Sign in to your student account first.' using errcode = '28000';
  end if;
  select * into c from public.competitions where id = p_competition and published;
  if not found then
    raise exception 'That competition was not found.' using errcode = 'P0002';
  end if;
  select * into e from public.competition_entries where competition_id = c.id and account_id = acct.id;
  if found then
    return e;
  end if;
  if now() < c.starts_at then
    raise exception 'This competition has not started yet.' using errcode = 'P0001';
  end if;
  if now() >= c.ends_at then
    raise exception 'This competition has ended.' using errcode = 'P0001';
  end if;
  if p_pledge is not true then
    raise exception 'Tick the honor pledge to join.' using errcode = '22023';
  end if;
  insert into public.competition_entries (competition_id, account_id, display_name, pledged_at)
  values (c.id, acct.id, acct.username, now())
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
  if not found or e.account_id is distinct from public.current_account() then
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


-- The student's browser reports how often they left the page or full screen. Totals can only
-- go up, and only while the student's time is running (plus 30 seconds).
create or replace function public.report_focus(
  p_entry uuid, p_tab_leaves integer, p_seconds_away integer, p_fullscreen_exits integer, p_no_fullscreen boolean
)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  e public.competition_entries;
  c public.competitions;
begin
  select * into e from public.competition_entries where id = p_entry for update;
  if not found or e.account_id is distinct from public.current_account() then
    raise exception 'That entry was not found.' using errcode = 'P0002';
  end if;
  select * into c from public.competitions where id = e.competition_id;
  if now() > least(e.started_at + make_interval(mins => c.duration_minutes), c.ends_at) + interval '30 seconds' then
    return;
  end if;
  update public.competition_entries set
    tab_leaves = greatest(tab_leaves, least(coalesce(p_tab_leaves, 0), 100000)),
    seconds_away = greatest(seconds_away, least(coalesce(p_seconds_away, 0), 100000)),
    fullscreen_exits = greatest(fullscreen_exits, least(coalesce(p_fullscreen_exits, 0), 100000)),
    no_fullscreen = no_fullscreen or coalesce(p_no_fullscreen, false)
  where id = e.id;
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
      e.account_id,
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
    coalesce(s.account_id = public.current_account(), false)
  from scored s
  order by 1, s.display_name
  limit 500;
end;
$$;


-- ---------------------------------------------------------------------------
-- Student sign-up and sign-in
-- ---------------------------------------------------------------------------

-- Makes a student account and signs this browser session in to it.
create or replace function public.student_sign_up(p_username text, p_password text)
returns text
language plpgsql
security definer
set search_path = ''
as $$
declare
  uid uuid := auth.uid();
  name text := lower(btrim(coalesce(p_username, '')));
  acct uuid;
begin
  if uid is null then
    raise exception 'Sign in first.' using errcode = '28000';
  end if;
  if name !~ '^[a-z0-9_]{3,20}$' then
    raise exception 'Pick a username of 3 to 20 letters, numbers, or underscores.' using errcode = '22023';
  end if;
  if char_length(coalesce(p_password, '')) not between 8 and 72 then
    raise exception 'Pick a password of 8 to 72 characters.' using errcode = '22023';
  end if;
  begin
    insert into public.student_accounts (username, password_hash)
    values (name, extensions.crypt(p_password, extensions.gen_salt('bf', 10)))
    returning id into acct;
  exception when unique_violation then
    raise exception 'That username is taken. Try another one.' using errcode = '23505';
  end;
  insert into public.student_sessions (user_id, account_id) values (uid, acct)
  on conflict (user_id) do update set account_id = excluded.account_id, signed_in_at = now();
  return name;
end;
$$;

-- Signs this browser session in to a student account. It returns 'ok', 'wrong', or 'slow down'
-- instead of raising an error, so that wrong tries are still counted.
create or replace function public.student_sign_in(p_username text, p_password text)
returns text
language plpgsql
security definer
set search_path = ''
as $$
declare
  uid uuid := auth.uid();
  name text := lower(btrim(coalesce(p_username, '')));
  acct public.student_accounts;
begin
  if uid is null then
    raise exception 'Sign in first.' using errcode = '28000';
  end if;
  select * into acct from public.student_accounts where username = name;
  -- 5 wrong tries per browser session every 15 minutes, and 30 per account every hour.
  if (select count(*) from public.student_sign_in_failures
        where user_id = uid and at > now() - interval '15 minutes') >= 5
     or (acct.id is not null and (select count(*) from public.student_sign_in_failures
        where account_id = acct.id and at > now() - interval '1 hour') >= 30) then
    return 'slow down';
  end if;
  -- Check a password even when the username doesn't exist, so the answer takes as long either way.
  if acct.id is null
     or acct.password_hash <> extensions.crypt(coalesce(p_password, ''), acct.password_hash) then
    if acct.id is null then
      perform extensions.crypt(coalesce(p_password, ''), '$2a$10$abcdefghijklmnopqrstuu');
    end if;
    insert into public.student_sign_in_failures (user_id, account_id) values (uid, acct.id);
    return 'wrong';
  end if;
  insert into public.student_sessions (user_id, account_id) values (uid, acct.id)
  on conflict (user_id) do update set account_id = excluded.account_id, signed_in_at = now();
  return 'ok';
end;
$$;

-- Signs this browser session out of its student account.
create or replace function public.student_sign_out()
returns void
language sql
security definer
set search_path = ''
as $$
  delete from public.student_sessions where user_id = (select auth.uid());
$$;

-- The username this browser session is signed in as, or null.
create or replace function public.student_whoami()
returns text
language sql
stable
security definer
set search_path = ''
as $$
  select username from public.student_accounts where id = public.current_account();
$$;

-- Admins: find student accounts by part of a username.
create or replace function public.admin_find_students(p_query text)
returns table (username text, created_at timestamptz, entries bigint)
language plpgsql
stable
security definer
set search_path = ''
as $$
begin
  if not public.is_admin() then
    raise exception 'Admins only.' using errcode = '42501';
  end if;
  return query
  select a.username, a.created_at, (select count(*) from public.competition_entries e where e.account_id = a.id)
  from public.student_accounts a
  where a.username like '%' || replace(replace(replace(lower(btrim(coalesce(p_query, ''))), '\', '\\'), '%', '\%'), '_', '\_') || '%'
  order by a.username
  limit 50;
end;
$$;

-- Admins: set a new password for a student who forgot theirs. It signs out their other devices.
create or replace function public.admin_reset_student_password(p_username text, p_password text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
declare
  acct uuid;
begin
  if not public.is_admin() then
    raise exception 'Admins only.' using errcode = '42501';
  end if;
  if char_length(coalesce(p_password, '')) not between 8 and 72 then
    raise exception 'Pick a password of 8 to 72 characters.' using errcode = '22023';
  end if;
  update public.student_accounts
     set password_hash = extensions.crypt(p_password, extensions.gen_salt('bf', 10))
   where username = lower(btrim(p_username))
  returning id into acct;
  if acct is null then
    raise exception 'No student has that username.' using errcode = 'P0002';
  end if;
  delete from public.student_sessions where account_id = acct;
  delete from public.student_sign_in_failures where account_id = acct;
end;
$$;

-- Admins: delete a student account and all its entries.
create or replace function public.admin_delete_student(p_username text)
returns void
language plpgsql
security definer
set search_path = ''
as $$
begin
  if not public.is_admin() then
    raise exception 'Admins only.' using errcode = '42501';
  end if;
  delete from public.student_accounts where username = lower(btrim(p_username));
  if not found then
    raise exception 'No student has that username.' using errcode = 'P0002';
  end if;
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
  public.is_admin(), public.current_account(), public.competition_ended(uuid), public.has_joined(uuid),
  public.problem_competition(uuid), public.join_competition(uuid, boolean), public.save_answers(uuid, jsonb, boolean),
  public.report_focus(uuid, integer, integer, integer, boolean),
  public.leaderboard(uuid), public.am_i_admin(), public.touch_updated_at(),
  public.student_sign_up(text, text), public.student_sign_in(text, text), public.student_sign_out(),
  public.student_whoami(), public.admin_find_students(text), public.admin_reset_student_password(text, text),
  public.admin_delete_student(text)
  from public;
-- The access rules run these as the signed-in user, so those roles need them.
grant execute on function public.is_admin(), public.current_account(), public.competition_ended(uuid),
  public.has_joined(uuid), public.problem_competition(uuid)
  to anon, authenticated;
grant execute on function public.leaderboard(uuid) to anon, authenticated;
grant execute on function public.join_competition(uuid, boolean), public.save_answers(uuid, jsonb, boolean),
  public.report_focus(uuid, integer, integer, integer, boolean),
  public.am_i_admin(), public.student_sign_up(text, text), public.student_sign_in(text, text),
  public.student_sign_out(), public.student_whoami(), public.admin_find_students(text),
  public.admin_reset_student_password(text, text), public.admin_delete_student(text)
  to authenticated;
