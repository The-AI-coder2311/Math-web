---
title: "Triangles: Chase Angles, Scale Sides"
summary: Find unknown angles one step at a time, see why the Pythagorean Theorem is true, and use similar triangles to find lengths you can't measure.
minutes: 11
---

Triangles show up everywhere in contest geometry, often hidden inside other shapes. In this lesson, you'll build on what you learned in Level 1 with three strong tools: **angle chasing**, the **Pythagorean Theorem**, and **similar triangles**.

> **The big idea:** Don't look for the answer straight away. Find anything you **can** find, write it on your picture, and see what that unlocks.

## Tool 1: Angle chasing

Angle chasing means filling in a diagram one angle at a time. You already know that a straight line is 180° and that a triangle's angles add up to 180°. Here are three more facts.

**The outside angle.** Extend one side of a triangle, and you get an angle outside it. That outside angle equals the sum of the two inside angles that aren't next to it. If the two far angles are 50° and 60°, the third inside angle is 70°, so the outside angle is $180 - 70 = 110$ degrees. That's the same as $50 + 60 = 110$.

**Parallel lines.** When a line crosses two parallel lines, it makes the same angles at both crossings:

![Two parallel lines crossed by a slanted line. At each crossing, the matching corner measures 70 degrees, and the angle beside it measures 110 degrees.](/images/triangles-parallel-lines.svg)

Any two of these angles are either **equal** or **add up to 180°**. There are no other possibilities.

**Polygons.** Any polygon can be cut into triangles from one corner. A shape with $n$ sides becomes $n - 2$ triangles, so its angles add up to $(n - 2) \times 180$ degrees. A pentagon has 5 sides, which makes 3 triangles, so its angles add up to $3 \times 180 = 540$ degrees. In a **regular** pentagon, all the angles are equal, so each is $540 \div 5 = 108$ degrees.

## Tool 2: Why the Pythagorean Theorem is true

You've used $a^2 + b^2 = c^2$, but why does it work? Here's a picture that shows it, using a right triangle with legs 3 and 4 and hypotenuse 5.

Start with two identical squares, each with sides of 7, since $3 + 4 = 7$. Place the same 4 triangles inside each one, in two different ways:

![Two squares with sides of 7 that each hold four identical right triangles with legs 3 and 4. In the first square, the leftover space is one tilted square of area 25. In the second, the leftover space is two squares, of area 9 and area 16.](/images/triangles-pythagoras-squares.svg)

Both big squares are the same size, and both contain the same 4 triangles. So the leftover space must be the same too. On the left, it's one square built on the hypotenuse. On the right, it's two squares built on the legs. So:

$$3^2 + 4^2 = 5^2$$

The same rearrangement works for any right triangle, which is why the theorem is always true.

**Two special right triangles.** These appear often, because they come from cutting familiar shapes in half.

- **The 45-45-90 triangle** is half of a square. If the legs are 1, the hypotenuse $c$ has $c^2 = 1^2 + 1^2 = 2$, so $c = \sqrt{2}$. The diagonal of any square is its side times $\sqrt{2}$.
- **The 30-60-90 triangle** is half of an equilateral triangle. If the short leg is 1, the hypotenuse is 2, and the long leg is $\sqrt{3}$.

## Tool 3: Similar triangles

Two triangles are **similar** if they have the same shape but maybe a different size. If two angles of one triangle match two angles of another, then the triangles are similar, because the third angles must match too.

In similar triangles, all corresponding sides are multiplied by the same **scale factor**.

A 2-meter pole casts a 3-meter shadow. At the same moment, a building casts a 30-meter shadow. How tall is the building?

The sun makes the same angle with both, so the two triangles are similar. The shadow is 10 times as long, since $30 \div 3 = 10$. So the building is 10 times as tall: $2 \times 10 = 20$ meters.

> **Watch out:** If the side lengths are multiplied by 3, the area is multiplied by $3 \times 3 = 9$, not by 3. Area scales by the scale factor **squared**, because both the base and the height get bigger.

## Example: Using them together

A triangle has sides of 13, 13, and 10. What's its area?

- **Draw it.** An isosceles triangle splits into two matching right triangles when you draw the height from the top to the base of 10. That height cuts the base into 5 and 5.
- **Use Pythagoras.** One right triangle has a leg of 5 and a hypotenuse of 13. Using the height $h$, we get $h^2 = 13^2 - 5^2 = 169 - 25 = 144$, so $h = 12$.
- **Find the area.** The area is $\frac{1}{2} \times 10 \times 12 = 60$.

Notice that the problem never mentioned a right angle. **Drawing a height** to create a right triangle is one of the most useful moves in geometry.

## One more check: Can the triangle exist?

Could a triangle have sides of 2, 3, and 6? Try to picture it. The sides of 2 and 3 can't stretch far enough to connect across a side of 6. The **triangle inequality** says that any two sides must add up to **more than** the third side.

## Your turn

Before you start the practice problems, try these two:

1. What do the angles of an octagon, which has 8 sides, add up to?
2. Two similar triangles have a scale factor of 2. The small one has an area of 5. What's the area of the big one?

**Answers:** For the first, $(8 - 2) \times 180 = 1080$ degrees. For the second, the area is multiplied by $2 \times 2 = 4$, so it's $5 \times 4 = 20$.

If you got those, you're ready. Draw every problem, and write on your drawing as you learn things.
