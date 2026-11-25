-- A demo competition with no questions, to try the whole flow: join, hand in, leaderboard.
-- Run it in the Supabase SQL editor after schema.sql. It runs for a year and shows its
-- leaderboard live. Delete it from the admin dashboard whenever you like.
insert into public.competitions
  (slug, title, summary, rules, style, starts_at, ends_at, duration_minutes,
   points_correct, points_blank, points_wrong, published, live_leaderboard)
values
  ('demo',
   'Demo Competition',
   'A practice run with no questions. Join with a display name, hand it in, and see the leaderboard.',
   'This is only a demo. There are no questions, so everyone scores 0.',
   'AMC 8',
   now(),
   now() + interval '365 days',
   40,
   1, 0, 0,
   true,
   true)
on conflict (slug) do nothing;
