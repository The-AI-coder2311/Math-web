---
title: "Helper Lines and Area Two Ways"
summary: Draw a height to create a right triangle, find a triangle's area two different ways, and use the triangle inequality.
minutes: 9
---

A triangle has sides of 13, 13, and 10. What's its area? There's no height in sight, and no right angle mentioned. It looks as if you don't have enough information. But one extra line, drawn in the right place, turns this into two simple right triangles.

> **The big idea:** The most useful move in geometry is to **draw a line that isn't there**. Heights create right triangles. And since area stays the same no matter which side you call the base, computing it **two ways** gives you a new equation.

## Why heights help

The area of a triangle needs a base and a height. The Pythagorean Theorem needs a right angle. Drawing a height gives you both at once: it's the height for the area formula, and it creates right angles for Pythagoras.

![An isosceles triangle with two sides of 13 and a base of 10. A dashed helper line from the top to the base has height 12 and cuts the base into 5 and 5, making two right triangles.](/images/triangles-isosceles-height.svg)

In an isosceles triangle, the height from the top lands exactly in the middle of the base. Why? If you fold the triangle in half along that line, the two equal sides match up, so the two pieces of the base must match as well.

## Example 1: The opening triangle

**What do we know?** The sides are 13, 13, and 10.

**Draw the height.** It cuts the base into 5 and 5, and makes two right triangles, each with a leg of 5 and a hypotenuse of 13.

**Find the height:** $h^2 = 13^2 - 5^2 = 169 - 25 = 144$, so $h = 12$. (It's the 5-12-13 triple.)

**Find the area:** $\frac{1}{2} \times 10 \times 12 = 60$.

Try one yourself. An isosceles triangle has sides of 10, 10, and 12. What's its area?

<details class="check"><summary>Show the answer</summary>

The height cuts the 12 into 6 and 6. Then $h^2 = 100 - 36 = 64$, so $h = 8$. The area is $\frac{1}{2} \times 12 \times 8 = 48$.

</details>

## Example 2: Area two ways

A right triangle has legs of 6 and 8. How long is the height drawn from the right angle down to the hypotenuse?

**What do we know?** The hypotenuse is 10, by the 6-8-10 triple.

**What's the trick?** Find the area in two different ways, using two different bases.

- With the legs as base and height, the area is $\frac{1}{2} \times 6 \times 8 = 24$.
- With the hypotenuse as base, the area is $\frac{1}{2} \times 10 \times h$.

These have to be equal, so $5h = 24$, and $h = 24 \div 5 = 4.8$.

**Does this make sense?** The height has to be shorter than either of the legs, since it's the shortest way across. And 4.8 is less than 6.

## Example 3: Comparing areas with the same height

In triangle $ABC$, point $D$ is on side $BC$, with $BD = 3$ and $DC = 5$. The area of triangle $ABD$ is 12. What's the area of triangle $ADC$?

**What do we know?** Both triangles have their top at $A$, so they have the **same height** to line $BC$.

**What's the shortcut?** With the same height, their areas compare the same way as their bases. The bases are in a ratio of 3 to 5, so the areas are too. If 3 boxes hold 12, then one box holds 4, and 5 boxes hold 20.

The area of triangle $ADC$ is 20. You never needed the actual height.

## Example 4: Which triangles can exist?

Could a triangle have sides of 2, 3, and 6? Try to picture it. The sides of 2 and 3 can't stretch far enough to connect across a side of 6.

The **triangle inequality** says that any two sides must add up to **more than** the third side. The easiest way to test it is to add the two smallest sides, and compare with the largest.

**How to use it:** A triangle has sides of 5 and 9, and a third side that's a whole number. How many possible lengths are there for the third side?

- It has to be less than $5 + 9 = 14$.
- It has to be more than $9 - 5 = 4$.

So the third side is from 5 to 13, which makes 9 possible whole numbers.

## Example 5: A contest-style question

A trapezoid has parallel sides of 6 and 14, and its two slanted sides are each 5. What's its area?

**Draw it, with helper lines.** Drop a height from each of the top corners to the bottom side. These cut off a rectangle in the middle, with a right triangle on each end.

**What are the pieces?** The middle rectangle is 6 wide. That leaves $14 - 6 = 8$ for the two end triangles, which are identical, so each one has a base of 4.

**Find the height:** Each right triangle has a leg of 4 and a hypotenuse of 5. It's a 3-4-5 triangle, so the height is 3.

**Find the area:** The area of the rectangle is $6 \times 3 = 18$. Each triangle has an area of $\frac{1}{2} \times 4 \times 3 = 6$. The total is $18 + 6 + 6 = 30$.

<section data-box="traps">

## Common traps

**Using the wrong height.** For a triangle with sides of 13, 13, and 10, the height isn't 13. Sides that lean aren't heights. The height has to meet the base at a right angle.

**Assuming that every height lands in the middle.** Only an isosceles triangle's height from its top corner does so. In a lopsided triangle, the two pieces of the base aren't equal.

**Allowing a sum that only ties.** Sides of 3, 4, and 7 can't make a triangle, since $3 + 4$ equals 7, rather than being greater. The "triangle" would be flat. The inequality has to be strict.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** There's no right angle, or a side length and an area are both involved.

**What helper lines to try:** A height from a corner, a line through the middle of an isosceles triangle, or a diagonal of a four-sided shape.

**Use the triples:** Contest lengths are chosen so that a triple appears. If you expect an awkward square root and don't see one, you're probably on the right path.

**Time:** Two minutes.

</section>

<section data-box="connections">

## Connections

These helper lines come from [triangle area](/pathway/basic-geometry/02-triangle-area/) in Level 1. Next, a line parallel to a side creates [similar triangles](/pathway/triangles/04-similar-triangles/).

</section>

<section data-box="summary">

## Remember this

- Draw a height to make right triangles.
- An isosceles height cuts the base in half.
- Area two ways gives you a new equation.
- Same height? Areas compare like the bases.
- Two sides must add up to more than the third.

</section>
