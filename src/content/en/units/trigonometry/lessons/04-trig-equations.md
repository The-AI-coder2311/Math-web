---
title: "Solving Trigonometric Equations"
summary: Find every angle that satisfies a trig equation, without missing any or counting one twice.
minutes: 12
---

How many angles $x$ between $0^\circ$ and $360^\circ$ satisfy $\sin 2x = \cos x$? A quick guess might be "one" or "two." The real answer is 4, and a contest that asks this question will happily offer 2 and 3 as wrong choices. Trig equations have many solutions, because the functions repeat. This lesson shows you how to find all of them, in a systematic way that doesn't depend on luck.

> **The big idea:** Rewrite the equation so it's a product equal to zero, or a single trig function equal to a number. Then use the unit circle to list **every** angle in the interval with that value. Each value of sine or cosine (other than $\pm 1$) comes from exactly two angles per full turn.

## Why there are usually two solutions

On the unit circle, $\sin x = k$ means the point has height $k$. A horizontal line at height $k$ crosses the circle in two points when $-1 < k < 1$, touches it at one point when $k = \pm 1$, and misses it when $|k| > 1$. So in one full turn:

- $\sin x = k$ has solutions $x$ and $180^\circ - x$ (mirror images across the $y$-axis).
- $\cos x = k$ has solutions $x$ and $-x$, or $360^\circ - x$ (mirror images across the $x$-axis).
- $\tan x = k$ has solutions $x$ and $x + 180^\circ$, since tangent is a slope and a line through the origin crosses the circle at opposite points.

If the problem asks about a bigger interval, add full turns ($360^\circ$ for sine and cosine, $180^\circ$ for tangent) until you leave the interval.

## Example 1: One function equal to a number

Find all $x$ with $0^\circ \le x < 360^\circ$ and $2\cos x = 1$.

**What do we know?** We need $\cos x = \frac{1}{2}$. The reference angle is $60^\circ$, and cosine is positive in quadrants I and IV.

So $x = 60^\circ$ or $x = 300^\circ$. Their sum is $360^\circ$, which isn't a coincidence: cosine solutions come in mirror pairs across the $x$-axis.

## Example 2: Factor instead of divide

Solve $\sin 2x = \cos x$ for $0^\circ \le x < 360^\circ$.

**Rewrite everything in the same angle.** Using the double-angle formula, $2\sin x\cos x = \cos x$.

**Here's the crucial move.** It's tempting to divide both sides by $\cos x$. But $\cos x$ might be zero, and dividing would throw those solutions away. Instead, move everything to one side and factor:

$$\cos x\,(2\sin x - 1) = 0$$

Now either $\cos x = 0$, which gives $x = 90^\circ$ or $270^\circ$, or $\sin x = \frac{1}{2}$, which gives $x = 30^\circ$ or $150^\circ$. That's 4 solutions, and dividing by $\cos x$ would have found only 2.

Try one before going on. How many $x$ with $0^\circ \le x < 360^\circ$ satisfy $\sin x \cos x = \sin x$?

<details class="check"><summary>Show the answer</summary>

Factor: $\sin x(\cos x - 1) = 0$. Then $\sin x = 0$ gives $0^\circ$ and $180^\circ$, and $\cos x = 1$ gives $0^\circ$ again. The angle $0^\circ$ is counted only once, so there are 2 solutions. Watch for repeats when two factors share a solution.

</details>

## Example 3: A quadratic in disguise

Solve $2\sin^2 x + 3\sin x - 2 = 0$ for $0^\circ \le x < 360^\circ$.

**What's the structure?** Let $s = \sin x$. The equation becomes $2s^2 + 3s - 2 = 0$, which factors as $(2s - 1)(s + 2) = 0$.

So $s = \frac{1}{2}$ or $s = -2$. But sine is never less than $-1$, so $s = -2$ is impossible. That leaves $\sin x = \frac{1}{2}$, with $x = 30^\circ$ or $x = 150^\circ$.

When a trig equation has only one function in it, treat that function as a single variable, solve the algebra, and then throw out any values outside $[-1, 1]$.

