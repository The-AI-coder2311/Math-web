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

<section data-box="traps">

## Common traps

**Mixing up parameters and hyperparameters.** The model learns its parameters. You choose its hyperparameters, such as the learning rate or the number of layers.

**Calling every prediction "classification."** Predicting a number, even a whole number like a count, is usually regression.

**Skipping the baseline.** High accuracy means little until you know what always guessing the most common answer would score.

</section>

<section data-box="summary">

## Remember this

- A model is a function with parameters. Training tunes them to fit examples.
- Features go in, and a prediction comes out. The label is the right answer.
- Supervised has labels. Unsupervised doesn't. Self-supervised makes its own labels.
- Regression predicts numbers. Classification predicts categories.
- Always check a model against a simple baseline.

</section>
