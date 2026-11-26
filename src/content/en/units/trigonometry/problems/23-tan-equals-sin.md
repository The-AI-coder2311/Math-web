---
order: 23
difficulty: medium
lesson: 04-trig-equations
choices: ["0","1","2","3","4"]
answer: D
mistakes:
  A: "$x = 0^\\circ$ works, since both sides are 0."
  B: "There are more solutions than $0^\\circ$. Check $180^\\circ$ and $360^\\circ$."
  C: "The interval includes both ends, $0^\\circ$ and $360^\\circ$."
  E: "The factor $\\cos x = 1$ gives angles you already counted."
verify: "range(0,360).filter(x => Math.abs(Math.tan(x*Math.PI/180) - Math.sin(x*Math.PI/180)) < 1e-9).length"
---

How many angles $x$ with $0^\circ \le x \le 360^\circ$ satisfy $\tan x = \sin x$?

## Hint

Write $\tan x = \frac{\sin x}{\cos x}$ and move everything to one side.

## Hint 2

Factor out $\sin x$. Watch for repeats and for angles where $\tan x$ is undefined.

## Solution

**Step 1.** $\frac{\sin x}{\cos x} - \sin x = 0$ becomes $\sin x\left(\frac{1}{\cos x} - 1\right) = 0$.

**Step 2.** $\sin x = 0$ gives $0^\circ$, $180^\circ$, and $360^\circ$. The other factor needs $\cos x = 1$, which gives $0^\circ$ and $360^\circ$ again.

**Step 3.** That's 3 different solutions. None of them make $\cos x = 0$, so tangent is defined at each.

**Answer: (D) 3**
