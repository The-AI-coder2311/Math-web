---
title: "Area Formulas and Applications"
summary: Use one half ab sin C, the circumradius, and trig to find areas and lengths in geometry problems.
minutes: 13
---

A triangle has two sides of length 6 and 10, and the angle between them is $30^\circ$. What is its area? "Half of base times height" needs a height, and nobody gave you one. But the angle tells you exactly how tall the triangle is. In this lesson, you'll turn that observation into a formula, and then use it to unlock regular polygons, the circumradius, the inradius, and quadrilaterals.

> **The big idea:** The area of a triangle with sides $a$ and $b$ and included angle $C$ is $\frac{1}{2}ab\sin C$. Combined with the Law of Sines and $K = rs$, it connects area to every other measurement of a triangle.

## Why one half ab sin C works

Put side $b$ along the bottom as the base. Side $a$ leans up from one end of it at angle $C$. The height is how far the far end of side $a$ rises above the base, which is $a\sin C$, because sine is the vertical part of a slanted length.

So the area is $\frac{1}{2} \cdot b \cdot a\sin C$. If $C$ is obtuse, the height is still $a\sin C$, because $\sin C = \sin(180^\circ - C)$, and the outside angle gives the same height. The formula doesn't care whether the triangle is acute or obtuse.

**A quick consequence:** For fixed sides $a$ and $b$, the area is largest when $\sin C = 1$, so when $C = 90^\circ$. Contest problems that ask for the largest possible area with two given sides are usually asking for a right angle.

## Three more area formulas

Every triangle with sides $a, b, c$, area $K$, circumradius $R$, inradius $r$, and semiperimeter $s = \frac{a + b + c}{2}$ satisfies:

- $K = \frac{abc}{4R}$. This comes from replacing $\sin C$ with $\frac{c}{2R}$ (Law of Sines) in $\frac{1}{2}ab\sin C$.
- $K = rs$. Split the triangle into three triangles from the center of its inscribed circle. Each has height $r$, and their bases add up to the perimeter.
- $K = \sqrt{s(s-a)(s-b)(s-c)}$, which is Heron's formula from Level 3.

These let you go from any one measurement to the others.

## Example 1: The opening question

Find the area of a triangle with sides 6 and 10 and a $30^\circ$ angle between them.

$$K = \frac{1}{2} \cdot 6 \cdot 10 \cdot \sin 30^\circ = 30 \cdot \frac{1}{2} = 15$$

Try one yourself. A triangle has sides 4 and 9 with a $150^\circ$ angle between them. What's its area?

<details class="check"><summary>Show the answer</summary>

Since $\sin 150^\circ = \sin 30^\circ = \frac{1}{2}$, the area is $\frac{1}{2} \cdot 4 \cdot 9 \cdot \frac{1}{2} = 9$. The obtuse angle gives the same area as a $30^\circ$ angle would.

</details>

## Example 2: Regular polygons

A regular 12-sided polygon is drawn inside a circle of radius 4, with all corners on the circle. Find its area.

**What's a smaller piece we understand?** Draw a line from the center to each corner. That cuts the polygon into 12 identical triangles. Each has two sides of length 4 (radii) with an angle of $\frac{360^\circ}{12} = 30^\circ$ between them.

Each triangle has area $\frac{1}{2} \cdot 4 \cdot 4 \cdot \sin 30^\circ = 4$. So the polygon has area $12 \times 4 = 48$.

In general, a regular $n$-gon inscribed in a circle of radius $R$ has area $\frac{n}{2}R^2\sin\frac{360^\circ}{n}$. As $n$ grows, this gets closer and closer to the circle's area $\pi R^2$.

## Example 3: The 13-14-15 triangle

The triangle with sides 13, 14, and 15 appears on contests constantly. Find its circumradius.

**Area first.** The semiperimeter is 21, and Heron's formula gives

$$K = \sqrt{21 \cdot 8 \cdot 7 \cdot 6} = \sqrt{7056} = 84$$

**Then the circumradius.** From $K = \frac{abc}{4R}$:

