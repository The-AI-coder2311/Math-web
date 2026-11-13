---
order: 17
difficulty: hard
lesson: 02-truth-tellers-and-liars
choices: ["0","1","2","3"]
answer: C
mistakes:
  A: "With no liars, all three statements would be true, but the statements disagree."
  B: "If there were 1 liar, Ash's statement would be true, and Bee and Cyd would both be lying. That makes 2 liars."
  D: "If all three were liars, then Cyd's statement would be true. Liars can't say something true."
verify: "product([true, false], [true, false], [true, false]).filter((w) => { const liars = w.filter((x) => !x).length; return w[0] === (liars === 1) && w[1] === (liars === 2) && w[2] === (liars === 3); }).map((w) => w.filter((x) => !x).length).join()"
---

Each of Ash, Bee, and Cyd is a truth-teller, who always tells the truth, or a liar, who always lies.

- Ash says, "Exactly one of us is a liar."
- Bee says, "Exactly two of us are liars."
- Cyd says, "All three of us are liars."

How many of them are liars?

## Hint

Test each possible number of liars: 0, 1, 2, and 3. For each one, who would be telling the truth?

## Hint 2

The statements disagree, so at most one person is telling the truth. So there are at least 2 liars.

## Solution

Test each count. With 0 liars, all three statements would have to be true, but they disagree. With 1 liar, Ash tells the truth, and Bee and Cyd lie, which makes 2 liars, a contradiction. With 3 liars, Cyd's statement is true, a contradiction. With 2 liars, Bee tells the truth, and Ash and Cyd lie. That's 2 liars, so it works.

**Answer: (C) 2**
