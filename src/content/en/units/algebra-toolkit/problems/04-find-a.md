---
order: 8
difficulty: medium
lesson: 01-difference-of-squares
choices: ["3","5","13","10","8"]
answer: E
mistakes:
  A: "That's $a - b$. Find $a$ itself."
  B: "That's $b$. The question asks for $a$."
  D: "That's half of $13 + 7$. Add the equations: $2a = 16$."
  C: "That's $a + b$. Find $a$ itself."
verify: "range(1, 50).find((a) => a * a - (a - 3) * (a - 3) === 39)"
---

The numbers $a$ and $b$ satisfy $a - b = 3$ and $a^2 - b^2 = 39$. What is the value of $a$?

## Hint

Factor $a^2 - b^2$. One of the factors is something you already know.

## Hint 2

$(a + b) \times 3 = 39$, so $a + b = 13$. Add this to $a - b = 3$.

## Solution

**Step 1.** Factor: $a^2 - b^2 = (a + b)(a - b)$.

**Step 2.** So $(a + b) \times 3 = 39$, which means $a + b = 13$.

**Step 3.** Now $a + b = 13$ and $a - b = 3$. Adding these two equations gives $2a = 16$, so $a = 8$.

**Check:** Then $b = 5$, and $8^2 - 5^2 = 64 - 25 = 39$.

**Answer: (E) 8**
