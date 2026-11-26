---
order: 13
difficulty: medium
from: complex-numbers/03-de-moivre
choices: ["-32","0","8","16","32"]
answer: E
mistakes:
  A: "Check the angle. Ten times 45° is 450°, which points the same way as 90°, straight up."
  B: "The result lies on the imaginary axis, so its real part is 0, not its imaginary part."
  C: "Check the length. It's $(\\sqrt 2)^{10}$, which is $2^5$."
  D: "That's $(1+i)^8$. One more factor of $(1+i)^2$, which is $2i$, is needed."
verify: "(() => { let re = 1, im = 0; for (let k = 0; k < 10; k++) { const r = re - im; const m = re + im; re = r; im = m; } return im; })()"
---

What is the imaginary part of $(1 + i)^{10}$?

## Hint

Write $1 + i$ in polar form: find its length and its angle.

## Hint 2

$1 + i$ has length $\sqrt 2$ and angle 45°. Use De Moivre's Theorem.

## Solution

The number $1 + i$ has length $\sqrt 2$ and angle 45°. By De Moivre's Theorem, raising it to the 10th power raises the length to the 10th power and multiplies the angle by 10.

The length becomes $(\sqrt 2)^{10}$, which is $2^5 = 32$. The angle becomes 450°, the same direction as 90°. So $(1 + i)^{10}$ is $32i$, and its imaginary part is 32.

Faster: $(1+i)^2$ is $2i$, so the answer is $(2i)^5 = 32 i^5$, which is $32i$.

**Answer: (E) 32**