## Example 4: Multiple angles

How many $x$ with $0^\circ \le x < 360^\circ$ satisfy $\sin 3x = \frac{1}{2}$?

**What changes with $3x$?** As $x$ runs from $0^\circ$ to $360^\circ$, the angle $3x$ runs from $0^\circ$ to $1080^\circ$, which is three full turns.

**How many solutions per turn?** Two, because $\sin\theta = \frac{1}{2}$ has two solutions in each full turn. So there are $3 \times 2 = 6$ solutions for $3x$, and each gives a different $x$.

The solutions for $3x$ are $30^\circ, 150^\circ, 390^\circ, 510^\circ, 750^\circ$, and $870^\circ$. Dividing by 3 gives $x = 10^\circ, 50^\circ, 130^\circ, 170^\circ, 250^\circ$, and $290^\circ$.

> **Tip:** For an equation in $nx$, count turns first. If $nx$ covers $n$ full turns, multiply the solutions per turn by $n$.

<section data-box="deeper">

## Going deeper

**Sum-to-product to factor.** Some equations compare two different multiples of $x$, such as $\sin 3x = \sin x$. One method uses the fact that two angles have the same sine when they are equal or add to $180^\circ$, up to full turns. Another factors directly using

$$\sin 3x - \sin x = 2\cos 2x \sin x$$

So either $\sin x = 0$, giving $0^\circ$ and $180^\circ$, or $\cos 2x = 0$. The angle $2x$ runs over two full turns, so $\cos 2x = 0$ has 4 solutions: $x = 45^\circ, 135^\circ, 225^\circ, 315^\circ$. In total, there are 6 solutions. You'll see the product-to-sum formulas in full in Level 5, but you can check this one now by expanding $\sin(2x + x)$ and $\sin(2x - x)$ with angle addition and subtracting.

**Squaring creates fake solutions.** If you square both sides of $\sin x = \cos x - 1$, you may pick up solutions of $\sin x = -(\cos x - 1)$ too. After squaring, always plug each answer back into the original equation.

</section>

<section data-box="traps">

## Common traps

**Dividing by something that can be zero.** Dividing by $\sin x$ or $\cos x$ is the number one way to lose solutions. Factor instead.

**Forgetting the second angle.** $\sin x = \frac{1}{2}$ has two solutions per turn, not one. Students who rely on inverse sine get only $30^\circ$ and miss $150^\circ$.

**Endpoints.** Read the interval carefully. "$0 \le x \le 2\pi$" includes both $0$ and $2\pi$, which may be two separate solutions to count.

**Undefined values.** An equation with $\tan x$ can't have solutions where $\cos x = 0$, even if your algebra produces them.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** "How many solutions," "sum of all solutions," or an interval like $[0, 2\pi)$.

**Get one function, or a product.** Use identities to rewrite everything in terms of one function of one angle, or to factor into pieces.

**Count with turns.** For $\sin(nx)$ or $\cos(nx)$, count how many turns $nx$ makes, then multiply.

**Sums of solutions.** Mirror symmetry often makes sums quick. Sine solutions in one turn pair to add to $180^\circ$, and cosine solutions pair to add to $360^\circ$.

</section>

<section data-box="connections">

## Connections

This lesson uses [the unit circle](/pathway/trigonometry/01-unit-circle/) to list solutions and [core identities](/pathway/trigonometry/02-trig-identities/) to rewrite equations. The factoring step is the same zero-product idea from [quadratics](/pathway/algebra-toolkit/03-quadratics-and-vieta/). Solutions of $z^n = 1$ in [roots of unity](/pathway/complex-numbers/03-de-moivre/) are spaced around the circle in exactly the same way.

</section>

<section data-box="summary">

## Remember this

- Rewrite as one function equal to a number, or as a product equal to zero.
- Never divide by a trig function that could be zero.
- Sine and cosine take most values twice per $360^\circ$; tangent takes every value once per $180^\circ$.
- For $nx$, count the full turns and multiply.
- Check for repeated solutions and for values outside $[-1, 1]$.

</section>
