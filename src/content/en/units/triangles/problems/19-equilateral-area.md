---
order: 19
difficulty: hard
lesson: 02-pythagoras-why
choices: ["$8\\sqrt{3}$","$16\\sqrt{3}$","32","$32\\sqrt{3}$","64"]
answer: B
mistakes:
  A: "That uses half of the height. The height is $4\\sqrt{3}$, and half of the base is 4."
  C: "That uses a height of 8, which is a slanted side. Find the real height."
  D: "That forgets the one half in the area formula."
  E: "That's a square with sides of 8."
verify: "(() => { const h = Math.sqrt(8 * 8 - 4 * 4); const area = (8 * h) / 2; return Math.abs(area - 16 * Math.sqrt(3)) < 1e-9 ? '16\\\\sqrt{3}' : area; })()"
---

What is the area of an equilateral triangle with sides of 8?

## Hint

Draw the height. What does it do to the base?

## Hint 2

It cuts the base into 4 and 4. The height follows from $h^2 + 4^2 = 8^2$.

## Solution

**Step 1.** The height cuts the base in half, so $h^2 = 64 - 16 = 48$, and $h = 4\sqrt{3}$.

**Step 2.** The area is $\frac{1}{2} \times 8 \times 4\sqrt{3} = 16\sqrt{3}$.

**Answer: (B) $16\sqrt{3}$**
