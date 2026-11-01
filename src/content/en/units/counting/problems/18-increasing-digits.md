---
order: 18
difficulty: hard
lesson: 03-overcount-then-divide
choices: ["56","84","120","504","720"]
answer: B
mistakes:
  A: "That's $\\binom{8}{3}$. The digits 1 through 9 make 9 digits, not 8."
  C: "That's $\\binom{10}{3}$, which includes 0. A 0 would have to go first, and then it wouldn't be a 3-digit number."
  D: "That's $9 \\times 8 \\times 7$, which counts every order. Only one order of 3 digits is increasing."
  E: "That's $10 \\times 9 \\times 8$, which counts every order and also includes 0."
verify: "range(100, 999).filter((n) => { const [a, b, c] = digits(n); return a < b && b < c; }).length"
---

How many 3-digit numbers have digits that strictly increase from left to right, like 247?

## Hint

Can the digit 0 appear? Once you've picked 3 different digits, how many ways can you put them in increasing order?

## Hint 2

0 can't appear, since it would have to go first. There's only one increasing order, so you only need to choose 3 of the digits 1 to 9.

## Solution

**Step 1.** 0 can't appear, since it would have to be the first digit.

**Step 2.** Any 3 different digits from 1 to 9 can be put in increasing order in exactly 1 way. So the count is $\binom{9}{3} = \frac{9 \times 8 \times 7}{3 \times 2 \times 1} = 84$.

**Answer: (B) 84**
