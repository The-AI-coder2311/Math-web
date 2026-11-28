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

<section data-box="traps">

## Common traps

**Trusting accuracy on imbalanced data.** Always compare to the "predict the most common class" baseline.

**Swapping precision and recall.** Precision divides by everything predicted positive. Recall divides by everything actually positive.

**Reporting one threshold as the whole story.** Precision and recall change with the threshold. AUC and curves show the full picture.

</section>

<section data-box="summary">

## Remember this

- Confusion matrix: TP, FP, FN, TN.
- Precision $= \frac{TP}{TP + FP}$. Recall $= \frac{TP}{TP + FN}$.
- F1 is high only when both precision and recall are high.
- A higher threshold usually raises precision and lowers recall.
- AUC: 0.5 is random, and 1.0 is a perfect ranking.

</section>
