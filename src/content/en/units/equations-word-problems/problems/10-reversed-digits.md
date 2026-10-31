---
order: 10
difficulty: hard
choices: [27, 36, 45, 54, 63]
answer: B
verify: "range(10, 99).find((n) => { const [a, b] = digits(n); return a + b === 9 && 10 * b + a === n + 27; })"
---

The digits of a two-digit number add up to 9. When the digits are swapped, the new number is 27 more than the original. What is the original number?

## Hint

A two-digit number with tens digit $a$ and ones digit $b$ equals $10a + b$. For example, $47 = 10 \times 4 + 7$. What does the swapped number equal?

## Solution

**Step 1.** Write the original number as $10a + b$. The swapped number is $10b + a$.

**Step 2.** The swapped number is 27 more than the original:

$$10b + a = 10a + b + 27$$

**Step 3.** Subtract $a$ and $b$ from both sides to get $9b = 9a + 27$. Divide by 9 to get $b = a + 3$.

**Step 4.** The digits add up to 9, and $b$ is 3 more than $a$. So $a = 3$ and $b = 6$, and the number is 36.

**Check:** $63 - 36 = 27$, and $3 + 6 = 9$.

**Answer: (B) 36**
