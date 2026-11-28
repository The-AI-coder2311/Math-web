---
title: Getting the Data Right
summary: Learn how to scale features, encode categories, split data into training, validation, and test sets, and spot the data leaks that make a model look better than it is.
minutes: 12
---

People who build models for a living often say most of the job is the data, not the model. A model can only learn what the data shows it, and messy data teaches it the wrong lessons. A model trained on house sizes in square meters and prices in dollars might decide size barely matters, because the size numbers are so much smaller. This lesson covers the fixes.

> **The big idea:** Before training, put the data in a fair, consistent form. Scale the numbers, turn categories into numbers, and split the data so the final test uses examples the model has **never** seen. Anything that lets test information sneak into training, called **leakage**, makes the score a lie.

## Key words

| Word | Meaning |
|---|---|
| Data cleaning | Fixing or removing wrong, duplicate, or missing values |
| Imputation | Filling in a missing value, often with the mean or median |
| Min-max normalization | Rescaling a feature to run from 0 to 1 |
| Standardization (z-score) | Rescaling to mean 0 and standard deviation 1 |
| One-hot encoding | Turning a category into 0s with a single 1 |
| Class imbalance | Some classes are far rarer than others |
| Data augmentation | Making varied copies of training examples, such as flipped photos |

## Scaling numbers

**Min-max normalization** maps the smallest value to 0 and the largest to 1:

$$x' = \frac{x - \min}{\max - \min}$$

If ages run from 20 to 60, an age of 30 becomes $\frac{30 - 20}{60 - 20} = 0.25$.

**Standardization** subtracts the mean and divides by the standard deviation:

$$z = \frac{x - \text{mean}}{\text{standard deviation}}$$

If test scores have mean 70 and standard deviation 10, a score of 85 has $z = 1.5$: one and a half standard deviations above average. Many training methods work better when every feature has a similar scale.

## Encoding categories

A model needs numbers, so "red, green, blue" has to change. **Label encoding** writes red as 0, green as 1, and blue as 2. That accidentally tells the model blue is "bigger" than red. **One-hot encoding** avoids this with one column per category: red is $(1, 0, 0)$, green is $(0, 1, 0)$, and blue is $(0, 0, 1)$. A feature with 5 categories becomes 5 columns.

## Splitting the data

- The **training set** is what the model learns from.
- The **validation set** is for choosing settings and comparing models.
- The **test set** is touched once, at the very end, for an honest score.

A common split is 70% training, 15% validation, and 15% test. A **stratified split** keeps each class's share the same in every part. That matters when one class is rare.

## Worked example: catching a leak

A hospital has 1,000 chest X-rays from 200 patients, about 5 per patient. A team shuffles all the X-rays and splits them 80/20. Their model scores brilliantly on the test set, then fails at a new hospital.

What went wrong? X-rays of the same patient landed in both the training set and the test set. The model learned to recognize patients, not diseases. The fix is a **group split** that keeps every X-ray from one patient on the same side.

Another classic leak: computing the mean and standard deviation for scaling on the whole dataset before splitting. The training data then contains a hint about the test data. Compute scaling numbers from the training set only, and reuse them on the validation and test sets.

A feature has minimum 10 and maximum 50. What is 40 after min-max normalization?

<details class="check"><summary>Show the answer</summary>

$\frac{40 - 10}{50 - 10} = \frac{30}{40} = 0.75$.

</details>

## Class imbalance

If 1 in 100 transactions is fraud, a model can reach 99% accuracy by never flagging anything. Fixes include **oversampling** the rare class (repeating its examples), **undersampling** the common one, giving rare-class mistakes more weight, and judging the model with better metrics than accuracy, which you'll meet in the Measuring Performance topic.

<section data-box="traps">

## Common traps

**Scaling before splitting.** Statistics from the whole dataset leak test information. Fit the scaling on the training set alone.

**Label-encoding categories with no order.** Colors and cities have no order, so numbering them invents one. Use one-hot encoding.

**Splitting rows when people repeat.** When one person or object appears many times, split by person, or the test set isn't new.

**Peeking at the test set.** Every time you tune using the test score, it becomes a little less honest.

</section>

<section data-box="summary">

## Remember this

- Min-max scales to 0 to 1. A z-score is the distance from the mean in standard deviations.
- One-hot encoding: one column per category, with a single 1.
- Train to learn, validate to choose, test once at the end.
- Fit scaling on the training data only.
- Leakage makes scores look great and real results look bad.

</section>
