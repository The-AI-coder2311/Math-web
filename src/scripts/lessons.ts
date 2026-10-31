import { getRead, markRead } from './progress';

// On a unit page: shows a checkmark beside each lesson the student has read.
document.querySelectorAll<HTMLElement>('[data-lesson-list]').forEach((list) => {
  const read = getRead(list.dataset.unit as string);
  list.querySelectorAll<HTMLElement>('[data-lesson-check]').forEach((check) => {
    check.hidden = !read.includes(check.dataset.lessonCheck as string);
  });
});

// On a lesson page: a lesson counts as read once the summary card at its end is on screen.
const end = document.querySelector<HTMLElement>('[data-lesson-end]');
if (end) {
  const finish = () => markRead(end.dataset.unit as string, end.dataset.lesson as string);
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        finish();
        observer.disconnect();
      }
    });
    observer.observe(end);
  } else {
    finish();
  }
}
