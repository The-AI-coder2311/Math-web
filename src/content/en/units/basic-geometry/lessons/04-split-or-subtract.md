---
title: "Split It or Subtract It"
summary: Find the area of an unusual shape in two ways. Split it into pieces you know, or subtract the part you don't want.
minutes: 9
---

A floor is shaped like the letter L. How much carpet do you need to cover it? There's no formula for an "L shape." But you don't need one, because you can see rectangles hiding in it. In fact, there are two different ways to find them, and getting the same answer both ways is a wonderful check.

> **The big idea:** Almost any shape can be broken down. Either **split it** into pieces you know how to measure and add them up, or draw a bigger shape around it and **subtract the part you don't want**.

## Why both methods work

Area is the amount of space inside, and space doesn't change when you draw a line through it. If you cut a shape into pieces, the pieces add up to the whole. Similarly, if a shape is a bigger rectangle with a corner missing, then its area is the rectangle minus the corner.

Here's the same L shape measured both ways.

![The same L shape shown two ways. On the left, it is split into a 5 by 2 rectangle and an 8 by 4 rectangle. On the right, it is an 8 by 6 rectangle with a 3 by 2 corner removed.](/images/geometry-split-or-subtract.svg)

- **Split:** a 5 by 2 rectangle on top of an 8 by 4 rectangle. That's $10 + 32 = 42$.
- **Subtract:** an 8 by 6 rectangle with a 3 by 2 corner missing. That's $48 - 6 = 42$.

They give the same answer, as they must.

## Example 1: A picture frame

A rectangular picture is 8 inches by 10 inches. It's surrounded by a frame that's 2 inches wide on every side. What's the area of the frame?

**What's the plan?** Splitting the frame into pieces takes a while, but subtracting is quick. The frame is the whole thing minus the picture.

**Draw it!** The frame adds 2 inches on **both** sides, so the outer rectangle is 12 by 14.

$$12 \times 14 - 8 \times 10 = 168 - 80 = 88$$

Try one. A 6 by 6 square has a 2 by 2 square cut out of the middle. What's the remaining area?

<details class="check"><summary>Show the answer</summary>

Subtract the part you don't want: $6 \times 6 - 2 \times 2 = 36 - 4 = 32$.

</details>

## Example 2: Perimeter of an L shape

What's the perimeter of the L shape above? You might expect to need all the pieces, but there's a neat trick.

**What do we know?** The sides of the notch face up and to the right. Imagine sliding them outward until they line up with the edges of the big rectangle. The notch's horizontal side slides up, and its vertical side slides right. They fill the gaps exactly.

So the L shape has the same perimeter as the 8 by 6 rectangle:

$$8 + 6 + 8 + 6 = 28$$

Cutting a corner out made the area smaller, but the perimeter didn't change. This is another reminder that area and perimeter measure different things.

## Example 3: Splitting a four-sided shape

A trapezoid has parallel top and bottom sides of 4 and 10, and a height of 6. What's its area?

**What's a helper line?** Draw a diagonal, from one top corner to the opposite bottom corner. It splits the shape into two triangles, and both have a height of 6.

- One triangle has a base of 4, so its area is $\frac{1}{2} \times 4 \times 6 = 12$.
- The other has a base of 10, so its area is $\frac{1}{2} \times 10 \times 6 = 30$.

The total is $12 + 30 = 42$. You didn't need a trapezoid formula, though there is one: average the two parallel sides, and multiply by the height. Check: the average of 4 and 10 is 7, and $7 \times 6 = 42$.

## Example 4: A shape on a grid

A shape on a grid has corners at $(0, 0)$, $(6, 0)$, $(6, 4)$, and $(2, 4)$. What's its area?

**What's the plan?** Draw a rectangle around it, from $(0, 0)$ to $(6, 4)$. Its area is $6 \times 4 = 24$.

**What don't we want?** Only one piece is missing: the triangle in the top left corner, with corners $(0, 0)$, $(2, 4)$, and $(0, 4)$. It has a base of 2 and a height of 4, so its area is $\frac{1}{2} \times 2 \times 4 = 4$.

$$24 - 4 = 20$$

Boxing in a tilted shape and subtracting the corners works for nearly any shape on a grid.

## Example 5: A contest-style question

A square with sides of 8 has a corner triangle cut off at each of its 4 corners. Each triangle has two legs of length 2, along the sides of the square. What's the area of the eight-sided shape that remains?

**What's the plan?** Subtract the part you don't want.

- The square's area is $8 \times 8 = 64$.
- Each corner triangle has an area of $\frac{1}{2} \times 2 \times 2 = 2$.
- There are 4 of them, for a total of $4 \times 2 = 8$.

$$64 - 8 = 56$$

Splitting up an octagon directly would take a lot of work. Subtracting takes three lines.

<section data-box="traps">

## Common traps

**Forgetting that a border goes on both sides.** For a 2-inch frame on an 8 by 10 picture, the outer size is 12 by 14, not 10 by 12. Sketching it makes that easy to see.

**Double-counting when splitting.** If your two rectangles overlap, you've counted the overlap twice. For the L shape, a 5 by 6 rectangle and an 8 by 4 rectangle overlap, so their total of 62 is too big. Make sure that your pieces don't overlap.

**Working out a missing side wrongly.** On an L shape, some side lengths aren't labeled. To find one, use the side that's across from it: the two short pieces on one side must add up to the long side across from them.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for shaded regions, frames, borders, or an unusual shape on a grid.

**Choose the shorter path:** Count the pieces in both methods. Often, subtracting needs fewer steps, especially when there's a big simple shape with small bits removed.

**Do both if you have time:** Different methods rarely give the same wrong answer, so a match gives you real confidence.

**Time:** One to three minutes.

</section>

<section data-box="connections">

## Connections

This builds on [triangle area](/pathway/basic-geometry/02-triangle-area/). In Level 2, [Circles & Solids](/pathway/circles-solids/) uses the same subtraction for shaded regions in circles.

</section>

<section data-box="summary">

## Remember this

- Split a shape into pieces, and add them up.
- Or draw a bigger shape around it, and subtract.
- Getting the same answer both ways is a great check.
- A frame adds its width on both sides.
- Notches at a corner don't change the perimeter.

</section>
