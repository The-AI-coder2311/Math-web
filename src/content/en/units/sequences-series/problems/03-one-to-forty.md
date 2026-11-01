---
order: 3
difficulty: easy
lesson: 02-fast-sums
choices: ["800","820","840","1600","1640"]
answer: B
mistakes:
  A: "That's $40 \\times 40 \\div 2$. Each pair adds up to 41, not 40."
  C: "That's 20 pairs of 42. Check a pair: 1 and 40 add up to 41."
  D: "That's $40 \\times 40$. Each pair adds up to 41, and you also need to divide by 2."
  E: "That's $40 \\times 41$, which counts the list twice. Divide by 2."
verify: "sum(range(1, 40))"
---

What is the value of $1 + 2 + 3 + \cdots + 40$?

## Hint

Pair the first number with the last. What do they add up to? What about the second with the second-to-last?

## Hint 2

Each pair adds up to 41, and 40 numbers make 20 pairs.

## Solution

There are 40 terms, so the sum is half of 40 times the first term plus the last term: $\frac{40 \times 41}{2} = 820$.

**Answer: (B) 820**
