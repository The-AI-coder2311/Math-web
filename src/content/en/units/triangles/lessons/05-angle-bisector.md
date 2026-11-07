---
title: "The Angle Bisector Theorem"
summary: A line that cuts a triangle's angle in half splits the opposite side in the same ratio as the two nearby sides. Learn why, and how to use it.
minutes: 11
---

Triangle $ABC$ has $AB = 6$, $AC = 9$, and $BC = 10$. A line from $A$ cuts the angle at $A$ exactly in half, and hits side $BC$ at a point $D$. How long is $BD$? Many people guess 5, thinking that the line must cut the side in half too. But it doesn't, unless the two nearby sides are equal. The real answer comes from a beautifully simple ratio.

> **The big idea:** A line that cuts an angle of a triangle in half, called an **angle bisector**, splits the opposite side in the same ratio as the two sides next to that angle: $\frac{BD}{DC} = \frac{AB}{AC}$.

![Triangle ABC with AB equal to 6, AC equal to 9, and BC equal to 10. A line from A cuts the angle at A into two equal angles, and meets side BC at D. It splits BC into BD equal to 4 and DC equal to 6.](/images/triangles-angle-bisector.svg)

The longer nearby side gets the longer piece. Think of each side as "pulling" its share.

## Why it works

We'll find the ratio of two areas in two different ways. The line $AD$ splits the big triangle into triangles $ABD$ and $ACD$.

**First way:** Use $BD$ and $DC$ as the bases. Both triangles have the same height, which is the distance from $A$ down to line $BC$. So their areas are in the ratio of their bases:

$$\frac{\text{area } ABD}{\text{area } ACD} = \frac{BD}{DC}$$

**Second way:** Use $AB$ and $AC$ as the bases. Every point on an angle bisector is the same distance from both sides of the angle. So $D$ is equally far from $AB$ and $AC$, and the two triangles have equal heights this time too:

$$\frac{\text{area } ABD}{\text{area } ACD} = \frac{AB}{AC}$$

Both fractions equal the same ratio of areas, so they equal each other. That's the theorem.

## Example 1: The opening problem

**What do we know?** $AB = 6$ and $AC = 9$, so $BD$ to $DC$ is 6 to 9, which is 2 to 3.

**What's the plan?** Use boxes, as you did with [ratios](/pathway/fractions-ratios/02-ratios-as-boxes/). Side $BC$ is 10, and it splits into $2 + 3 = 5$ boxes, so each box holds 2.

So $BD = 2 \times 2 = 4$, and $DC = 3 \times 2 = 6$.

**Check:** $4 + 6 = 10$, and $\frac{4}{6} = \frac{6}{9}$.

Try one. In triangle $ABC$, $AB = 4$, $AC = 8$, and $BC = 9$. The bisector of angle $A$ meets $BC$ at $D$. How long is $BD$?

<details class="check"><summary>Show the answer</summary>

The ratio is 4 to 8, which is 1 to 2. That makes 3 boxes on a side of 9, so each box holds 3. Since $BD$ goes with the side $AB$, it's 1 box, and $BD = 3$.

</details>

## Example 2: Finding a missing side

The bisector of angle $A$ meets $BC$ at $D$, with $BD = 3$ and $DC = 5$. If $AB = 6$, what's $AC$?

**What's the plan?** Set up the ratio, keeping each piece with its nearby side:

$$\frac{3}{5} = \frac{6}{AC}$$

**Solve it:** The top doubled, so the bottom doubles too. So $AC = 10$.

**Does a triangle like this exist?** The sides would be 6, 10, and 8, and each one is shorter than the sum of the other two. So yes.

## Example 3: When the sides are equal

In an isosceles triangle with $AB = AC$, the ratio is 1 to 1. So the bisector cuts $BC$ exactly in half.

That's why the height of an isosceles triangle, which you've seen in [helper lines](/pathway/triangles/03-helper-lines/), lands at the middle of the base. In an isosceles triangle, the same line does all of these jobs. In any other triangle, the angle bisector and the line to the middle of the opposite side are two different lines.

## Example 4: With a right triangle

