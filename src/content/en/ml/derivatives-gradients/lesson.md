---
title: Which Way Is Downhill?
summary: Learn what derivatives, partial derivatives, and gradients measure, and how the chain rule handles functions inside functions, the math behind training every neural network.
minutes: 13
---

Picture yourself on a foggy hillside, trying to reach the lowest point of the valley. You can't see the valley, but you can feel which way the ground slopes under your feet. Take a small step downhill, feel the slope again, and repeat. That's how almost every machine learning model is trained. The "hill" is the model's error, and the slope is a derivative.

> **The big idea:** A **derivative** measures how fast a function's output changes when its input changes a little. The **gradient** collects the derivatives for every input, and it points uphill. To make a model's error smaller, step the opposite way.

## Key words

| Word | Meaning |
|---|---|
| Derivative | The slope of a function at a point: change in output per unit change in input |
| Partial derivative | The derivative with respect to one input, holding the others fixed |
| Gradient | The list of all partial derivatives. It points in the direction of steepest increase |
| Chain rule | How to take the derivative of a function inside another function |

## Derivatives

For $f(x) = x^2$, the slope at $x = 3$ is 6. One way to see it: nudge the input from 3 to 3.01. The output goes from 9 to 9.0601, a change of about 0.06, which is 6 times the nudge.

A few rules cover most of what you'll need:

- **Power rule:** the derivative of $x^n$ is $n x^{n-1}$. So $x^2$ has derivative $2x$, and $x^3$ has derivative $3x^2$.
- **Constants multiply through:** the derivative of $5x^2$ is $10x$.
- **Sums split up:** the derivative of $x^2 + 4x$ is $2x + 4$.
- **A constant on its own** has derivative 0, because it never changes.

## Partial derivatives and the gradient

A model's error depends on many weights at once. A **partial derivative** asks how the error changes when you nudge one weight and freeze the others.

Take $f(x, y) = x^2 + 3y$. Treating $y$ as a fixed number, the partial derivative with respect to $x$ is $2x$. Treating $x$ as fixed, the partial derivative with respect to $y$ is 3.

The **gradient** puts these together in a vector: $(2x, 3)$. At the point $(1, 4)$, it's $(2, 3)$. That vector points in the direction where $f$ grows fastest, so the direction $(-2, -3)$ is the steepest way down.

## The chain rule

Neural networks are functions inside functions inside functions. The chain rule says: to take the derivative of an outer function applied to an inner one, multiply the outer function's derivative (at the inner value) by the inner function's derivative.

**Worked example.** Let $f(x) = (2x + 1)^3$. The inner function is $u = 2x + 1$, and the outer is $u^3$.

- The outer derivative is $3u^2$.
- The inner derivative is 2.
- So $f'(x) = 3(2x + 1)^2 \times 2$.

At $x = 1$, the inner value is $u = 3$, so the slope is $3 \times 9 \times 2 = 54$.

**Backpropagation**, the algorithm that trains neural networks, is the chain rule applied over and over, from the error at the end back to every weight.

What is the derivative of $f(x) = 4x^2 + 7$ at $x = 2$?

<details class="check"><summary>Show the answer</summary>

The derivative is $8x$, since the 7 never changes and contributes 0. At $x = 2$, it's $8 \times 2 = 16$.

</details>

## From slopes to learning

Gradient descent turns this into a recipe: compute the gradient of the error, then move every weight a small step against it. If the error is $L(w) = (w - 5)^2$ and the current weight is $w = 3$, the derivative is $2(w - 5) = -4$. It's negative, which means increasing $w$ lowers the error, so the step moves $w$ up toward 5. The size of the step is set by the **learning rate**, which you'll study in Level 2.

A point where the gradient is zero is flat. It could be a minimum, a maximum, or a **saddle point**, which goes up in one direction and down in another, like the middle of a horse's saddle.

<section data-box="traps">

## Common traps

**Stepping uphill.** The gradient points toward higher error. Training subtracts it.

**Forgetting the inner derivative.** In the chain rule, the derivative of $(2x + 1)^3$ is not $3(2x + 1)^2$. You still have to multiply by 2.

**Treating flat as finished.** A zero gradient means a flat spot. It might not be the lowest point.

</section>

<section data-box="summary">

## Remember this

- Derivative: the slope, or how fast the output changes.
- Power rule: $x^n$ has derivative $n x^{n-1}$.
- Partial derivative: change one input, freeze the rest.
- Gradient: all the partial derivatives in a vector, pointing uphill.
- Chain rule: outer derivative times inner derivative. It's how backpropagation works.

</section>
