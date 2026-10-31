---
order: 9
difficulty: hard
choices: [4, 4.8, 5, 5.2, 6]
answer: B
verify: "(() => { const c = range(1, 20).find((x) => x * x === 6 * 6 + 8 * 8); const area = (6 * 8) / 2; return (2 * area) / c; })()"
---

A right triangle has legs of length 6 and 8. A line is drawn from the right angle straight to the hypotenuse, meeting it at a right angle. How long is this line?

## Hint

You can find the triangle's area in two different ways, using two different bases. Both have to give the same area.

## Solution

**Step 1.** The hypotenuse is 10, since $6^2 + 8^2 = 10^2$.

**Step 2.** Using the legs as base and height, the area is $\frac{1}{2} \times 6 \times 8 = 24$.

**Step 3.** Now use the hypotenuse as the base, with the line (call it $h$) as the height. The area must still be 24:

$$\frac{1}{2} \times 10 \times h = 24$$

So $5h = 24$, and $h = 24 \div 5 = 4.8$.

**Answer: (B) 4.8**
