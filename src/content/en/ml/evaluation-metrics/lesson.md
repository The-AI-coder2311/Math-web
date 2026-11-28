---
title: Is the Model Actually Good?
summary: Learn the confusion matrix, accuracy, precision, recall, specificity, and F1, how a decision threshold trades one for another, and what ROC curves, AUC, and calibration tell you.
minutes: 14
---

A model that screens for a disease is "94% accurate." Is that good? It depends. If only 1% of patients are sick, a model that calls everyone healthy is 99% accurate and completely useless. One number rarely tells the whole story, so this lesson builds a set of numbers that, together, do.

> **The big idea:** Sort every prediction into one of four boxes, the **confusion matrix**, and most useful metrics fall out of it. **Precision** asks how many of the flagged cases were real. **Recall** asks how many of the real cases were flagged. Which one matters more depends on the cost of each kind of mistake.

## The confusion matrix

For a yes-or-no question like "is this patient sick?", every prediction is one of four kinds:

| | Predicted positive | Predicted negative |
|---|---|---|
| **Actually positive** | True positive (TP) | False negative (FN) |
| **Actually negative** | False positive (FP) | True negative (TN) |

A **false positive** is a false alarm. A **false negative** is a miss.

## The main metrics

- **Accuracy** $= \frac{TP + TN}{\text{everything}}$: the share of all predictions that are right.
- **Precision** $= \frac{TP}{TP + FP}$: of everything flagged, how much was real?
- **Recall**, or sensitivity, $= \frac{TP}{TP + FN}$: of everything real, how much was caught?
- **Specificity** $= \frac{TN}{TN + FP}$: of everything negative, how much was correctly cleared?
- **F1 score** $= \frac{2 \times P \times R}{P + R}$: one number that's high only when precision and recall are both high. It's called the **harmonic mean**.

## Worked example

There are 100 patients, and 10 are sick. A model flags 12 of them: 8 sick and 4 healthy. So $TP = 8$, $FP = 4$, $FN = 2$, and $TN = 86$.

- Accuracy: $\frac{8 + 86}{100} = 0.94$.
- Precision: $\frac{8}{12} = \frac{2}{3}$. A third of its alarms are false.
- Recall: $\frac{8}{10} = 0.8$. It misses 2 of the 10 sick patients.
- F1: $\frac{2 \times \frac{2}{3} \times \frac{4}{5}}{\frac{2}{3} + \frac{4}{5}} = \frac{8}{11}$, about 0.73.

The 94% accuracy looked great. Precision and recall show what's really going on.

Using the same example, what is the specificity?

<details class="check"><summary>Show the answer</summary>

There are 90 healthy patients, and 86 were cleared, so it's $\frac{86}{90} = \frac{43}{45}$, about 0.96.

</details>

## Which mistake costs more?

- **Cancer screening:** a miss can be deadly, and a false alarm leads to another test. Favor **recall**.
- **A spam filter:** sending a real email to spam is worse than letting one spam message through. Favor **precision**.

## The threshold

Most classifiers output a probability, and you choose the **decision threshold** that counts as "yes." Raise it from 0.5 to 0.9 and the model flags fewer cases. The ones it flags are more likely real, so precision goes up, but it misses more, so recall goes down. Lowering the threshold does the reverse.

## ROC curves and AUC

The **ROC curve** plots the true positive rate (recall) against the false positive rate ($1 -$ specificity) at every possible threshold. The **area under the curve (AUC)** sums it up in one number:

- 1.0 means the model ranks every positive above every negative.
- 0.5 means its ranking is no better than random.

There's a neat way to read AUC: it's the chance that a randomly chosen positive gets a higher score than a randomly chosen negative. When positives are very rare, the **precision-recall curve** and its area (**AUPRC**) often give a more honest picture than ROC.

## Beyond yes or no

With several classes, **macro averaging** computes a metric for each class and averages them equally, so rare classes count as much as common ones. **Micro averaging** pools every prediction first, so common classes dominate. For regression, **R-squared** measures the share of the target's variance a model explains. **Calibration** asks whether the probabilities mean what they say: of all the cases where the model says 70%, about 70% should turn out positive.

