---
title: "The Unit Circle"
summary: Define sine and cosine for every angle, not only acute ones, using a point that walks around a circle.
minutes: 13
---

What is $\cos 120^\circ$? If you learned sine and cosine from right triangles, this question is strange. A right triangle can't have a $120^\circ$ angle, so "adjacent over hypotenuse" has nothing to point at. Yet the AMC 12 asks about angles like $120^\circ$, $210^\circ$, and $-45^\circ$ all the time. In this lesson, you'll learn the definition that works for every angle, and you'll see that the right-triangle version is a special case of it.

> **The big idea:** Put a point on a circle of radius 1 centered at the origin, at an angle $\theta$ measured counterclockwise from the positive $x$-axis. Its coordinates are $(\cos\theta, \sin\theta)$. Every fact about sine and cosine comes from where that point is.

## Why this definition makes sense

Start with an acute angle, such as $30^\circ$. Draw the radius at $30^\circ$ and drop a line from its end straight down to the $x$-axis. You get a right triangle whose hypotenuse is the radius, which has length 1. The side along the $x$-axis is "adjacent over hypotenuse" times 1, which is $\cos 30^\circ$. The vertical side is $\sin 30^\circ$. So for acute angles, the point on the circle really is $(\cos\theta, \sin\theta)$, and nothing has changed.

Now keep turning. At $120^\circ$, the point has moved into the upper left. Its $x$-coordinate is negative, so $\cos 120^\circ$ is negative. The definition keeps working even though there's no triangle with that angle. We have extended sine and cosine to every angle without breaking the old meaning.

The tangent comes along for free: $\tan\theta = \frac{\sin\theta}{\cos\theta}$, which is the **slope** of the radius. That's undefined at $90^\circ$ and $270^\circ$, where the radius is vertical.

## The values you must know cold

Two special triangles give everything. The $30$-$60$-$90$ triangle with hypotenuse 1 has legs $\frac{1}{2}$ and $\frac{\sqrt{3}}{2}$. The $45$-$45$-$90$ triangle with hypotenuse 1 has legs $\frac{\sqrt{2}}{2}$.

- $\sin 30^\circ = \frac{1}{2}$ and $\cos 30^\circ = \frac{\sqrt{3}}{2}$
- $\sin 45^\circ = \cos 45^\circ = \frac{\sqrt{2}}{2}$
- $\sin 60^\circ = \frac{\sqrt{3}}{2}$ and $\cos 60^\circ = \frac{1}{2}$
- At $0^\circ$, the point is $(1, 0)$. At $90^\circ$, it's $(0, 1)$. At $180^\circ$, it's $(-1, 0)$. At $270^\circ$, it's $(0, -1)$.

## Reference angles and signs

Every angle in the circle is a mirror image of an acute angle. The **reference angle** is the acute angle between the radius and the $x$-axis. For $150^\circ$, the radius is $30^\circ$ above the negative $x$-axis, so the reference angle is $30^\circ$. The point at $150^\circ$ is the reflection of the point at $30^\circ$ across the $y$-axis, so it has the same height and the opposite $x$-coordinate.

That gives a two-step method for any angle:

1. Find the reference angle, which tells you the size of sine and cosine.
2. Find the quadrant, which tells you the signs.

In quadrant I, both coordinates are positive. In quadrant II, only sine (the $y$-coordinate) is positive. In quadrant III, both are negative, so tangent is positive. In quadrant IV, only cosine is positive.

## Example 1: An angle past 180 degrees

Find $\sin 240^\circ$ and $\cos 240^\circ$.

**Where is the point?** The angle $240^\circ$ is $60^\circ$ past $180^\circ$, so it lies in quadrant III with reference angle $60^\circ$.

**Size:** $\sin 60^\circ = \frac{\sqrt{3}}{2}$ and $\cos 60^\circ = \frac{1}{2}$.

**Signs:** Both coordinates are negative in quadrant III. So $\sin 240^\circ = -\frac{\sqrt{3}}{2}$ and $\cos 240^\circ = -\frac{1}{2}$.

Try one before going on. Find $\cos 315^\circ$ and $\tan 315^\circ$.

<details class="check"><summary>Show the answer</summary>

The angle $315^\circ$ is $45^\circ$ short of a full turn, so it's in quadrant IV with reference angle $45^\circ$. Cosine is positive there, so $\cos 315^\circ = \frac{\sqrt{2}}{2}$. Sine is negative, so $\sin 315^\circ = -\frac{\sqrt{2}}{2}$, and $\tan 315^\circ = -1$.

</details>

## Example 2: Using only the circle equation

An angle $\theta$ is in quadrant II and $\sin\theta = \frac{3}{5}$. Find $\cos\theta$.

**What do we know?** The point $(\cos\theta, \sin\theta)$ lies on the circle $x^2 + y^2 = 1$. So $\cos^2\theta + \frac{9}{25} = 1$, which gives $\cos^2\theta = \frac{16}{25}$.

