---
title: "Angles Inside a Circle"
summary: Learn why an angle at the edge of a circle is half of the angle at the center, and use it to find angles that seem to have no connection.
minutes: 10
---

Pick any two points on a circle, and look at them from a third point on the circle. Now slide that third point around the edge. The view keeps changing, and the lines keep moving, yet the angle between them stays exactly the same. This is one of the most surprising facts in geometry, and it unlocks a huge number of contest problems.

> **The big idea:** An angle with its corner on the circle, called an **inscribed angle**, is exactly **half** of the angle at the center that looks at the same arc. So every inscribed angle looking at the same arc is equal.

## Why it's half

![A circle with center O and points A, B and C on it. Angle AOB at the center measures 80 degrees. Angle ACB at the edge, looking at the same arc, measures 40 degrees, which is half as much.](/images/circles-inscribed-angle.svg)

The key is that **all radii are equal**. Draw a line from $C$ through the center $O$, on to the far side of the circle. This cuts the picture into two parts. In the left part, $OA$ and $OC$ are both radii, so triangle $OAC$ is isosceles, and its angles at $A$ and $C$ are equal. Call each of them $y$.

The outside-angle fact from [Level 2](/pathway/triangles/01-angle-chasing/) says that the outside angle at $O$ equals the sum of the two far inside angles, which is $y + y = 2y$. So at the center, the angle is $2y$. At the edge, it's $y$. That's exactly half. The same thing happens in the right part, and the two parts add up.

## Example 1: Using the rule

Points $A$, $B$, and $C$ are on a circle with center $O$, and angle $AOB$ is 80°. Point $C$ is on the longer arc. What's angle $ACB$?

**What do we know?** Angle $ACB$ sits on the circle, and it looks at the same arc as the center angle.

So angle $ACB$ is $80 \div 2 = 40$ degrees.

Try one. An inscribed angle measures 35°. What's the center angle looking at the same arc?

<details class="check"><summary>Show the answer</summary>

The center angle is twice as large: $2 \times 35 = 70$ degrees.

</details>

## Example 2: A diameter makes a right angle

Suppose $AB$ is a diameter, and $C$ is anywhere else on the circle. What's angle $ACB$?

**What's the center angle?** Since $AB$ goes straight through the center, the center angle is a straight line, or 180°.

**What's the inscribed angle?** It's half of that, which is **90°**. Every triangle with a diameter as one side and its third corner on the circle has a right angle!

**How to use it:** In a circle with a diameter of 13, $AB$ is a diameter and $AC = 5$. How long is $BC$? There's a right angle at $C$, so $5^2 + BC^2 = 13^2$, which means $BC = 12$. Whenever you see a diameter and a third point on the circle, look for the Pythagorean Theorem.

## Example 3: Opposite angles of a four-sided shape

Four points on a circle form a shape called a **cyclic quadrilateral**. What's special about it?

**Why do opposite angles add up to 180°?** Look at the opposite corners $A$ and $C$. Each one looks at one of the two arcs that join $B$ and $D$. Those two arcs together make the whole circle, so their center angles add up to 360°. The inscribed angles are half of those, so they add up to 180°.

**How to use it:** In a cyclic quadrilateral, angle $A$ is 70°. So angle $C$, across from it, is $180 - 70 = 110$ degrees.

## Example 4: Finding equal angles

Points $A$, $B$, $C$, and $D$ lie on a circle, in that order. Chords $AC$ and $BD$ cross at $E$. Angle $BAC$ is 35°, and angle $CED$ is 80°. What's angle $ACD$?

**What's equal?** Angle $BAC$ and angle $BDC$ both look at arc $BC$, so they're equal. So angle $BDC$ is 35°.

**What's the triangle?** In triangle $CED$, we know the angle at $E$ is 80° and the angle at $D$ is 35°. So the angle at $C$, which is angle $ACD$, is $180 - 80 - 35 = 65$ degrees.

Equal inscribed angles also give you similar triangles here: triangle $ABE$ and triangle $DCE$ have matching angles.

## Example 5: A contest-style question

Points $A$, $B$, and $C$ are on a circle with center $O$, and $C$ is on the longer arc from $A$ to $B$. Angle $OAB$ is 30°. What's angle $ACB$?

**What's the first step?** Draw the radii. $OA$ and $OB$ are both radii, so triangle $OAB$ is isosceles, and angle $OBA$ is also 30°.

**What's the center angle?** Angle $AOB$ is $180 - 30 - 30 = 120$ degrees.

**What's the question asking?** The inscribed angle is half of that: $120 \div 2 = 60$ degrees.

Drawing radii is the most common helper line in circle problems, because it instantly creates isosceles triangles.

<section data-box="traps">

## Common traps

**Using the wrong arc.** If $C$ is on the shorter arc from $A$ to $B$, it looks at the longer arc. For a center angle of 80°, the angle at $C$ would then be $(360 - 80) \div 2 = 140$ degrees, not 40°. Check which arc your point is looking at.

**Doubling when you should halve.** The center angle is the larger one. A quick way to remember it: the closer you stand to something, the larger it looks, and the center is closer than the edge.

**Assuming a chord is a diameter.** A right angle is only guaranteed if the chord really goes through the center. Don't assume it because the picture looks that way.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for points on a circle, especially with lines joining them.

**First moves:** Draw radii to the points. Mark all of the isosceles triangles this creates. Look for a diameter.

**Time:** About two minutes. It's angle chasing with one new rule.

**Trust the numbers, not the picture:** Contest figures aren't always to scale, so don't estimate angles from the picture unless the figure says that it's drawn to scale.

</section>

<section data-box="connections">

## Connections

This uses [angle chasing](/pathway/triangles/01-angle-chasing/) from Level 2 and [isosceles triangles](/pathway/basic-geometry/03-angle-facts/) from Level 1. Next, you'll study [chords and tangents](/pathway/similar-shapes-circles/03-chords-and-tangents/).

</section>

<section data-box="summary">

## Remember this

- Inscribed angle = half of the center angle on the same arc.
- Inscribed angles on the same arc are equal.
- A diameter makes a right angle anywhere on the circle.
- Opposite angles of a cyclic quadrilateral add up to 180°.
- Draw radii to make isosceles triangles.

</section>
