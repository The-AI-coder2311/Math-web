---
title: "Circles With Other Shapes"
summary: Find the circle inside or around a triangle, work with circles that touch, and combine everything from this unit.
minutes: 12
---

A circle sits inside a right triangle with sides 6, 8, and 10, touching all three sides. How big is the circle? Now flip it: how big is the circle that passes through all three corners of that same triangle? These two circles are fixed by the triangle, and there are short ways to find both of them. Problems like these often come near the end of a contest, since they bring together everything you've learned about circles.

> **The big idea:** To combine circles with other shapes, **connect the centers**, and **draw radii to the points of contact**. These lines create right triangles, and the rest is the Pythagorean Theorem and area.

## Why area gives the inner circle

A circle inside a triangle, touching all three sides, is called the **incircle**. Its radius is called the **inradius**, $r$. Connect its center to each corner, which cuts the triangle into 3 smaller triangles. Each of those has one of the triangle's sides as its base, and each has a height of $r$, because a radius meets a tangent at a right angle.

So the triangle's area is:

$$\frac{1}{2} \times a \times r + \frac{1}{2} \times b \times r + \frac{1}{2} \times c \times r$$

That's $r$ times half of the perimeter. Half of the perimeter is called the **semiperimeter**, $s$, so **area = $r \times s$**.

## Example 1: The incircle of a right triangle

For the triangle with sides 6, 8, and 10, what's $r$?

**What do we know?** The area is $\frac{1}{2} \times 6 \times 8 = 24$. The semiperimeter is $(6 + 8 + 10) \div 2 = 12$.

**What's the question asking?** $24 = r \times 12$, so $r = 2$.

Try one. What's the inradius of a triangle with sides 5, 12, and 13?

<details class="check"><summary>Show the answer</summary>

The area is $\frac{1}{2} \times 5 \times 12 = 30$, and the semiperimeter is 15. So $r = 30 \div 15 = 2$.

</details>

## Example 2: The circle around a right triangle

A circle through all three corners of a triangle is called the **circumcircle**. For a right triangle, you already know a shortcut: the right angle sits on the circle, so the hypotenuse must be a diameter.

**How big is it?** For the 6-8-10 triangle, the diameter is 10, so the radius is 5. For a 5-12-13 triangle, the radius is half of 13, which is 6.5.

So the center of this circle is at the middle of the hypotenuse. This means that the midpoint of the hypotenuse is the same distance from all three corners.

## Example 3: Squares and circles inside each other

A circle fits exactly inside a square, and that square fits exactly inside a larger circle. What fraction of the larger circle's area does the smaller circle have?

**What's a friendly size?** The answer doesn't depend on the size, so let the square have sides of 2.

- The small circle has a diameter of 2, so its radius is 1, and its area is $\pi$.
- The large circle has the square's diagonal as a diameter. The diagonal is $2\sqrt{2}$, so the radius is $\sqrt{2}$, and the area is $2\pi$.

So the fraction is $\frac{1}{2}$. Choosing a size is a great trick for any problem that asks about a fraction or a ratio.

## Example 4: Two circles that touch

Two circles with radii 4 and 9 touch each other, and both rest on the same straight line. How far apart are the points where they touch the line?

![Two circles of radius 4 and 9 that touch each other, both resting on a straight line. A dashed helper line from the smaller center runs level to below the larger center, making a right triangle with legs 12 and 5 and hypotenuse 13.](/images/circles-common-tangent.svg)

**What helper lines do we want?** Connect the two centers. Since the circles touch, that line goes through the point where they touch, so it has a length of $4 + 9 = 13$.

**Where's the right triangle?** Draw radii down to the line. Both meet the line at right angles, so they're parallel. From the small center, draw a level line over to the large radius. Now there's a right triangle, with a vertical leg of $9 - 4 = 5$ and a hypotenuse of 13.

**What's the question asking?** The level leg equals the distance along the line. It's 12, by the 5-12-13 triple.

There's a formula, too: the distance is $2\sqrt{r_1 r_2}$, and here that's $2\sqrt{36} = 12$.

