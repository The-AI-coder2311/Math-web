---
title: "Circle Formulas and Scaling"
summary: Understand what pi really is, and why the circumference and area formulas work. Then see what happens when a circle grows.
minutes: 11
---

A 12-inch pizza costs \$10, and a 6-inch pizza costs \$5. The large one costs twice as much and is twice as wide, so is it a fair price? Before you answer, picture cutting up the large pizza. How many small pizzas' worth of pizza does it hold? The answer surprises nearly everyone, and it depends on how circles grow.

> **The big idea:** Two formulas do almost everything: the **circumference** (the distance around) is $2 \pi r$, and the **area** is $\pi r^2$. Both use the **radius**, $r$, the distance from the center to the edge.

## What pi really is

Wrap a string around any circle, and compare it with the distance straight across the circle, which is called the **diameter**. It doesn't matter how big the circle is: the string is always a little over 3 times as long. That number, about 3.14, is called **pi** and written $\pi$. All circles are the same shape, so they're all scaled copies of each other, and that's why the ratio never changes.

So the circumference is $\pi$ times the diameter. Since the diameter is two radii, that's $2 \pi r$.

## Why the area is $\pi r^2$

Cut a circle into many thin pizza slices, and arrange them in a row, pointing up and down in turn. The result looks almost like a rectangle. Its height is the radius $r$. Its long side is half of the outer crust, since half the slices point each way, so that side is half of $2 \pi r$, which is $\pi r$. A rectangle's area is width times height, so the circle's area is:

$$\pi r \times r = \pi r^2$$

Contest answers are usually left "in terms of $\pi$," which means you write $9\pi$, and not a decimal.

## Example 1: Using the formulas

A circle has a radius of 3. What are its circumference and its area?

- The circumference is $2 \times 3 \times \pi$, which is $6\pi$.
- The area is $\pi \times 3^2$, which is $9\pi$.

Those use different formulas and different units. A circumference is a length, while an area is in square units.

Now you try. A circle has a diameter of 8. What's its area?

<details class="check"><summary>Show the answer</summary>

The radius is half of the diameter, which is 4. So the area is $\pi \times 4^2$, or $16\pi$.

</details>

## Example 2: Going backwards

A circle has an area of $49\pi$. What's its circumference?

**What do we know?** The area formula gives $\pi r^2 = 49\pi$, so $r^2 = 49$ and $r = 7$.

**What's the question asking?** The circumference is $2 \times 7 \times \pi$, which is $14\pi$.

You'll use this path often: if you have one of area, circumference, radius, or diameter, you can find the others. The radius is the best middle step.

## Example 3: Scaling a circle

Back to the pizzas. The 12-inch pizza has a radius of 6, so its area is $36\pi$. The 6-inch pizza has a radius of 3, so its area is $9\pi$.

$$36 \div 9 = 4$$

The large pizza has **4 times** as much pizza, for only 2 times the price. That's a much better deal! Doubling a circle's radius multiplies its area by 4. You saw this with [similar triangles](/pathway/triangles/04-similar-triangles/): area scales by the scale factor squared. The circumference is a length, so it only doubles.

## Example 4: How far does a wheel roll?

A bicycle wheel has a diameter of 26 inches. It rolls forward, turning exactly 10 times. How far does the bike travel?

**What's the question really asking?** Each full turn lays out the whole circumference along the ground, so it moves forward by one circumference.

- One turn: $\pi \times 26$, or $26\pi$ inches.
- Ten turns: $260\pi$ inches.

Using 3.14 for $\pi$, that's about 816 inches, or 68 feet.

## Example 5: A contest-style question

A circular garden has a radius of 10 feet. A path that's 2 feet wide runs all around the outside of it. What's the area of the path?

**What's the plan?** The path is a ring, so subtract. The outer circle has a radius of $10 + 2 = 12$.

$$\pi \times 12^2 - \pi \times 10^2 = 144\pi - 100\pi = 44\pi$$

So the area is $44\pi$ square feet. Notice that squaring the 2 and getting $4\pi$ doesn't work: a ring's area depends on how big it is around, as well as how wide it is.

<section data-box="deeper">

## Going deeper

When two wheels are linked by a belt or by gears, the distance traveled along their edges is the same.

**A harder one:** A belt connects a wheel of radius 10 to a wheel of radius 4. When the big wheel turns 6 times, how many times does the small wheel turn?

**What stays the same?** The belt doesn't slip, so both wheels' edges move the same distance.

**How far does the belt move?** One turn of the big wheel is $2\pi \times 10 = 20\pi$. Six turns make $120\pi$.

**How many small turns is that?** One small turn is $2\pi \times 4 = 8\pi$. So it's $120\pi \div 8\pi = 15$ turns.

**A shortcut:** Turns times radius stays the same. So $6 \times 10 = 15 \times 4$. The small wheel spins faster, in the same ratio that it's smaller. Notice how $\pi$ cancels, as it often does in these problems.

Try this. Two wheels have radii of 9 and 6, and they're linked by a belt. When the smaller wheel turns 12 times, how many times does the larger wheel turn?

<details class="check"><summary>Show the answer</summary>

Turns times radius stays the same: $12 \times 6 = 72$. So the larger wheel turns $72 \div 9 = 8$ times.

</details>

</section>

<section data-box="traps">

## Common traps

**Using the diameter in the area formula.** For a circle with a diameter of 10, the area isn't $100\pi$. The radius is 5, so the area is $25\pi$. Always find the radius first.

**Mixing up the two formulas.** A tip: area has square units, so its formula has the squared $r$. Circumference is a plain length, so its formula has a plain $r$.

**Thinking that double the width means double the area.** Doubling the radius multiplies the area by 4. Tripling multiplies it by 9.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "radius," "diameter," "circular," wheels, and pizzas.

**Write the radius on your diagram first.** That one step prevents the most common mistake.

**Estimating:** Use $\pi \approx 3$ to eliminate answer choices. A circle fits inside a square with the same width, so its area has to be less than that square's area, and it's about $\frac{3}{4}$ of it.

**Time:** About a minute.

</section>

<section data-box="connections">

## Connections

Circles extend [perimeter and area](/pathway/basic-geometry/01-perimeter-and-area/) from Level 1. Next, you'll combine circles with other shapes in [shaded regions](/pathway/circles-solids/02-shaded-regions/).

</section>

<section data-box="summary">

## Remember this

- Circumference: $2 \pi r$. Area: $\pi r^2$.
- Find the radius first. It's half of the diameter.
- Leave answers in terms of $\pi$.
- Doubling the radius makes the area 4 times as big.
- One wheel turn moves it one circumference.

</section>
