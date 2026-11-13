---
order: 31
difficulty: easy
lesson: 02-counting-divisors
choices: ["21","22","40","41","42"]
answer: E
mistakes:
  A: "That's $2 + 4 + 5 + 10$, which leaves out 1 and 20. Both of them are factors of 20."
  B: "That leaves out 20. A number is always a factor of itself."
  C: "That's $2 \\times 20$. Add up the factors one at a time: 1, 2, 4, 5, 10, and 20."
  D: "That leaves out 1. The number 1 is a factor of every whole number."
verify: "sum(factors(20))"
---

What is the sum of all of the positive factors of 20?

## Hint

List the factors of 20 in pairs that multiply to 20, starting with 1 and 20.

## Hint 2

The factors are 1, 2, 4, 5, 10, and 20. You can also use the shortcut: $20 = 2^2 \times 5$, so multiply $1 + 2 + 4$ by $1 + 5$.

## Solution

**Step 1.** Factor the number: $20 = 2^2 \times 5$.

**Step 2.** Make one sum for each prime. The powers of 2 give $1 + 2 + 4 = 7$. The powers of 5 give $1 + 5 = 6$.

**Step 3.** Multiply the sums:

$$7 \times 6 = 42$$

**Check by listing:** $1 + 2 + 4 + 5 + 10 + 20 = 42$.

**Answer: (E) 42**
