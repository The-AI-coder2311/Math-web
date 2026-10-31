---
order: 10
difficulty: medium
choices: ['$\frac{1}{6}$', '$\frac{5}{12}$', '$\frac{1}{2}$', '$\frac{7}{12}$', '$\frac{5}{6}$']
answer: B
verify: "fraction(product(range(1, 6), range(1, 6)).filter(([a, b]) => b > a).length, 36)"
---

You roll a die two times. What is the probability that the second number is greater than the first?

## Hint

The second roll is either higher, lower, or the same as the first. How likely is "the same"? How do "higher" and "lower" compare?

## Solution

**Step 1.** There are 36 outcomes. Both rolls match in 6 of them: (1, 1), (2, 2), and so on up to (6, 6).

**Step 2.** That leaves $36 - 6 = 30$ outcomes where the rolls differ.

**Step 3.** "Second is higher" and "second is lower" are equally likely, since you could swap the two rolls. So each gets half: $30 \div 2 = 15$ outcomes.

**Step 4.** The probability is $\frac{15}{36}$, which simplifies to $\frac{5}{12}$.

**Answer: (B) $\frac{5}{12}$**
