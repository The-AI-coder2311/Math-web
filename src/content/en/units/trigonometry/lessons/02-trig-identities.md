---
title: "Core Trigonometric Identities"
summary: The Pythagorean identity, angle addition, and double angles, and how to rebuild each one when you forget it.
minutes: 14
---

Suppose $\sin x + \cos x = \frac{1}{2}$. What is $\sin x \cos x$? You could try to find $x$ itself, but $x$ isn't a nice angle. A contest solver squares both sides instead, and the answer appears in one line. That move works because of an identity, an equation that's true for every angle. This lesson gives you the handful of identities that do most of the work on the AMC 12, and it shows you where each one comes from, so you can rebuild it under pressure.

> **The big idea:** A few identities do almost all the work: $\sin^2 x + \cos^2 x = 1$, the angle addition formulas, and the double-angle formulas that follow from them. Use them to change the form of an expression until the answer is visible.

## The Pythagorean identity and its relatives

From the unit circle, $\sin^2 x + \cos^2 x = 1$ for every angle. Divide every term by $\cos^2 x$ and you get a second version:

$$\tan^2 x + 1 = \sec^2 x$$

Here $\sec x$ means $\frac{1}{\cos x}$. You don't need to memorize this one separately. If you remember the first identity, you can produce the second in a few seconds.

## Angle addition

These two formulas are the foundation of everything else:

$$\sin(a + b) = \sin a \cos b + \cos a \sin b$$

$$\cos(a + b) = \cos a \cos b - \sin a \sin b$$

**Why are they true?** One clean way to see it: rotating the point $(\cos b, \sin b)$ by angle $a$ lands on the point at angle $a + b$. Rotation by $a$ sends $(1, 0)$ to $(\cos a, \sin a)$ and sends $(0, 1)$ to $(-\sin a, \cos a)$. Writing $(\cos b, \sin b)$ as $\cos b$ copies of the first plus $\sin b$ copies of the second, the image is

$$(\cos a\cos b - \sin a\sin b,\ \sin a\cos b + \cos a\sin b)$$

That point is $(\cos(a+b), \sin(a+b))$, which proves both formulas at once.

To subtract angles, replace $b$ with $-b$ and use the fact that sine is odd and cosine is even. For tangent, divide the sine formula by the cosine formula:

$$\tan(a + b) = \frac{\tan a + \tan b}{1 - \tan a \tan b}$$

## Double angles

Set $b = a$ in the addition formulas:

$$\sin 2a = 2\sin a\cos a$$

$$\cos 2a = \cos^2 a - \sin^2 a = 2\cos^2 a - 1 = 1 - 2\sin^2 a$$

The three forms of $\cos 2a$ come from replacing $\sin^2 a$ or $\cos^2 a$ with the Pythagorean identity. Rearranged, the last two give the **power-reduction** formulas, which turn squares into first powers:

$$\cos^2 a = \frac{1 + \cos 2a}{2}, \qquad \sin^2 a = \frac{1 - \cos 2a}{2}$$

## Example 1: The opening question

If $\sin x + \cos x = \frac{1}{2}$, find $\sin x\cos x$.

**What do we know?** A sum of sine and cosine. Squaring it produces $\sin^2 x + \cos^2 x$, which we know is 1, plus a cross term that is what we want.

$$\sin^2 x + 2\sin x\cos x + \cos^2 x = \frac{1}{4}$$

So $1 + 2\sin x\cos x = \frac{1}{4}$, which gives $2\sin x\cos x = -\frac{3}{4}$ and $\sin x \cos x = -\frac{3}{8}$.

Notice that the left side of the squared equation is $1 + \sin 2x$. So we also learned that $\sin 2x = -\frac{3}{4}$.

## Example 2: An exact value from addition

Find $\sin 75^\circ$.

**What's a smaller version we know?** We know $45^\circ$ and $30^\circ$, and $75 = 45 + 30$.

$$\sin 75^\circ = \sin 45^\circ\cos 30^\circ + \cos 45^\circ \sin 30^\circ = \frac{\sqrt{2}}{2}\cdot\frac{\sqrt{3}}{2} + \frac{\sqrt{2}}{2}\cdot\frac{1}{2} = \frac{\sqrt{6} + \sqrt{2}}{4}$$

Try one yourself. Find $\cos 15^\circ$ using $15 = 45 - 30$.

<details class="check"><summary>Show the answer</summary>

$\cos(45^\circ - 30^\circ) = \cos 45^\circ \cos 30^\circ + \sin 45^\circ\sin 30^\circ = \frac{\sqrt{6} + \sqrt{2}}{4}$. It's the same as $\sin 75^\circ$, which makes sense, because $15^\circ$ and $75^\circ$ add up to $90^\circ$, and the sine of an angle equals the cosine of its complement.

