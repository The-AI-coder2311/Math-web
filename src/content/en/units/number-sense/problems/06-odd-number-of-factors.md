---
order: 6
difficulty: medium
choices: [44, 45, 46, 48, 49]
answer: E
verify: "[44, 45, 46, 48, 49].filter((n) => factors(n).length % 2 === 1).join()"
---

Which of these numbers has an odd number of positive factors?

## Hint

Factors come in pairs, which usually makes an even count. What kind of number has a factor that pairs with itself?

## Solution

**Step 1.** Factors come in pairs, so most numbers have an even number of factors.

**Step 2.** The count is odd only when a factor pairs with itself. That only happens with perfect squares.

**Step 3.** Only one choice is a perfect square:

$$7 \times 7 = 49$$

**A check:** the factors of 49 are 1, 7, and 49. That's 3 factors, which is an odd number.

**Answer: (E) 49**
