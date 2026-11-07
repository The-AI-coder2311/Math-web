---
order: 26
difficulty: easy
lesson: 03-gcf-and-lcm
choices: ["7","14","28","168"]
answer: B
mistakes:
  A: "7 divides both, but so does a larger number."
  C: "28 divides 56, but it doesn't divide 42."
  D: "That's the LCM, not the GCF."
verify: "gcd(56, 42)"
---

What is the greatest common factor of 56 and 42?

## Hint

Any number that divides both also divides their difference.

## Hint 2

The difference is 14. Does 14 divide both?

## Solution

The difference is 14, so the GCF is at most 14. Since $56 = 14 \times 4$ and $42 = 14 \times 3$, the GCF is 14.

**Answer: (B) 14**
