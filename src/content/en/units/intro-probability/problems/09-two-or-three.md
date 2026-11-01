---
order: 10
difficulty: medium
lesson: 01-count-what-you-want
choices: ["$\\frac{1}{3}$","$\\frac{2}{3}$","$\\frac{1}{2}$","$\\frac{5}{6}$","$\\frac{4}{5}$"]
answer: B
mistakes:
  A: "That counts only the multiples of 3."
  C: "That counts only the multiples of 2."
  D: "That's 25 out of 30, which counts multiples of 6 twice. Subtract them once."
  E: "That's 24 out of 30. Check your count: $15 + 10 - 5 = 20$."
verify: "fraction(range(1, 30).filter((n) => n % 2 === 0 || n % 3 === 0).length, 30)"
---

A whole number from 1 to 30 is chosen at random. What is the probability that it is divisible by 2 or by 3 (or both)?

## Hint

Count the multiples of 2 and the multiples of 3. Some numbers get counted twice. Which ones?

## Hint 2

There are 15 multiples of 2 and 10 multiples of 3. Multiples of 6 got counted twice.

## Solution

**Step 1.** There are 15 multiples of 2 and 10 multiples of 3.

**Step 2.** Multiples of 6 are divisible by both, so they got counted twice. There are 5 of them, since $6 \times 5 = 30$.

**Step 3.** Subtract the double-counted ones: $15 + 10 - 5 = 20$.

**Step 4.** The probability is $\frac{20}{30}$, which simplifies to $\frac{2}{3}$.

**Answer: (B) $\frac{2}{3}$**
