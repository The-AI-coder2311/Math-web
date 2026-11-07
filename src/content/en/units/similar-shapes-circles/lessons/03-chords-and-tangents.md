---
title: "Chords and Tangents"
summary: Find lengths in circles using right angles at tangent points, equal tangents, and the products of pieces of crossing chords.
minutes: 12
---

Two chords cross inside a circle. One is cut into pieces of 3 and 8, and the other has a piece of 4. How long is its other piece? It seems as if you'd need to know the size of the circle, and where exactly the chords sit. You don't. There's a rule so neat that it barely feels fair, and it comes from similar triangles you can find in seconds.

> **The big idea:** A radius meets a **tangent** at a right angle. Two tangents from one point are **equal**. And when chords cross, the **products of their pieces are equal**.

A **chord** is a segment joining two points on a circle. A **tangent** is a line that touches the circle at exactly one point.

## Why a tangent makes a right angle

Imagine a line touching the circle at point $T$. Every other point on the line is outside the circle, so it's farther from the center than $T$ is. That makes $T$ the closest point on the line to the center. And the shortest way from a point to a line always meets the line at a right angle.

![A circle with center O and radius 5. A tangent line touches the circle at T, and runs to an outside point P, 12 units from T. The radius OT meets the tangent at a right angle, so triangle OTP is a right triangle with hypotenuse OP equal to 13.](/images/circles-tangent-radius.svg)

So whenever a problem mentions a tangent, **draw the radius to the point where it touches**. You now have a right triangle.

## Example 1: A tangent length

A circle has a radius of 5. Point $P$ is 13 away from the center. What's the length of the tangent from $P$ to the circle?

**What do we know?** Radius $OT$ is 5, and $OP$ is 13. There's a right angle at $T$, and $OP$ is the hypotenuse.

$$PT^2 = 13^2 - 5^2 = 169 - 25 = 144$$

So $PT = 12$, which is the 5-12-13 triple.

Try one. A chord of length 16 sits in a circle of radius 10. How far is it from the center? (A line from the center that meets a chord at a right angle cuts the chord in half.)

<details class="check"><summary>Show the answer</summary>

Half of the chord is 8. The radius is the hypotenuse, so the distance $d$ has $d^2 = 10^2 - 8^2 = 36$. So $d = 6$.

</details>

## Example 2: Two tangents are equal

From a point $P$, two tangents touch a circle at $A$ and $B$. Why is $PA$ equal to $PB$?

**What's similar?** Draw radii to $A$ and $B$, and draw $PO$. Both triangles have a right angle, share the side $PO$, and have equal radii. So they're mirror images, and $PA = PB$.

**How to use it:** A circle sits inside triangle $ABC$, touching all three sides. Let's say $AB = 13$, $BC = 14$, and $CA = 15$. How long is the tangent from $A$?

Let the tangent from $A$ be $x$, and use the fact that each corner has two equal tangents. Then the piece of $AB$ next to $B$ is $13 - x$, and the piece of $AC$ next to $C$ is $15 - x$. Those two pieces make up side $BC$:

$$(13 - x) + (15 - x) = 14$$

So $28 - 2x = 14$, and $x = 7$.

## Example 3: Crossing chords

![Two chords of a circle crossing at point E. Chord AB is cut into pieces 3 and 8. Chord CD is cut into pieces 4 and 6. The products of the pieces match, since 3 times 8 and 4 times 6 are both 24.](/images/circles-crossing-chords.svg)

**Why do the products match?** Draw $AC$ and $BD$. Then angle $CAB$ and angle $CDB$ look at the same arc, so they're equal. Similarly, angle $ACD$ and angle $ABD$ are equal. So triangles $AEC$ and $DEB$ are similar. Their sides give:

$$\frac{AE}{DE} = \frac{CE}{BE}$$

Cross-multiplying gives $AE \times BE = CE \times DE$.

**Now the opening problem:** $3 \times 8 = 4 \times$ (the other piece). So the other piece is $24 \div 4 = 6$.

## Example 4: From outside the circle

A line from a point $P$ outside a circle passes through the circle, hitting it at $A$ and then at $B$. Another line from $P$ is tangent at $T$. Then:

