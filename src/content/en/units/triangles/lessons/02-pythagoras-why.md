---
title: "Why Pythagoras Works"
summary: See a picture that proves the Pythagorean Theorem, and learn the two special right triangles that contests use most.
minutes: 10
---

You've used $a^2 + b^2 = c^2$, but do you know **why** it's true? Why should the squares of two sides add up exactly to the square of the third? And what about when a side isn't a whole number? This lesson shows you a proof that you could explain to a friend, then gives you two special triangles that appear on contests again and again.

> **The big idea:** The Pythagorean Theorem is a fact about **area**: the square built on the hypotenuse has the same area as the two squares built on the legs. And the two most useful right triangles come from cutting a **square** or an **equilateral triangle** in half.

## A picture that proves it

Let's use a right triangle with legs 3 and 4 and hypotenuse 5.

Start with two identical squares, each with sides of 7, since $3 + 4 = 7$. Place the same 4 triangles inside each one, in two different ways:

![Two squares with sides of 7 that each hold four identical right triangles with legs 3 and 4. In the first square, the leftover space is one tilted square of area 25. In the second, the leftover space is two squares, of area 9 and area 16.](/images/triangles-pythagoras-squares.svg)

Both big squares are the same size, and both contain the same 4 triangles. So the leftover space must be the same too. On the left, it's one square built on the hypotenuse. On the right, it's two squares built on the legs. So:

$$3^2 + 4^2 = 5^2$$

The same rearrangement works for **any** right triangle. Nothing about it depended on the numbers 3 and 4, which is why the theorem is always true.

## Square roots that aren't whole numbers

What if a right triangle has legs of 1 and 1? Then $c^2 = 1 + 1 = 2$. No whole number squared is 2, so we leave it as $\sqrt{2}$, read "the square root of 2." It's about 1.41. Contests usually want the exact value, so you'd write $\sqrt{2}$, not a decimal.

You can often simplify a root by pulling out a perfect square. For example, $\sqrt{50} = \sqrt{25 \times 2} = 5\sqrt{2}$.

## Example 1: The 45-45-90 triangle

Cut a square along its diagonal. You get two right triangles, each with two equal legs and angles of 45°, 45°, and 90°.

**What's the hypotenuse?** If the legs are $s$, then $c^2 = s^2 + s^2 = 2s^2$. So $c = s\sqrt{2}$.

> The diagonal of a square is its side times $\sqrt{2}$.

For a square with sides of 5, the diagonal is $5\sqrt{2}$.

**Going backwards:** A square has a diagonal of 6. What's its area? Let the side be $s$. Then $s^2 + s^2 = 36$, so $s^2 = 18$. The area **is** $s^2$, so it's 18. You didn't need to find $s$ at all.

Now you try. A square has a diagonal of 10. What's its area?

<details class="check"><summary>Show the answer</summary>

$s^2 + s^2 = 100$, so $s^2 = 50$. Since the area is $s^2$, the area is 50.

</details>

## Example 2: The 30-60-90 triangle

Cut an **equilateral** triangle in half with a height. Each half has angles of 30°, 60°, and 90°.

**What are the sides?** Suppose the equilateral triangle has sides of 2. Cutting in half makes the base 1. The hypotenuse is still 2. So the height $h$ follows from $h^2 + 1^2 = 2^2$, which means $h^2 = 3$ and $h = \sqrt{3}$.

| Side | Across from | Length |
|---|---|---|
| Short leg | 30° | 1 |
| Long leg | 60° | $\sqrt{3}$ |
| Hypotenuse | 90° | 2 |

Any 30-60-90 triangle is a scaled copy of this one. If the short leg is 5, then the hypotenuse is 10 and the long leg is $5\sqrt{3}$.

## Example 3: Area of an equilateral triangle

What's the area of an equilateral triangle with sides of 6?

**What's missing?** We know the base, but not the height.

**What's the helper line?** Draw the height, which cuts the triangle into two 30-60-90 triangles. The short leg is 3, so the height is $3\sqrt{3}$.

$$\text{Area} = \frac{1}{2} \times 6 \times 3\sqrt{3} = 9\sqrt{3}$$

## Example 4: Checking whether a triangle is right

Does a triangle with sides of 9, 40, and 41 have a right angle?

**What's the test?** The theorem works both ways: if the squares add up, then the triangle has a right angle. Always test with the longest side as $c$.

$$9^2 + 40^2 = 81 + 1600 = 1681$$

And $41^2 = 1681$. So yes, it's a right triangle.

## Example 5: A contest-style question

A rectangular box measures 3 by 4 by 12. What's the length of the longest straight rod that can fit inside, from one corner to the opposite corner?

**What's the plan?** There's a right triangle on the bottom of the box, and another going up through the box.

- **The diagonal of the bottom:** With sides of 3 and 4, it's 5.
- **Going up:** That bottom diagonal and the height of 12 form another right triangle, with a right angle where the height meets the floor. So the rod has $5^2 + 12^2 = 25 + 144 = 169$, and its length is 13.

Using two Pythagorean triples in a row is a favorite contest idea.

<section data-box="traps">

## Common traps

**Using the formula on non-right triangles.** It only works with a right angle. If there isn't one, draw a height to make one.

**Assigning the sides wrongly in a 30-60-90.** The short leg is across from the 30° angle, and the hypotenuse is exactly twice as long as the short leg. The $\sqrt{3}$ goes with the 60° angle.

**Adding square roots directly.** $\sqrt{9} + \sqrt{16}$ is $3 + 4 = 7$, and it's not the same as $\sqrt{25} = 5$. Roots don't add that way.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Squares with diagonals, equilateral triangles, angles of 30°, 45°, or 60°, and boxes with diagonals.

**Don't always find every side.** As with the square's area, the question may ask for $s^2$ directly.

**Estimate:** $\sqrt{2} \approx 1.41$ and $\sqrt{3} \approx 1.73$. Those can help you eliminate answer choices if a figure is drawn to scale.

**Time:** One to two minutes.

</section>

<section data-box="connections">

## Connections

This deepens [the first look at right triangles](/pathway/basic-geometry/05-right-triangles/) from Level 1. The same theorem finds distances in [Coordinate Geometry](/pathway/coordinate-geometry/) in Level 3.

</section>

<section data-box="summary">

## Remember this

- Pythagoras is a fact about areas.
- 45-45-90: the hypotenuse is a leg times $\sqrt{2}$.
- 30-60-90: sides are 1, $\sqrt{3}$, and 2.
- Equal sums of squares mean there's a right angle.
- Learn the triples 3-4-5, 5-12-13, 8-15-17, and 7-24-25.

</section>
