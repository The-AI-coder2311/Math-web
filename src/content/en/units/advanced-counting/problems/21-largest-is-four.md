---
order: 21
difficulty: hard
lesson: 04-harder-probability
choices: ["$\\frac{1}{6}$","$\\frac{2}{9}$","$\\frac{7}{36}$","$\\frac{1}{4}$","$\\frac{4}{9}$"]
answer: C
mistakes:
  A: "That's 6 out of 36. You may have counted (4,4) only once and missed one. List them: there are 7."
  B: "That's 8 out of 36, which counts (4,4) twice."
  D: "That's 9 out of 36. That's the count of outcomes with both numbers at most 3."
  E: "That's 16 out of 36, the count for \"at most 4.\" You need to remove those that never reach 4."
verify: "fraction(product(range(1, 6), range(1, 6)).filter(([a, b]) => Math.max(a, b) === 4).length, 36)"
---

You roll two standard dice. What is the probability that the larger of the two numbers is exactly 4? (If both show 4, the larger number is 4.)

## Hint

Exactly 4 is messy. How many outcomes have both numbers at most 4?

## Hint 2

That's 16 outcomes. How many of those have both numbers at most 3? Subtract.

## Solution

**Step 1.** Both numbers at most 4: $4 \times 4 = 16$ outcomes.

**Step 2.** Both at most 3: $3 \times 3 = 9$ outcomes. These don't reach 4.

**Step 3.** So $16 - 9 = 7$ outcomes have a largest number of exactly 4. The probability is $\frac{7}{36}$.

**Answer: (C) $\frac{7}{36}$**
