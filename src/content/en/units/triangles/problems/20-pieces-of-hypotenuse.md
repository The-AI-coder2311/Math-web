---
order: 20
difficulty: hard
lesson: 04-similar-triangles
choices: ["7.5","9","10","12","16"]
answer: B
mistakes:
  A: "That's half of the short leg. Use the scale factor 0.6."
  C: "That's half of the leg of 20. Use similar triangles."
  D: "That's the height, $15 \\times 20 \\div 25$. The question asks for a piece of the hypotenuse."
  E: "That's the longer piece. The question asks for the shorter one."
verify: "(() => { const c = range(1, 40).find((x) => x * x === 15 * 15 + 20 * 20); return (15 * 15) / c; })()"
---

A right triangle has legs of 15 and 20. A height is drawn from the right angle to the hypotenuse. How long is the shorter piece of the hypotenuse?

## Hint

What's the hypotenuse? The small triangle next to the leg of 15 is similar to the whole triangle.

## Hint 2

The hypotenuse is 25. The small triangle has a hypotenuse of 15, so its scale factor is $\frac{15}{25}$.

## Solution

**Step 1.** The hypotenuse is 25.

**Step 2.** The small triangle is similar to the whole one, with its hypotenuse of 15 matching 25. The scale factor is 0.6.

**Step 3.** The short piece matches the short leg, 15, so it's $15 \times 0.6 = 9$.

**Answer: (B) 9**