$$R = \frac{13 \cdot 14 \cdot 15}{4 \cdot 84} = \frac{2730}{336} = \frac{65}{8}$$

**And the inradius,** for free: $r = \frac{K}{s} = \frac{84}{21} = 4$.

## Example 4: Working backward from the area

Two sides of a triangle are 8 and 15, and its area is $30\sqrt{3}$. Find every possible length of the third side.

**What does the area tell us?** $\frac{1}{2} \cdot 8 \cdot 15 \cdot \sin C = 30\sqrt{3}$, so $60\sin C = 30\sqrt{3}$ and $\sin C = \frac{\sqrt{3}}{2}$.

**How many angles have that sine?** Two: $C = 60^\circ$ and $C = 120^\circ$. Both are possible, so there are two triangles.

**Use the Law of Cosines for each.** With $\cos C = \frac{1}{2}$, the third side squared is $64 + 225 - 120 = 169$, so it's 13. With $\cos C = -\frac{1}{2}$, it's $64 + 225 + 120 = 409$, so the side is $\sqrt{409}$.

A contest that asks for "the sum of all possible values" of the third side squared expects $169 + 409 = 578$.

<section data-box="deeper">

## Going deeper

**Quadrilaterals.** If a quadrilateral's diagonals have lengths $p$ and $q$ and cross at angle $\theta$, its area is $\frac{1}{2}pq\sin\theta$. To see why, notice the diagonals cut the quadrilateral into four triangles, each with two sides along the diagonals and angle $\theta$ or $180^\circ - \theta$ between them. Both angles have the same sine, so the four areas add up to $\frac{1}{2}\sin\theta$ times the products of the pieces, which combine into $pq$.

**A harder one:** Find the inradius of a triangle with sides 7, 8, and 13.

<details class="check"><summary>Show the answer</summary>

From the last lesson, the angle between sides 7 and 8 is $120^\circ$. So $K = \frac{1}{2} \cdot 7 \cdot 8 \cdot \frac{\sqrt{3}}{2} = 14\sqrt{3}$. The semiperimeter is 14, so $r = \frac{K}{s} = \sqrt{3}$.

</details>

</section>

<section data-box="traps">

## Common traps

**Using an angle that isn't between the two sides.** The formula needs the angle **formed by** sides $a$ and $b$. If the given angle is opposite one of them, find the included angle first.

**Missing the obtuse case.** When you solve $\sin C = k$ for a triangle's angle, both $C$ and $180^\circ - C$ may work. Check that both leave a valid triangle.

**Mixing $r$ and $R$.** The inradius $r$ goes with $K = rs$; the circumradius $R$ goes with $K = \frac{abc}{4R}$. Write the formula down before plugging in.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Two sides with an angle, a regular polygon in a circle, or a problem that mentions an inscribed or circumscribed circle.

**Area is a bridge.** If the problem gives sides and asks for $R$ or $r$, compute the area first and then divide.

**Memorize the stars.** The 13-14-15 triangle (area 84) and triangles with a $60^\circ$ or $120^\circ$ angle like 5-7-8 and 7-8-13 show up over and over.

</section>

<section data-box="connections">

## Connections

This lesson uses [the Law of Sines and Cosines](/pathway/trigonometry/03-law-of-sines-cosines/) and extends [Heron's formula and the inscribed circle](/pathway/similar-shapes-circles/05-heron-and-inradius/). The area formula $\frac{1}{2}ab\sin C$ also explains the [shoelace method](/pathway/coordinate-geometry/03-areas-on-a-grid/), and it returns in [complex numbers in geometry](/pathway/complex-numbers/04-complex-geometry/).

</section>

<section data-box="summary">

## Remember this

- Area $= \frac{1}{2}ab\sin C$, with $C$ the angle between sides $a$ and $b$.
- $K = \frac{abc}{4R}$ and $K = rs$.
- A regular $n$-gon in a circle of radius $R$ splits into $n$ triangles with apex angle $\frac{360^\circ}{n}$.
- Given an area and two sides, the included angle may be acute or obtuse.
- The 13-14-15 triangle has area 84, inradius 4, and circumradius $\frac{65}{8}$.

</section>
