---
title: "Stronger Similarity Tools"
summary: Go beyond shadows. Find hidden similar triangles in right triangles and crossing lines, and use them to get lengths you couldn't find any other way.
minutes: 13
---

Two poles stand upright on flat ground, one 4 meters tall and the other 12 meters tall. A wire runs from the top of each pole to the bottom of the other. How high above the ground do the wires cross? Here's a strange fact: the answer doesn't depend on how far apart the poles are. You could move them closer or farther, and the wires would still cross at the same height. By the end of this lesson, you'll be able to explain why.

> **The big idea:** Similar triangles hide in places where lines are **parallel** or where a **right angle is split**. Find two matching angles, and write down the side ratio. Then **all** of the lengths become linked.

## Why matching angles are all you need

In [Level 2](/pathway/triangles/04-similar-triangles/), you learned that two matching angles make two triangles similar, since the third angle has to match too. The matching sides then all share one scale factor.

The hard part on contests is **finding** the triangles, because they usually overlap or are turned around. There are three patterns to look for:

- **A line parallel to one side of a triangle.** It cuts off a smaller, similar triangle.
- **Crossing lines between two parallel lines.** They form two similar triangles, tip to tip, like an hourglass.
- **A height drawn to the hypotenuse of a right triangle.** It splits the triangle into two smaller triangles, and all three are similar.

When triangles overlap, redraw them separately, turned the same way, with the matching corners in the same positions.

## Example 1: The hourglass

Two parallel lines are crossed by two lines that meet at a point $P$ between them. On the top line, the segment between the crossing lines is 4 long. On the bottom line, it's 10 long. The distance between the parallel lines is 7. How far is $P$ from the top line?

**What's similar?** The two triangles with their tips at $P$ have equal angles at $P$, and equal angles from the parallel lines. So they're similar, with a scale factor of $\frac{10}{4} = 2.5$.

**What's the plan?** Their heights have the same ratio. Split 7 in a ratio of 4 to 10, which means 14 parts in total. Each part is $7 \div 14 = 0.5$. So the top height is $4 \times 0.5 = 2$.

Try one. In triangle $ABC$, a line parallel to $BC$ crosses $AB$ at $D$ and $AC$ at $E$. If $AD = 3$, $DB = 6$, and $DE = 4$, what's $BC$?

<details class="check"><summary>Show the answer</summary>

The whole side $AB$ is 9, so the scale factor is $\frac{9}{3} = 3$. Then $BC = 3 \times 4 = 12$.

</details>

## Example 2: The height in a right triangle

A height drawn from the right angle splits the hypotenuse into pieces of 2 and 8. How long is the height?

**Why are they similar?** Look at the two small triangles. Each one has a right angle. Each one also shares an angle with the big triangle, so the angles of all three triangles match.

**What ratio do we get?** Compare the two small triangles. In the first, the height is the long leg, and 2 is the short leg. In the second, 8 is the long leg, and the height is the short leg. So the ratios match:

$$\frac{h}{2} = \frac{8}{h}$$

That gives $h \times h = 2 \times 8 = 16$, so $h = 4$. In words, **the height squared equals the product of the two pieces**.

## Example 3: The poles

Now for the opening question. The poles are 4 and 12 meters tall. Call the distance between them $d$, and let the wires cross at height $h$.

**What's similar?** Use the left wire, which rises to the tall pole. A small triangle has height $h$ and base $x$, measured from the left pole's foot. The large one has height 12 and base $d$. So $\frac{h}{12} = \frac{x}{d}$.

**And the other wire?** Measured from the right pole's foot, the base is $d - x$, so $\frac{h}{4} = \frac{d - x}{d}$.

**What happens when we add them?** The right sides add up to $\frac{x + d - x}{d} = 1$. So:

$$\frac{h}{12} + \frac{h}{4} = 1$$

That means $\frac{4h}{12} = 1$, so $h = 3$. The $d$ canceled out, which is why the distance doesn't matter! For poles of height $a$ and $b$, the height is $\frac{ab}{a + b}$.

## Example 4: Using area

Two similar triangles have areas of 16 and 49. The smaller one has a perimeter of 20. What's the perimeter of the larger one?

**What's the scale factor?** Areas scale by the square of the scale factor. So the scale factor is $\frac{7}{4}$, since $7^2 = 49$ and $4^2 = 16$.

**What's the question asking?** A perimeter is a length, so it scales by $\frac{7}{4}$ itself: $20 \times \frac{7}{4} = 35$.

Keep this straight: lengths scale by $k$, areas scale by $k^2$, and volumes scale by $k^3$.

<section data-box="deeper">

## Going deeper

When the two diagonals of a trapezoid cross, they create four triangles, and all of their areas follow from a single ratio.

**A harder one:** A trapezoid has parallel sides of 2 and 6. Its diagonals cross, making four triangles. The triangle on the short side has an area of 3. What's the area of the whole trapezoid?

**The top and bottom triangles are similar**, since the parallel sides make matching angles equal. Their sides are in a ratio of 2 to 6, which is 1 to 3. Areas scale by the square, so the bottom one has an area of $3 \times 9 = 27$.

**What about the side triangles?** The top triangle and a side triangle share a height, and their bases are the two parts of a diagonal, in a ratio of 1 to 3. So each side triangle has 3 times the top's area, which is 9.

**Add them up:** $3 + 9 + 9 + 27 = 48$.

**The pattern:** With a ratio of 1 to $k$, the areas are in the ratio $1$, $k$, $k$, and $k^2$. Both side triangles are always equal.

Try this. A trapezoid has parallel sides of 3 and 6, and the top triangle has an area of 4. What's the area of the whole trapezoid?

<details class="check"><summary>Show the answer</summary>

The ratio is 1 to 2, so the areas are 4, 8, 8, and 16. The total is 36.

</details>

</section>

<section data-box="traps">

## Common traps

**Pairing the wrong sides.** In an hourglass, the triangles are turned around, so the left side of one matches the right side of the other. Redraw them turned the same way before you write a ratio.

**Using a piece instead of the whole side.** With a parallel line in a triangle, compare $AD$ with all of $AB$, not with $DB$. The scale factor for $AD = 3$ and $DB = 6$ is 3, not 2.

**Using the area ratio for lengths.** If the areas are 16 and 49, then the perimeters aren't in a ratio of 16 to 49. Take the square root first.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for parallel lines, a height in a right triangle, or lines crossing inside a shape.

**Mark equal angles:** Use a small arc for one pair and a double arc for another. Once a pair of triangles has two matches, you're ready.

**The height rule is a time-saver:** Height squared equals the product of the pieces.

**Time:** Two to three minutes. If a figure has many lengths and few angles, that often points to similar triangles.

</section>

<section data-box="connections">

## Connections

This deepens [Similar Triangles](/pathway/triangles/04-similar-triangles/) from Level 2. Next, you'll see how [circles create equal angles](/pathway/similar-shapes-circles/02-inscribed-angles/), which leads to even more similar triangles.

</section>

<section data-box="summary">

## Remember this

- Two matching angles mean that two triangles are similar.
- Look for parallel lines, hourglasses, and heights in right triangles.
- Height² = the product of the hypotenuse pieces.
- Lengths scale by $k$, and areas by $k^2$.
- Crossing wires: height = $\frac{ab}{a + b}$.

</section>