<section data-box="deeper">

## Going deeper

### Moving the threshold, worked out

A model scores six patients. Three are actually sick (P) and three are healthy (N):

| Score | 0.95 | 0.85 | 0.70 | 0.60 | 0.40 | 0.20 |
|---|---|---|---|---|---|---|
| Truth | P | P | N | P | N | N |

**Threshold 0.8.** The model flags the two patients scoring above it, and both are sick. Precision is $\frac{2}{2} = 1$, and recall is $\frac{2}{3}$, since one sick patient was missed.

**Threshold 0.5.** It flags four patients, and three are sick. Precision is $\frac{3}{4}$, and recall is $\frac{3}{3} = 1$.

Lowering the threshold caught the last sick patient, at the cost of one false alarm. Each threshold gives one point on the ROC curve and one point on the precision-recall curve. Sweeping the threshold from high to low traces out the whole curve.

### Why rare positives call for precision-recall curves

Picture fraud detection with 10 frauds among 10,000 transactions. A model that flags 100 transactions, including all 10 frauds, has a false positive rate of only $\frac{90}{9990}$, under 1%, so its ROC curve looks excellent. But its precision is $\frac{10}{100} = 0.1$: nine out of ten alarms are false. The ROC curve hides this, because the huge number of true negatives makes any number of false alarms look small. Precision ignores true negatives, so the precision-recall curve reveals the problem.

### R-squared for regression

For regression, **R-squared** compares a model's squared errors with those of the simplest baseline, always predicting the mean:

$$R^2 = 1 - \frac{\text{sum of squared errors of the model}}{\text{sum of squared errors of the mean}}$$

**Worked example.** The targets are 2, 4, and 6, with mean 4. Always predicting 4 gives squared errors $4 + 0 + 4 = 8$. A model predicts 3, 4, and 5, with squared errors $1 + 0 + 1 = 2$. So $R^2 = 1 - \frac{2}{8} = 0.75$: the model explains 75% of the variation. An $R^2$ of 0 means no better than the mean, and a negative $R^2$ means worse.

### How sure are you about a score?

A test score is measured on a sample, so it has uncertainty. If a model gets 90 of 100 test examples right, its true accuracy could plausibly be anywhere from the mid-80s to the mid-90s. **Bootstrapping** estimates that uncertainty: resample the test set with replacement many times, recompute the score each time, and see how much it varies. The middle 95% of those scores gives a **confidence interval**. When two models differ by 1% on a small test set, the difference may be noise.

### Fairness checks

A single overall score can hide a model that works well for one group of people and badly for another. Computing the metrics separately for each group, such as by age, region, or skin tone for medical images, is a basic part of checking whether a model is fair.

In the six-patient table above, what are the precision and recall at threshold 0.65?

<details class="check"><summary>Show the answer</summary>

Three patients score above 0.65 (0.95, 0.85, and 0.70), and two of them are sick. Precision is $\frac{2}{3}$, and recall is $\frac{2}{3}$, because the sick patient at 0.60 is missed.

</details>

</section>

<section data-box="traps">

## Common traps

**Trusting accuracy on imbalanced data.** Always compare to the "predict the most common class" baseline.

**Swapping precision and recall.** Precision divides by everything predicted positive. Recall divides by everything actually positive.

**Reporting one threshold as the whole story.** Precision and recall change with the threshold. AUC and curves show the full picture.

</section>

<section data-box="connections">

## Connections

Imbalanced data comes up first in [Preparing Data](/ml/data-preparation/). Calibration and probabilities build on [Probability, Bayes & Logarithms](/ml/probability-for-ml/), and IoU for object detection appears in [Convolutional Networks](/ml/convolutional-networks/).

</section>

<section data-box="summary">

## Remember this

- Confusion matrix: TP, FP, FN, TN.
- Precision $= \frac{TP}{TP + FP}$. Recall $= \frac{TP}{TP + FN}$.
- F1 is high only when both precision and recall are high.
- A higher threshold usually raises precision and lowers recall.
- AUC: 0.5 is random, and 1.0 is a perfect ranking.

</section>
