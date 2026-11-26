---
order: 12
difficulty: medium
from: trigonometry/02-trig-identities
choices: ["12","24","25","48","49"]
answer: B
mistakes:
  A: "That's 25 times the product. Multiply $\\frac{12}{25}$ by 50."
  C: "That's half of 50. Square the given equation to find the product."
  D: "That's 50 times $2 \\sin x \\cos x$. The question asks for 50 times the product itself."
  E: "That's $25 \\times \\frac{49}{25}$, from the square of the sum. Subtract the 1 from the Pythagorean identity first."
verify: "(() => { let lo = 0, hi = Math.PI / 4; const f = (x) => Math.sin(x) + Math.cos(x) - 1.4; for (let k = 0; k < 100; k++) { const mid = (lo + hi) / 2; if (f(lo) * f(mid) <= 0) hi = mid; else lo = mid; } return Math.round(50 * Math.sin(lo) * Math.cos(lo)); })()"
---

If $\sin x + \cos x = \frac{7}{5}$, what is $50 \sin x \cos x$?

## Hint

Square both sides of the equation.

## Hint 2

After squaring, use $\sin^2 x + \cos^2 x = 1$.

## Solution

Square both sides:

$$\sin^2 x + 2\sin x \cos x + \cos^2 x = \frac{49}{25}.$$

The Pythagorean identity turns the outer terms into 1, so $2 \sin x \cos x = \frac{24}{25}$ and $\sin x \cos x = \frac{12}{25}$. Then 50 times that is 24.

You never need $x$ itself, though one solution has $\sin x = \frac{3}{5}$ and $\cos x = \frac{4}{5}$.

**Answer: (B) 24**
