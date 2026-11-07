---
title: "Similar Triangles"
summary: Spot triangles with the same shape, use scale factors to find lengths you can't measure, and see why area grows by the square of the scale factor.
minutes: 12
---

How tall is a tree that you can't climb? Stand a 2-meter pole upright, and measure its shadow: 3 meters. At the same moment, the tree's shadow is 30 meters. With only that information, and without leaving the ground, you can find the tree's height. People have used this trick for thousands of years.

> **The big idea:** Two triangles are **similar** if they have the same shape, even if they aren't the same size. All of their angles match, and all of their sides are multiplied by the same number, called the **scale factor**.

## Why matching angles are enough

If two angles of one triangle match two angles of another, then the third angles must match too, since all three add up to 180°. So **two matching angles are enough** to know that the triangles are similar.

And why do the sides scale together? Picture enlarging a photo: if the width doubles, then the height doubles too, and all of the angles stay the same. That's what similar means.

For the tree: the sun's rays come in at the same angle for both the pole and the tree, and both stand straight up. So the two triangles have two matching angles. The tree's shadow is 10 times as long, since $30 \div 3 = 10$. So the tree is 10 times as tall: $2 \times 10 = 20$ meters.

## Example 1: Matching up the sides

Triangle $ABC$ is similar to triangle $DEF$, with the corners in that order. $AB = 4$, $BC = 6$, and $DE = 10$. What's $EF$?

**What do we know?** The order of the letters tells us that $AB$ matches $DE$, and $BC$ matches $EF$.

**What's the scale factor?** $10 \div 4 = 2.5$.

**What's the question asking?** $EF = 6 \times 2.5 = 15$.

Try this one. A 4-foot post casts a 6-foot shadow. At the same moment, a flagpole casts a 21-foot shadow. How tall is the flagpole?

<details class="check"><summary>Show the answer</summary>

The scale factor is $21 \div 6 = 3.5$, so the flagpole is $4 \times 3.5 = 14$ feet tall.

</details>

## Example 2: A line parallel to one side

In triangle $ABC$, a line parallel to $BC$ crosses $AB$ at $D$ and $AC$ at $E$. If $AD = 4$, $DB = 6$, and $BC = 15$, what's $DE$?

**Why are there similar triangles?** Parallel lines make equal angles, so angle $ADE$ equals angle $ABC$. Both triangles also share the angle at $A$. That's two matching angles, so triangle $ADE$ is similar to triangle $ABC$.

**What's the scale factor?** Be careful here. The whole side is $AB = 4 + 6 = 10$, not 6. So going from the big triangle to the small one, the scale factor is $\frac{4}{10}$, or 0.4.

**What's the question asking?** $DE = 15 \times 0.4 = 6$.

## Example 3: Area scales by the square

If the sides are doubled, what happens to the area?

![Two similar triangles. The small one has base 3 and height 2, and area 3. The large one has base 6 and height 4, so every length is doubled. Its area is 12, which is 4 times as much.](/images/triangles-similar.svg)

The base doubles, **and** the height doubles. So the area is multiplied by $2 \times 2 = 4$. In general:

> If lengths are multiplied by $k$, then areas are multiplied by $k^2$.

**How to use it:** Two similar triangles have areas of 9 and 25. The small one has a side of 6. How long is the matching side of the large one?

**What's the plan?** The area ratio is 25 to 9, so the length ratio is 5 to 3, since $5^2 = 25$ and $3^2 = 9$. If 3 parts make 6, then one part is 2, and 5 parts make 10.

## Example 4: Hidden in a right triangle

A right triangle has legs of 6 and 8. A height is drawn from the right angle to the hypotenuse. This creates two smaller triangles. How long is the shorter piece of the hypotenuse?

**What do we know?** The hypotenuse is 10. In the last lesson, you found that the height is 4.8.

