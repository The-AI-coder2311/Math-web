---
title: "Law of Sines and Law of Cosines"
summary: Find sides and angles of any triangle, and connect them to the circle through its corners.
minutes: 13
---

A triangle has sides 7, 8, and 13. What is its largest angle? None of the special right triangles help here, and the triangle isn't right at all. But two laws let you move between sides and angles in **any** triangle, and with them the answer is a clean $120^\circ$. These two laws show up on almost every AMC 12, often hiding inside geometry problems that don't mention trig at all.

> **The big idea:** In any triangle with sides $a, b, c$ opposite angles $A, B, C$, the **Law of Cosines** says $c^2 = a^2 + b^2 - 2ab\cos C$, and the **Law of Sines** says $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$, where $R$ is the radius of the circle through the three corners.

## Why the Law of Cosines works

Put corner $C$ at the origin and side $b$ along the $x$-axis, so $A = (b, 0)$. Corner $B$ is at distance $a$ from the origin at angle $C$, so $B = (a\cos C, a\sin C)$. Now use the distance formula for side $c$, the distance from $A$ to $B$:

$$c^2 = (a\cos C - b)^2 + (a\sin C)^2 = a^2\cos^2 C - 2ab\cos C + b^2 + a^2\sin^2 C$$

The terms $a^2\cos^2 C + a^2\sin^2 C$ combine to $a^2$, which leaves $c^2 = a^2 + b^2 - 2ab\cos C$.

When $C = 90^\circ$, the cosine is 0 and this becomes the Pythagorean Theorem. So the Law of Cosines is Pythagoras with a correction term. If angle $C$ is obtuse, $\cos C$ is negative, the correction adds, and $c$ is longer than a right triangle would allow. That matches the picture.

## Why the Law of Sines works

Draw the circle through all three corners, with center $O$ and radius $R$. Draw the diameter from $B$ through $O$, ending at a point $D$ on the circle. The angle at $D$ in triangle $BCD$ is an inscribed angle on the same arc $BC$ as angle $A$, so it also equals $A$. And angle $BCD$ is $90^\circ$, because it's inscribed in a semicircle.

In the right triangle $BCD$, the hypotenuse is the diameter $2R$, and the side opposite the angle at $D$ is $a$. So $\sin A = \frac{a}{2R}$, which rearranges to $\frac{a}{\sin A} = 2R$. The same argument works for every corner, so all three ratios equal $2R$.

## When to use which

- **Two sides and the angle between them,** or **all three sides**: use the Law of Cosines.
- **Two angles and any side,** or a question about the circumradius: use the Law of Sines.

## Example 1: Two sides and the included angle

A triangle has sides 5 and 8 with a $60^\circ$ angle between them. Find the third side.

**What do we know?** Two sides and the angle between them, so the Law of Cosines applies directly. Since $\cos 60^\circ = \frac{1}{2}$:

$$c^2 = 25 + 64 - 2 \cdot 5 \cdot 8 \cdot \frac{1}{2} = 49$$

So the third side is 7. Triangles with sides 5, 7, 8 and a $60^\circ$ angle are a favorite of contest writers, because the numbers come out whole.

## Example 2: The opening question

Find the largest angle of a triangle with sides 7, 8, and 13.

**Which angle is largest?** The one opposite the longest side, 13. Solve the Law of Cosines for the cosine:

$$\cos C = \frac{a^2 + b^2 - c^2}{2ab} = \frac{49 + 64 - 169}{112} = \frac{-56}{112} = -\frac{1}{2}$$

The angle between $0^\circ$ and $180^\circ$ with cosine $-\frac{1}{2}$ is $120^\circ$.

**A useful shortcut:** The sign of $a^2 + b^2 - c^2$ tells you the type of angle at once. Positive means acute, zero means right, negative means obtuse.

Try one yourself. Is the largest angle of a triangle with sides 4, 5, and 6 acute, right, or obtuse?

<details class="check"><summary>Show the answer</summary>

Check $16 + 25 - 36 = 5$. That's positive, so the largest angle is acute, and the whole triangle is acute. Its cosine is $\frac{5}{40} = \frac{1}{8}$.

