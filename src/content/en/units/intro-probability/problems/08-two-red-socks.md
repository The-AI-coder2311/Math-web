---
order: 9
difficulty: medium
lesson: 03-trees-and-multiplying
choices: ["$\\frac{2}{7}$","$\\frac{16}{49}$","$\\frac{1}{3}$","$\\frac{1}{2}$","$\\frac{4}{7}$"]
answer: A
mistakes:
  B: "That's $\\frac{4}{7} \\times \\frac{4}{7}$, as if you put the first sock back. The drawer changes."
  C: "Update the drawer after the first sock, and multiply: $\\frac{4}{7} \\times \\frac{3}{6}$."
  D: "That's only the second sock, after a red one comes out. Multiply it by the chance of the first."
  E: "That's only the first sock. The second one also has to be red."
verify: "fraction(combos(range(1, 7), 2).filter((pair) => pair.every((sock) => sock <= 4)).length, combos(range(1, 7), 2).length)"
---

A drawer has 4 red socks and 3 blue socks. You pull out 2 socks without looking and without putting the first one back. What is the probability that both socks are red?

## Hint

After you take out a red sock, how many socks are left, and how many of those are red?

## Hint 2

The first is red with a chance of $\frac{4}{7}$. Then 3 of the 6 left are red.

## Solution

**Step 1.** The first sock is red with probability $\frac{4}{7}$.

**Step 2.** Now 6 socks are left, and 3 of them are red. So the second sock is red with probability $\frac{3}{6}$.

**Step 3.** Multiply:

$$\frac{4}{7} \times \frac{3}{6} = \frac{12}{42} = \frac{2}{7}$$

**Answer: (A) $\frac{2}{7}$**
