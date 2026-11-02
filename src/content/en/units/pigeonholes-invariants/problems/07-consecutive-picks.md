---
order: 7
difficulty: medium
lesson: 01-pigeonhole-power
choices: ["10","11","12","19","21"]
answer: B
mistakes:
  A: "The picks 1, 3, 5, and so on up to 19 are 10 numbers with no two consecutive."
  C: "That's enough, but 11 picks already force it. Use the pairs 1 and 2, 3 and 4, and so on."
  D: "That's far more than you need. Think about boxes made of neighboring pairs."
  E: "There are only 20 numbers to pick from."
verify: "range(1, 20).find((k) => combos(range(1, 20), k).every((s) => s.some((a) => s.includes(a + 1))))"
---

You pick whole numbers from 1 to 20. How many must you pick to be sure that two of them are consecutive?

## Hint

Make boxes where two picks from the same box are always neighbors.

## Hint 2

Use the pairs 1 and 2, 3 and 4, and so on. How many pairs are there?

## Solution

The pairs 1 and 2, 3 and 4, up to 19 and 20 make 10 boxes. With 11 picks, two share a pair, so they're consecutive. Ten picks aren't enough, as 1, 3, 5, up to 19 shows.

**Answer: (B) 11**
