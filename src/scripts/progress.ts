// Saves solved problems on this device only: { "counting": ["01-lunch", ...] }.
// Every storage call is guarded, so the site still works when storage is blocked.
const KEY = 'count-me-in-progress-v1';

type Progress = Record<string, string[]>;

let memory: Progress = {};
let storageWorks = true;

function load(): Progress {
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? JSON.parse(raw) : {};
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) memory = parsed;
  } catch {
    // Blocked storage or damaged data: carry on with what is in memory.
  }
  return memory;
}

function save(progress: Progress) {
  memory = progress;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(progress));
    storageWorks = true;
  } catch {
    storageWorks = false;
  }
}

export function canSave() {
  try {
    const probe = `${KEY}-probe`;
    window.localStorage.setItem(probe, '1');
    window.localStorage.removeItem(probe);
    storageWorks = true;
  } catch {
    storageWorks = false;
  }
  return storageWorks;
}

export function getSolved(unit: string): string[] {
  const solved = load()[unit];
  return Array.isArray(solved) ? solved : [];
}

export function markSolved(unit: string, problem: string) {
  const solved = getSolved(unit);
  if (!solved.includes(problem)) save({ ...load(), [unit]: [...solved, problem] });
}

export function resetUnit(unit: string) {
  const progress = { ...load() };
  delete progress[unit];
  save(progress);
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
