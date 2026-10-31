import { canSave, getSolved, markSolved, resetUnit, updateBars } from './progress';

// Runs every group of problems on the page: a whole practice page, or the
// "try it now" problems at the end of a lesson.
document.querySelectorAll<HTMLElement>('[data-practice]').forEach((page) => {
  const unit = page.dataset.unit as string;
  const text = page.dataset as Record<string, string>;
  const cards = [...page.querySelectorAll<HTMLElement>('[data-problem]')];
  const finished = page.querySelector<HTMLElement>('[data-finished]');

  const hideMistakes = (card: HTMLElement) =>
    card.querySelectorAll<HTMLElement>('[data-mistake]').forEach((note) => {
      note.hidden = true;
    });

  const showSolved = (card: HTMLElement, message: string) => {
    const answer = card.querySelector<HTMLInputElement>(`input[value="${card.dataset.answer}"]`);
    if (answer) answer.checked = true;
    card.classList.add('is-solved');
    card.classList.remove('is-wrong');
    hideMistakes(card);
    (card.querySelector('[data-solved-badge]') as HTMLElement).hidden = false;
    (card.querySelector('[data-feedback]') as HTMLElement).textContent = message;
  };

  const refreshFinished = () => {
    if (!finished) return;
    const solved = getSolved(unit);
    finished.hidden = !cards.every((card) => solved.includes(card.dataset.slug as string));
  };

  cards.forEach((card) => {
    const form = card.querySelector('form') as HTMLFormElement;
    const feedback = card.querySelector('[data-feedback]') as HTMLElement;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const picked = form.querySelector<HTMLInputElement>('input:checked');
      hideMistakes(card);
      if (!picked) {
        feedback.textContent = text.pickFirst;
        return;
      }
      if (picked.value === card.dataset.answer) {
        markSolved(unit, card.dataset.slug as string);
        showSolved(card, text.correct);
        updateBars();
        refreshFinished();
      } else {
        card.classList.add('is-wrong');
        card.classList.remove('is-solved');
        feedback.textContent = (text.wrong as string).replace('{letter}', picked.value);
        const note = card.querySelector<HTMLElement>(`[data-mistake="${picked.value}"]`);
        if (note) note.hidden = false;
      }
    });
  });

  const restore = () => {
    const solved = getSolved(unit);
    cards
      .filter((card) => solved.includes(card.dataset.slug as string))
      .forEach((card) => showSolved(card, text.alreadySolved));
    updateBars();
    refreshFinished();
  };

  page.querySelector('[data-reset]')?.addEventListener('click', () => {
    if (!window.confirm(text.resetConfirm)) return;
    resetUnit(unit);
    cards.forEach((card) => {
      card.classList.remove('is-solved', 'is-wrong');
      (card.querySelector('form') as HTMLFormElement).reset();
      hideMistakes(card);
      (card.querySelector('[data-solved-badge]') as HTMLElement).hidden = true;
      (card.querySelector('[data-feedback]') as HTMLElement).textContent = '';
    });
    updateBars();
    refreshFinished();
  });

  const storageNote = page.querySelector<HTMLElement>('[data-storage-note]');
  if (storageNote) storageNote.hidden = canSave();
  restore();
});
