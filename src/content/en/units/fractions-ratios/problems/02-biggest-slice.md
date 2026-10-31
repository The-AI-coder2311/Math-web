---
order: 2
difficulty: easy
choices: ['$\frac{1}{2}$', '$\frac{2}{5}$', '$\frac{3}{5}$', '$\frac{4}{9}$', '$\frac{5}{12}$']
answer: C
verify: "[[1, 2], [2, 5], [3, 5], [4, 9], [5, 12]].sort((a, b) => b[0] * a[1] - a[0] * b[1]).map(([n, d]) => fraction(n, d))[0]"
---

Which fraction is the largest?

## Hint

Compare each fraction to $\frac{1}{2}$. Is the top number more than half of the bottom number?

## Solution

A fraction is bigger than $\frac{1}{2}$ only when its top number is more than half of its bottom number. Let's check each one:

- $\frac{1}{2}$ is exactly one half.
- $\frac{2}{5}$ is less than one half, because half of 5 is 2.5.
- $\frac{3}{5}$ is more than one half, because 3 is more than 2.5.
- $\frac{4}{9}$ is less than one half, because half of 9 is 4.5.
- $\frac{5}{12}$ is less than one half, because half of 12 is 6.

Only $\frac{3}{5}$ is greater than one half, so it's the largest.

**Answer: (C) $\frac{3}{5}$**
