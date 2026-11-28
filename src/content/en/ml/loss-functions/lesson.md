---
title: Measuring How Wrong a Model Is
summary: Learn how loss functions turn a model's mistakes into one number, when to use squared error, absolute error, or cross-entropy, and how softmax turns scores into probabilities.
minutes: 13
---

To improve at anything, you need feedback. "Your free throws are 20 centimeters short" helps more than "you missed." A model needs feedback too, in the form of a single number that says how wrong its predictions are. That number is the **loss**, and training is the search for parameters that make it as small as possible.

> **The big idea:** A **loss function** turns a model's mistakes into one number, and lower is better. Regression usually uses **mean squared error**. Classification uses **cross-entropy**, which looks at the probability the model gave the right answer and punishes confident mistakes hardest.

## Losses for numbers

Say a model predicts 2, 4, 6, and 8, and the true values are 3, 4, 4, and 8. The errors are $-1$, $0$, $2$, and $0$.

- **Mean squared error (MSE)** squares each error and takes the average: $(1 + 0 + 4 + 0) \div 4 = 1.25$.
- **Mean absolute error (MAE)** averages the sizes of the errors: $(1 + 0 + 2 + 0) \div 4 = 0.75$.

Squaring makes big errors count much more. An error of 10 adds 100 to the total, while ten errors of 1 add only 10. So MSE works hard to avoid any large mistake, and it's sensitive to **outliers**, the rare wild values in the data. MAE treats every unit of error the same, so outliers pull it around less.

## From scores to probabilities

A classifier's last layer outputs raw scores called **logits**, one per class. **Softmax** turns them into probabilities that are all positive and add up to 1:

$$p_i = \frac{e^{z_i}}{\sum_j e^{z_j}}$$

Bigger logits get bigger probabilities. For two classes, the **sigmoid** function, $\frac{1}{1 + e^{-z}}$, does the same job with a single score.

## Cross-entropy

Cross-entropy looks only at the probability $p$ the model gave the **correct** class, and the loss is $-\log p$.

- If $p = 1$, the loss is 0. Perfect.
- If $p = 0.5$, the loss is $\log 2$. Unsure.
- As $p$ gets close to 0, the loss grows without limit. Confident and wrong is punished most.

## Worked example: two kinds of wrong

Using base-2 logarithms makes the numbers clean. The correct class is "cat."

- Model A says cat with probability 0.5. Its loss is $-\log_2 0.5 = 1$.
- Model B says cat with probability $\frac{1}{8}$. Its loss is $-\log_2 \frac{1}{8} = 3$.

Both are unsure, but B is far more wrong, and the loss reflects that. Most libraries use natural logs, which changes every loss by the same factor but not which model is better.

A model gives the correct class probability 0.25. What's the cross-entropy loss with base-2 logs?

<details class="check"><summary>Show the answer</summary>

$-\log_2 0.25 = 2$, because $2^{-2} = 0.25$.

</details>

## Where losses come from

Why these formulas, and not others? *Understanding Deep Learning* shows a recipe called **maximum likelihood**: treat the model's output as a probability distribution, then pick the parameters that make the training data as likely as possible. Taking the negative log of that likelihood gives the loss. For a bell-curve model of the errors, the recipe gives squared error. For a model of categories, it gives cross-entropy. So the "standard" losses aren't arbitrary. Each comes from an assumption about the data.

## Why not train on accuracy?

Accuracy only changes when a prediction flips from wrong to right. Nudge a weight a tiny bit and accuracy usually doesn't move at all, so it has no useful slope to follow. Cross-entropy changes smoothly with every tiny improvement, which gives gradient descent something to work with. We **report** accuracy, but we **train** on loss.

<section data-box="traps">

## Common traps

**Using MSE when outliers are rare but huge.** A few wild values can dominate a squared-error loss. Consider MAE.

**Reading the loss as a percentage.** A cross-entropy of 0.7 doesn't mean 70% of anything. Compare losses with each other.

**Forgetting the minus sign.** Logs of probabilities are negative. The minus sign makes the loss positive.

</section>

<section data-box="summary">

## Remember this

- Loss: one number for how wrong the model is. Training makes it smaller.
- MSE squares the errors, so big mistakes dominate. MAE is gentler with outliers.
- Softmax turns logits into probabilities that add to 1.
- Cross-entropy is $-\log p$ for the correct class. Confident mistakes cost the most.
- Train on a smooth loss, and report metrics like accuracy.

</section>
