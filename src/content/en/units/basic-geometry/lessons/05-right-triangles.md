---
title: "A First Look at Right Triangles"
summary: Use the Pythagorean Theorem to find a missing side of a right triangle, and learn the whole-number triangles that contests love.
minutes: 9
---

You walk 6 blocks east and then 8 blocks north. A friend walks straight across the park from your starting point to the same spot. How far did your friend walk? You can't add 6 and 8, since your friend took a shortcut. But more than 2,500 years ago, people knew a rule that gives the exact answer.

> **The big idea:** In a right triangle, the squares of the two shorter sides add up to the square of the longest side: $a^2 + b^2 = c^2$. This lets you find any side if you know the other two.

## The words you need

A **right triangle** has one 90° angle, usually marked with a small square. The side across from that angle is the longest one, called the **hypotenuse**. The other two sides are the **legs**. In the formula, $a$ and $b$ are the legs, and $c$ is the hypotenuse.

To **square** a number means to multiply it by itself, so $5^2 = 5 \times 5 = 25$. To go backwards, we take a **square root**. The square root of 25 is 5, because $5 \times 5 = 25$. It's written $\sqrt{25} = 5$.

## Testing that it works

Let's test the rule on the most famous right triangle, with sides of 3, 4, and 5:

$$3^2 + 4^2 = 9 + 16 = 25$$

And $5^2$ is also 25. You can test this with real objects: draw a 3 inch line, and a 4 inch line at a square corner, and measure across. It'll be 5 inches. The formula can be read as a statement about **areas**. Build a square on each side of the triangle, and the two small squares have the same total area as the big one. You'll see a picture showing why in the Level 2 [Triangles](/pathway/triangles/) unit.

The rule **only** works for right triangles. For example, for sides of 3, 4, and 6, $3^2 + 4^2$ is 25, while $6^2$ is 36. They don't match, so that triangle has no right angle.

## Example 1: Finding the hypotenuse

Back to the walk. Your path makes a right angle, so draw the triangle. The legs are 6 and 8.

$$6^2 + 8^2 = 36 + 64 = 100$$

**What number squared is 100?** It's 10. So your friend walked 10 blocks, while you walked 14.

Now you try. A right triangle has legs of 5 and 12. How long is its hypotenuse?

<details class="check"><summary>Show the answer</summary>

$5^2 + 12^2 = 25 + 144 = 169$, and $13 \times 13 = 169$. So the hypotenuse is 13.

</details>

## Example 2: Finding a leg

A 10-foot ladder leans against a wall, with its bottom 6 feet from the wall. How high up does it reach?

**Draw it.** The wall and the ground form the right angle. The ladder is across from that right angle, so it's the **hypotenuse**.

**What's the plan?** Now the unknown is a leg, so the bigger square goes alone:

$$h^2 + 6^2 = 10^2$$

That means $h^2 = 100 - 36 = 64$, so $h = 8$. The ladder reaches 8 feet up.

## Example 3: Triangles worth remembering

Some right triangles have whole-number sides. They're called **Pythagorean triples**, and contests love them, since they make for friendly numbers:

| Triple | Check |
|---|---|
| 3, 4, 5 | $9 + 16 = 25$ |
| 5, 12, 13 | $25 + 144 = 169$ |
| 8, 15, 17 | $64 + 225 = 289$ |
| 7, 24, 25 | $49 + 576 = 625$ |

Multiples work too. If you double all the sides of a 3-4-5 triangle, you get 6-8-10, which is the same shape, only bigger. So when you see legs of 9 and 12, notice that they're $3 \times 3$ and $3 \times 4$. The hypotenuse must be $3 \times 5 = 15$. No squaring is needed!

## Example 4: Finding a hidden right triangle

An isosceles triangle has sides of 5, 5, and 6. What's its area?

**What's missing?** To find the area, we need the height, which isn't given.

**What's a helper line?** Draw the height from the top corner to the base of 6. Because the triangle is isosceles, it folds evenly, and the height cuts the base exactly in half. Now there are two right triangles, each with a leg of 3 and a hypotenuse of 5.

**Do you recognize it?** It's a 3-4-5 triangle! So the height is 4.

$$\frac{1}{2} \times 6 \times 4 = 12$$

## Example 5: A contest-style question

A rectangle has a length of 8 and a diagonal of 10. What is its area?

**Draw it.** The diagonal cuts the rectangle into two right triangles. Each one has a leg of 8 (the length), another leg equal to the unknown width, and a hypotenuse of 10.

**Is it a triple?** This is 6-8-10, so the width is 6.

**What's the question asking?** The area is $8 \times 6 = 48$.

<section data-box="traps">

## Common traps

**Forgetting to take the square root.** For legs of 6 and 8, the answer isn't 100. That's $c^2$. Since $c^2 = 100$, the hypotenuse is $c = 10$.

**Treating a leg as the hypotenuse.** For the ladder in Example 2, adding $10^2 + 6^2$ gives 136, which doesn't lead to a whole-number answer. The ladder is the longest side. The hypotenuse is always the side across from the right angle.

**Adding the sides directly.** Some students write that the hypotenuse is $6 + 8 = 14$. But two sides of a triangle always add up to **more** than the third side. The shortcut is always shorter than walking along the legs.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for right angles, squares and rectangles with diagonals, ladders, or walking east and then north.

**Check for a triple first.** Divide the sides by any common factor, and see if you recognize 3-4-5, 5-12-13, or 8-15-17. This often takes seconds.

**Eliminating answers:** The hypotenuse has to be longer than each leg, and shorter than the two legs added together. For legs of 9 and 12, the answer must be between 12 and 21.

**Time:** About a minute. If you need to square large numbers, look again for a triple.

</section>

<section data-box="connections">

## Connections

Helper lines come from [triangle area](/pathway/basic-geometry/02-triangle-area/). In Level 2, [Triangles](/pathway/triangles/) goes further, and Level 3's Coordinate Geometry unit uses this to find distances.

</section>

<section data-box="summary">

## Remember this

- $a^2 + b^2 = c^2$ works only in right triangles.
- $c$ is the hypotenuse, across from the right angle.
- Don't forget the square root at the end.
- Know 3-4-5, 5-12-13, 8-15-17, and their multiples.
- Draw a height to create a right triangle.

</section>