</details>

## Example 3: Adding two angles from their tangents

Acute angles $A$ and $B$ have $\tan A = 2$ and $\tan B = 3$. Find $A + B$.

**What's the question really asking?** We can't find $A$ or $B$ as nice angles, but we can find the tangent of their sum.

$$\tan(A + B) = \frac{2 + 3}{1 - 2 \cdot 3} = \frac{5}{-5} = -1$$

**Which angle has tangent $-1$?** Both angles are acute, so their sum is between $0^\circ$ and $180^\circ$. The only angle there with tangent $-1$ is $135^\circ$. So $A + B = 135^\circ$.

The last step matters. Tangent repeats every $180^\circ$, so a tangent value alone doesn't pin down an angle. You must use the size of the angles to choose.

## Example 4: A sum of squares that pairs up

Find $\sin^2 1^\circ + \sin^2 2^\circ + \cdots + \sin^2 89^\circ$.

**What's the trick?** Pair each angle with its complement. Since $\sin(90^\circ - x) = \cos x$, the term $\sin^2 89^\circ$ equals $\cos^2 1^\circ$. So the first and last terms add to $\sin^2 1^\circ + \cos^2 1^\circ = 1$.

There are 89 terms. They form 44 pairs that each add to 1, plus the middle term $\sin^2 45^\circ = \frac{1}{2}$. The total is $44 + \frac{1}{2} = 44.5$.

<section data-box="deeper">

## Going deeper

**A famous product.** If $A + B = 45^\circ$, then $\tan(A + B) = 1$, so $\tan A + \tan B = 1 - \tan A\tan B$. Rearranging gives

$$(1 + \tan A)(1 + \tan B) = 2$$

So the product $(1 + \tan 1^\circ)(1 + \tan 2^\circ)\cdots(1 + \tan 44^\circ)$ splits into 22 pairs whose angles add to $45^\circ$, such as $1^\circ$ and $44^\circ$. Each pair multiplies to 2, and the whole product is $2^{22}$. A problem that looks like it needs a table of values turns into one line.

**Try this.** Find $\cos^4 x - \sin^4 x$ in a simpler form.

<details class="check"><summary>Show the answer</summary>

It's a difference of squares: $(\cos^2 x - \sin^2 x)(\cos^2 x + \sin^2 x)$. The second factor is 1, and the first is $\cos 2x$. So the expression equals $\cos 2x$.

</details>

</section>

<section data-box="traps">

## Common traps

**Thinking $\sin(a + b) = \sin a + \sin b$.** Test it: $\sin(30^\circ + 60^\circ) = 1$, but $\sin 30^\circ + \sin 60^\circ$ is more than 1. Trig functions don't distribute over addition.

**Writing $\sin 2x = 2\sin x$.** The double-angle formula has a cosine in it. At $x = 90^\circ$, the left side is 0 and the right side is 2.

**Losing an angle with tangent.** After finding $\tan\theta$, check which quadrant $\theta$ can be in. Two angles $180^\circ$ apart share every tangent value.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** A sum like $\sin x + \cos x$, a product like $\sin x \cos x$, angles that are sums or differences of $30^\circ$ and $45^\circ$, or long sums of squares.

**Square it.** When you see $\sin x \pm \cos x$, squaring brings in the Pythagorean identity and $\sin 2x$.

**Pair complements.** Angles adding to $90^\circ$ swap sine and cosine. Angles adding to $45^\circ$ pair nicely with tangent.

**Rebuild, don't panic.** If you forget a formula, start from angle addition and set $b = a$ or $b = -a$.

</section>

<section data-box="connections">

## Connections

This lesson grows from [the unit circle](/pathway/trigonometry/01-unit-circle/) and uses the [perfect square pattern](/pathway/algebra-toolkit/02-perfect-squares/). Next, you'll use identities to [solve trig equations](/pathway/trigonometry/04-trig-equations/). The rotation proof of angle addition becomes a single multiplication with [complex numbers in polar form](/pathway/complex-numbers/02-complex-plane/).

</section>

<section data-box="summary">

## Remember this

- $\sin^2 x + \cos^2 x = 1$, and dividing by $\cos^2 x$ gives $\tan^2 x + 1 = \sec^2 x$.
- $\sin(a+b) = \sin a\cos b + \cos a\sin b$ and $\cos(a+b) = \cos a\cos b - \sin a\sin b$.
- $\sin 2a = 2\sin a\cos a$ and $\cos 2a = 2\cos^2 a - 1 = 1 - 2\sin^2 a$.
- Square $\sin x + \cos x$ to reach $\sin x\cos x$.
- Complements swap sine and cosine; use them to pair terms.

</section>
