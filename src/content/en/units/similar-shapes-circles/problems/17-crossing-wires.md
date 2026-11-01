---
order: 17
difficulty: hard
lesson: 01-similarity-tools
choices: ["3","4.5","4","6","9"]
answer: C
mistakes:
  A: "That's the answer for poles of 4 and 12. Use $\\frac{ab}{a + b}$ with 6 and 12."
  B: "That's half of the average of the two heights. Set up the similar triangles, or use the rule $\\frac{ab}{a + b}$."
  D: "That's the height of the shorter pole. The wires cross below the top of both poles."
  E: "That's the average of the two heights. The crossing has to be lower than the shorter pole."
verify: "(() => { const d = 10; const x = 6 / (6 / d + 12 / d); return Math.round((12 * x) / d); })()"
---

Two poles stand upright on flat ground, one 6 meters tall and the other 12 meters tall. A wire runs from the top of each pole to the foot of the other. How many meters above the ground do the wires cross?

## Hint

Let the crossing height be $h$. Set up similar triangles using each wire. What happens if you add the two ratios?

## Hint 2

You'll get $\frac{h}{12} + \frac{h}{6} = 1$.

## Solution

**Step 1.** Similar triangles give $\frac{h}{12} = \frac{x}{d}$ and $\frac{h}{6} = \frac{d - x}{d}$, where $d$ is the distance between the poles and $x$ is measured from the foot of the shorter pole.

**Step 2.** Adding them, the right sides add up to 1, so $\frac{h}{12} + \frac{h}{6} = 1$. That means $\frac{3h}{12} = 1$, and $h = 4$.

**Answer: (C) 4**

## Another way

Use the rule $\frac{ab}{a + b}$: $\frac{6 \times 12}{6 + 12} = \frac{72}{18} = 4$.
