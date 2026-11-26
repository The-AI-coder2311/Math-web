---
order: 15
difficulty: medium
from: advanced-trig-complex/01-product-sum
choices: ["2","4","6","8","16"]
answer: D
mistakes:
  A: "That's the reciprocal of sin 30 degrees. The product of the three sines is a quarter of sin 30 degrees."
  B: "That loses a factor of 2. The product of the three sines is one eighth."
  C: "Recheck the product-to-sum steps. The product comes out to exactly one eighth."
  E: "That doubles the answer. Check the factor one half in each product-to-sum step."
verify: "Math.round(1 / (Math.sin(Math.PI / 18) * Math.sin((5 * Math.PI) / 18) * Math.sin((7 * Math.PI) / 18)))"
---

What is the value of

$$\frac{1}{\sin 10^\circ \sin 50^\circ \sin 70^\circ}?$$

## Hint

Use product-to-sum on $\sin 50^\circ \sin 70^\circ$ first.

## Hint 2

$\sin A \sin B = \frac{1}{2}\left(\cos(A - B) - \cos(A + B)\right)$, and $\cos 120^\circ$ is negative one half.

## Solution

By product-to-sum, $\sin 50^\circ \sin 70^\circ = \frac{1}{2}(\cos 20^\circ - \cos 120^\circ)$, which is $\frac{1}{2}\cos 20^\circ + \frac{1}{4}$.

Multiply by $\sin 10^\circ$. The new piece is $\sin 10^\circ \cos 20^\circ$, and product-to-sum turns it into $\frac{1}{2}(\sin 30^\circ - \sin 10^\circ)$, which is $\frac{1}{4} - \frac{1}{2}\sin 10^\circ$. Putting it together, the product is

$$\frac{1}{2}\left(\frac{1}{4} - \frac{1}{2}\sin 10^\circ\right) + \frac{1}{4}\sin 10^\circ$$

The sine terms cancel, leaving one eighth. The reciprocal is 8.

**Answer: (D) 8**
