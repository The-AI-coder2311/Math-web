---
order: 4
difficulty: easy
lesson: 03-trees-and-multiplying
choices: ["$\\frac{1}{128}$","$\\frac{1}{64}$","$\\frac{1}{7}$","$\\frac{1}{2}$","$\\frac{6}{7}$"]
answer: D
mistakes:
  A: "That's the probability of 7 heads in a row, counted from the very first flip. The first 6 flips already happened, so only the next flip matters."
  B: "That's the chance of getting 6 heads in a row from the start. Those flips already happened."
  C: "That suggests that tails is \"due.\" A coin has no memory."
  E: "That suggests that the streak will continue. A coin has no memory."
verify: "(() => { const c = [0, 1]; const all = product(c, c, c, c, c, c, c).filter((f) => f.slice(0, 6).every((x) => x === 1)); return fraction(all.filter((f) => f[6] === 1).length, all.length); })()"
---

A fair coin lands on heads 6 times in a row. What is the probability that it lands on heads on the next flip?

## Hint

Does the coin know what it did before?

## Hint 2

Each flip is independent, so past flips can't change the next one.

## Solution

The coin has no memory, so earlier flips can't change the next one. On any flip of a fair coin, heads and tails are equally likely, so the probability is $\frac{1}{2}$.

**Answer: (D) $\frac{1}{2}$**
