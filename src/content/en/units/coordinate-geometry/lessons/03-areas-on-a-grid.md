---
title: "Areas on a Grid"
summary: Find the area of a tilted shape by boxing it in, or by using a neat pattern called the shoelace method.
minutes: 10
---

A triangle has corners at $(0, 0)$, $(5, 1)$, and $(2, 4)$. What's its area? None of its sides is level, so it's hard to see a base or a height. You could try to find a slanted base and a slanted height, but that gets messy quickly. There's a far easier way, and it only takes a moment of thinking outside the triangle.

> **The big idea:** To find the area of a tilted shape, **draw a box around it and subtract the corners**. Or use the **shoelace method**, which turns the coordinates directly into an area.

## Start with the easy case

If a triangle has one level side, then its area is easy. A triangle with corners $(1, 1)$, $(5, 1)$, and $(3, 6)$ has a level base from $x = 1$ to $x = 5$, which is 4 long. Its height is the difference in $y$: $6 - 1 = 5$. So the area is $\frac{1}{2} \times 4 \times 5 = 10$.

Notice that where the top is, from side to side, doesn't matter at all. Only how high it is matters.

## Why boxing in works

Here's the tilted triangle, in a box:

![A tilted triangle with corners (0, 0), (5, 1) and (2, 4), drawn inside a box 5 wide and 4 tall. The box has area 20. Three right triangles in the corners of the box have areas 2.5, 4.5 and 4. Subtracting leaves an area of 9 for the tilted triangle.](/images/coordinate-box-subtract.svg)

The space inside the box is made up of the triangle and three right triangles in the corners. Right triangles with level and upright legs are easy to measure.

- The box is 5 by 4, so its area is 20.
- The bottom triangle has legs of 5 and 1, so its area is 2.5.
- The right triangle has legs of 3 and 3, so its area is 4.5.
- The left triangle has legs of 2 and 4, so its area is 4.

So the tilted triangle has an area of $20 - 2.5 - 4.5 - 4 = 9$. This is [split or subtract](/pathway/basic-geometry/04-split-or-subtract/) from Level 1, used on a grid.

Try one. What's the area of the triangle with corners $(0, 0)$, $(4, 0)$, and $(1, 3)$?

<details class="check"><summary>Show the answer</summary>

It has a level base of 4, and its height is 3. So the area is $\frac{1}{2} \times 4 \times 3 = 6$.

</details>

## Example 1: The shoelace method

There's a method that works on any shape, as long as its sides don't cross each other. List the corners in order around the shape, and repeat the first at the end.

For $(0, 0)$, $(5, 1)$, $(2, 4)$, $(0, 0)$:

| Corner | $x$ | $y$ |
|---|---|---|
| 1 | 0 | 0 |
| 2 | 5 | 1 |
| 3 | 2 | 4 |
| 1 again | 0 | 0 |

Multiply along the diagonals going **down and to the right**, and add: $0 \times 1 + 5 \times 4 + 2 \times 0 = 20$.

Multiply along the diagonals going **down and to the left**, and add: $0 \times 5 + 1 \times 2 + 4 \times 0 = 2$.

The area is half of the difference: $(20 - 2) \div 2 = 9$. That's the same answer as before! The crossing lines look like the laces of a shoe, which is where the name comes from.

## Example 2: A four-sided shape

What's the area of the shape with corners $(0, 0)$, $(3, 0)$, $(4, 2)$, and $(1, 3)$, in that order?

**Down and to the right:** $0 \times 0 + 3 \times 2 + 4 \times 3 + 1 \times 0 = 18$.

**Down and to the left:** $0 \times 3 + 0 \times 4 + 2 \times 1 + 3 \times 0 = 2$.

**Half of the difference:** $(18 - 2) \div 2 = 8$.

Boxing it in would've worked too, with more corners to subtract. For shapes with 4 or more sides, the shoelace method usually wins.

## Example 3: A region between lines

What's the area of the region bounded by $y = 2x$, $y = -x + 6$, and the $x$-axis?

**Find the corners.** The two lines meet where $2x = -x + 6$, which gives $x = 2$ and $y = 4$. The line $y = 2x$ meets the $x$-axis at $(0, 0)$. The line $y = -x + 6$ meets it at $(6, 0)$.

**What's the shape?** It's a triangle with a level base from 0 to 6, and a height of 4.

$$\frac{1}{2} \times 6 \times 4 = 12$$

So the first job in a region problem is to find the corners. After that, it's a problem you've already solved.

## Example 4: A contest-style question

A square has corners at $(0, 0)$, $(4, 0)$, $(4, 4)$, and $(0, 4)$. A triangle inside it has corners at $(0, 0)$, $(4, 1)$, and $(1, 4)$. What fraction of the square does the triangle cover?

**What's the plan?** The square is already a box, so subtract the corners.

- The bottom right triangle has legs of 4 and 1, so its area is 2.
- The top left triangle has legs of 1 and 4, so its area is 2.
- The top right triangle has legs of 3 and 3, so its area is 4.5.

The triangle has an area of $16 - 2 - 2 - 4.5 = 7.5$. As a fraction of 16, that's $\frac{7.5}{16}$, or $\frac{15}{32}$.

<section data-box="traps">

## Common traps

**Using a slanted side as the height.** For a triangle with corners $(0, 0)$, $(4, 0)$, and $(1, 3)$, the height is 3, the difference in $y$. It isn't the length of a slanted side.

**Corners out of order.** The shoelace method needs the corners to go in order around the shape. If they jump across it, the answer is wrong. A quick sketch makes the order clear.

**Forgetting to halve.** Shoelace gives double the area before the last step. Also, drop any negative sign in the difference, since an area is never negative. The sign only tells you which direction you went around.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for a list of coordinates, or lines that close off a region.

**Check for a level side first:** It's the quickest case. Next, try boxing in. Use shoelace for shapes with 4 or more sides.

**Get the same answer twice:** Boxing in and shoelace are independent, so if they match, you can be confident.

**Time:** One to three minutes.

</section>

<section data-box="connections">

## Connections

This uses [split or subtract](/pathway/basic-geometry/04-split-or-subtract/) and [crossing lines](/pathway/coordinate-geometry/01-lines-and-slopes/). Next, you'll use [coordinates to solve geometry problems](/pathway/coordinate-geometry/04-geometry-with-coordinates/).

</section>

<section data-box="summary">

## Remember this

- Level base? Area = half of base × the difference in $y$.
- Tilted? Draw a box, and subtract the corners.
- Shoelace: down-right minus down-left, then halve.
- Keep the corners in order, and repeat the first.
- In a region problem, find the corners first.

</section>
