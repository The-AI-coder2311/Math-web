---
title: "Heron's Formula and the Circle Inside"
summary: Find a triangle's area from its three sides alone, then use that area to find any height and the radius of the circle inside the triangle.
minutes: 12
---

A triangle has sides of 9, 10, and 17. What's its area? There's no right angle, and nobody has given you a height. You could drop a height and set up equations, and that would take a while. Yet about 2,000 years ago, Heron of Alexandria wrote down a formula that gets the area from the three sides alone, and for this triangle, it's a neat 36.

> **The big idea:** Let $s$ be **half the perimeter**. Then the area is $A = \sqrt{s(s-a)(s-b)(s-c)}$. Once you have the area, the fact that $A = rs$ gives you the radius $r$ of the circle inside the triangle.

## Does Heron's formula really work?

The full proof uses the Pythagorean Theorem and a long stretch of algebra, so we won't go through it here. But we can test it on triangles where we know the area.

**A 3-4-5 triangle:** Half the perimeter is $s = 6$. The formula gives:

$$A = \sqrt{6 \times 3 \times 2 \times 1} = \sqrt{36} = 6$$

The usual way gives $\frac{1}{2} \times 3 \times 4 = 6$. They match.

**A side that's too long:** The formula also knows when a triangle can't exist. Try sides of 2, 3, and 10. Half the perimeter is 7.5, and $7.5 - 10$ is negative. A negative number under the square root means that there's no such triangle. That fits what you know, since 2 and 3 can't reach across a side of 10.

**A flat triangle:** Now try sides of 2, 3, and 5. Half the perimeter is 5, and $5 - 5 = 0$. So the area is 0, which is right: those three sides lie flat in a line. Tests like these won't prove a formula, but they do show that it behaves sensibly in the extreme cases.

## Example 1: The opening problem

Sides of 9, 10, and 17.

**Find $s$:** The perimeter is 36, so $s = 18$.

**Find the three differences:** $18 - 9 = 9$, $18 - 10 = 8$, and $18 - 17 = 1$.

**Apply the formula:**

$$A = \sqrt{18 \times 9 \times 8 \times 1} = \sqrt{1296} = 36$$

**A tip for big numbers:** Don't multiply it all out. Look for squares as you go: $18 \times 8 = 144$, and $144 \times 9 = 12^2 \times 3^2$. So the square root is $12 \times 3 = 36$.

Try one. What's the area of a triangle with sides 5, 5, and 6?

<details class="check"><summary>Show the answer</summary>

Here, $s = 8$, and the differences are 3, 3, and 2. So $A = \sqrt{8 \times 3 \times 3 \times 2} = \sqrt{144} = 12$. You can check that: the height to the side of 6 splits the triangle into two 3-4-5 triangles, and $\frac{1}{2} \times 6 \times 4 = 12$.

</details>

## Example 2: Finding a height

A triangle has sides of 13, 14, and 15. How long is the height to the side of 14?

**Find the area first:** Here, $s = 21$, and the differences are 8, 7, and 6.

$$A = \sqrt{21 \times 8 \times 7 \times 6} = \sqrt{7056} = 84$$

**Now use the usual area formula backward:** $84 = \frac{1}{2} \times 14 \times h$, so $h = 12$.

This is the power of finding one area in two different ways. Heron gives you the number, and $\frac{1}{2}bh$ turns it into a height.

## Example 3: The circle inside

![A right triangle with a circle inside it that touches all three sides. Lines from the center of the circle to the three corners split the triangle into three smaller triangles. A radius r runs from the center to each side, at a right angle, so r is the height of each small triangle.](/images/circles-inradius-split.svg)

**Why is $A = rs$?** Connect the center of the circle to each corner. That splits the triangle into 3 smaller triangles. A radius meets each side at a right angle, as you learned in [Chords and Tangents](/pathway/similar-shapes-circles/03-chords-and-tangents/). So each small triangle has a height of $r$, and its base is one side of the big triangle:

$$A = \frac{1}{2}ra + \frac{1}{2}rb + \frac{1}{2}rc = r \times \frac{a + b + c}{2} = rs$$

