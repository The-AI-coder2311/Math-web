// Settings for live competitions, the leaderboard, and the admin pages.
//
// Competitions need a free Supabase project (a hosted database with logins). The README
// section "Live competitions" walks through it. Until both values below are set, the
// competition pages say competitions are coming soon, and the rest of the site works as before.
//
// NEVER paste keys or passwords into this file: the repository is public. The two values come
// from the build environment instead:
// - On GitHub: Settings > Secrets and variables > Actions > Secrets, named SUPABASE_URL and
//   SUPABASE_ANON_KEY. The deploy workflow passes them to the build.
// - On your computer: a .env file (copy .env.example). Git ignores it.
//
// The anon key is meant to be public: it ends up in the visitor's browser, and on its own
// it can't do anything that supabase/schema.sql doesn't allow. The service role key and
// admin passwords are different. They must never be used here, in .env, or in GitHub.
export const competitionBackend = {
  url: (import.meta.env.PUBLIC_SUPABASE_URL ?? '').trim(),
  anonKey: (import.meta.env.PUBLIC_SUPABASE_ANON_KEY ?? '').trim(),
};
export const competitionsOn = competitionBackend.url !== '' && competitionBackend.anonKey !== '';

export const competitionSettings = {
  // Defaults for a new competition in the admin dashboard. Each competition can change them.
  defaults: {
    style: 'AMC 8',
    minutes: 40,
    pointsCorrect: 1,
    pointsBlank: 0,
    pointsWrong: 0,
    liveLeaderboard: false,
  },
  // Scoring presets the dashboard offers. Check them against the official rules once a year.
  presets: {
    'AMC 8': { pointsCorrect: 1, pointsBlank: 0, pointsWrong: 0, minutes: 40 },
    'AMC 10': { pointsCorrect: 6, pointsBlank: 1.5, pointsWrong: 0, minutes: 75 },
    MATHCOUNTS: { pointsCorrect: 1, pointsBlank: 0, pointsWrong: 0, minutes: 40 },
  } as Record<string, { pointsCorrect: number; pointsBlank: number; pointsWrong: number; minutes: number }>,
  // How often an open leaderboard page checks for new scores.
  leaderboardRefreshSeconds: 30,
  // When the admin dashboard flags an entry for a closer look. A flag is a hint, never proof:
  // a notification can pull a student out of the page, and a phone on the desk leaves no trace.
  // Nothing happens to a flagged entry unless an admin hides or deletes it.
  fairPlay: {
    // Left the competition page (another tab, another app) at least this many times.
    flagTabLeaves: 3,
    // Or was away for at least this many seconds in total.
    flagSecondsAway: 60,
    // "Fast and nearly perfect": at least this share right, in at most this share of the
    // allowed time, in a competition with at least this many questions.
    flagFastAccuracy: 0.9,
    flagFastTimeShare: 0.3,
    flagFastMinQuestions: 5,
  },
};

// Where the content editor (Sveltia CMS at /admin/content/) saves its changes. Editors sign
// in with their own GitHub token, so only people with write access to this repository can edit.
export const contentEditor = {
  repo: 'The-AI-coder2311/Math-web',
  branch: 'main',
};
