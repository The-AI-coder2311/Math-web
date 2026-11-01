import { saveContestScore } from './progress';

// Runs a practice contest: the optional timer, then scoring and links back to lessons.
const page = document.querySelector<HTMLElement>('[data-contest]');

if (page) {
  const text = page.dataset as Record<string, string>;
  const points = { correct: Number(text.correct), blank: Number(text.blank), wrong: Number(text.wrong) };
  const form = page.querySelector('[data-contest-form]') as HTMLFormElement;
  const intro = page.querySelector('[data-contest-intro]') as HTMLElement;
  const results = page.querySelector('[data-results]') as HTMLElement;
  const clockBar = page.querySelector('[data-clock-bar]') as HTMLElement;
  const clock = page.querySelector('[data-clock]') as HTMLElement;
  const status = page.querySelector('[data-timer-status]') as HTMLElement;
  const useTimer = page.querySelector('[data-use-timer]') as HTMLInputElement;
  const cards = [...page.querySelectorAll<HTMLElement>('[data-question]')];
  const finish = page.querySelector('[data-finish]') as HTMLElement;
  let ticker: number | undefined;

  const stopTimer = () => {
    window.clearInterval(ticker);
    clockBar.hidden = true;
  };

  const startTimer = () => {
    const end = Date.now() + Number(text.minutes) * 60000;
    let warned = false;
    const tick = () => {
      const left = Math.max(0, Math.ceil((end - Date.now()) / 1000));
      clock.textContent = `${Math.floor(left / 60)}:${String(left % 60).padStart(2, '0')}`;
      if (!warned && left <= 300 && Number(text.minutes) > 5) {
        warned = true;
        status.textContent = text.fiveLeft;
      }
      if (left === 0) {
        window.clearInterval(ticker);
        status.textContent = text.timeUp;
        clock.textContent = text.timeUp;
      }
    };
    clockBar.hidden = false;
    tick();
    ticker = window.setInterval(tick, 1000);
  };

  const picked = (card: HTMLElement) => (card.querySelector('input:checked') as HTMLInputElement | null)?.value ?? '';

  const clearMarks = () => {
    cards.forEach((card) => {
      card.classList.remove('is-solved', 'is-wrong', 'is-blank');
      (card.querySelector('[data-verdict]') as HTMLElement).hidden = true;
      (card.querySelector('[data-solution]') as HTMLElement).hidden = true;
      card.querySelectorAll<HTMLInputElement>('input').forEach((input) => {
        input.disabled = false;
      });
    });
    form.reset();
    finish.hidden = false;
  };

  page.querySelector('[data-start]')?.addEventListener('click', () => {
    intro.hidden = true;
    results.hidden = true;
    form.hidden = false;
    if (useTimer.checked) startTimer();
    window.dispatchEvent(new Event('resize'));
    (cards[0].querySelector('h2') as HTMLElement).scrollIntoView();
    (cards[0].querySelector('input') as HTMLInputElement).focus();
  });

  page.querySelector('[data-timer-off]')?.addEventListener('click', () => {
    stopTimer();
    status.textContent = '';
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (cards.some((card) => !picked(card)) && !window.confirm(text.confirm)) return;
    stopTimer();

    let score = 0;
    const tally = { correct: 0, wrong: 0, blank: 0 };
    const topics = new Map<string, { href: string; title: string; topic: string; count: number }>();
    cards.forEach((card) => {
      const answer = picked(card);
      const right = card.dataset.answer as string;
      const verdict = card.querySelector('[data-verdict]') as HTMLElement;
      const kind = !answer ? 'blank' : answer === right ? 'correct' : 'wrong';
      tally[kind]++;
      score += points[kind];
      card.classList.toggle('is-solved', kind === 'correct');
      card.classList.toggle('is-wrong', kind === 'wrong');
      card.classList.toggle('is-blank', kind === 'blank');
      verdict.textContent =
        kind === 'correct'
          ? text.correctLabel
          : kind === 'blank'
            ? text.blankLabel.replace('{right}', right)
            : text.wrongLabel.replace('{yours}', answer).replace('{right}', right);
      verdict.hidden = false;
      (card.querySelector('[data-solution]') as HTMLElement).hidden = false;
      card.querySelectorAll<HTMLInputElement>('input').forEach((input) => {
        input.disabled = true;
      });
      if (kind !== 'correct') {
        const key = card.dataset.lessonHref as string;
        const entry = topics.get(key) ?? { href: key, title: card.dataset.lessonTitle as string, topic: card.dataset.topic as string, count: 0 };
        entry.count++;
        topics.set(key, entry);
      }
    });

    const max = Number(text.max);
    saveContestScore(page.dataset.contest as string, score, max);
    (page.querySelector('[data-result-score]') as HTMLElement).textContent = text.score.replace('{score}', String(score));
    (page.querySelector('[data-result-counts]') as HTMLElement).textContent = text.counts
      .replace('{correct}', String(tally.correct))
      .replace('{wrong}', String(tally.wrong))
      .replace('{blank}', String(tally.blank));

    const list = page.querySelector('[data-review-list]') as HTMLElement;
    list.replaceChildren(
      ...[...topics.values()]
        .sort((a, b) => b.count - a.count)
        .map((entry) => {
          const item = document.createElement('li');
          const link = document.createElement('a');
          link.href = entry.href;
          link.textContent = entry.title;
          item.append(`${entry.topic} (${entry.count}): `, link);
          return item;
        }),
    );
    const perfect = topics.size === 0;
    list.hidden = perfect;
    (page.querySelector('[data-review-title]') as HTMLElement).hidden = perfect;
    (page.querySelector('[data-all-right-note]') as HTMLElement).hidden = !perfect;

    finish.hidden = true;
    results.hidden = false;
    form.after(results);
    window.dispatchEvent(new Event('resize'));
    results.scrollIntoView();
    results.focus();
  });

  page.querySelector('[data-again]')?.addEventListener('click', () => {
    clearMarks();
    results.hidden = true;
    form.hidden = true;
    intro.hidden = false;
    window.scrollTo(0, 0);
    (page.querySelector('[data-start]') as HTMLElement).focus();
  });
}
