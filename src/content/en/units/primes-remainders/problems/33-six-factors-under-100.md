---
order: 33
difficulty: hard
lesson: 02-counting-divisors
choices: ["12","14","15","16","18"]
answer: D
mistakes:
  A: "That counts the numbers built from 4 and from 9, but it leaves out 50, 75, 98, and 32."
  B: "That misses a few. Go through the squares 4, 9, 25, and 49 one at a time, and remember $2^5 = 32$."
  C: "That leaves out $2^5 = 32$, which also has exactly 6 factors."
  E: "That counts some numbers that are too big. For example, $4 \\times 25 = 100$ isn't less than 100."
verify: "range(1, 99).filter((n) => factors(n).length === 6).length"
---

How many positive whole numbers less than 100 have exactly 6 positive factors?

## Hint

The factor count comes from multiplying (exponent + 1) values. Which exponents multiply to give 6?

## Hint 2

Either one prime has an exponent of 5, or one prime is squared and a different prime appears once. Count each kind, and keep the numbers below 100.

## Solution

**Step 1.** To get 6 factors, the (exponent + 1) values must multiply to 6. That's $6$ alone or $3 \times 2$. So the number is a prime to the 5th power, or the square of a prime times a different prime.

**Step 2.** Count the 5th powers below 100. Only $2^5 = 32$ works, since $3^5 = 243$ is too big. That's 1 number.

**Step 3.** Count the numbers that are a prime squared times a different prime:

- $4 \times q$, where $q$ is an odd prime below 25: 12, 20, 28, 44, 52, 68, 76, and 92. That's 8 numbers.
- $9 \times q$, where $q$ is 2, 5, 7, or 11: 18, 45, 63, and 99. That's 4 numbers.
- $25 \times q$, where $q$ is 2 or 3: 50 and 75. That's 2 numbers.
- $49 \times q$, where $q$ is 2: 98. That's 1 number.

**Step 4.** Add them up:

$$1 + 8 + 4 + 2 + 1 = 16$$

**Answer: (D) 16**