**What's similar?** The small triangle on the short side shares an angle with the big triangle, and both have a right angle. So they're similar. The small triangle has a hypotenuse of 6, which is the matching side of the big triangle's hypotenuse of 10. So the scale factor is $\frac{6}{10}$, or 0.6.

**What's the question asking?** The short piece matches the big triangle's short leg of 6. So its length is $6 \times 0.6 = 3.6$.

**Check:** Use Pythagoras on the small triangle: $3.6^2 + 4.8^2 = 12.96 + 23.04 = 36$, which is $6^2$. It works.

## Example 5: A contest-style question

In triangle $ABC$, a line parallel to $BC$ cuts off a small triangle at the top. The line goes through $D$ on $AB$, with $AD = 2$ and $DB = 3$. The whole triangle $ABC$ has an area of 50. What's the area of the small triangle?

**What's the scale factor?** $AB = 2 + 3 = 5$, so the small triangle is $\frac{2}{5}$ the size of the big one in length.

**Area scales by the square:** $\frac{2}{5} \times \frac{2}{5} = \frac{4}{25}$.

**What's the question asking?** The area is $\frac{4}{25} \times 50 = 8$.

<section data-box="deeper">

## Going deeper

When you know an area ratio, take its square root to get the length ratio.

**A harder one:** A triangle has a height of 12. A line parallel to the base cuts off a small triangle at the top, with $\frac{1}{9}$ of the original area. How far is the line from the base?

**Which triangles are similar?** The small top triangle and the whole triangle, since the parallel line makes matching angles equal.

**What's the length ratio?** Area scales by the square of the length ratio. If the area ratio is $\frac{1}{9}$, then the length ratio is $\frac{1}{3}$.

**What's the question asking?** The small triangle's height is $12 \times \frac{1}{3} = 4$. So the line is $12 - 4 = 8$ away from the base.

**The trap:** Cutting off $\frac{1}{9}$ of the area doesn't mean cutting $\frac{1}{9}$ of the height. In fact, the piece on the bottom holds $\frac{8}{9}$ of the area with only $\frac{2}{3}$ of the height.

Try this. A triangle has a height of 12. A parallel line cuts off a top triangle with $\frac{4}{9}$ of the area. How far is the line from the base?

<details class="check"><summary>Show the answer</summary>

The length ratio is $\frac{2}{3}$, so the top triangle's height is 8. The line is $12 - 8 = 4$ away from the base.

</details>

</section>

<section data-box="traps">

## Common traps

**Using the wrong scale factor.** In Example 2, using $\frac{4}{6}$ compares $AD$ with $DB$, which aren't matching sides. You need to compare the small triangle's side, 4, with the big triangle's whole side, 10.

**Scaling area like length.** If lengths triple, then the area becomes 9 times as much, not 3 times.

**Adding, not multiplying.** If the shadow is 27 meters longer, the tree isn't 27 meters taller. Similar shapes multiply. This is the same trap as in [scaling](/pathway/fractions-ratios/03-rates-and-scaling/).

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for parallel lines inside a triangle, shadows, a height to a hypotenuse, or two triangles that share an angle.

**Write the letters in matching order.** This keeps the correct sides paired up.

**Redraw the triangles:** If they overlap, sketch them separately, with the same direction. It's quick, and it prevents mix-ups.

**Time:** Two minutes.

</section>

<section data-box="connections">

## Connections

This uses [ratios](/pathway/fractions-ratios/02-ratios-as-boxes/) and [scaling](/pathway/fractions-ratios/03-rates-and-scaling/). Level 3's [Similar Shapes & Circle Theorems](/pathway/similar-shapes-circles/) unit extends these ideas to circles.

</section>

<section data-box="summary">

## Remember this

- Two matching angles make two triangles similar.
- All sides share one scale factor.
- Compare matching sides, using the whole side.
- Lengths times $k$ means areas times $k^2$.
- Parallel line in a triangle? Look for similar triangles.

</section>
