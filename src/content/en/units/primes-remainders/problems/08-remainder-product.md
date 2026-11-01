---
order: 10
difficulty: medium
lesson: 04-units-digits-and-remainders
choices: ["1","0","2","4","6"]
answer: A
mistakes:
  B: "That would mean that the product is a multiple of 7. Neither number is."
  C: "That's $5 - 3$. Multiply the remainders."
  D: "Check with real numbers: $10 \\times 12 = 120$, and 120 leaves a remainder of 1."
  E: "Check with real numbers: $10 \\times 12 = 120$, and 120 leaves a remainder of 1."
verify: "[...new Set(product([3, 10, 17, 24, 101], [5, 12, 19, 26, 103]).map(([a, b]) => (a * b) % 7))].join()"
---

When $a$ is divided by 7, the remainder is 3. When $b$ is divided by 7, the remainder is 5. What is the remainder when $a \times b$ is divided by 7?

## Hint

To find the remainder of a product, you can multiply the remainders alone. You could also test it with real numbers, like 10 and 12.

## Hint 2

$3 \times 5 = 15$. What's the remainder of 15?

## Solution

**Step 1.** Multiply the remainders: $3 \times 5 = 15$.

**Step 2.** Find the remainder of 15: since $7 \times 2 = 14$, the remainder is 1.

**Check:** Take $a = 10$ and $b = 12$. Their product is 120, and $120 = 7 \times 17 + 1$.

**Answer: (A) 1**
