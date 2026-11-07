---
title: "Angle Chasing"
summary: Find unknown angles one step at a time using outside angles, parallel lines, and the angle sum of any polygon.
minutes: 12
---

You've learned that a triangle's angles add up to 180°. But contest diagrams usually contain several triangles and lines, with a question mark on one angle and only a couple of numbers given. It might feel like there's not enough information. There almost always is. You don't need to see the path right away: you only have to find one more angle, and then one more.

> **The big idea:** Don't look for the answer straight away. Find **anything you can**, write it on your picture, and see what that unlocks. This is called **angle chasing**.

## Why the extra facts are true

You already know about straight lines, points, and triangles. Here are three more facts, each with a reason.

**The outside angle.** Extend one side of a triangle, and you get an angle outside it. That outside angle equals the sum of the two inside angles that are farthest from it. Why? The outside angle and the third inside angle make a straight line, so they add up to 180°. All three inside angles also add up to 180°. So the outside angle must equal the other two inside angles together.

**Parallel lines.** Two lines are **parallel** if they never meet, like railroad tracks. When a line crosses two parallel lines, it crosses both at the same tilt, so it makes the same angles at each crossing.

![Two parallel lines crossed by a slanted line. At each crossing, the matching corner measures 70 degrees, and the angle beside it measures 110 degrees.](/images/triangles-parallel-lines.svg)

Any two of these angles are either **equal** or **add up to 180°**. There are no other possibilities.

**Polygons.** Any polygon can be cut into triangles from one corner. A shape with $n$ sides becomes $n - 2$ triangles, so its angles add up to $(n - 2) \times 180$ degrees. A pentagon has 5 sides, which makes 3 triangles, so its angles add up to $3 \times 180 = 540$ degrees.

Let's test this with a shape we know. A square has 4 sides, which gives 2 triangles and 360°. And four 90° corners do add up to 360°. It works.

## Example 1: Regular polygons

A **regular** polygon has all of its sides and angles equal. What's each angle of a regular hexagon?

**What's the plan?** A hexagon has 6 sides, so the total is $(6 - 2) \times 180 = 720$ degrees. Share that among 6 equal angles: $720 \div 6 = 120$ degrees.

Try it yourself. What's each angle of a regular octagon, which has 8 sides?

<details class="check"><summary>Show the answer</summary>

The total is $(8 - 2) \times 180 = 1080$ degrees. Each of the 8 equal angles is $1080 \div 8 = 135$ degrees.

</details>

## Example 2: Outside angles of a polygon

Walk around a regular pentagon, turning at each corner. By the time you return to where you started, you've turned all the way around once. So all of the **outside** angles of any polygon add up to 360°. For a regular pentagon, each is $360 \div 5 = 72$ degrees, and the inside angle is $180 - 72 = 108$ degrees.

This is often the quickest way to find the angle of a regular polygon.

## Example 3: A chase through parallel lines

Lines $m$ and $n$ are parallel. A triangle has its top corner on line $m$ and its bottom side on line $n$. The two bottom angles are 50° and 70°. The top corner makes three angles along line $m$: one on the left, the triangle's top angle, and one on the right. What's the angle on the left?

**What can we find?** The top angle of the triangle is $180 - 50 - 70 = 60$ degrees.

**What about the parallel lines?** The left side of the triangle crosses both lines. Its angle with line $m$, on the left of the top corner, equals its angle with line $n$, inside the triangle, because a line crosses two parallel lines at the same tilt. So the left angle is 50°.

**Check:** Similarly, the right one is 70°. On line $m$, $50 + 60 + 70 = 180$. This is also another proof that a triangle's angles add up to 180°!

## Example 4: A contest-style question

In triangle $ABC$, sides $AB$ and $AC$ are equal, and angle $A$ is 36°. A line from $B$ cuts angle $B$ exactly in half, and meets side $AC$ at $D$. What's angle $BDC$?

**Draw it.** Fill in what you can.

- **Angles $B$ and $C$:** Since $AB = AC$, they're equal. They share $180 - 36 = 144$ degrees, so each is 72°.
- **Half of $B$:** Each half of angle $B$ is $72 \div 2 = 36$ degrees.
- **Triangle $BDC$:** We now know angle $DBC$ is 36° and angle $C$ is 72°. So angle $BDC$ is $180 - 36 - 72 = 72$ degrees.

Notice something neat: triangles $ABD$ and $BDC$ are both isosceles. Finding angles often reveals equal sides too.

<section data-box="deeper">

## Going deeper

Exterior angles make questions about regular polygons fast, including questions about what's impossible.

**A harder one:** Each interior angle of a regular polygon is $150^\circ$. How many sides does it have?

**The slow way:** Solve $\frac{(n-2) \times 180}{n} = 150$.

**The fast way:** The interior and exterior angles at each corner add up to $180^\circ$, so each exterior angle is $30^\circ$. The exterior angles always add up to $360^\circ$. So there are $360 \div 30 = 12$ sides.

**Can each interior angle be $125^\circ$?** Then each exterior angle would be $55^\circ$. But $360 \div 55$ isn't a whole number, so **no regular polygon** has that angle. You can answer these questions without ever drawing the shape.

**Why do exterior angles always add up to $360^\circ$?** Imagine walking around the shape. At each corner, you turn by the exterior angle. When you get back to the start, you've turned exactly one full circle.

Try this. Each interior angle of a regular polygon is $156^\circ$. How many sides does it have?

<details class="check"><summary>Show the answer</summary>

Each exterior angle is $180 - 156 = 24$ degrees. So there are $360 \div 24 = 15$ sides.

</details>

</section>

<section data-box="traps">

## Common traps

**Assuming lines are parallel.** The equal-angle facts only work for parallel lines. Don't use them unless the problem says so, or shows arrow marks on the lines.

**Using $n$ instead of $n - 2$.** A hexagon doesn't have $6 \times 180$ degrees. You can test this with a triangle: 3 sides, but only 1 triangle, not 3.

**Assuming that a polygon is regular.** You can only divide the total by the number of sides if every angle is equal. The problem has to say "regular" or show matching marks.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Any diagram with degree marks, and a question mark on an angle.

**Write on the figure.** Even if you aren't sure how it helps, each angle you find is progress.

**Look for hidden isosceles triangles.** Equal sides mean equal angles, and equal angles mean equal sides. Radii of a circle often create them.

**Time:** Two minutes. If you're stuck after that, put a letter $x$ on an angle you don't know, and chase using that.

</section>

<section data-box="connections">

## Connections

This builds on [the three angle facts](/pathway/basic-geometry/03-angle-facts/). Angle chasing is the first step toward [similar triangles](/pathway/triangles/04-similar-triangles/), and it's key to circle geometry in Level 3.

</section>

<section data-box="summary">

## Remember this

- Find anything you can, and write it on the figure.
- Outside angle = the sum of the two far inside angles.
- Parallel lines: angles are equal or add up to 180°.
- Polygon angles add up to $(n - 2) \times 180$ degrees.
- Outside angles of a polygon add up to 360°.

</section>
