---
order: 20
difficulty: hard
from: aime-strategy/01-estimation-bounding
choices: ["197","198","199","200","201"]
answer: B
mistakes:
  A: "That's too low. The telescoping lower bound is already more than 198."
  C: "The sum is less than 199. Keep the first term as 1 and use the upper bound from k equal to 2 onward."
  D: "That's twice the square root of 10000, the integral estimate. The sum is a little less than that."
  E: "The sum is less than 200, since each term is less than its matching telescoping piece."
verify: "Math.floor(sum(range(1, 10000).map((k) => 1 / Math.sqrt(k))))"
---

Let

$$S = \frac{1}{\sqrt{1}} + \frac{1}{\sqrt{2}} + \frac{1}{\sqrt{3}} + \cdots + \frac{1}{\sqrt{10000}}$$

What is $\lfloor S \rfloor$, the greatest integer that is at most $S$?

## Hint

Trap each term between two differences of square roots, so that the bounds telescope.

## Hint 2

$2(\sqrt{k + 1} - \sqrt{k}) = \frac{2}{\sqrt{k + 1} + \sqrt{k}}$, and that's less than $\frac{1}{\sqrt{k}}$.

## Solution

Rationalizing, $2(\sqrt{k + 1} - \sqrt{k})$ is 2 divided by $\sqrt{k + 1} + \sqrt{k}$, which is less than $\frac{1}{\sqrt{k}}$. In the same way, $\frac{1}{\sqrt{k}}$ is less than $2(\sqrt{k} - \sqrt{k - 1})$.

**Lower bound.** Adding the first inequality for $k$ from 1 to 10000 telescopes: $S$ is more than $2(\sqrt{10001} - 1)$, which is more than $2 \times 99 = 198$.

**Upper bound.** Keep the first term, 1, and add the second inequality for $k$ from 2 to 10000: $S$ is less than $1 + 2(\sqrt{10000} - 1)$, which is 199.

So $S$ is strictly between 198 and 199, and $\lfloor S \rfloor$ is 198. A precise estimate puts $S$ near 198.5, so neither bound was close to a whole number.

**Answer: (B) 198**
