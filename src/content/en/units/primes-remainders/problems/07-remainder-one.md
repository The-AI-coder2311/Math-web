---
order: 9
difficulty: medium
lesson: 03-gcf-and-lcm
choices: ["31","41","61","121","601"]
answer: C
mistakes:
  A: "That leaves a remainder of 1 for 2, 3, and 5, but not for 4."
  B: "That leaves a remainder of 2 when divided by 3."
  D: "That works, but it isn't the smallest. A smaller number does too."
  E: "That works, but it isn't the smallest. A smaller number does too."
verify: "range(2, 1000).find((n) => [2, 3, 4, 5].every((d) => n % d === 1))"
---

What is the smallest whole number greater than 1 that leaves a remainder of 1 when divided by each of 2, 3, 4, and 5?

## Hint

If you subtract 1 from the number you want, what do you know about the result?

## Hint 2

The number minus 1 is a common multiple of 2, 3, 4, and 5. What's the LCM?

## Solution

**Step 1.** Subtract 1 from the number. The result leaves no remainder when divided by 2, 3, 4, or 5, so it's a common multiple of all four.

**Step 2.** The LCM of 2, 3, 4, and 5 is $2^2 \times 3 \times 5 = 60$.

**Step 3.** So the number is $60 + 1 = 61$.

**Answer: (C) 61**
