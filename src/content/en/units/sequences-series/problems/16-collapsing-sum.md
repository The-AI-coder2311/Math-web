---
order: 16
difficulty: medium
lesson: 04-recursive-and-special
choices: ["$\\frac{1}{20}$","$\\frac{1}{2}$","$\\frac{19}{20}$","$\\frac{20}{21}$","1"]
answer: C
mistakes:
  A: "That's the piece being subtracted at the end. You still need to subtract it from 1."
  B: "That's only the first term. Adding more terms makes the sum grow."
  D: "That would be the sum with one more term. The last piece here is $\\frac{1}{20}$."
  E: "The sum gets close to 1 but doesn't reach it, since $\\frac{1}{20}$ remains to be subtracted."
verify: "(() => { const s = sum(range(1, 19).map((n) => 1 / (n * (n + 1)))); return fraction(Math.round(s * 20), 20); })()"
---

What is the value of $\frac{1}{1 \times 2} + \frac{1}{2 \times 3} + \frac{1}{3 \times 4} + \cdots + \frac{1}{19 \times 20}$?

## Hint

Find the sum of the first 2 terms, then the first 3 terms. What pattern do you see?

## Hint 2

Each term splits: $\frac{1}{2 \times 3} = \frac{1}{2} - \frac{1}{3}$. Write the sum using these pieces. What cancels?

## Solution

**Step 1.** Each term splits into two pieces: $\frac{1}{n(n + 1)} = \frac{1}{n} - \frac{1}{n + 1}$.

**Step 2.** The sum becomes $\left(1 - \frac{1}{2}\right) + \left(\frac{1}{2} - \frac{1}{3}\right) + \cdots + \left(\frac{1}{19} - \frac{1}{20}\right)$. Each middle piece cancels.

**Step 3.** What's left is $1 - \frac{1}{20} = \frac{19}{20}$.

**Answer: (C) $\frac{19}{20}$**
