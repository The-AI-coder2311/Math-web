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

<section data-box="deeper">

## Going deeper

### How a tree chooses a split

A decision tree tries many possible questions and keeps the one that makes the groups below it purest on average. Here's one choice worked out with Gini impurity.

A node holds 10 examples: 5 "yes" and 5 "no." Its Gini impurity is $1 - (0.5^2 + 0.5^2) = 0.5$. A candidate question splits it into:

- **Left:** 4 examples, all "yes." Gini is 0.
- **Right:** 6 examples, 1 "yes" and 5 "no." Gini is $1 - \left(\frac{1}{36} + \frac{25}{36}\right) = \frac{10}{36}$.

Weight each side by its share of the examples:

$$\frac{4}{10} \times 0 + \frac{6}{10} \times \frac{10}{36} = \frac{1}{6}$$

The impurity drops from 0.5 to about 0.17. The tree compares this drop with every other candidate question and keeps the best one. Then it repeats inside each child node, until the nodes are pure or a depth limit is reached.

### Why ensembles work

Suppose 5 independent models are each right 70% of the time, and they vote. The majority is right when at least 3 of the 5 are, which happens about 84% of the time. Combining the models helps because their mistakes partly cancel out. The catch is the word "independent": models trained on the same data tend to make the same mistakes. A random forest trains each tree on a different random sample of rows and features precisely to make the trees disagree. That's called **bagging**. Boosting takes another route: each new tree focuses on the examples the earlier trees still get wrong.

### Choosing K in k-means

K-means needs you to pick $K$. One common method plots the total distance from points to their centers for $K = 1, 2, 3, \ldots$. The total always shrinks as $K$ grows, so you look for the "elbow," the point where adding another cluster stops helping much. K-means also depends on its starting centers, so it's usually run several times with different starts. And it assumes roughly round clusters of similar size. For oddly shaped clusters, **DBSCAN** groups points by how densely packed they are and labels isolated points as outliers. **Hierarchical clustering** builds a tree of nested clusters, so you can choose the level of detail afterward.

### Visualizing high-dimensional data

PCA keeps the directions of greatest variance, which makes it good for compressing data before another model. To look at data in 2 dimensions, **t-SNE** and **UMAP** are popular. They try to keep points that are near each other in high dimensions near each other on the page. They're for viewing only: distances between far-apart clusters on their plots don't mean much.

### When to use the classics

For tables of data with up to a few thousand rows, gradient-boosted trees are often the strongest choice, and they need little preparation. Start with a simple baseline, such as logistic regression, before trying anything fancier.

A node holds 2 "yes" and 2 "no." A split sends both "yes" examples left and both "no" examples right. What is the weighted Gini impurity after the split?

<details class="check"><summary>Show the answer</summary>

Both children are pure, with Gini 0, so the weighted impurity is 0. The impurity dropped from 0.5 to 0, a perfect split.

</details>

</section>

<section data-box="traps">

## Common traps

**Forgetting to scale for KNN and k-means.** Both use distances, so a feature measured in thousands drowns out one measured in single digits.

**Choosing K blindly.** In KNN, a $K$ that's too small chases noise, and one that's too big blurs the classes. In k-means, you choose the number of clusters, and the algorithm won't tell you the "right" one.

**Growing one huge tree.** A single deep tree memorizes the training data. Limit its depth or use a forest.

</section>

<section data-box="connections">

## Connections

Distances come from [Vectors, Matrices & Dot Products](/ml/vectors-matrices/), and Naive Bayes uses [Probability, Bayes & Logarithms](/ml/probability-for-ml/). Ensembles are one answer to the variance problem in [Overfitting & Regularization](/ml/generalization/).

</section>

<section data-box="summary">

## Remember this

- KNN: vote among the $K$ closest training examples.
- Decision trees: yes-or-no splits that make groups purer. Gini $= 1 - \sum p_i^2$.
- Random forest: many trees vote. Boosting: each tree fixes the last one's errors.
- K-means: assign points to the nearest center, move centers to the mean, repeat.
- PCA: keep the directions with the most variance.

</section>
