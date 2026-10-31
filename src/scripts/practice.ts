import { canSave, getSolved, markSolved, resetUnit, updateBars } from './progress';

const page = document.querySelector<HTMLElement>('[data-practice]');

if (page) {
  const unit = page.dataset.unit as string;
  const text = page.dataset as Record<string, string>;
  const cards = [...page.querySelectorAll<HTMLElement>('[data-problem]')];
  const finished = page.querySelector<HTMLElement>('[data-finished]') as HTMLElement;

  const showSolved = (card: HTMLElement, message: string) => {
    const answer = card.querySelector<HTMLInputElement>(`input[value="${card.dataset.answer}"]`);
    if (answer) answer.checked = true;
    card.classList.add('is-solved');
    card.classList.remove('is-wrong');
    (card.querySelector('[data-solved-badge]') as HTMLElement).hidden = false;
    (card.querySelector('[data-feedback]') as HTMLElement).textContent = message;
  };

  const refreshFinished = () => {
    const solved = getSolved(unit);
    finished.hidden = !cards.every((card) => solved.includes(card.dataset.slug as string));
  };

  cards.forEach((card) => {
    const form = card.querySelector('form') as HTMLFormElement;
    const feedback = card.querySelector('[data-feedback]') as HTMLElement;

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const picked = form.querySelector<HTMLInputElement>('input:checked');
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
      (card.querySelector('[data-solved-badge]') as HTMLElement).hidden = true;
      (card.querySelector('[data-feedback]') as HTMLElement).textContent = '';
    });
    updateBars();
    refreshFinished();
  });

  (page.querySelector('[data-storage-note]') as HTMLElement).hidden = canSave();
  restore();
}
