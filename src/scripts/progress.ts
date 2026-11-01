// Saves progress on this device only, as { "counting": ["01-lunch", ...] }.
// Every storage call is guarded, so the site still works when storage is blocked.
const PROBLEMS_KEY = 'count-me-in-progress-v1';
const LESSONS_KEY = 'count-me-in-lessons-v1';
const CONTESTS_KEY = 'count-me-in-contests-v1';

type Progress = Record<string, string[]>;

const memory: Record<string, Progress> = {};
let storageWorks = true;

function load(key: string): Progress {
  memory[key] ??= {};
  try {
    const raw = window.localStorage.getItem(key);
    const parsed = raw ? JSON.parse(raw) : {};
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) memory[key] = parsed;
  } catch {
    // Blocked storage or damaged data: carry on with what is in memory.
  }
  return memory[key];
}

function save(key: string, progress: Progress) {
  memory[key] = progress;
  try {
    window.localStorage.setItem(key, JSON.stringify(progress));
    storageWorks = true;
  } catch {
    storageWorks = false;
  }
}

const getList = (key: string, unit: string) => {
  const list = load(key)[unit];
  return Array.isArray(list) ? list : [];
};

const addToList = (key: string, unit: string, item: string) => {
  const list = getList(key, unit);
  if (!list.includes(item)) save(key, { ...load(key), [unit]: [...list, item] });
};

export function canSave() {
  try {
    const probe = `${PROBLEMS_KEY}-probe`;
    window.localStorage.setItem(probe, '1');
    window.localStorage.removeItem(probe);
    storageWorks = true;
  } catch {
    storageWorks = false;
  }
  return storageWorks;
}

export const getSolved = (unit: string) => getList(PROBLEMS_KEY, unit);
export const markSolved = (unit: string, problem: string) => addToList(PROBLEMS_KEY, unit, problem);
export const getRead = (unit: string) => getList(LESSONS_KEY, unit);
export const markRead = (unit: string, lesson: string) => addToList(LESSONS_KEY, unit, lesson);

type ContestScore = { score: number; max: number };

/** The best score for a contest on this device, or nothing if there isn't one. */
export function getContestBest(contest: string): ContestScore | undefined {
  try {
    const saved = JSON.parse(window.localStorage.getItem(CONTESTS_KEY) ?? '{}');
    const best = saved?.[contest];
    return typeof best?.score === 'number' && typeof best?.max === 'number' ? best : undefined;
  } catch {
    return undefined;
  }
}

export function saveContestScore(contest: string, score: number, max: number) {
  const best = getContestBest(contest);
  if (best && best.score >= score) return;
  try {
    const saved = JSON.parse(window.localStorage.getItem(CONTESTS_KEY) ?? '{}');
    window.localStorage.setItem(CONTESTS_KEY, JSON.stringify({ ...saved, [contest]: { score, max } }));
  } catch {
    // Blocked storage or damaged data: the score still shows on the page.
  }
}

export function resetUnit(unit: string) {
  const progress = { ...load(PROBLEMS_KEY) };
  delete progress[unit];
  save(PROBLEMS_KEY, progress);
}

/** Redraws every progress bar on the page from saved progress. */
export function updateBars() {
  document.querySelectorAll<HTMLElement>('[data-progress-unit]').forEach((bar) => {
    const unit = bar.dataset.progressUnit as string;
    const known = (bar.dataset.problems as string).split(',');
    const solved = getSolved(unit).filter((problem) => known.includes(problem)).length;
    const meter = bar.querySelector('progress') as HTMLProgressElement;
    const status = bar.querySelector('[data-progress-status]') as HTMLElement;
    meter.value = solved;
    const template = status.dataset.template as string;
    status.textContent = template.replace('{solved}', String(solved));
  });
}
