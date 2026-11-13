---
order: 13
difficulty: medium
lesson: 03-counting-step-by-step
choices: ["8","13","20","21","32"]
answer: D
mistakes:
  A: "That's the count for strings of 4 letters. Keep building up to 6 letters: 8, 13, 21."
  B: "That's the count for length 5. There's one more step."
  C: "You may have used the wrong starting values. Length 2 has 3 valid strings: AB, BA, and BB."
  E: "That's $2^5$. The number of strings of length 6 with no rule is 64, and the rule removes many of those."
verify: "product(...Array(6).fill(['A', 'B'])).filter((s) => !s.join('').includes('AA')).length"
---

How many strings of 6 letters use only A and B, with no two As in a row?

## Hint

Split by the last letter. If the string ends in B, what can the first 5 letters be? If it ends in A, what must the letter before it be?

## Hint 2

Each count is the sum of the two before it. Length 1 has 2 strings, and length 2 has 3 strings.

## Solution

**Step 1.** A valid string ends in B (with any valid string of length 5 before it) or in BA (with any valid string of length 4 before it).

**Step 2.** So each count is the sum of the two before it. Starting from 2 and 3, the counts are 2, 3, 5, 8, 13, 21.

**Answer: (D) 21**
