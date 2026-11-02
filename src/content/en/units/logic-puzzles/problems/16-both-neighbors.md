---
order: 16
difficulty: hard
lesson: 02-truth-tellers-and-liars
choices: ["2","3","4","5","10"]
answer: C
mistakes:
  A: "With 2 truth-tellers, some stretch has 3 liars in a row. The middle liar's statement would be true."
  B: "With 3 truth-tellers, the 7 liars can't be split into 3 gaps of at most 2."
  D: "5 truth-tellers works, but it's the largest number possible. The question asks for the smallest."
  E: "A truth-teller's neighbors must both be liars, so not everyone can be a truth-teller."
verify: "Math.min(...product(...Array(10).fill([0, 1])).filter((w) => w.every((t, i) => { const both = !w[(i + 1) % 10] && !w[(i + 9) % 10]; return t === 1 ? both : !both; })).map(sum))"
---

Ten people sit around a round table. Each one is a truth-teller, who always tells the truth, or a liar, who always lies. Each person says, "Both of my neighbors are liars." What is the smallest possible number of truth-tellers?

## Hint

Work out what each statement forces. What are a truth-teller's neighbors? What can't be true of a liar's neighbors?

## Hint 2

Two truth-tellers can't sit together, and three liars can't sit in a row. So each gap between truth-tellers holds 1 or 2 liars.

## Solution

A truth-teller's neighbors are both liars, so no two truth-tellers sit together. A liar's statement is false, so a liar has at least one truth-teller beside them. That means no 3 liars sit in a row.

So each gap between truth-tellers holds 1 or 2 liars. With $t$ truth-tellers, there are at most $2t$ liars, so there are at most $3t$ people. We need $3t \ge 10$, so $t$ is at least 4.

Four works: seat them with gaps of 2, 2, 1, and 1 liars, which makes $4 + 6 = 10$ people.

**Answer: (C) 4**
