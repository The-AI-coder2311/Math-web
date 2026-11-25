import { createClient, type SupabaseClient } from '@supabase/supabase-js';
import katex from 'katex';
import { competitionBackend, competitionsOn } from '../../competitions.config';

// Code shared by the competition pages and the admin dashboard.

export type Competition = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  rules: string;
  style: string;
  starts_at: string;
  ends_at: string;
  duration_minutes: number;
  points_correct: number;
  points_blank: number;
  points_wrong: number;
  published: boolean;
  live_leaderboard: boolean;
  require_fullscreen: boolean;
};

export type Problem = { id: string; competition_id: string; position: number; body: string; choices: string[] };
export type AnswerKey = { problem_id: string; answer: string; solution: string };
export type Entry = {
  id: string;
  competition_id: string;
  user_id: string;
  display_name: string;
  answers: Record<string, string>;
  started_at: string;
  submitted_at: string | null;
  hidden: boolean;
  pledged_at: string | null;
  tab_leaves: number;
  seconds_away: number;
  fullscreen_exits: number;
  no_fullscreen: boolean;
};
export type LeaderRow = {
  place: number;
  display_name: string;
  score: number;
  correct: number;
  wrong: number;
  blank: number;
  seconds: number;
  is_me: boolean;
};

export const LETTERS = 'ABCDEF';

const clients: Partial<Record<'player' | 'admin', SupabaseClient>> = {};

/**
 * The database connection, or null when competitions aren't set up yet. Students and admins
 * keep separate sign-ins, so an admin trying a competition gets an ordinary student entry.
 */
export function getClient(kind: 'player' | 'admin'): SupabaseClient | null {
  if (!competitionsOn) return null;
  clients[kind] ??= createClient(competitionBackend.url, competitionBackend.anonKey, {
    auth: { storageKey: `count-me-in-${kind}-auth-v1`, persistSession: true, autoRefreshToken: true },
  });
  return clients[kind]!;
}

/** Signs a student in without an email or password, once per browser. */
export async function ensureStudentSession(client: SupabaseClient) {
  const { data } = await client.auth.getSession();
  if (data.session) return data.session;
  const { data: signedIn, error } = await client.auth.signInAnonymously();
  if (error) {
    throw new Error(
      /anonymous/i.test(error.message)
        ? 'Joining is switched off right now. Ask the person running the competition to turn on anonymous sign-ins in Supabase.'
        : error.message,
    );
  }
  return signedIn.session;
}

export type Phase = 'upcoming' | 'live' | 'ended';
export const phaseOf = (competition: Competition, now = Date.now()): Phase =>
  now < Date.parse(competition.starts_at) ? 'upcoming' : now < Date.parse(competition.ends_at) ? 'live' : 'ended';

/** When a student's own clock runs out. */
export const deadlineOf = (competition: Competition, entry: Entry) =>
  Math.min(Date.parse(entry.started_at) + competition.duration_minutes * 60000, Date.parse(competition.ends_at));

export const escapeHtml = (text: string) =>
  text.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);

const when = new Intl.DateTimeFormat(undefined, { dateStyle: 'medium', timeStyle: 'short' });
export const formatWhen = (iso: string) => when.format(new Date(iso));

/** 75 -> "1:15", 3725 -> "1:02:05". */
export function formatClock(totalSeconds: number) {
  const s = Math.max(0, Math.round(totalSeconds));
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = String(s % 60).padStart(2, '0');
  return h ? `${h}:${String(m).padStart(2, '0')}:${sec}` : `${m}:${sec}`;
}

/** "in 3 days", "in 2 hours", "in 5 minutes". */
export function formatUntil(ms: number) {
  const minutes = Math.max(1, Math.round(ms / 60000));
  if (minutes < 60) return `in ${minutes} minute${minutes === 1 ? '' : 's'}`;
  const hours = Math.round(minutes / 60);
  if (hours < 48) return `in ${hours} hour${hours === 1 ? '' : 's'}`;
  const days = Math.round(hours / 24);
  return `in ${days} days`;
}

export const formatPoints = (n: number) => String(Number(n));

export function scoringText(c: Competition) {
  const pts = (n: number) => `${formatPoints(n)} ${Number(n) === 1 ? 'point' : 'points'}`;
  return `${pts(c.points_correct)} for each correct answer, ${pts(c.points_blank)} for each blank, and ${pts(c.points_wrong)} for each wrong answer.`;
}

/** The address of a page on this site, with the hosting base path. */
export const sitePath = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path}`;

export const competitionParam = () => new URLSearchParams(location.search).get('c')?.trim().toLowerCase() ?? '';

/** A short, readable message from a database or network error. */
export function errorText(error: unknown) {
  const message = (error as { message?: string })?.message ?? String(error);
  if (/failed to fetch|network/i.test(message)) return 'Could not reach the competition server. Check your internet connection and try again.';
  if (/JWT|token/i.test(message)) return 'Your session ran out. Reload the page and try again.';
  return message;
}

function math(source: string, display: boolean) {
  return katex.renderToString(source, { displayMode: display, throwOnError: false, output: 'htmlAndMathml' });
}

function inline(text: string) {
  // Math between $...$ or $$...$$. A dollar sign written as \$ stays a dollar sign.
  const parts = text.split(/(\$\$[\s\S]+?\$\$|(?<!\\)\$(?:\\\$|[^$\n])+?(?<!\\)\$)/g);
  return parts
    .map((part, i) => {
      if (i % 2) return part.startsWith('$$') ? math(part.slice(2, -2), true) : math(part.slice(1, -1), false);
      return escapeHtml(part)
        .replace(/\\\$/g, '$')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/(^|[^*])\*([^*\s][^*]*?)\*/g, '$1<em>$2</em>')
        .replace(/\n/g, '<br />');
    })
    .join('');
}

/**
 * Turns question text into HTML: paragraphs, **bold**, *italics*, and math in dollar signs,
 * the same way lessons are written. Everything else is shown as plain text, never as HTML.
 */
export function renderRich(source: string) {
  return source
    .replace(/\r\n/g, '\n')
    .trim()
    .split(/\n{2,}/)
    .filter(Boolean)
    .map((block) => {
      const trimmed = block.trim();
      if (/^\$\$[\s\S]+\$\$$/.test(trimmed) && !trimmed.slice(2, -2).includes('$$')) return math(trimmed.slice(2, -2), true);
      return `<p>${inline(block)}</p>`;
    })
    .join('');
}

/** Short inline text, such as an answer choice. */
export const renderInline = (source: string) => inline(source.trim());

/** Shows a message in an element that has role="status" or role="alert". */
export function say(element: HTMLElement | null, message: string, tone: 'info' | 'error' | 'good' = 'info') {
  if (!element) return;
  element.textContent = message;
  element.dataset.tone = tone;
  element.hidden = message === '';
}
