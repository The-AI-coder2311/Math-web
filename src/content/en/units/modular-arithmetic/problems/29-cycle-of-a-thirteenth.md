---
order: 29
difficulty: medium
lesson: 05-fermat-and-euler
choices: ["3","6","12","13"]
answer: B
mistakes:
  A: "Test it: $10^3 = 1000$, and that's 12 mod 13, not 1."
  C: "12 is a power that works, but it isn't the smallest."
  D: "The cycle length has to divide $13 - 1$."
verify: "(() => { let k = 1, v = 10 % 13; while (v !== 1) { v = (v * 10) % 13; k++; } return k; })()"
---

The decimal form of $\frac{1}{13}$ repeats. How many digits are in the repeating block?

## Hint

The length of the block is the smallest $k$ with $10^k \equiv 1 \pmod{13}$.

## Hint 2

Since $k$ divides 12, test 1, 2, 3, 4, and 6.

## Solution

We need the smallest $k$ with $10^k \equiv 1 \pmod{13}$, and it must divide 12. Stepping through, $10^1 \equiv 10$, $10^2 \equiv 9$, $10^3 \equiv 12$, and $10^6 \equiv 12^2 \equiv 1$. So $k = 6$, and in fact, $\frac{1}{13} = 0.076923...$

**Answer: (B) 6**
