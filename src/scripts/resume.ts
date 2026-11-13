import { getLast, getRead, getSolved, unitsWithProgress } from './progress';

// Fills in the "continue where you left off" link from saved progress on this
// device. The pathway page also uses it to open the level the student is working on.
type Unit = {
  slug: string;
  title: string;
  level: number;
  /** The address of the unit page. Lessons and the practice page sit under it. */
  base: string;
  total: number;
  /** Each lesson as [file name, title]. */
  lessons: [string, string][];
};

type Step = { unit: Unit; url: string; label: string };

/** The next thing to do, or nothing for a brand-new visitor or a finished pathway. */
export function nextStep(box: HTMLElement): Step | undefined {
  const units = JSON.parse(box.dataset.units as string) as Unit[];
  const text = box.dataset as Record<string, string>;
  const active = unitsWithProgress();
  if (!active.length) return undefined;
  const last = getLast();
  // Without a record of the last unit (older saved progress, or a progress code),
  // use the furthest unit along the pathway that has any progress.
  const start = units.find((unit) => unit.slug === last?.unit) ?? [...units].reverse().find((unit) => active.includes(unit.slug));
  if (!start) return undefined;

  const stepIn = (unit: Unit, preferPractice: boolean, fresh: boolean): Step | undefined => {
    const read = getRead(unit.slug);
    const solved = Math.min(getSolved(unit.slug).length, unit.total);
    const found = unit.lessons.find(([slug]) => !read.includes(slug));
    const lesson = found && { title: found[1], url: `${unit.base}${found[0]}/` };
    const practiceUrl = `${unit.base}practice/`;
    const practiceLeft = solved < unit.total;
    const practice: Step = {
      unit,
      url: `${practiceUrl}#next`,
      label: text.practice.replace('{unit}', unit.title).replace('{solved}', String(solved)).replace('{total}', String(unit.total)),
    };
    if (fresh && (lesson || practiceLeft)) {
      return { unit, url: lesson ? lesson.url : practiceUrl, label: text.nextUnit.replace('{unit}', unit.title) };
    }
    if (preferPractice && practiceLeft) return practice;
    if (lesson) return { unit, url: lesson.url, label: text.lesson.replace('{unit}', unit.title).replace('{lesson}', lesson.title) };
    return practiceLeft ? practice : undefined;
  };

  const first = stepIn(start, last?.unit === start.slug && last.kind === 'practice', false);
  if (first) return first;
  // The unit is finished, so move on to the next one that isn't.
  for (const unit of units.slice(units.indexOf(start) + 1)) {
    const step = stepIn(unit, false, !active.includes(unit.slug));
    if (step) return step;
  }
  return undefined;
}

function show() {
  document.querySelectorAll<HTMLElement>('[data-resume]').forEach((box) => {
    const step = nextStep(box);
    const link = box.querySelector('[data-resume-link]') as HTMLAnchorElement;
    box.hidden = !step;
    if (step) {
      link.href = step.url;
      link.textContent = step.label;
    }
  });
}

show();
document.addEventListener('progress-loaded', show);
