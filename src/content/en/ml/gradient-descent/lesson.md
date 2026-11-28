---
title: Rolling Downhill to a Better Model
summary: Learn how gradient descent updates weights, how to choose a learning rate, what batches, iterations, and epochs are, and how momentum and Adam speed training up.
minutes: 13
---

A modern language model has billions of weights. Nobody sets them by hand. They start as random numbers, and training nudges every one of them, millions of times, a tiny step in the direction that lowers the loss. That repeated nudge is **gradient descent**, and it's the engine inside nearly all of deep learning.

> **The big idea:** Gradient descent repeats one update: **new weight = old weight − learning rate × gradient**. The gradient says which way is uphill for the loss, so subtracting it moves downhill. The **learning rate** sets the step size, and it's the most important setting in training.

## One step

Say the loss is $L(w) = (w - 3)^2$, which is smallest at $w = 3$. Its derivative is $2(w - 3)$. Start at $w = 0$ with learning rate $0.25$:

- **Step 1:** the gradient is $2(0 - 3) = -6$, so $w = 0 - 0.25 \times (-6) = 1.5$.
- **Step 2:** the gradient is $2(1.5 - 3) = -3$, so $w = 1.5 - 0.25 \times (-3) = 2.25$.

Each step closes half the remaining gap to 3. The steps shrink on their own as the slope flattens.

## Choosing the learning rate

- **Too small:** each step barely moves. Training is painfully slow.
- **Too large:** each step overshoots the bottom. The loss bounces around, or even grows without limit. This is called **diverging**.

Try $L(w) = w^2$, with gradient $2w$ and learning rate 1.5. Each update gives $w - 1.5 \times 2w = -2w$. Starting at 1, the weight goes 1, then $-2$, then 4, then $-8$. It's flying away from 0, the bottom.

A **learning-rate schedule** changes the rate during training. A common pattern starts small (warmup), stays high, then decays so the final steps are careful.

## Batches, iterations, and epochs

Computing the gradient over a whole dataset of millions of examples for every step is slow. Instead:

- **Batch gradient descent** uses every example for each step.
- **Stochastic gradient descent (SGD)** uses one random example, or a small random **mini-batch**, for each step. Its gradients are noisy estimates, but each one is cheap, and the noise can even help it escape bad spots.
- The **batch size** is how many examples are in each mini-batch.
- An **iteration**, or step, is one weight update.
- An **epoch** is one full pass through the training data.

With 10,000 examples and batch size 50, one epoch is $10000 \div 50 = 200$ iterations.

A dataset has 6,000 examples and a batch size of 100. How many iterations are in 3 epochs?

<details class="check"><summary>Show the answer</summary>

Each epoch is $6000 \div 100 = 60$ iterations, so 3 epochs are $3 \times 60 = 180$.

</details>

## Momentum and Adam

**Momentum** remembers the recent direction. Instead of stepping along the current gradient alone, it keeps a running "velocity":

$$v \leftarrow \beta v + g \qquad w \leftarrow w - \eta v$$

With $\beta = 0.9$, past gradients keep pushing. On a long, steady slope, momentum speeds up. On a bumpy path, the bumps partly cancel out, like a ball rolling through small dips.

**Adam** goes further. It tracks a running average of each weight's gradient and of its square, and gives each weight its own step size. Weights with large, noisy gradients take smaller steps, and weights with small, steady gradients take bigger ones. Adam is often the default because it works well without much tuning. **AdamW** is a version that handles weight decay, a form of regularization, correctly.

## Knowing when to stop

Training has **converged** when the loss stops improving in any meaningful way. Plot the **loss curve**, the loss after each epoch, for both the training and validation sets. The next topic shows how the gap between those two curves reveals overfitting.

<section data-box="deeper">

## Going deeper

### Exactly when does a learning rate work?

Take the loss $L(w) = w^2$, with derivative $2w$. One step of gradient descent gives