**Which sign?** Quadrant II has negative $x$-coordinates, so $\cos\theta = -\frac{4}{5}$.

The equation $\cos^2\theta + \sin^2\theta = 1$ is the circle itself. You'll use it in nearly every trig problem.

## Example 3: Symmetry makes sums vanish

Find $\cos 10^\circ + \cos 50^\circ + \cos 130^\circ + \cos 170^\circ$.

**What's special about these angles?** The angle $170^\circ$ is the mirror image of $10^\circ$ across the $y$-axis, because the two add to $180^\circ$. Mirror images across the $y$-axis have opposite $x$-coordinates, so $\cos 170^\circ = -\cos 10^\circ$. In the same way, $\cos 130^\circ = -\cos 50^\circ$.

Everything cancels, and the sum is 0. Notice that we never needed the value of $\cos 10^\circ$, which isn't a nice number at all.

> **Tip:** The rules $\cos(180^\circ - \theta) = -\cos\theta$ and $\sin(180^\circ - \theta) = \sin\theta$ are reflections across the $y$-axis. You don't need to memorize them if you can picture the circle.

## Example 4: Angles bigger than a full turn

Find $\sin 750^\circ$ and $\cos(-60^\circ)$.

**What happens after a full turn?** The point comes back to where it started. So adding or subtracting $360^\circ$ changes nothing. Since $750 - 720 = 30$, we get $\sin 750^\circ = \sin 30^\circ = \frac{1}{2}$.

**What does a negative angle mean?** Turn clockwise instead. The point at $-60^\circ$ is the reflection of the point at $60^\circ$ across the $x$-axis. It has the same $x$-coordinate, so $\cos(-60^\circ) = \frac{1}{2}$, while $\sin(-60^\circ) = -\frac{\sqrt{3}}{2}$.

This shows two more facts: cosine is **even**, meaning $\cos(-\theta) = \cos\theta$, and sine is **odd**, meaning $\sin(-\theta) = -\sin\theta$.

<section data-box="deeper">

## Going deeper

**Radians.** The AMC 12 often measures angles in radians. A radian is the angle that cuts off an arc of length 1 on the unit circle. The whole circle has circumference $2\pi$, so a full turn is $2\pi$ radians, and $180^\circ$ is $\pi$ radians. To convert, multiply degrees by $\frac{\pi}{180}$. So $60^\circ$ is $\frac{\pi}{3}$ and $45^\circ$ is $\frac{\pi}{4}$.

Radians aren't only a different unit. They make arc length simple: an angle of $\theta$ radians on a circle of radius $r$ cuts off an arc of length $r\theta$, with no extra constants.

**A harder one:** How many angles $\theta$ with $0^\circ \le \theta < 360^\circ$ satisfy $\sin\theta = \cos\theta$?

<details class="check"><summary>Show the answer</summary>

The point has equal coordinates, so it lies on the line $y = x$. That line crosses the circle twice, at $45^\circ$ and at $225^\circ$. So there are 2 angles. In quadrant III, both coordinates equal $-\frac{\sqrt{2}}{2}$.

</details>

</section>

<section data-box="traps">

## Common traps

**Forgetting the sign.** The reference angle gives the size, not the sign. Students often write $\cos 150^\circ = \frac{\sqrt{3}}{2}$. Ask which quadrant the point is in before you write anything.

**Mixing up which coordinate is which.** Cosine is the $x$-coordinate, sine is the $y$-coordinate. Alphabetical order helps: $c$ comes before $s$, and $x$ comes before $y$.

**Calculator-mode thinking.** On a contest, you have no calculator. If an angle isn't a multiple of $30^\circ$ or $45^\circ$, the problem almost always wants symmetry or an identity, not a numerical value.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Angles larger than $90^\circ$, negative angles, or long sums of trig values at evenly spaced angles.

**Draw the circle.** A quick sketch with the point in the correct quadrant prevents most sign errors and takes five seconds.

**Look for pairs.** In a sum, pair angles that add to $180^\circ$ or $360^\circ$. They usually cancel or combine.

</section>

<section data-box="connections">

## Connections

This lesson builds on [why Pythagoras works](/pathway/triangles/02-pythagoras-why/) and the [distance formula and circles](/pathway/coordinate-geometry/02-distance-midpoints-circles/). Next, you'll use the circle to build [the core identities](/pathway/trigonometry/02-trig-identities/). Later, the same circle reappears as the home of [complex numbers in polar form](/pathway/complex-numbers/02-complex-plane/).

</section>

<section data-box="summary">

## Remember this

- The point at angle $\theta$ on the unit circle is $(\cos\theta, \sin\theta)$.
- Reference angle gives the size; the quadrant gives the sign.
- $\cos^2\theta + \sin^2\theta = 1$ is the circle's equation.
- $\cos(-\theta) = \cos\theta$, $\sin(-\theta) = -\sin\theta$, and adding $360^\circ$ changes nothing.
- $180^\circ$ equals $\pi$ radians.

</section>
