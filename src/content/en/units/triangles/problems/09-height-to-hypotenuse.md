---
order: 16
difficulty: hard
lesson: 03-helper-lines
choices: ["4","4.8","5","5.2","6"]
answer: B
mistakes:
  A: "That's half of 8. Use the area in two ways."
  C: "That's half of the hypotenuse, which is the distance to its midpoint. The height is a little shorter."
  D: "Use the area in two ways: $5h = 24$."
  E: "That's a leg. The height has to be shorter than either leg."
verify: "(() => { const c = range(1, 20).find((x) => x * x === 6 * 6 + 8 * 8); const area = (6 * 8) / 2; return (2 * area) / c; })()"
---

A right triangle has legs of length 6 and 8. A line is drawn from the right angle straight to the hypotenuse, meeting it at a right angle. How long is this line?

## Hint

You can find the triangle's area in two different ways, using two different bases. Both have to give the same area.

## Hint 2

The area is 24. Using the hypotenuse as the base: $\frac{1}{2} \times 10 \times h = 24$.

## Solution

**Step 1.** The hypotenuse is 10, since $6^2 + 8^2 = 10^2$.

**Step 2.** Using the legs as base and height, the area is $\frac{1}{2} \times 6 \times 8 = 24$.

**Step 3.** Now use the hypotenuse as the base, with the line (call it $h$) as the height. The area must still be 24:

$$\frac{1}{2} \times 10 \times h = 24$$

So $5h = 24$, and $h = 24 \div 5 = 4.8$.

**Answer: (B) 4.8**