</details>

## Example 3: Finding the circumradius

In a triangle, angle $A$ is $30^\circ$ and the side opposite it has length 6. Find the radius of the circle through the three corners.

**What do we know?** One side and its opposite angle, which is exactly what the Law of Sines needs.

$$2R = \frac{6}{\sin 30^\circ} = \frac{6}{1/2} = 12$$

So $R = 6$. Notice that we didn't need the other sides or angles. Any side and its opposite angle determine the circumradius.

## Example 4: Ratios of sines are ratios of sides

In triangle $ABC$, $\sin A : \sin B : \sin C = 5 : 7 : 8$. Find angle $B$.

**What does the ratio tell us?** By the Law of Sines, each side is $2R$ times the sine of its opposite angle. So the sides are in the same ratio $5 : 7 : 8$. Scaling a triangle doesn't change its angles, so we can take the sides to be 5, 7, and 8.

$$\cos B = \frac{25 + 64 - 49}{80} = \frac{40}{80} = \frac{1}{2}$$

So $B = 60^\circ$.

<section data-box="deeper">

## Going deeper

**Parallelograms.** A parallelogram with sides $a$ and $b$ and angle $\theta$ has two diagonals. One faces the angle $\theta$, and the other faces the angle $180^\circ - \theta$, whose cosine is $-\cos\theta$. The Law of Cosines gives

$$d_1^2 = a^2 + b^2 - 2ab\cos\theta, \qquad d_2^2 = a^2 + b^2 + 2ab\cos\theta$$

Adding them gives the **parallelogram law**: $d_1^2 + d_2^2 = 2a^2 + 2b^2$. The angle disappears completely.

**The ambiguous case.** If you know two sides and an angle that is **not** between them, there can be two different triangles. For example, with $a = 6$, $b = 8$, and $A = 30^\circ$, the Law of Sines gives $\sin B = \frac{8 \cdot 1/2}{6} = \frac{2}{3}$. Both an acute angle and its supplement have this sine, and both leave room for a third angle, so two triangles fit. Contest problems that say "all possible values" are often testing whether you noticed.

</section>

<section data-box="traps">

## Common traps

**Using the wrong angle.** In $c^2 = a^2 + b^2 - 2ab\cos C$, angle $C$ must be the angle **between** sides $a$ and $b$, opposite side $c$. Label the triangle before you plug in.

**Dropping the minus sign for obtuse angles.** If $C$ is $120^\circ$, then $\cos C = -\frac{1}{2}$, and the formula adds $ab$. Many students subtract anyway.

**Forgetting the factor of 2.** The Law of Sines ratio is $2R$, the diameter, not the radius.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** A triangle with no right angle, side lengths and an angle like $60^\circ$ or $120^\circ$, or a question about the circumscribed circle.

**Look for nice cosines.** If the side lengths are whole numbers, compute $\frac{a^2 + b^2 - c^2}{2ab}$ for each angle. When one of them is $\pm\frac{1}{2}$, you've found the angle the problem was built around.

**Scale first.** If only ratios matter, pick the smallest whole-number sides with that ratio.

</section>

<section data-box="connections">

## Connections

These laws generalize [the Pythagorean Theorem](/pathway/triangles/02-pythagoras-why/) and rely on [angles inside a circle](/pathway/similar-shapes-circles/02-inscribed-angles/). The proof of the Law of Cosines uses [distance on a grid](/pathway/coordinate-geometry/02-distance-midpoints-circles/). Next, they power the [area formulas](/pathway/trigonometry/05-trig-area/) at the end of this unit.

</section>

<section data-box="summary">

## Remember this

- Law of Cosines: $c^2 = a^2 + b^2 - 2ab\cos C$. Use it for two sides with the included angle, or three sides.
- Law of Sines: $\frac{a}{\sin A} = \frac{b}{\sin B} = \frac{c}{\sin C} = 2R$.
- The sign of $a^2 + b^2 - c^2$ tells you whether angle $C$ is acute, right, or obtuse.
- Ratios of sines equal ratios of sides.
- Two sides and a non-included angle can give two triangles.

</section>
