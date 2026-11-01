---
order: 7
difficulty: medium
lesson: 04-factors-primes-leftovers
choices: ["44","45","46","48","49"]
answer: E
mistakes:
  A: "It has pairs 1 and 44, 2 and 22, and 4 and 11, for 6 factors. Only a perfect square has an odd count."
  B: "It has pairs 1 and 45, 3 and 15, and 5 and 9, for 6 factors. Only a perfect square has an odd count."
  C: "It has pairs 1 and 46, and 2 and 23, for 4 factors. Only a perfect square has an odd count."
  D: "It has 5 factor pairs, for 10 factors. Only a perfect square has an odd count."
verify: "[44, 45, 46, 48, 49].filter((n) => factors(n).length % 2 === 1).join()"
---

Which of these numbers has an odd number of positive factors?

## Hint

Factors come in pairs, which usually makes an even count. What kind of number has a factor that pairs with itself?

## Hint 2

Factors pair up, unless a number pairs with itself. That only happens for perfect squares.

## Solution

**Step 1.** Factors come in pairs, so most numbers have an even number of factors.

**Step 2.** The count is odd only when a factor pairs with itself. That only happens with perfect squares.

**Step 3.** Only one choice is a perfect square:

$$7 \times 7 = 49$$

**A check:** the factors of 49 are 1, 7, and 49. That's 3 factors, which is an odd number.

**Answer: (E) 49**
