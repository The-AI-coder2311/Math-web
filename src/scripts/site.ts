// Small helpers that every page shares.

// Print buttons. data-print="student" leaves the answer key out, "key" includes it, and
// a plain data-print prints the page as it is. The key goes back how it was afterward.
const answerKey = document.querySelector<HTMLDetailsElement>('[data-answer-key]');
let keyWasOpen: boolean | undefined;
document.querySelectorAll<HTMLButtonElement>('[data-print]').forEach((button) => {
  button.addEventListener('click', () => {
    if (answerKey && button.dataset.print) {
      keyWasOpen = answerKey.open;
      answerKey.open = button.dataset.print === 'key';
    }
    window.print();
  });
});
window.addEventListener('afterprint', () => {
  if (answerKey && keyWasOpen !== undefined) answerKey.open = keyWasOpen;
  keyWasOpen = undefined;
});

// Escape closes the hint, solution, or answer key that keyboard focus is inside.
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || !(event.target instanceof Element)) return;
  const details = event.target.closest('details[open]') as HTMLDetailsElement | null;
  if (!details) return;
  details.open = false;
  details.querySelector('summary')?.focus();
});

// A wide table or formula scrolls inside its own box. When it really does overflow,
// the box has to take keyboard focus so that keyboard users can scroll it too.
const label = document.body.dataset.scrollLabel as string;
const markScrollers = () => {
  document.querySelectorAll<HTMLElement>('.katex-display, .table-scroll, p:has(.katex), .choice span:has(.katex)').forEach((box) => {
    const scrolls = getComputedStyle(box).overflowX !== 'visible' && box.scrollWidth > box.clientWidth;
    if (scrolls && !box.hasAttribute('tabindex')) {
      box.tabIndex = 0;
      box.setAttribute('role', 'group');
      box.setAttribute('aria-label', label);
    } else if (!scrolls && box.hasAttribute('tabindex')) {
      box.removeAttribute('tabindex');
      box.removeAttribute('role');
      box.removeAttribute('aria-label');
    }
  });
};
markScrollers();
window.addEventListener('resize', markScrollers);
// Opening a hint or solution can reveal more wide content. `toggle` doesn't bubble.
document.addEventListener('toggle', markScrollers, true);

// On small screens, the Menu button opens and closes the list of links in the header.
const menuButton = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const siteNav = document.getElementById('site-nav');
if (menuButton && siteNav) {
  const setOpen = (open: boolean) => {
    siteNav.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
  };
  menuButton.addEventListener('click', () => setOpen(menuButton.getAttribute('aria-expanded') !== 'true'));
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape' || menuButton.getAttribute('aria-expanded') !== 'true') return;
    setOpen(false);
    menuButton.focus();
  });
}
