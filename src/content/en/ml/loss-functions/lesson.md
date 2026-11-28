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

<section data-box="deeper">

## Going deeper

### What each loss is really asking for

Imagine the simplest possible model: it ignores the input and predicts one number $c$ for everything. Which $c$ does each loss choose? Take the targets 1, 2, and 9.

- **Squared error** picks the **mean**. Here that's $(1 + 2 + 9) \div 3 = 4$. Moving away from 4 in either direction makes the total squared error bigger.
- **Absolute error** picks the **median**, which is 2. The 9 pulls on it no more than any other point would.

This is the deeper reason MSE is sensitive to outliers and MAE isn't. MSE chases the average, and the average follows extreme values. When the data has rare, wild values that you don't want to dominate, a loss that behaves like MAE for large errors is often a good compromise. The **Huber loss** acts like squared error for small errors and like absolute error for large ones.

### The gradient of softmax with cross-entropy

Combining softmax with cross-entropy gives one of the neatest results in machine learning. For each class, the gradient of the loss with respect to that class's logit is

$$\frac{\partial L}{\partial z_i} = p_i - y_i$$

where $p_i$ is the predicted probability and $y_i$ is 1 for the correct class and 0 for the rest.

**Worked example.** A model predicts $p = (0.7, 0.2, 0.1)$, and the correct class is the first. The gradient is $(0.7 - 1, 0.2 - 0, 0.1 - 0) = (-0.3, 0.2, 0.1)$. Gradient descent subtracts it, so the correct class's logit goes up and the others go down, each in proportion to how wrong it was. When the prediction is perfect, the gradient is all zeros and nothing changes.

### Losses for several outputs

Many models predict more than one thing at once. A self-driving car's network might predict where objects are (a regression) and what they are (a classification). The total loss is usually a weighted sum of the separate losses, and the weights become hyperparameters to tune. For **multi-label** problems, where an X-ray can show several findings, each label gets its own sigmoid and its own **binary cross-entropy**, and the losses are added up.

### Cost and objective

You'll also see the words **cost function** and **objective**. They usually mean the total quantity being minimized, which is often the average loss plus a penalty that keeps weights small. That penalty is called regularization, and it's the main subject of the Overfitting & Regularization topic.

### In practice

Libraries combine softmax and cross-entropy into one function that works from the logits directly. That avoids taking the log of a number that has rounded to 0. If you apply softmax yourself and then pass the probabilities to a function that expects logits, the model trains badly without any error message, so check which one a function expects.

A model predicts $p = (0.5, 0.5)$, and the correct class is the second. What is the gradient with respect to the logits?

<details class="check"><summary>Show the answer</summary>

$(0.5 - 0, 0.5 - 1) = (0.5, -0.5)$. Subtracting it raises the second logit and lowers the first.

</details>

</section>

<section data-box="traps">

## Common traps

**Using MSE when outliers are rare but huge.** A few wild values can dominate a squared-error loss. Consider MAE.

**Reading the loss as a percentage.** A cross-entropy of 0.7 doesn't mean 70% of anything. Compare losses with each other.

**Forgetting the minus sign.** Logs of probabilities are negative. The minus sign makes the loss positive.

</section>

<section data-box="connections">

## Connections

Losses are built from [Probability, Bayes & Logarithms](/ml/probability-for-ml/), minimized in [Training with Gradient Descent](/ml/gradient-descent/), and extended with penalties in [Overfitting & Regularization](/ml/generalization/).

</section>

<section data-box="summary">

## Remember this

- Loss: one number for how wrong the model is. Training makes it smaller.
- MSE squares the errors, so big mistakes dominate. MAE is gentler with outliers.
- Softmax turns logits into probabilities that add to 1.
- Cross-entropy is $-\log p$ for the correct class. Confident mistakes cost the most.
- Train on a smooth loss, and report metrics like accuracy.

</section>
