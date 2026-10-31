---
order: 4
difficulty: medium
choices: [1, 2, 3, 4, 6]
answer: D
verify: "range(1, 100).reduce((r) => (r * 3) % 7, 1)"
---

What is the remainder when $3^{100}$ is divided by 7?

## Hint

Find the remainders of $3^1$, $3^2$, $3^3$, and so on. How long before they repeat?

## Solution

**Step 1.** Find the remainders, multiplying by 3 each time and keeping only the remainder:

| Power | $3^1$ | $3^2$ | $3^3$ | $3^4$ | $3^5$ | $3^6$ |
|---|---|---|---|---|---|---|
| Remainder mod 7 | 3 | 2 | 6 | 4 | 5 | 1 |

**Step 2.** Since $3^6 \equiv 1 \pmod{7}$, the pattern repeats every 6 powers. And $96 = 6 \times 16$, so $3^{96}$ also has a remainder of 1.

**Step 3.** That means $3^{100}$ has the same remainder as $3^4$, which is 4.

**Answer: (D) 4**
