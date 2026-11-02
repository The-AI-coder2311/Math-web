---
order: 13
difficulty: medium
lesson: 02-parity-and-invariants
choices: ["Always even","Always odd","Sometimes even and sometimes odd"]
answer: A
mistakes:
  B: "Add up the numbers at the start. The parity of the total never changes."
  C: "It may seem to depend on your choices, but the parity of the total never changes."
verify: "(() => { const seen = new Set(); const ends = new Set(); const go = (l) => { const key = l.join(); if (seen.has(key)) return; seen.add(key); if (l.length === 1) { ends.add(l[0] % 2); return; } for (let i = 0; i < l.length; i++) for (let j = i + 1; j < l.length; j++) { go([...l.filter((_, k) => k !== i && k !== j), Math.abs(l[i] - l[j])].sort((a, b) => a - b)); } }; go(range(1, 7)); return [...ends].join() === '0' ? 'Always even' : 'Not always even'; })()"
---

The numbers 1 through 7 are on a board. In each step, you erase any two numbers and write their positive difference. You continue until one number is left. Is that number odd or even?

## Hint

How does one step change the total of all the numbers on the board?

## Hint 2

Replacing $a$ and $b$ with $a - b$ lowers the total by $2b$. So what stays the same about the total?

## Solution

Replacing $a$ and $b$, with $a \ge b$, by $a - b$ lowers the total by $2b$, which is even. So the total keeps its parity. It starts at $1 + 2 + 3 + 4 + 5 + 6 + 7 = 28$, which is even. So the last number is always even.

**Answer: (A) Always even**
