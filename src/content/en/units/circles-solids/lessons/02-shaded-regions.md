---
title: "Shaded Regions"
summary: Find the area of strange-looking shaded shapes by subtracting, by moving pieces around, or by splitting them up.
minutes: 9
---

A circle fits perfectly inside a square. The four curved corners left over are shaded. How do you find the area of a curved corner? There's no formula for a shape like that, and you won't need one. On contests, shaded regions almost always look harder than they are, because they're nearly always familiar shapes combined in some way.

> **The big idea:** To find a shaded area, ask, "**What's the whole, and what's missing?**" Then subtract. Sometimes it also helps to **slide pieces around** to make a simple shape.

## Why subtraction works here

Area is the amount of space inside. If a shaded region is the part of the square that's outside the circle, then shaded + circle = square. So shaded = square − circle.

![A circle of radius 5 inside a square with sides of 10. The circle touches all four sides, and the four corners outside the circle are shaded.](/images/circles-in-square.svg)

- The square has an area of $10 \times 10 = 100$.
- The circle has a diameter of 10, so its radius is 5, and its area is $25\pi$.
- The shaded area is $100 - 25\pi$.

That's all you need to do. Since $\pi$ isn't a nice number, the answer stays as a two-part expression. Let's check that the size makes sense: $25\pi$ is about 78.5, so the shaded part is about 21.5, or roughly a fifth of the square. That looks about right in the picture.

## Example 1: A ring

Two circles share the same center, with radii of 5 and 3. What's the area of the ring between them?

**What's the whole?** The big circle: $25\pi$.

**What's missing?** The small circle: $9\pi$.

$$25\pi - 9\pi = 16\pi$$

Try one yourself. The largest possible circle is drawn inside a square with sides of 6. What's the area of the square outside the circle?

<details class="check"><summary>Show the answer</summary>

The square has an area of 36. The circle has a radius of 3, so its area is $9\pi$. The answer is $36 - 9\pi$.

</details>

## Example 2: A square inside a circle

A square is drawn inside a circle, with its corners on the circle. The circle has a radius of 4. What's the area of the circle outside the square?

**What's missing?** The square's area. But we don't know its side.

**What can we draw?** The square's diagonal goes across the circle, through the center, so it's a diameter, with a length of 8. If the side is $s$, the Pythagorean Theorem gives $s^2 + s^2 = 64$. So $s^2 = 32$, and that's exactly the square's area.

**Subtract:** The circle has an area of $16\pi$, so the answer is $16\pi - 32$.

The diagonal of the inner square being a diameter is a classic helper line.

## Example 3: Half circles on a square

A square has sides of 4. A half circle is drawn on each of two opposite sides, inside the square, with the side as its diameter. What's the area of the square that's outside both half circles?

**What's the whole?** The square: $4 \times 4 = 16$.

**What's missing?** Two half circles make one full circle, with a diameter of 4 and a radius of 2. Its area is $4\pi$.

**Do they overlap?** The half circles each reach 2 units in from the side, and the opposite sides are 4 apart. So they only touch at the center. They don't overlap.

$$16 - 4\pi$$

## Example 4: Moving pieces around

A rectangle is 10 by 4. Two half circles of diameter 4 are attached: one bites into the left end of the rectangle, and one sticks out from its right end. What's the area of the whole shape?

**What's the clever move?** The half circle that sticks out on the right exactly fills the bite on the left. Slide it over, and you have the plain rectangle!

$$10 \times 4 = 40$$

Before doing lots of work, look for pieces that match. Contest writers love this.

## Example 5: A contest-style question

Three circles, each with a radius of 2, sit in a row inside a rectangle. Each one touches its neighbors, and the rectangle is the smallest one that holds them all. What's the shaded area, which is the part of the rectangle outside the circles?

**Draw it.** Each circle has a diameter of 4. In a row, they stretch 12 across. The rectangle is 12 by 4, so its area is 48.

**What's missing?** Three circles, each with an area of $4\pi$, for a total of $12\pi$.

**Subtract:** $48 - 12\pi$.

Notice that the fraction that's shaded doesn't depend on the radius. Each circle sits in its own square, and in every square, $\frac{\pi}{4}$ of the area is the circle. So the fraction outside is $1 - \frac{\pi}{4}$, no matter how many circles or what size they are.

<section data-box="traps">

## Common traps

**Using the wrong radius.** A circle inside a square has a diameter equal to the side, so its radius is half of the side. For a square of side 10, the radius is 5, not 10.

**Subtracting radii instead of areas.** For a ring with radii of 5 and 3, you can't say the radius is 2 and the area is $4\pi$. You have to subtract the areas: $25\pi - 9\pi$.

**Answering with the wrong region.** After finding $25\pi$ for the circle, don't forget the subtraction. Read which part is shaded, and which part you've found.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** There's a shaded region in a figure with curves.

**Set up the words first:** Write "shaded = ___ − ___" before you calculate anything.

**Eliminating answers:** With $\pi \approx 3$, you can estimate every answer choice. A shaded area can't be negative, and it can't be larger than the whole.

**Look for symmetry:** If a figure has 4 equal parts, find one part and multiply by 4, or the other way around.

**Time:** One or two minutes.

</section>

<section data-box="connections">

## Connections

This is [split or subtract](/pathway/basic-geometry/04-split-or-subtract/) from Level 1, with curves. Next, you'll work with [slices of circles](/pathway/circles-solids/03-sectors-and-probability/).

</section>

<section data-box="summary">

## Remember this

- Shaded = whole − missing.
- Find the radius before anything else.
- A circle in a square: the diameter equals the side.
- A square in a circle: the diagonal is the diameter.
- Before calculating, look for pieces that fill each other's gaps.

</section>