**How to use it:** For the triangle with sides 13, 14, and 15, we have $A = 84$ and $s = 21$. So $r = \frac{84}{21} = 4$.

## Example 4: A right triangle

What's the radius of the circle inside a 6-8-10 triangle?

**Skip Heron here.** With a right angle, the area is $\frac{1}{2} \times 6 \times 8 = 24$. And $s = 12$. So $r = \frac{24}{12} = 2$.

**A shortcut for right triangles:** $r = \frac{a + b - c}{2}$, where $c$ is the hypotenuse. Here, that's $\frac{6 + 8 - 10}{2} = 2$. It matches.

## Example 5: A contest-style question

A triangle has sides of 10, 17, and 21. What's the length of its shortest height?

**Which height is shortest?** Since $A = \frac{1}{2}bh$ is the same for all three sides, the longest side has the shortest height. So we want the height to the side of 21.

**Find the area:** Here, $s = 24$, and the differences are 14, 7, and 3.

$$A = \sqrt{24 \times 14 \times 7 \times 3} = \sqrt{7056} = 84$$

**Find the height:** $84 = \frac{1}{2} \times 21 \times h$, so $h = 8$.

**Check:** A height of 8 splits this triangle into a 6-8-10 triangle and an 8-15-17 triangle, and $6 + 15 = 21$. It all fits.

<section data-box="deeper">

## Going deeper

Heron's formula gets simpler if you think about the tangent lengths from each corner.

**The tangent lengths:** The circle inside a triangle touches each side. Two tangents from one corner are equal, so call those lengths $x$, $y$, and $z$, one for each corner. Each side is the sum of two of them.

Half the perimeter is $s = x + y + z$. And look at the differences: $s - a$, where $a = y + z$, is exactly $x$! So Heron's formula becomes:

$A = \sqrt{(x + y + z) \times x \times y \times z}$

**A harder one:** The circle inside a triangle cuts the sides into pieces, with tangent lengths of 2, 3, and 10. What's the area, and what's the radius?

**The sides** are $2 + 3 = 5$, $3 + 10 = 13$, and $2 + 10 = 12$. Here, $s = 15$.

**The area:** $\sqrt{15 \times 2 \times 3 \times 10} = \sqrt{900} = 30$.

**The radius:** $r = \frac{30}{15} = 2$.

**Check:** It's a 5-12-13 right triangle, with an area of $\frac{1}{2} \times 5 \times 12 = 30$.

So the tangent lengths are the natural way to see a triangle's sides.

Try this. The tangent lengths are 6, 7, and 8. What's the area?

<details class="check"><summary>Show the answer</summary>

Here, $s = 21$, so the area is $\sqrt{21 \times 6 \times 7 \times 8} = 84$. It's the 13-14-15 triangle.

</details>

</section>

<section data-box="traps">

## Common traps

**Using the whole perimeter.** In Heron's formula, $s$ is **half** of the perimeter. With $s = 36$ in the opening problem, you'd get nonsense.

**Forgetting the square root.** The product under the square root isn't the area. For sides of 5, 5, and 6, it's 144, and the area is 12.

**Using Heron when you don't need it.** If the triangle is right or isosceles, a height is usually faster. Check for a Pythagorean triple before anything else.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for three side lengths with no right angle, or a question about the circle inside a triangle.

**First check:** Is it a right triangle? Is it isosceles? If so, drop a height, and save time.

**Keep it factored:** Split each number into factors, and pair them up to find the square root.

**Remember the famous one:** The 13-14-15 triangle has an area of 84. Contest writers like it, so it's worth knowing.

**Time:** About two minutes.

</section>

<section data-box="connections">

## Connections

This uses [tangents and radii](/pathway/similar-shapes-circles/03-chords-and-tangents/) and [triangle area](/pathway/basic-geometry/02-triangle-area/). In Level 4, trigonometry gives yet another way to find a triangle's area.

</section>

<section data-box="summary">

## Remember this

- $s$ is half the perimeter.
- $A = \sqrt{s(s-a)(s-b)(s-c)}$.
- $A = rs$, so $r = \frac{A}{s}$.
- The longest side has the shortest height.
- Check for a right or isosceles triangle first.

</section>
