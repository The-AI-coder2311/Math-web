import { canSave, getSolved, markSolved, resetUnit, updateBars } from './progress';

// Runs every group of problems on the page: a whole practice page, or the
// "try it now" problems at the end of a lesson.
document.querySelectorAll<HTMLElement>('[data-practice]').forEach((page) => {
  const unit = page.dataset.unit as string;
  const text = page.dataset as Record<string, string>;
  const cards = [...page.querySelectorAll<HTMLElement>('[data-problem]')];
  const finished = page.querySelector<HTMLElement>('[data-finished]');
  // The numbered list and the "unsolved only" filter exist only on a full practice page.
  const filter = page.querySelector<HTMLInputElement>('[data-unsolved-only]');
  const filterStatus = page.querySelector<HTMLElement>('[data-filter-status]');

  const isSolved = (card: HTMLElement) => card.classList.contains('is-solved');

  const hideMistakes = (card: HTMLElement) =>
    card.querySelectorAll<HTMLElement>('[data-mistake]').forEach((note) => {
      note.hidden = true;
    });

  const hideNext = (card: HTMLElement) => {
    const next = card.querySelector<HTMLElement>('[data-next]');
    if (next) next.hidden = true;
  };

  /** Marks each number in the list as solved or not, for sighted users and screen readers. */
  const refreshNav = () => {
    cards.forEach((card) => {
      const link = page.querySelector<HTMLElement>(`[data-nav-problem="${card.dataset.slug}"]`);
      if (!link) return;
      link.classList.toggle('is-answered', isSolved(card));
      link.setAttribute(
        'aria-label',
        text.navItem.replace('{n}', card.dataset.number as string).replace('{state}', isSolved(card) ? text.navSolved : text.navUnsolved),
      );
    });
  };

  /** Hides solved problems while the filter is on. `keep` stays visible, so feedback isn't yanked away. */
  const applyFilter = (keep?: HTMLElement) => {
    if (!filter) return;
    cards.forEach((card) => {
      card.hidden = filter.checked && isSolved(card) && card !== keep;
    });
    if (!filterStatus) return;
    const unsolved = cards.filter((card) => !isSolved(card)).length;
    if (!filter.checked) filterStatus.textContent = text.showingAll.replace('{n}', String(cards.length));
    else if (unsolved === 0) filterStatus.textContent = text.showingNone;
    else if (unsolved === 1) filterStatus.textContent = text.showingOneUnsolved;
    else filterStatus.textContent = text.showingUnsolved.replace('{n}', String(unsolved));
  };

  /** Scrolls to a problem and moves keyboard focus there, showing it first if the filter hid it. */
  const goTo = (card: HTMLElement) => {
    card.hidden = false;
    card.scrollIntoView();
    card.focus({ preventScroll: true });
  };

  /** After a correct answer, offers a link to the next problem that isn't solved yet. */
  const offerNext = (card: HTMLElement) => {
    const next = card.querySelector<HTMLElement>('[data-next]');
    const link = card.querySelector<HTMLAnchorElement>('[data-next-link]');
    if (!next || !link) return;
    const start = cards.indexOf(card);
    const target = [...cards.slice(start + 1), ...cards.slice(0, start)].find((other) => !isSolved(other));
    next.hidden = !target;
    if (!target) return;
    link.href = `#${target.id}`;
    link.textContent = text.nextUnsolved.replace('{n}', target.dataset.number as string);
    link.onclick = (event) => {
      event.preventDefault();
      goTo(target);
    };
  };

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
        offerNext(card);
        updateBars();
        refreshFinished();
        refreshNav();
        applyFilter(card);
      } else {
        card.classList.add('is-wrong');
        card.classList.remove('is-solved');
        hideNext(card);
        feedback.textContent = (text.wrong as string).replace('{letter}', picked.value);
        const note = card.querySelector<HTMLElement>(`[data-mistake="${picked.value}"]`);
        if (note) note.hidden = false;
      }
    });
  });

  // A number in the list always takes you to its problem, even one the filter hid.
  page.querySelectorAll<HTMLAnchorElement>('[data-nav-problem]').forEach((link) => {
    link.addEventListener('click', (event) => {
      const card = cards.find((other) => other.dataset.slug === link.dataset.navProblem);
      if (!card) return;
      event.preventDefault();
      goTo(card);
    });
  });

  filter?.addEventListener('change', () => applyFilter());

  const restore = () => {
    const solved = getSolved(unit);
    cards
      .filter((card) => solved.includes(card.dataset.slug as string))
      .forEach((card) => showSolved(card, text.alreadySolved));
    updateBars();
    refreshFinished();
    refreshNav();
    applyFilter();
  };

  page.querySelector('[data-reset]')?.addEventListener('click', () => {
    if (!window.confirm(text.resetConfirm)) return;
    resetUnit(unit);
    cards.forEach((card) => {
      card.classList.remove('is-solved', 'is-wrong');
      (card.querySelector('form') as HTMLFormElement).reset();
      hideMistakes(card);
      hideNext(card);
      (card.querySelector('[data-solved-badge]') as HTMLElement).hidden = true;
      (card.querySelector('[data-feedback]') as HTMLElement).textContent = '';
    });
    updateBars();
    refreshFinished();
    refreshNav();
    applyFilter();
  });

  const storageNote = page.querySelector<HTMLElement>('[data-storage-note]');
  if (storageNote) storageNote.hidden = canSave();
  restore();
});
