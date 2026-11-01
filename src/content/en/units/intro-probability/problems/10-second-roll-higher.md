---
order: 11
difficulty: medium
lesson: 02-list-the-real-outcomes
choices: ["$\\frac{5}{12}$","$\\frac{1}{6}$","$\\frac{1}{2}$","$\\frac{7}{12}$","$\\frac{5}{6}$"]
answer: A
mistakes:
  B: "That's the chance that the two rolls match."
  C: "That forgets that the rolls can match. Higher and lower share only 30 of the outcomes."
  D: "That's the chance that the second is higher **or** the same. The question says greater."
  E: "That's the chance that the rolls differ. Only half of those have a higher second roll."
verify: "fraction(product(range(1, 6), range(1, 6)).filter(([a, b]) => b > a).length, 36)"
---

You roll a die two times. What is the probability that the second number is greater than the first?

## Hint

The second roll is either higher, lower, or the same as the first. How likely is "the same"? How do "higher" and "lower" compare?

## Hint 2

Six of the 36 outcomes match. Higher and lower share the other 30 equally.

## Solution

**Step 1.** There are 36 outcomes. Both rolls match in 6 of them: (1, 1), (2, 2), and so on up to (6, 6).

**Step 2.** That leaves $36 - 6 = 30$ outcomes where the rolls differ.

**Step 3.** "Second is higher" and "second is lower" are equally likely, since you could swap the two rolls. So each gets half: $30 \div 2 = 15$ outcomes.

**Step 4.** The probability is $\frac{15}{36}$, which simplifies to $\frac{5}{12}$.

**Answer: (A) $\frac{5}{12}$**
