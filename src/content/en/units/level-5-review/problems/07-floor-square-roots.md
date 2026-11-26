---
order: 7
difficulty: medium
from: aime-algebra/03-floor-ceiling
choices: ["600","615","620","625","650"]
answer: D
mistakes:
  A: "That's a rounded estimate. Group the terms by value and add exactly."
  B: "That forgets the last term. The square root of 100 is exactly 10."
  C: "That counts the value 10 more than once. Only k equal to 100 gives 10."
  E: "That's 6.5 times 100, an estimate. Use the exact grouping."
verify: "sum(range(1, 100).map((k) => Math.floor(Math.sqrt(k))))"
---

What is $\lfloor \sqrt{1} \rfloor + \lfloor \sqrt{2} \rfloor + \lfloor \sqrt{3} \rfloor + \cdots + \lfloor \sqrt{100} \rfloor$?

## Hint

Group the terms by their value. For which $k$ is $\lfloor \sqrt{k} \rfloor$ equal to $n$?

## Hint 2

The value $n$ appears for $k$ from $n^2$ up to $(n + 1)^2 - 1$, which is $2n + 1$ values of $k$.

## Solution

For $n$ from 1 to 9, the value $n$ appears $2n + 1$ times. The last term, $k = 100$, adds one more 10. So the sum is

$$\sum_{n=1}^{9} n(2n + 1) + 10$$

Split the sum: twice the sum of the squares from 1 to 9 is $2 \times 285 = 570$, and the sum of 1 through 9 is 45. The total is $570 + 45 + 10 = 625$.

**Answer: (D) 625**
