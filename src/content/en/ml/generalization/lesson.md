---
title: Memorizing Versus Learning
summary: Learn to spot overfitting and underfitting, the bias-variance tradeoff, and the tools that help a model do well on new data, from L1 and L2 penalties to dropout, early stopping, and cross-validation.
minutes: 13
---

Two students prepare for a test. One memorizes the answers to last year's practice questions. The other learns why the answers are right. On the practice questions they tie. On the real test, with new questions, the memorizer falls apart. Models face exactly the same choice, and they drift toward memorizing unless we stop them.

> **The big idea:** What matters is **generalization**, how well a model does on data it has never seen. A model that's too simple **underfits** and misses the pattern. A model that's too flexible **overfits** and memorizes noise. **Regularization** is any technique that pushes a model back toward the general pattern.

## Reading the symptoms

| Training error | Validation error | Diagnosis | Try |
|---|---|---|---|
| High | High | Underfitting | a bigger model, better features, longer training |
| Low | High | Overfitting | more data, regularization, a smaller model |
| Low | Low, close to training | Good fit | ship it, after a final test |

The **loss curve** shows this over time. If the training loss keeps falling while the validation loss turns and rises, the model has started memorizing.

## Bias and variance

*Understanding Deep Learning* splits test error into three sources:

- **Noise:** randomness in the data that no model can predict.
- **Bias:** error from a model too simple to capture the pattern, like fitting a straight line to a curve.
- **Variance:** error from a model so flexible that it fits each training sample differently. Train it on another sample of the same data, and you get a very different model.

Simple models tend to have high bias. Flexible models tend to have high variance. The **bias-variance tradeoff** is the balancing act between them. Very large neural networks complicate this story. Past a certain size, test error can fall again, which is called **double descent**, but the vocabulary is still the best way to reason about a model that's failing.

## Regularization tools

**L2 regularization**, also called ridge or **weight decay**, adds a penalty $\lambda \sum w^2$ to the loss. It keeps all the weights small, which makes the model smoother.

**L1 regularization**, or lasso, adds $\lambda \sum |w|$. It tends to push some weights to exactly zero, which effectively removes features.

The number $\lambda$ sets how strong the penalty is. It's a hyperparameter.

**Worked example.** The weights are $(1, -2, 3)$ and $\lambda = 0.1$.

- L2 penalty: $0.1 \times (1 + 4 + 9) = 1.4$.
- L1 penalty: $0.1 \times (1 + 2 + 3) = 0.6$.

**Dropout** randomly switches off a share of the neurons in each training step, so the network can't rely on any single one. At test time, every neuron is on.

**Early stopping** watches the validation loss and stops training when it stops improving, keeping the best checkpoint.

**Data augmentation** makes varied copies of the training examples, such as flipped, cropped, or recolored photos, so the model sees more variety.

What is the L2 penalty for weights $(2, 0, -1)$ with $\lambda = 0.5$?

<details class="check"><summary>Show the answer</summary>

$0.5 \times (4 + 0 + 1) = 2.5$.

</details>

## Choosing settings fairly

Hyperparameters like $\lambda$, the dropout rate, and the learning rate are chosen with the **validation set**, never the test set.

When data is scarce, **k-fold cross-validation** makes better use of it. Split the data into $k$ parts. Train $k$ times, each time holding out a different part for validation, then average the $k$ scores. With 5 folds, each model trains on 80% of the data and is scored on the other 20%.

To search for good settings, **grid search** tries every combination from a list, and **random search** tries random combinations, which often finds good ones faster. Every combination is trained once per fold, so cross-validated searches get expensive quickly.

<section data-box="traps">

## Common traps

**Celebrating training accuracy.** A model can reach 100% on its training data by memorizing it. Only held-out data tells the truth.

**Tuning on the test set.** Choose settings with validation data. The test set is for the final score only.

**Regularizing an underfit model.** Penalties make a model simpler. If it's already too simple, they make things worse.

</section>

<section data-box="summary">

## Remember this

- Underfitting: bad on training and validation data. Overfitting: good on training, bad on validation.
- Bias comes from a model too simple, and variance from a model too flexible.
- L2 adds $\lambda \sum w^2$ and keeps weights small. L1 adds $\lambda \sum |w|$ and zeroes some out.
- Dropout, early stopping, and augmentation all fight overfitting.
- K-fold cross-validation trains $k$ times and averages the scores.

</section>
