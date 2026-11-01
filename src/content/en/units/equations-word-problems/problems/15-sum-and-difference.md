---
order: 13
difficulty: medium
lesson: 04-two-unknowns
choices: ["11","15","38","22","19"]
answer: E
mistakes:
  A: "That's the smaller number. The question asks for the larger."
  B: "That's half of the sum. It would be right if the two numbers were equal."
  D: "That's $30 - 8$. Its partner would be 8, and their difference would be 14."
  C: "That's $2x$. You still need to divide by 2."
verify: "range(1, 30).find((x) => x + (x - 8) === 30)"
---

Two numbers add up to 30, and their difference is 8. What is the larger number?

## Hint

Write two equations, and add them together. What disappears?

## Hint 2

Adding $x + y = 30$ and $x - y = 8$ gives $2x = 38$.

## Solution

Adding the two equations gives $2x = 38$, so $x = 19$. The other number is 11.

**Check:** $19 + 11 = 30$, and $19 - 11 = 8$.

**Answer: (E) 19**
