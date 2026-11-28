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

<section data-box="traps">

## Common traps

**Adding the gradient.** The update subtracts it. Adding steps uphill.

**Blaming the model when the learning rate is wrong.** A loss that explodes, or shows up as "NaN" (not a number), usually means the learning rate is too high.

**Mixing up epochs and iterations.** An epoch is a full pass through the data. An iteration is one update on one batch.

</section>

<section data-box="summary">

## Remember this

- Update: $w \leftarrow w - \eta \times \text{gradient}$.
- Too small a learning rate is slow. Too large overshoots or diverges.
- Iterations per epoch = examples ÷ batch size.
- Mini-batches are noisy but cheap, and that trade is worth it.
- Momentum remembers direction. Adam gives each weight its own step size.

</section>
