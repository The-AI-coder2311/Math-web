---
order: 34
difficulty: hard
lesson: 05-told-something
choices: ["$\\frac{1}{3}$","$\\frac{1}{2}$","$\\frac{2}{3}$","$\\frac{3}{4}$","$\\frac{4}{5}$"]
answer: C
mistakes:
  A: "That's the chance before any flips. Two heads in a row make the two-headed coin more likely."
  B: "That would be the answer after one flip. The second heads makes the two-headed coin even more likely."
  D: "That's $1 - \\frac{1}{4}$. The $\\frac{1}{4}$ is the chance that a fair coin lands heads twice, but there are 2 fair coins to account for."
  E: "That treats the jar as holding 1 fair coin. There are 2 fair coins, so a fair coin is picked twice as often."
verify: "(() => { const left = product([0, 1, 2], [0, 1], [0, 1]).filter(([coin, a, b]) => coin === 2 || (a === 0 && b === 0)); return fraction(left.filter(([coin]) => coin === 2).length, left.length); })()"
---

A jar holds 3 coins. Two are fair coins, and one has heads on both sides. You pick a coin at random and flip it twice. It lands on heads both times. What is the probability that you picked the two-headed coin?

## Hint

Imagine doing this 12 times. About how many times would you pick the two-headed coin? How many times would you pick a fair coin and get two heads?

## Hint 2

In 12 tries, you'd pick the two-headed coin about 4 times, and get two heads every time. You'd pick a fair coin about 8 times, and get two heads in about $\frac{1}{4}$ of those.

## Solution

**Step 1.** Imagine doing this 12 times.

- You'd pick the two-headed coin about $12 \div 3 = 4$ times. It lands on heads twice every time, so that's 4 tries with two heads.
- You'd pick a fair coin about 8 times. A fair coin lands on heads twice with probability $\frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$, so that's 2 tries with two heads.

**Step 2.** Use the clue to shrink the list. You saw two heads, so only those $4 + 2 = 6$ tries are left.

**Step 3.** Count the ones you want. In 4 of the 6, the coin was the two-headed one:

$$\frac{4}{6} = \frac{2}{3}$$

**Answer: (C) $\frac{2}{3}$**
