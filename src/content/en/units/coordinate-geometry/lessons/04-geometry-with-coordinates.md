---
title: "Solving Geometry With Coordinates"
summary: When a geometry problem feels stuck, put it on a grid. Choose smart coordinates, then let algebra find the answer. Learn reflections and rotations too.
minutes: 10
---

A square has sides of 4. A line runs from one corner to the middle of a far side, and it crosses a diagonal of the square. What's the area of the small triangle that's formed? You could hunt for similar triangles, and that would work. But here's a different approach that needs no cleverness at all: put the square on a grid, write equations for the lines, and solve.

> **The big idea:** Any geometry problem can be turned into algebra. **Place the figure on a grid so that the numbers stay simple**, write down the points and lines, and calculate. It's a dependable option when you can't see a clever trick.

## Why placement matters

You get to choose where the figure goes, since moving it doesn't change its lengths or areas. So choose well:

- Put a corner at the origin, $(0, 0)$.
- Run the sides along the axes.
- If a midpoint matters, use even side lengths, so the midpoint has whole-number coordinates.

For the square with sides of 4, the corners are $A(0, 0)$, $B(4, 0)$, $C(4, 4)$, and $D(0, 4)$. That's all you need for a clean setup.

## Example 1: The opening problem

Let $M$ be the middle of side $BC$, which is $(4, 2)$. The line from $A$ to $M$ crosses the diagonal $BD$ at $P$. What's the area of triangle $ABP$?

**What are the lines?** Line $AM$ goes through the origin with a slope of $\frac{2}{4}$, so $y = \frac{x}{2}$. Line $BD$ goes from $(4, 0)$ to $(0, 4)$, so $y = -x + 4$.

**Where do they meet?** $\frac{x}{2} = -x + 4$ gives $x = \frac{8}{3}$, and then $y = \frac{4}{3}$.

**What's the area?** Triangle $ABP$ has a level base of 4 along the bottom, and its height is the $y$-coordinate of $P$:

$$\frac{1}{2} \times 4 \times \frac{4}{3} = \frac{8}{3}$$

Try one. Using the same square, where's the center?

<details class="check"><summary>Show the answer</summary>

It's the midpoint of a diagonal, like $AC$. The average of $(0, 0)$ and $(4, 4)$ is $(2, 2)$.

</details>

## Example 2: Reflections

A **reflection** flips a point over a line, like a mirror. Here are the common ones:

| Reflect over | $(x, y)$ becomes | $(3, 4)$ becomes |
|---|---|---|
| The $x$-axis | $(x, -y)$ | $(3, -4)$ |
| The $y$-axis | $(-x, y)$ | $(-3, 4)$ |
| The line $y = x$ | $(y, x)$ | $(4, 3)$ |

**Why does $y = x$ swap the coordinates?** That line is the diagonal mirror between the two axes, so being a certain distance across becomes being that distance up.

**Shortest path puzzle:** You walk from $A(1, 3)$ to the $x$-axis, and then to $B(7, 5)$. What's the shortest route? Reflect $B$ across the axis to $B'(7, -5)$. Any path from $A$ to the axis and on to $B$ has the same length as a path from $A$ to the axis and on to $B'$. The shortest of those is a straight line from $A$ to $B'$. Its legs are 6 and 8, so the shortest route is 10.

## Example 3: Rotations and translations

A **translation** slides every point by the same amount. A **rotation** by 90° around the origin, going counterclockwise, sends $(x, y)$ to $(-y, x)$.

**Why?** Take the point $(3, 1)$, with its small right triangle back to the origin. Turning the triangle by 90° makes the 3-long leg stand upright, and the 1-long leg points to the left. So the point lands at $(-1, 3)$. That matches the rule.

**Fourth corner of a parallelogram:** A parallelogram has corners $A(0, 0)$, $B(4, 1)$, and $C(6, 5)$, in that order. Where's $D$? Opposite sides are the same slide. From $B$ to $A$ is a slide of $-4$ across and $-1$ up. Applying that same slide to $C$ gives $D = (2, 4)$.

## Example 4: Distance from a point to a line

How far is the origin from the line $3x + 4y = 12$?

**What are the corners?** The line crosses the axes at $(4, 0)$ and $(0, 3)$. With the origin, that's a right triangle with legs of 4 and 3, and a hypotenuse of 5.

**What's the plan?** Find the area in [two different ways](/pathway/triangles/03-helper-lines/). The area is $\frac{1}{2} \times 4 \times 3 = 6$. Using the hypotenuse as the base, $\frac{1}{2} \times 5 \times h = 6$, so $h = 2.4$.

The shortest distance to a line is always measured at a right angle, so the distance is 2.4.

## Example 5: A contest-style question

Rectangle $ABCD$ has $AB = 8$ and $BC = 6$. Point $E$ is on side $CD$, with $CE = 2$. Lines $AE$ and $BD$ cross at $F$. What's the height of $F$ above side $AB$?

**Place it.** Let $A(0, 0)$, $B(8, 0)$, $C(8, 6)$, and $D(0, 6)$. Then $E$ is 2 to the left of $C$, so $E = (6, 6)$.

**What are the lines?** Line $AE$ has a slope of 1, so $y = x$. Line $BD$ goes from $(8, 0)$ to $(0, 6)$, with a slope of $-\frac{3}{4}$, so $y = -\frac{3}{4}x + 6$.

**Where do they meet?** $x = -\frac{3}{4}x + 6$ gives $\frac{7}{4}x = 6$, so $x = \frac{24}{7}$. Since $y = x$, the height is $\frac{24}{7}$.

The numbers aren't pretty, but you didn't have to spot any trick to get there.

<section data-box="traps">

## Common traps

**A placement that makes things harder.** Putting the center of a square at the origin can give messy halves. Use corners at the origin unless symmetry helps a lot.

**Wrong direction for a rotation.** Counterclockwise and clockwise give different results. Test with a simple point, like $(1, 0)$, which goes to $(0, 1)$ under a counterclockwise quarter turn.

**Wrong corner order.** In a parallelogram $ABCD$, $B$ and $D$ are opposite corners. If you take $C$ as being next to $A$ instead, you get a different point.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** There are midpoints, lines crossing inside a rectangle, or a figure where you can't find similar triangles after a minute or so.

**When to use it:** It's your dependable backup. It may take a little longer than a clever trick, but it almost never gets stuck.

**Time:** Two to four minutes. It's worth it for a problem that would otherwise be skipped.

**Using the answer choices:** If the choices include fractions with a certain bottom number, it's a clue that you're on the right track when that number appears.

</section>

<section data-box="connections">

## Connections

This combines every lesson in this unit with [similar triangles](/pathway/similar-shapes-circles/01-similarity-tools/). Level 4's trigonometry also relies on placing things on a grid.

</section>

<section data-box="summary">

## Remember this

- Stuck? Put the figure on a grid.
- Put a corner at the origin, with sides along the axes.
- Reflect over $y = x$: swap the coordinates.
- Quarter turn counterclockwise: $(x, y)$ goes to $(-y, x)$.
- Shortest path via a line: reflect a point.

</section>
