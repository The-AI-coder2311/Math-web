---
title: "Lines and Slopes"
summary: Describe any straight line with two numbers. Then find where lines meet, tell when they're parallel or perpendicular, and count grid points on a line.
minutes: 10
---

A line segment runs from $(0, 0)$ to $(8, 12)$ on a grid. How many grid points, where both coordinates are whole numbers, does it pass through? You could draw it carefully and hope that your drawing is accurate. Or you could turn the whole picture into numbers. Giving every point an address, and then doing algebra with those addresses, is one of the most powerful ideas in all of math.

> **The big idea:** A straight line has the same steepness everywhere. That steepness is its **slope**, or rise over run. Knowing a line's slope and one point on it tells you everything about the line.

## Why slope is the same everywhere

A point $(x, y)$ means that you go $x$ across and $y$ up from the starting corner, which is called the **origin**. Now look at a line through two points:

![A line on a grid passing through the points (1, 1) and (4, 3). A right triangle shows a run of 3 going across and a rise of 2 going up, so the slope is 2 over 3.](/images/coordinate-slope.svg)

Draw a right triangle under any two points on the line, with a level side and an upright side. All of these triangles are **similar**, because they have the same angles. So their sides are in the same ratio, no matter which two points you pick. That ratio is the slope:

$$\text{slope} = \frac{\text{rise}}{\text{run}} = \frac{\text{change in } y}{\text{change in } x}$$

A slope that's positive goes up as you move to the right. A negative slope goes down. A level line has a slope of 0.

## Example 1: Finding a slope

What's the slope of the line through $(1, 2)$ and $(4, 11)$?

**What do we know?** The rise is $11 - 2 = 9$, and the run is $4 - 1 = 3$.

$$\text{slope} = 9 \div 3 = 3$$

Try one. What's the slope of the line through $(2, 7)$ and $(6, 5)$?

<details class="check"><summary>Show the answer</summary>

The rise is $5 - 7 = -2$, and the run is $6 - 2 = 4$. So the slope is $\frac{-2}{4}$, or $-\frac{1}{2}$. It's negative, since the line goes down as you move to the right.

</details>

## Example 2: The equation of a line

Every point on a line follows the same rule. The most useful form is:

$$y = mx + b$$

Here, $m$ is the slope, and $b$ is the **$y$-intercept**, where the line crosses the $y$-axis. Why? At $x = 0$, you're at height $b$. Each step to the right adds $m$. So at $x$, you're at height $b$ plus $x$ steps of $m$.

**Finding the equation:** A line has a slope of 2 and passes through $(3, 5)$. So $y = 2x + b$, and the point has to fit: $5 = 2 \times 3 + b$, which gives $b = -1$. The line is $y = 2x - 1$.

## Example 3: Where do two lines meet?

Where do $y = 2x + 1$ and $y = -x + 10$ cross?

**What's the question really asking?** At the crossing point, both lines have the same $y$ for the same $x$. So set them equal:

$$2x + 1 = -x + 10$$

Add $x$ to both sides to get $3x + 1 = 10$, so $x = 3$. Then $y = 2 \times 3 + 1 = 7$. **Check in the other line:** $-3 + 10 = 7$. So the lines cross at $(3, 7)$.

This is a [system with two unknowns](/pathway/equations-word-problems/04-two-unknowns/), drawn as a picture.

## Example 4: Parallel and perpendicular

**Parallel** lines have the **same slope**, since they rise at the same rate and never meet.

**Perpendicular** lines meet at a right angle. Their slopes are **negative reciprocals**: flip the fraction, and change the sign. Why? Take a slope triangle with a rise of 2 and a run of 3. Turn the entire picture by 90°. The run of 3 becomes a rise of 3, and the rise of 2 becomes a run of $-2$. So the slope $\frac{2}{3}$ becomes $-\frac{3}{2}$.

**Testing it:** A line with slope $\frac{2}{3}$ and one with slope $-\frac{3}{2}$ multiply to $-1$. That's a handy check: slopes of perpendicular lines always multiply to $-1$.

## Example 5: A contest-style question

Back to the opening. How many grid points does the segment from $(0, 0)$ to $(8, 12)$ pass through, including the ends?

**What's the slope?** It's $\frac{12}{8}$, which simplifies to $\frac{3}{2}$. So from any grid point on the line, moving 2 across and 3 up lands on the next grid point. There's none closer, since $\frac{3}{2}$ is fully simplified.

**How many steps?** Going 8 across in steps of 2 takes 4 steps. Those connect 5 points: $(0, 0)$, $(2, 3)$, $(4, 6)$, $(6, 9)$, and $(8, 12)$.

**The pattern:** The number of steps is the [GCF](/pathway/primes-remainders/03-gcf-and-lcm/) of the two changes. Here, the GCF of 8 and 12 is 4.

<section data-box="traps">

## Common traps

**Run over rise.** The slope is rise over run, not run over rise. For $(1, 2)$ and $(4, 11)$, the answer $\frac{3}{9}$ is flipped. A steep line should have a large slope.

**Mixing up the order in subtraction.** If you subtract in one order on top, use the same order on the bottom. Using $11 - 2$ on top and $1 - 4$ on the bottom gives the wrong sign.

**Forgetting to change the sign.** The perpendicular slope to $\frac{2}{3}$ isn't $\frac{3}{2}$. Those two lines both go uphill, so they can't be at a right angle.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for coordinates, "slope," "line," or "intersect."

**Sketch it anyway:** A rough sketch tells you whether the slope is positive or negative, and it catches sign mistakes.

**Using the answer choices:** A line through two points must also fit any other point on it, so you can test the choices by plugging them in.

**Time:** About a minute. Many of these are worth doing on the first pass through a test.

</section>

<section data-box="connections">

## Connections

Slope triangles are [similar triangles](/pathway/triangles/04-similar-triangles/). Crossing points use [two unknowns](/pathway/equations-word-problems/04-two-unknowns/). Next, you'll find [distances on the grid](/pathway/coordinate-geometry/02-distance-midpoints-circles/).

</section>

<section data-box="summary">

## Remember this

- Slope = rise ÷ run.
- $y = mx + b$: slope $m$, and height $b$ where it crosses.
- To find a crossing, set the two lines equal.
- Parallel: same slope.
- Perpendicular: flip the slope, and change the sign.

</section>
