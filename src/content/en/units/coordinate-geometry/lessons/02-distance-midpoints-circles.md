---
title: "Distance, Midpoints and Circles"
summary: Find the distance between two points with the Pythagorean Theorem, find midpoints by averaging, and write a circle as an equation.
minutes: 10
---

A treasure map says to walk from the old well at $(1, 2)$ to the big oak at $(7, 10)$, and then to dig halfway between them. How far is the walk, and where do you dig? You don't need a ruler for this. Everything you need comes from two ideas you already know: the Pythagorean Theorem, and averages.

> **The big idea:** The **distance** between two points is the hypotenuse of a right triangle. The **midpoint** is the average of the coordinates. A **circle** is all of the points at the same distance from its center, and that gives it an equation.

## Why distance is the Pythagorean Theorem

Between any two points, draw a level line and an upright line, and you get a right triangle. For $(1, 2)$ and $(7, 10)$, the level leg is $7 - 1 = 6$, and the upright leg is $10 - 2 = 8$. So:

$$\text{distance}^2 = 6^2 + 8^2 = 100$$

The distance is 10. There's no need to memorize a separate formula, since this is the same theorem with the legs read from the coordinates.

**Why is the midpoint an average?** Halfway between $x = 1$ and $x = 7$ is $(1 + 7) \div 2 = 4$. Halfway between $y = 2$ and $y = 10$ is $(2 + 10) \div 2 = 6$. So you dig at $(4, 6)$. Going across and going up are independent of each other, so you can handle each one separately.

## Example 1: A distance

What's the distance from $(-2, 3)$ to $(3, 15)$?

**What are the legs?** The level leg is $3 - (-2) = 5$. Careful with the negative. The upright leg is $15 - 3 = 12$.

The distance is 13, by the 5-12-13 triple.

Try one. What's the distance from $(1, 1)$ to $(5, 4)$?

<details class="check"><summary>Show the answer</summary>

The legs are 4 and 3, so the distance is 5.

</details>

## Example 2: Working backwards from a midpoint

The midpoint of a segment is $(5, 1)$, and one end is at $(2, -3)$. Where's the other end?

**What's the plan?** Think of it as a jump. To get from the end to the midpoint, you go 3 across and 4 up. The other end is the same jump from the midpoint.

$$(5 + 3, \ 1 + 4) = (8, 5)$$

**Check:** The average of 2 and 8 is 5, and the average of $-3$ and 5 is 1. It works.

## Example 3: The equation of a circle

A circle with center $(a, b)$ and radius $r$ contains every point $(x, y)$ at distance $r$ from the center. Using the distance rule:

$$(x - a)^2 + (y - b)^2 = r^2$$

That's the Pythagorean Theorem again, with the radius as the hypotenuse.

**Reading an equation:** $(x - 3)^2 + (y + 1)^2 = 25$ has its center at $(3, -1)$ and a radius of 5. Careful with the signs: $y + 1$ means $y - (-1)$, so the $y$-coordinate of the center is $-1$. And the radius is the square root of 25, not 25.

**Is a point on it?** Test $(6, 3)$: $3^2 + 4^2 = 25$. Yes, it's on the circle.

## Example 4: Finding a missing coordinate

The point $(7, k)$ lies on a circle with center $(1, 2)$ and a radius of 10, and $k$ is greater than 2. What's $k$?

**What do we know?** The distance from the center has to be 10. The level leg is 6, so the upright leg must be 8, by the 6-8-10 triple. So $k - 2 = 8$, and $k = 10$.

**Why does $k$ have to be more than 2?** Without that detail, there'd be a second answer. Going 8 down from the center gives $k = -6$, which is also on the circle.

## Example 5: A contest-style question

How many grid points, with both coordinates being integers (whole numbers or their negatives), lie on the circle $x^2 + y^2 = 50$?

**What's the question really asking?** Which pairs of perfect squares add up to 50?

**What are the options?** The perfect squares up to 50 are 0, 1, 4, 9, 16, 25, 36, and 49. The pairs that work are $1 + 49$ and $25 + 25$.

**How many points does each one give?**

- $1 + 49$: $x$ and $y$ are 1 and 7, in either order and with either sign. That's 8 points, such as $(1, 7)$, $(-1, 7)$, and $(7, -1)$.
- $25 + 25$: $x$ and $y$ are both 5, with either sign. That's 4 points.

The total is $8 + 4 = 12$ points.

Symmetry does the work here. Once you find one point, reflections give you the others.

<section data-box="traps">

## Common traps

**Adding the legs.** The distance from $(1, 2)$ to $(7, 10)$ isn't $6 + 8 = 14$. That's the walking distance along grid lines. The straight line is the hypotenuse.

**Forgetting the signs.** In $(x - 3)^2 + (y + 1)^2 = 25$, the center is at $(3, -1)$, not $(3, 1)$ or $(-3, 1)$. The center's coordinates have the opposite signs from what's written.

**Using 25 as the radius.** The right side of the equation is the radius **squared**. So this circle has a radius of 5.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for coordinates with "distance," "midpoint," or "circle," or an equation with both $x^2$ and $y^2$.

**Look for triples:** Contest points tend to give legs like 3 and 4, 6 and 8, or 5 and 12.

**Use symmetry:** If a shape is centered at the origin, a single point usually comes with up to 7 reflected copies.

**Time:** About a minute.

</section>

<section data-box="connections">

## Connections

This uses [the Pythagorean Theorem](/pathway/triangles/02-pythagoras-why/) and [averages](/pathway/data-chance/01-the-total-trick/). Next, you'll find [areas on a grid](/pathway/coordinate-geometry/03-areas-on-a-grid/).

</section>

<section data-box="summary">

## Remember this

- Distance: the hypotenuse with legs from the coordinates.
- Midpoint: average the $x$s, and average the $y$s.
- Circle: $(x - a)^2 + (y - b)^2 = r^2$.
- The center's signs are the opposite of what's written.
- The right side is $r^2$, not $r$.

</section>
