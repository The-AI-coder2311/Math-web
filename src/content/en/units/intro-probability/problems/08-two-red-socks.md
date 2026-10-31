---
order: 8
difficulty: medium
choices: ['$\frac{2}{7}$', '$\frac{16}{49}$', '$\frac{1}{3}$', '$\frac{4}{7}$', '$\frac{1}{2}$']
answer: A
verify: "fraction(combos(range(1, 7), 2).filter((pair) => pair.every((sock) => sock <= 4)).length, combos(range(1, 7), 2).length)"
---

A drawer has 4 red socks and 3 blue socks. You pull out 2 socks without looking and without putting the first one back. What is the probability that both socks are red?

## Hint

After you take out a red sock, how many socks are left, and how many of those are red?

## Solution

**Step 1.** The first sock is red with probability $\frac{4}{7}$.

**Step 2.** Now 6 socks are left, and 3 of them are red. So the second sock is red with probability $\frac{3}{6}$.

**Step 3.** Multiply:

$$\frac{4}{7} \times \frac{3}{6} = \frac{12}{42} = \frac{2}{7}$$

**Answer: (A) $\frac{2}{7}$**
