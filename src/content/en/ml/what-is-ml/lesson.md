---
title: Learning Rules from Examples
summary: Learn what a model is, how features, labels, and parameters fit together, the main kinds of machine learning, and how a straight line becomes your first trained model.
minutes: 12
---

How would you write a program that tells cats from dogs in photos? You could try rules: "pointy ears means cat." But some dogs have pointy ears, some cats are photographed from behind, and soon you have a thousand rules that still fail. Machine learning flips the job around. Instead of writing the rules, you show the computer thousands of labeled photos and let it find the rules itself.

> **The big idea:** A **model** is a function with adjustable numbers called **parameters**. **Training** means adjusting those parameters until the model's outputs match examples. After training, the model makes predictions on data it has never seen.

## Key words

| Word | Meaning | House-price example |
|---|---|---|
| Feature | An input the model uses | size, age, number of rooms |
| Label or target | The correct answer | the sale price |
| Example | One row of data | one house |
| Parameters or weights | Numbers the model learns | how much each extra square meter adds |
| Hyperparameter | A setting you choose before training | how fast the model learns |
| Inference | Using a trained model to predict | pricing a new house |

## The kinds of learning

- **Supervised learning:** every example comes with its label. Predicting a house price from its features is supervised.
- **Unsupervised learning:** there are no labels. The model finds structure, such as groups of similar customers.
- **Self-supervised learning:** the labels come from the data itself. Hide the next word of a sentence and ask the model to predict it. That's how large language models are pretrained.
- **Reinforcement learning:** an agent acts in a world and gets rewards, like a game-playing program.

Supervised problems come in two main types. **Regression** predicts a number, such as a price or a temperature. **Classification** predicts a category, such as cat or dog. Classification with two categories is called binary, and with more, it's multi-class.

## Worked example: a line is a model

The simplest model is a straight line, $y = wx + b$. It has two parameters: the slope $w$ and the intercept $b$, which machine learning calls the **bias**.

Suppose the data says a 1-hour study session gives a quiz score of 5, and a 3-hour session gives 9. A line through both points has slope

$$w = \frac{9 - 5}{3 - 1} = 2$$

Then $5 = 2 \times 1 + b$, so $b = 3$. The trained model is $y = 2x + 3$. For a 4-hour session, it predicts $2 \times 4 + 3 = 11$.

Real data never lands exactly on a line. Training picks the $w$ and $b$ that make the total error smallest. You'll measure that error with a **loss function** later in this level, and you'll learn how training finds the best parameters with **gradient descent**.

A model predicts $y = 4x - 1$. What does it predict for $x = 3$?

<details class="check"><summary>Show the answer</summary>

$4 \times 3 - 1 = 11$.

</details>

## Always compare to a baseline

Before celebrating a model, ask what a trivial model would score. If 90% of emails are not spam, a "model" that always answers "not spam" is right 90% of the time. A spam filter with 91% accuracy is barely better than doing nothing. This trivial model is called a **baseline**, and a useful model has to beat it.

## Training versus inference

**Training** is slow and happens once, or once in a while. It needs labeled data and lots of computing. **Inference** is fast and happens every time someone uses the model. When you ask a voice assistant a question, it runs inference. The parameters stay fixed while it answers.

<section data-box="deeper">

## Going deeper

### The supervised learning recipe

*Understanding Deep Learning* describes every supervised learning project with the same four steps:

1. **Choose a model family**: a formula with adjustable parameters, such as the line $y = wx + b$ or a neural network.
2. **Choose a loss function** that measures how badly a given set of parameters fits the training data.
3. **Train**: search for the parameters that make the loss smallest.
4. **Test**: measure performance on data the model has never seen.

Every topic in Level 2 zooms in on one of these steps.

### Fitting a line to three points

Real data never lands exactly on a line, so training picks the line with the smallest total squared error. For a line, there's a formula. With $\bar{x}$ and $\bar{y}$ the averages of the inputs and targets,

$$w = \frac{\sum (x - \bar{x})(y - \bar{y})}{\sum (x - \bar{x})^2} \qquad b = \bar{y} - w\bar{x}$$

**Worked example.** Fit the points $(0, 1)$, $(1, 2)$, and $(2, 6)$. The averages are $\bar{x} = 1$ and $\bar{y} = 3$.

- The top of the fraction is $(-1)(-2) + (0)(-1) + (1)(3) = 5$.
- The bottom is $1 + 0 + 1 = 2$.
- So $w = 2.5$, and $b = 3 - 2.5 \times 1 = 0.5$.

The best line is $y = 2.5x + 0.5$. Its predictions are 0.5, 3, and 5.5, so it misses every point a little, but no other line has a smaller total squared error. Neural networks have no such formula, which is why they're trained step by step with gradient descent instead.

### Inductive bias: what a model assumes

Every model family makes assumptions before it sees any data. A line assumes the pattern is straight. A convolutional network assumes nearby pixels matter together. These built-in assumptions are the model's **inductive bias**. A good inductive bias lets a model learn from less data. A bad one caps how well it can ever do, however much data it gets.

### Models are functions, not magic

A trained model is a fixed function. Give it the same input twice and it gives the same output. It has no understanding beyond the patterns in its training data, and it can only be as good as that data. If a hiring model is trained on past decisions that were unfair, it learns to repeat them. Thinking about where the data came from is part of building a model, not an afterthought.

### Classification as numbers

A classifier also outputs numbers. For "cat or dog," it might output 0.83, meaning an 83% chance of "cat." Turning that into an answer takes a **decision threshold**, often 0.5. Treating classification as predicting probabilities lets us use the same training machinery for every kind of problem.

Find the best-fit line for $(0, 0)$, $(1, 1)$, and $(2, 5)$.

<details class="check"><summary>Show the answer</summary>

The averages are $\bar{x} = 1$ and $\bar{y} = 2$. The top is $(-1)(-2) + 0 + (1)(3) = 5$, and the bottom is 2, so $w = 2.5$ and $b = 2 - 2.5 = -0.5$. The line is $y = 2.5x - 0.5$.

</details>

</section>

<section data-box="traps">

## Common traps

**Mixing up parameters and hyperparameters.** The model learns its parameters. You choose its hyperparameters, such as the learning rate or the number of layers.

**Calling every prediction "classification."** Predicting a number, even a whole number like a count, is usually regression.

**Skipping the baseline.** High accuracy means little until you know what always guessing the most common answer would score.

</section>

<section data-box="connections">

## Connections

This topic uses the math from [Vectors, Matrices & Dot Products](/ml/vectors-matrices/). The recipe's steps return in [Loss Functions](/ml/loss-functions/), [Training with Gradient Descent](/ml/gradient-descent/), and [Measuring Performance](/ml/evaluation-metrics/).

</section>

<section data-box="summary">

## Remember this

- A model is a function with parameters. Training tunes them to fit examples.
- Features go in, and a prediction comes out. The label is the right answer.
- Supervised has labels. Unsupervised doesn't. Self-supervised makes its own labels.
- Regression predicts numbers. Classification predicts categories.
- Always check a model against a simple baseline.

</section>
