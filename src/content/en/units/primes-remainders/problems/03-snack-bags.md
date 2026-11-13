---
order: 3
difficulty: easy
lesson: 03-gcf-and-lcm
choices: ["6","8","12","24","48"]
answer: D
mistakes:
  A: "That works, but it isn't the largest. Bigger groups are possible."
  B: "That works, but it isn't the largest. Bigger groups are possible."
  C: "That works, but it isn't the largest. Each bag could hold fewer items."
  E: "48 doesn't divide 72, so the apples wouldn't share out evenly."
verify: "gcd(48, 72)"
---

A teacher has 48 granola bars and 72 apples. She wants to make identical snack bags using all of the food, with nothing left over. What is the largest number of bags she can make?

## Hint

The number of bags has to divide both 48 and 72. What's the largest number that does?

## Hint 2

$48 = 2^4 \times 3$ and $72 = 2^3 \times 3^2$. Use the smaller power of each prime.

## Solution

**Step 1.** The number of bags must be a factor of both numbers, so we want the GCF.

**Step 2.** Write them as primes: $48 = 2^4 \times 3^1$ and $72 = 2^3 \times 3^2$.

**Step 3.** Use the smaller power of each prime: $2^3 \times 3^1 = 24$.

Each bag has 2 granola bars and 3 apples.

**Answer: (D) 24**