$$w - \eta \times 2w = (1 - 2\eta) w$$

Every step multiplies $w$ by the same factor, $1 - 2\eta$. The weight shrinks toward the minimum at 0 only if that factor is between $-1$ and 1:

- With $\eta = 0.1$, the factor is 0.8. Each step closes 20% of the gap. That's slow but steady.
- With $\eta = 0.5$, the factor is 0. One step lands exactly on the minimum.
- With $\eta = 0.9$, the factor is $-0.8$. The weight overshoots and flips sides every step, but still settles.
- With $\eta = 1.5$, the factor is $-2$. The weight flies away. Training diverges.

So for this loss, any learning rate between 0 and 1 converges. A steeper loss, such as $L = 5w^2$, allows a smaller range, because its gradient is bigger. A real network's loss is steep in some directions and nearly flat in others, so one learning rate has to be small enough for the steepest direction, which leaves it slow in the flat ones. That mismatch is the problem momentum and Adam help with.

### Inside Adam

Adam keeps two running averages for every weight:

- $m$, an average of recent gradients, which works like momentum.
- $v$, an average of recent **squared** gradients, which measures how big the gradients usually are.

The step is roughly $\eta \times \frac{m}{\sqrt{v}}$. If a weight's gradient is steady at some value $g$, then $m \approx g$ and $\sqrt{v} \approx g$, so the step is about $\eta$ whatever the size of $g$. Weights with tiny gradients get boosted and weights with huge gradients get calmed. Early in training, $m$ and $v$ start at zero, so Adam scales them up slightly with a "bias correction" to compensate.

### Batch size and noise

A smaller batch gives a noisier estimate of the gradient. Noise isn't all bad. It can shake the weights out of a sharp, narrow valley into a wider one, and wide valleys tend to generalize better to new data. A bigger batch gives smoother gradients and uses the hardware more efficiently. A common rule of thumb: if you double the batch size, try raising the learning rate too.

### Warmup and decay

At the start of training, the weights are random and the gradients can be wild, so many schedules **warm up**: they start with a tiny learning rate and raise it over the first few hundred or thousand steps. Later, they **decay** the rate, either in steps or along a smooth cosine curve, so the final steps are small and precise. Large language models are almost always trained with warmup followed by decay.

### Local minima and saddle points

People once worried that training would get stuck in poor local minima. With millions of weights, true local minima that are much worse than the best ones turn out to be rare. Flat regions and saddle points slow training down more often, and momentum helps roll through them.

For $L(w) = 3w^2$, each step multiplies $w$ by $1 - 6\eta$. For which learning rates does training converge?

<details class="check"><summary>Show the answer</summary>

We need $-1 < 1 - 6\eta < 1$, which gives $0 < \eta < \frac{1}{3}$. The steeper loss allows a smaller range than $w^2$, where the range was 0 to 1.

</details>

</section>

<section data-box="traps">

## Common traps

**Adding the gradient.** The update subtracts it. Adding steps uphill.

**Blaming the model when the learning rate is wrong.** A loss that explodes, or shows up as "NaN" (not a number), usually means the learning rate is too high.

**Mixing up epochs and iterations.** An epoch is a full pass through the data. An iteration is one update on one batch.

</section>

<section data-box="connections">

## Connections

The gradients come from [Derivatives, Gradients & the Chain Rule](/ml/derivatives-gradients/), and in networks from [Backpropagation](/ml/backpropagation/). Knowing when to stop is part of [Overfitting & Regularization](/ml/generalization/).

</section>

<section data-box="summary">

## Remember this

- Update: $w \leftarrow w - \eta \times \text{gradient}$.
- Too small a learning rate is slow. Too large overshoots or diverges.
- Iterations per epoch = examples ÷ batch size.
- Mini-batches are noisy but cheap, and that trade is worth it.
- Momentum remembers direction. Adam gives each weight its own step size.

</section>
