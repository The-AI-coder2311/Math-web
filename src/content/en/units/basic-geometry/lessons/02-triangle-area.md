---
title: "Triangle Area and Helper Lines"
summary: See why a triangle is half of a rectangle, what height really means, and how drawing one extra line can solve a problem.
minutes: 11
---

Why does the area of a triangle have a one half in it? Many students memorize the formula without ever seeing the reason. Here's a challenge: cut any paper rectangle along a diagonal. You've made two triangles that match perfectly. But what about a triangle that doesn't look like half of a rectangle? A single helper line will show you that it still works.

> **The big idea:** A triangle's area is half of its base times its height: $\frac{1}{2} \times \text{base} \times \text{height}$. The height is measured **straight up** from the base, at a right angle. When a shape looks hard, try **adding a helper line**.

## Why the one half is there

Draw a rectangle around a triangle, using the triangle's base and height.

![A triangle with base 8 and height 5 inside a rectangle that is 8 by 5. The triangle covers exactly half of the rectangle.](/images/geometry-triangle-half-rectangle.svg)

Now draw a helper line straight down from the top of the triangle. That's the dashed line. It cuts the big rectangle into two smaller rectangles. In each small rectangle, the triangle's slanted side is a diagonal, so it covers exactly half of that rectangle. Half of one piece plus half of the other piece is half of the whole thing.

For this triangle, the area is $\frac{1}{2} \times 8 \times 5 = 20$.

## What "height" really means

The height isn't always a side of the triangle. It's the straight-up distance from the base to the opposite corner, the same way your height is measured straight up, even if you're leaning. It can even land outside the triangle, as it does here:

![A triangle whose top is to the right of its base. The base is 6. The height of 4 is a dashed line outside the triangle, going down to where the base line would continue.](/images/geometry-helper-height.svg)

The area of this triangle is still $\frac{1}{2} \times 6 \times 4 = 12$. Any side can act as the base, as long as you use the height that goes with it. This leads to a neat fact: triangles with the same base and the same height have the **same area**, no matter how much they lean.

## Example 1: Using the right numbers

A triangle has sides of 5 and 8, and a height of 3 drawn to the side of length 8. What's its area?

**What do we know?** The height of 3 goes with the base of 8, since that's the side it meets. The side of 5 is a slanted side, so it's a distraction.

$$\frac{1}{2} \times 8 \times 3 = 12$$

Try this one. A right triangle has legs of 6 and 10. What's its area?

<details class="check"><summary>Show the answer</summary>

In a right triangle, the two legs meet at a right angle, so one is the base and the other is the height. The area is $\frac{1}{2} \times 6 \times 10 = 30$.

</details>

## Example 2: Finding a height

A triangle has an area of 24 and a base of 8. How tall is it?

**What do we know?** The area formula, with one piece missing: half of 8 times the height is 24. So 4 times the height is 24, and the height is 6.

**A check:** A rectangle with the same base and height has an area of $8 \times 6 = 48$, and half of 48 is 24.

## Example 3: Helper lines in a square

A square has sides of 10. Point $P$ is the middle of the top side. Lines go from $P$ to the two bottom corners. What's the area of the triangle formed?

**Draw it, and think.** The triangle's base is the bottom side of the square, which is 10. The top corner $P$ is on the top side, so the height is the full height of the square, 10.

$$\frac{1}{2} \times 10 \times 10 = 50$$

That's half of the square's area of 100. In fact, $P$ could be anywhere along the top side, and the area would still be 50. The base and height wouldn't change.

## Example 4: A contest-style question

On a grid, a triangle has corners at $(0, 0)$, $(6, 0)$, and $(2, 5)$. A second triangle has corners at $(6, 0)$, $(10, 0)$, and $(2, 5)$. What's the total area of the two triangles?

**What do we know?** Both triangles have a base on the bottom line. The first base goes from 0 to 6, which is 6 long. The second goes from 6 to 10, which is 4 long. Both have the same top corner, at a height of 5.

**What's the shortcut?** The two triangles fit together to form one big triangle with a base of 10 and a height of 5.

$$\frac{1}{2} \times 10 \times 5 = 25$$

**Check:** The first has an area of 15, and the second has an area of 10. They add up to 25.

<section data-box="deeper">

## Going deeper

Two triangles that share a height have areas in the same ratio as their bases. This lets you find an area without knowing any lengths.

**A harder one:** In triangle $ABC$, point $D$ is on side $BC$, with $BD$ to $DC$ in a ratio of 1 to 3. The area of triangle $ABC$ is 40. What's the area of triangle $ABD$?

**What do the two small triangles share?** The corner $A$. The height from $A$ down to line $BC$ is the same for both triangles.

**So what decides their areas?** Only their bases. Since the bases are in a ratio of 1 to 3, so are the areas. That's 4 boxes in a total of 40, so each box holds 10.

So triangle $ABD$ has an area of 10, and triangle $ADC$ has an area of 30.

Notice that we never learned the height or the base! The ratio was enough. This is one of the most useful facts in contest geometry, and it comes back in [The Angle Bisector Theorem](/pathway/triangles/05-angle-bisector/).

Try this. Point $D$ is on side $BC$, with $BD$ to $DC$ in a ratio of 2 to 5. The area of triangle $ABC$ is 35. What's the area of triangle $ABD$?

<details class="check"><summary>Show the answer</summary>

There are 7 boxes in a total of 35, so each box holds 5. Triangle $ABD$ fills 2 boxes, so its area is 10.

</details>

</section>

<section data-box="traps">

## Common traps

**Using a slanted side as the height.** In a triangle with sides 5, 5, and 6, the height isn't 5. The sides of 5 are slanted. You'd need to draw the height to find it, which you'll learn how to do in lesson 5.

**Forgetting the one half.** A triangle with base 8 and height 5 has an area of 20, not 40. The number 40 is the rectangle around it. Picture that rectangle to remember why you need to cut it in half.

**Pairing the wrong base and height.** The height must meet the side you're using as the base at a right angle. If you use a different side as the base, you need a different height.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for triangles inside rectangles or squares, or corners given on a grid.

**The most useful helper lines:** a height dropped straight down, a diagonal of a rectangle, or a line that divides a shape into familiar pieces.

**Compare instead of calculating:** If two triangles share a height, their areas compare the same way as their bases. If the bases are 6 and 4, the areas are in a ratio of 6 to 4.

**Time:** About a minute. Figures on contests aren't always drawn exactly to scale, so go by the numbers.

</section>

<section data-box="connections">

## Connections

This builds on [area as counting squares](/pathway/basic-geometry/01-perimeter-and-area/). In Level 2, [Triangles](/pathway/triangles/) finds heights using the Pythagorean Theorem.

</section>

<section data-box="summary">

## Remember this

- Area of a triangle: $\frac{1}{2} \times$ base $\times$ height.
- The height is straight up from the base, at a right angle.
- The height can land outside the triangle.
- Same base and same height means same area.
- Stuck? Try adding a helper line.

</section>
