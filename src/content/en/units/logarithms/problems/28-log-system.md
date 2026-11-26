---
order: 28
difficulty: medium
lesson: 04-logs-in-contests
choices: ["36","54","81","243","729"]
answer: A
mistakes:
  B: "That's $27 \\times 2$. Find $y$ as a power of 3: it's 9."
  C: "That's $3^4$. Find $x$ and $y$ separately, then add."
  D: "That's $xy$. The question asks for $x + y$."
  E: "That's $3^6$. Solve for each log first."
verify: "(() => { for (const x of range(1, 300)) for (const y of range(1, 300)) if (Math.abs(Math.log(x * y) / Math.log(3) - 5) < 1e-9 && Math.abs(Math.log(x / y) / Math.log(3) - 1) < 1e-9) return x + y; })()"
---

Positive numbers $x$ and $y$ satisfy $\log_3 x + \log_3 y = 5$ and $\log_3 x - \log_3 y = 1$. What is $x + y$?

## Hint

Let $p = \log_3 x$ and $q = \log_3 y$.

## Hint 2

Then $p + q = 5$ and $p - q = 1$.

## Solution

With $p = \log_3 x$ and $q = \log_3 y$, adding the equations gives $2p = 6$, so $p = 3$ and $q = 2$. Then $x = 27$, $y = 9$, and $x + y = 36$.

**Answer: (A) 36**
