---
order: 28
difficulty: medium
lesson: 02-truth-tellers-and-liars
choices: ["2","3","4","8"]
answer: C
mistakes:
  A: "The types have to alternate all the way around the table."
  B: "With 8 seats and alternating types, the count has to be half."
  D: "If everyone were a liar, then every statement would be true, which can't happen."
verify: "[...new Set(product(...Array(8).fill([0, 1])).filter((w) => w.every((t, i) => (t === 1) === (w[(i + 1) % 8] === 0))).map((w) => 8 - sum(w)))].join()"
---

Eight people sit around a round table. Each one is a truth-teller, who always tells the truth, or a liar, who always lies. Each person says, "The person on my left is a liar." How many of them are liars?

## Hint

What does a truth-teller's statement say about their left neighbor? And a liar's?

## Hint 2

Each person is the opposite type from their left neighbor.

## Solution

A truth-teller has a liar on the left, and a liar has a truth-teller on the left. So the types alternate around the table. With 8 seats, there are 4 of each type.

**Answer: (C) 4**