$$PT^2 = PA \times PB$$

**Why?** Similar triangles again: triangles $PTA$ and $PBT$ share the angle at $P$, and a fact about tangents makes another pair of angles match. You can think of it as two chords again, where the tangent is a line in which both pieces have become the same length.

**How to use it:** Suppose $PA = 4$ and $AB = 5$. Careful here: $PB$ is the whole distance, which is $4 + 5 = 9$. So $PT^2 = 4 \times 9 = 36$, and $PT = 6$.

All of these rules are called **power of a point**.

## Example 5: A contest-style question

Chord $AB$ is cut into two pieces by a diameter, at right angles, at point $E$. The piece of the diameter from $E$ to one end is 2, and $AB$ has a length of 12. What's the radius of the circle?

**What do we know?** A diameter at a right angle to a chord cuts it in half, so $AE = EB = 6$.

**What's the rule?** Use crossing chords. Let the other piece of the diameter be $y$. Then $6 \times 6 = 2 \times y$, so $y = 18$.

**What's the question asking?** The whole diameter is $2 + 18 = 20$, so the radius is 10.

**Check with Pythagoras:** The center is $10 - 2 = 8$ away from the chord, and half of the chord is 6. The radius should be the hypotenuse of a 6-8 right triangle, which is 10. It matches.

<section data-box="deeper">

## Going deeper

Four points on a circle follow one more rule, and it contains the Pythagorean Theorem as a special case.

**Ptolemy's theorem:** If $A$, $B$, $C$, and $D$ lie in order on a circle, then:

$AC \times BD = AB \times CD + AD \times BC$

In words: the product of the diagonals equals the sum of the products of the opposite sides.

**Try it on a rectangle.** All of a rectangle's corners lie on a circle. With sides of 5 and 12, each diagonal is $d$:

$d \times d = 5 \times 5 + 12 \times 12$

That's the Pythagorean Theorem, and $d = 13$!

**A harder one:** Triangle $ABC$ is equilateral, and it sits inside a circle. Point $P$ lies on the arc between $B$ and $C$. If $PB = 3$ and $PC = 5$, how long is $PA$?

**Use Ptolemy on $A$, $B$, $P$, $C$.** Let each side of the triangle be $s$:

$PA \times s = PB \times s + PC \times s$

Each $s$ cancels, leaving $PA = PB + PC = 8$. You never needed to know $s$.

Try this. In the same setup, $PB = 4$ and $PC = 7$. How long is $PA$?

<details class="check"><summary>Show the answer</summary>

$PA = PB + PC = 4 + 7 = 11$.

</details>

</section>

<section data-box="traps">

## Common traps

**Using the outside piece instead of the whole.** From outside the circle, it's $PA \times PB$, where $PB$ includes $PA$. With $PA = 4$ and $AB = 5$, using $4 \times 5$ gives the wrong answer.

**Forgetting the right angle.** Students sometimes treat a tangent like any other line. Draw the radius to the point of contact, every time.

**Treating the tangent as the hypotenuse.** The distance from the center to the outside point is the hypotenuse, since it's across from the right angle. A tangent is a leg.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "tangent," "chord," or a circle touching the sides of a shape.

**First moves:** Draw radii to tangent points. From the center, drop lines at right angles to chords.

**Pythagorean triples show up:** Contest writers tend to choose 3-4-5 and 5-12-13 here.

**Time:** Under two minutes.

</section>

<section data-box="connections">

## Connections

This uses [helper lines](/pathway/triangles/03-helper-lines/), [the Pythagorean Theorem](/pathway/triangles/02-pythagoras-why/), and [inscribed angles](/pathway/similar-shapes-circles/02-inscribed-angles/). Next, you'll [combine all of these](/pathway/similar-shapes-circles/04-mixed-circle-problems/).

</section>

<section data-box="summary">

## Remember this

- A radius meets a tangent at a right angle.
- Two tangents from one point are equal.
- A line from the center at a right angle halves a chord.
- Crossing chords: the products of the pieces match.
- From outside: $PT^2 = PA \times PB$, using the whole length.

</section>
