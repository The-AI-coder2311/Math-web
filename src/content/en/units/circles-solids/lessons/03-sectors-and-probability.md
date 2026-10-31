---
title: "Slices of Circles and Probability With Area"
summary: Treat a slice of a circle as a fraction of the whole, and use area to find probabilities when there's nothing to count.
minutes: 9
---

A dart lands at a random spot on a square board with a circle painted on it. What's the chance that it lands in the circle? There are infinitely many spots where a dart could land, so you can't count outcomes the way you did with dice. But you can still compare **how much space** each part takes up.

> **The big idea:** A slice of a circle is a **fraction** of the whole circle, and its angle tells you the fraction. And when outcomes are spread over a region, probability is a fraction too: the **area you want over the total area**.

## Why a fraction of 360° works

A slice of a circle, like a slice of pizza, is called a **sector**. Its curved edge is called an **arc**. A full circle turns through 360°. A slice with a 90° angle takes up $\frac{90}{360} = \frac{1}{4}$ of the turn. By symmetry, four of those slices fill the circle exactly, so that slice has $\frac{1}{4}$ of the area and $\frac{1}{4}$ of the distance around.

![A circle of radius 6 with a 90 degree slice shaded. The slice is one quarter of the circle. Its area is 9 pi, and its curved edge, called the arc, has length 3 pi.](/images/circles-sector.svg)

So for any slice:

$$\text{Fraction of the circle} = \frac{\text{angle}}{360}$$

Multiply that fraction by the area to get the slice's area, or by the circumference to get the arc's length. It's the same fraction both times, since the slice takes the same share of the inside as of the edge. It's the same fraction both times, since the slice takes the same share of the inside as of the edge.

## Example 1: A slice

A circle has a radius of 6. What's the area of a slice with a 60° angle, and how long is its arc?

**What's the fraction?** $\frac{60}{360} = \frac{1}{6}$.

- The whole area is $36\pi$, so the slice has an area of $6\pi$.
- The whole circumference is $12\pi$, so the arc has a length of $2\pi$.

Now try one. A circle has a radius of 10. What's the area of a slice with a 72° angle?

<details class="check"><summary>Show the answer</summary>

The fraction is $\frac{72}{360} = \frac{1}{5}$. The whole area is $100\pi$, so the slice has an area of $20\pi$.

</details>

## Example 2: The perimeter of a slice

What's the **perimeter** of the 60° slice in Example 1?

**What's the catch?** The perimeter means walking all the way around the slice. That's the arc **plus** the two straight sides, which are both radii:

$$2\pi + 6 + 6 = 2\pi + 12$$

## Example 3: A clock

What's the area swept by the minute hand of a clock in 20 minutes, if the hand is 3 inches long?

**What's the fraction?** The hand makes a full turn in 60 minutes, so 20 minutes is $\frac{1}{3}$ of a turn.

**What's the circle?** The radius is the length of the hand, 3. The whole area is $9\pi$, so the answer is $3\pi$ square inches.

## Example 4: A dart and a square

Now for the opening question. A circle with a radius of 5 is painted on a square board with sides of 10, touching all four sides. A dart lands at a random spot on the board. What's the probability that it lands in the circle?

**Why does area work?** Think of all of the spots on the board as equally likely. A region with twice the area holds twice as many spots. So the chance is the fraction of the area.

$$\frac{\text{circle}}{\text{square}} = \frac{25\pi}{100} = \frac{\pi}{4}$$

That's about 0.785, so about 78.5% of random darts land in the circle.

**Notice something:** The answer doesn't depend on the radius. For any circle that fits exactly inside a square, it's $\frac{\pi}{4}$.

## Example 5: A contest-style question

A spinner is a circle divided into a red slice with a 90° angle, a blue slice with a 120° angle, and a green slice covering the rest. You spin it twice. What's the probability that it lands on green both times?

**What's the green slice?** The rest of the circle is $360 - 90 - 120 = 150$ degrees. So the chance of green on one spin is $\frac{150}{360} = \frac{5}{12}$.

**Why is it the fraction?** The spinner can stop at any angle, and each angle is equally likely.

**What about two spins?** They don't affect each other, so we multiply:

$$\frac{5}{12} \times \frac{5}{12} = \frac{25}{144}$$

<section data-box="traps">

## Common traps

**Forgetting the radii in a perimeter.** The perimeter of a slice includes the two straight sides. The arc alone isn't the perimeter.

**Using the area formula on an arc.** Arcs are lengths, so they use $2 \pi r$. Slices are areas, so they use $\pi r^2$. Multiply the same fraction by the right one.

**Assuming that slices are equal.** A spinner with 3 colors doesn't mean that each color has a probability of $\frac{1}{3}$. Use the angles. It's the same mistake as counting colors in a jar instead of counting candies.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "sector," "arc," "spinner," "clock," or "a point is chosen at random."

**Friendly fractions:** 30° is $\frac{1}{12}$, 45° is $\frac{1}{8}$, 60° is $\frac{1}{6}$, 90° is $\frac{1}{4}$, and 120° is $\frac{1}{3}$.

**If no size is given:** Choose a friendly size yourself. Probabilities that compare areas don't depend on the size.

**Time:** About a minute.

</section>

<section data-box="connections">

## Connections

Probability as a fraction comes from [Intro to Probability](/pathway/intro-probability/01-count-what-you-want/). Multiplying two spins comes from [tree diagrams](/pathway/intro-probability/03-trees-and-multiplying/).

</section>

<section data-box="summary">

## Remember this

- A slice's fraction is its angle over 360.
- Multiply the fraction by the area or the circumference.
- A slice's perimeter is the arc plus two radii.
- Probability with regions is area over area.
- A circle inside a square covers $\frac{\pi}{4}$ of it.

</section>
