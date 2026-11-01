---
order: 16
difficulty: hard
lesson: 01-equal-groups
choices: ["40","60","72","90","120"]
answer: C
mistakes:
  A: "That treats 30 as $\\frac{3}{4}$ of the tank. The 30 liters are the difference between the two fractions."
  B: "That treats 30 as half of the tank. The difference between the fractions is $\\frac{5}{12}$."
  D: "That treats 30 as $\\frac{1}{3}$ of the tank. Subtract the fractions to find its share."
  E: "That treats 30 as $\\frac{1}{4}$ of the tank, the starting level. The 30 liters were added on top."
verify: "range(1, 300).filter((n) => n % 12 === 0).find((n) => (n * 2) / 3 - n / 4 === 30)"
---

A tank is $\frac{1}{4}$ full. After 30 liters are added, it's $\frac{2}{3}$ full. How many liters does the full tank hold?

## Hint

The 30 liters are the difference between the two fractions. What is that difference?

## Hint 2

$\frac{2}{3} - \frac{1}{4} = \frac{5}{12}$. So 5 groups hold 30 liters.

## Solution

**Step 1.** The 30 liters fill $\frac{2}{3} - \frac{1}{4} = \frac{8}{12} - \frac{3}{12} = \frac{5}{12}$ of the tank.

**Step 2.** So $\frac{1}{12}$ of the tank is $30 \div 5 = 6$ liters, and the full tank holds $12 \times 6 = 72$ liters.

**Answer: (C) 72**