A right triangle has its right angle at $C$, with $AC = 6$, $BC = 8$, and $AB = 10$. The bisector of angle $A$ meets $BC$ at $D$. How long is $AD$?

**Which sides are next to angle $A$?** They're $AC = 6$ and $AB = 10$. The ratio is 3 to 5.

**Split the opposite side:** The opposite side is $BC = 8$. It splits into 8 boxes, so each box holds 1. The piece next to $C$ goes with $AC$, so $CD = 3$ and $DB = 5$.

**Now use the right angle:** Triangle $ACD$ has legs of 6 and 3:

$$AD^2 = 6^2 + 3^2 = 45$$

So $AD = \sqrt{45} = 3\sqrt{5}$.

## Example 5: A contest-style question

The bisector of angle $A$ splits $BC$ into $BD = 4$ and $DC = 6$. The perimeter of triangle $ABC$ is 30. What's the length of $AC$?

**What do we know?** Side $BC$ is $4 + 6 = 10$. So the other two sides add up to $30 - 10 = 20$.

**What's the ratio?** $AB$ to $AC$ is the same as 4 to 6, which is 2 to 3.

**Use boxes:** There are 5 boxes in a total of 20, so each box holds 4. So $AB = 8$ and $AC = 12$.

**Check:** $\frac{8}{12} = \frac{4}{6}$, and $8 + 12 + 10 = 30$.

<section data-box="deeper">

## Going deeper

The three angle bisectors of a triangle all meet at one point, the **incenter**. The theorem tells you how that point splits each bisector.

**A harder one:** In triangle $ABC$, $AB = 6$, $AC = 9$, and $BC = 10$. The bisector from $A$ meets $BC$ at $D$. The bisector from $B$ crosses $AD$ at $I$. What's the ratio of $AI$ to $ID$?

**Find a triangle to use.** Look at triangle $ABD$. The line $BI$ bisects its angle at $B$, and it hits the side $AD$ at $I$. So the theorem applies inside this smaller triangle:

$\frac{AI}{ID} = \frac{AB}{BD}$

**What's $BD$?** From the opening problem, $BD = 4$.

**The answer:** $\frac{AI}{ID} = \frac{6}{4} = \frac{3}{2}$.

**A shortcut:** That ratio is always the sum of the two nearby sides over the opposite side: $\frac{6 + 9}{10} = \frac{3}{2}$. It matches.

Using a theorem inside a smaller triangle is a common contest move. Keep an eye out for it.

Try this. In triangle $ABC$, $AB = 4$, $AC = 8$, and $BC = 9$. What's the ratio of $AI$ to $ID$?

<details class="check"><summary>Show the answer</summary>

Here, $BD = 3$, so $\frac{AI}{ID} = \frac{4}{3}$. The shortcut agrees: $\frac{4 + 8}{9} = \frac{4}{3}$.

</details>

</section>

<section data-box="traps">

## Common traps

**Thinking that the side is cut in half.** That's only true when the two nearby sides are equal. A line that goes to the middle of a side is called a median, and it's usually a different line.

**Pairing the wrong pieces.** $BD$ touches $B$, so it goes with side $AB$. Check by looking at your drawing: each piece shares a corner with its side.

**Using the side across from the angle.** The ratio uses the two sides that form the angle. In Example 4, using $BC$ in the ratio would give a wrong answer.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "bisects," "bisector," or two equal angles marked at one corner.

**Set it up as boxes:** Boxes are often faster than cross-multiplying, especially if you know the whole side.

**Combine it:** After you find the pieces, you can often use the Pythagorean Theorem or a ratio of areas for the next step.

**Time:** About a minute.

</section>

<section data-box="connections">

## Connections

This uses the ideas from [similar triangles](/pathway/triangles/04-similar-triangles/) and [triangle area](/pathway/basic-geometry/02-triangle-area/). It comes up again in [Similar Shapes & Circle Theorems](/pathway/similar-shapes-circles/) in Level 3.

</section>

<section data-box="summary">

## Remember this

- $\frac{BD}{DC} = \frac{AB}{AC}$.
- Each piece goes with the side it touches.
- Longer side, longer piece.
- Only equal sides make equal pieces.
- Use boxes when you know the whole side.

</section>
