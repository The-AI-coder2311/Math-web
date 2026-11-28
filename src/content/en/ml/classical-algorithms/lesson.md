---
title: The Classic Toolbox
summary: Meet nearest neighbors, decision trees, k-means, Naive Bayes, support vector machines, PCA, and ensembles, the methods that still win on many table-shaped datasets.
minutes: 14
---

Neural networks get the headlines, but plenty of real problems, like predicting which customers will cancel a subscription from a spreadsheet of their history, are still solved best by older, simpler methods. They train in seconds, need less data, and are easier to explain. Each one is built on an idea you can draw on paper.

> **The big idea:** Classical algorithms each use one simple idea. **Nearest neighbors** copies similar examples. **Decision trees** ask yes-or-no questions. **K-means** groups points around centers. **Naive Bayes** combines probabilities. **PCA** finds the directions where data spreads out most. Combining many simple models, an **ensemble**, is often stronger than any single one.

## K-nearest neighbors (KNN)

To classify a new point, find the $K$ training examples closest to it and take a vote. Closeness is usually the straight-line, or Euclidean, distance. Between $(1, 2)$ and $(4, 6)$, it's

$$\sqrt{(4 - 1)^2 + (6 - 2)^2} = \sqrt{25} = 5$$

KNN has no real training step, but predicting is slow on big datasets, since it measures the distance to every example. Features must be scaled, or the one with the biggest numbers decides everything.

## Decision trees

A decision tree is a flowchart: "Is the age over 30? Is the income over 50,000?" Each split is chosen to make the groups below it as **pure** as possible, ideally all one class. One measure of impurity is the **Gini impurity**:

$$\text{Gini} = 1 - \sum p_i^2$$

where $p_i$ is the share of each class. A group of all cats has Gini $1 - 1^2 = 0$, perfectly pure. A half-and-half group has $1 - (0.5^2 + 0.5^2) = 0.5$. Another measure is **entropy**, $-\sum p_i \log_2 p_i$, which is 1 for a half-and-half split of two classes.

Deep trees memorize their training data. Two fixes combine many trees:

- **Random forest:** train many trees, each on a random sample of the data and features, and let them vote.
- **Gradient boosting:** train trees one after another, each one fixing the mistakes of the ones before. Popular libraries include XGBoost and LightGBM.

## K-means clustering

K-means groups unlabeled points into $K$ clusters:

1. Pick $K$ starting centers.
2. Assign each point to its nearest center.
3. Move each center to the mean of its points.
4. Repeat steps 2 and 3 until nothing changes.

**Worked example.** One cluster holds $(1, 2)$, $(3, 4)$, and $(5, 9)$. Its new center is the mean of the coordinates: $x = (1 + 3 + 5) \div 3 = 3$ and $y = (2 + 4 + 9) \div 3 = 5$, so the center moves to $(3, 5)$.

## Naive Bayes

Naive Bayes uses Bayes' rule to score each class, with one bold shortcut: it assumes the features are independent once you know the class. For spam, it treats each word as separate evidence and multiplies their probabilities. The assumption is rarely true, which is why it's "naive," but the method is fast and works well on text.

## Support vector machines and PCA

A **support vector machine** draws the boundary between two classes that leaves the widest possible gap, or **margin**, to the nearest points. The **kernel trick** lets it draw curved boundaries.

**Principal component analysis (PCA)** finds the directions along which the data varies most. Keeping only the top few directions shrinks the number of features while keeping most of the information. Each direction's share of the variance tells you how much it keeps.

A group has 3 apples and 1 orange. What is its Gini impurity?

<details class="check"><summary>Show the answer</summary>

The shares are $\frac{3}{4}$ and $\frac{1}{4}$. Gini is $1 - \left(\frac{9}{16} + \frac{1}{16}\right) = \frac{6}{16} = 0.375$.

</details>

<section data-box="traps">

## Common traps

**Forgetting to scale for KNN and k-means.** Both use distances, so a feature measured in thousands drowns out one measured in single digits.

**Choosing K blindly.** In KNN, a $K$ that's too small chases noise, and one that's too big blurs the classes. In k-means, you choose the number of clusters, and the algorithm won't tell you the "right" one.

**Growing one huge tree.** A single deep tree memorizes the training data. Limit its depth or use a forest.

</section>

<section data-box="summary">

## Remember this

- KNN: vote among the $K$ closest training examples.
- Decision trees: yes-or-no splits that make groups purer. Gini $= 1 - \sum p_i^2$.
- Random forest: many trees vote. Boosting: each tree fixes the last one's errors.
- K-means: assign points to the nearest center, move centers to the mean, repeat.
- PCA: keep the directions with the most variance.

</section>