## Example 5: A contest-style question

Two walls of a room meet at a right angle. A circle on the floor touches both walls. It also passes through a spot that's 1 foot from one wall and 2 feet from the other. The circle could have two different sizes. What's the larger radius?

**What do we know?** A circle touching both walls has its center $r$ away from each wall, because a radius meets a tangent at a right angle. So picture the corner as a point on a grid: the center is $r$ over and $r$ up, and the spot is 1 over and 2 up.

**What's the helper line?** Draw the radius from the center to the spot, and make it the hypotenuse of a right triangle. Its legs are $r - 1$ and $r - 2$, and its hypotenuse is $r$:

$$(r - 1)^2 + (r - 2)^2 = r^2$$

**What's the plan?** Multiply it out, using the pattern from the [Algebra Toolkit](/pathway/algebra-toolkit/02-perfect-squares/). This gives $r^2 - 6r + 5 = 0$, which factors as $(r - 1)(r - 5) = 0$. So $r$ is 1 or 5, and the larger radius is 5.

**Check:** With $r = 5$, the legs are 4 and 3, and the hypotenuse is 5. It works. Harder problems like this one are usually made up of several small steps you already know, so look for the first step you can do.

<section data-box="deeper">

## Going deeper

For a right triangle, you know the radius of the circle around it: half of the hypotenuse. Here's the formula for any triangle.

**The formula:** A triangle with sides $a$, $b$, $c$ and area $A$ has a circle around it with radius:

$R = \frac{abc}{4A}$

**A harder one:** What's the radius of the circle around a triangle with sides 13, 14, and 15?

We know from [Heron's formula](/pathway/similar-shapes-circles/05-heron-and-inradius/) that the area is 84. So:

$R = \frac{13 \times 14 \times 15}{4 \times 84} = \frac{2730}{336} = \frac{65}{8}$

**Compare with the circle inside.** The same triangle has $r = 4$. The radius of the outer circle is always at least twice that of the inner one, and they're exactly 2 to 1 only for equilateral triangles. Here, $R$ is a little over 8.

**Test with a right triangle.** A 3-4-5 triangle has an area of 6, so $R = \frac{60}{24} = \frac{5}{2}$. That's half of the hypotenuse, as expected.

Try this. What's the radius of the circle around a triangle with sides 5, 5, and 6?

<details class="check"><summary>Show the answer</summary>

The area is 12. So $R = \frac{5 \times 5 \times 6}{4 \times 12} = \frac{150}{48} = \frac{25}{8}$.

</details>

</section>

<section data-box="traps">

## Common traps

**Mixing up the incircle and circumcircle.** Inside touches the sides, and outside passes through the corners. For a 6-8-10 triangle, the inradius is 2, and the circumradius is 5.

**Adding the radii in the wrong place.** In Example 4, the hypotenuse is the sum of the radii, but the vertical leg is their difference. Draw the triangle to see why.

**Thinking that the distance along the line is the distance between the centers.** The centers are 13 apart, but the touching points are only 12 apart. The centers are at different heights.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "inscribed," "circumscribed," "tangent to," or circles touching each other.

**First moves:** Connect the centers. Draw radii to the points of contact. Look for a right triangle.

**Ratios:** If the answer is a ratio, choose a friendly size.

**Time:** Up to three or four minutes. If you've got no helper line in mind after a minute, skip it and come back.

</section>

<section data-box="connections">

## Connections

This combines [tangents](/pathway/similar-shapes-circles/03-chords-and-tangents/), [inscribed angles](/pathway/similar-shapes-circles/02-inscribed-angles/), and [area two ways](/pathway/triangles/03-helper-lines/). [Coordinate Geometry](/pathway/coordinate-geometry/) offers another way to solve these.

</section>

<section data-box="summary">

## Remember this

- Inradius: area = $r$ × semiperimeter.
- Right triangle: the hypotenuse is a diameter of its circumcircle.
- Connect centers. The distance is the sum of the radii.
- Draw radii to tangent points.
- Choose a size when asked for a ratio.

</section>
