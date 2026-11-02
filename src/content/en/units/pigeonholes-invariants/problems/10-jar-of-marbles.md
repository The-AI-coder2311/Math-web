---
order: 10
difficulty: medium
lesson: 02-parity-and-invariants
choices: ["Red","Blue","It depends on the choices you make"]
answer: A
mistakes:
  B: "Track the number of red marbles. Is it odd or even after each step?"
  C: "It may seem to depend on your choices, but one count keeps its parity no matter what."
verify: "(() => { const seen = new Set(); const go = (r, b) => { const key = r + ',' + b; if (seen.has(key)) return; seen.add(key); if (r >= 2) go(r - 2, b + 1); if (b >= 2) go(r, b - 1); if (r >= 1 && b >= 1) go(r, b - 1); }; go(7, 4); return [...seen].filter((k) => k === '1,0' || k === '0,1').map((k) => (k === '1,0' ? 'Red' : 'Blue')).join(); })()"
---

A jar holds 7 red and 4 blue marbles. Repeat this step until one marble is left: take out two marbles. If they match, put in a blue marble. If they're different, put in a red marble. What color is the last marble?

## Hint

Make a table of what each kind of step does to the number of red marbles.

## Hint 2

The red count changes by $-2$ or 0. So is it always odd, or always even?

## Solution

Taking two reds and adding a blue lowers the red count by 2. Taking two blues and adding a blue leaves it the same. Taking one of each and adding a red also leaves it the same. So the red count stays odd, since it starts at 7. With one marble left, the red count must be 1.

**Answer: (A) Red**
