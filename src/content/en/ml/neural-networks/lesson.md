---
title: Neurons, Layers, and Activations
summary: Learn what a single neuron computes, why activation functions like ReLU are essential, how layers stack into deep networks, and how to count a network's parameters.
minutes: 14
---

A linear model can only draw straight lines. Real patterns curve: the chance of rain doesn't rise in a straight line with humidity, and "cat" isn't a straight-line function of pixel values. Neural networks bend. They build complicated curves out of a huge number of simple pieces, and the secret ingredient is surprisingly small.

> **The big idea:** A **neuron** computes a weighted sum of its inputs, adds a bias, and passes the result through a nonlinear **activation function** such as ReLU. Stacking layers of neurons builds complicated functions from simple pieces. Without the activation, the whole network would collapse into a single straight line.

## One neuron

A neuron with weights $w$, bias $b$, and inputs $x$ computes

$$z = w \cdot x + b, \qquad \text{output} = a(z)$$

where $a$ is the activation function. With weights $(2, -1)$, bias $-1$, and inputs $(1, 3)$, the weighted sum is $z = 2 - 3 - 1 = -2$.

## Activation functions

- **ReLU:** $\max(0, z)$. Negative numbers become 0, and positive numbers pass through. It's the default in hidden layers. The neuron above outputs $\max(0, -2) = 0$.
- **Sigmoid:** $\frac{1}{1 + e^{-z}}$ squashes any number into the range 0 to 1. It's used for yes-or-no outputs, and for **multi-label** outputs, where each label gets its own independent probability.
- **Tanh** squashes into the range $-1$ to 1.
- **Softmax** turns a list of scores into probabilities that add to 1. It's used for **multi-class** outputs, where exactly one class is right. The raw scores before softmax or sigmoid are the **logits**.
- **Leaky ReLU** and **GELU** are smoother cousins of ReLU. GELU is common in transformers.

## Why the activation matters

Stack two layers with no activation: $y = 2(3x + 1) + 4$. Multiply it out and you get $y = 6x + 6$, still a line. However many linear layers you stack, the result is one linear function. The activation is what lets a network bend.

## A shallow network builds curves from pieces

*Understanding Deep Learning* starts with a network that has one input, a single hidden layer of ReLU units, and one output. Each hidden unit is a "hinge": flat on one side and sloped on the other. Adding the hinges together gives a **piecewise linear** function, made of straight pieces joined at corners. With $D$ hidden units and one input, there are at most $D + 1$ pieces.

More units give more pieces, so the network can follow any smooth curve as closely as you like. That's the **universal approximation theorem**: a wide enough network with one hidden layer can approximate any continuous function. The theorem doesn't say how many units you'd need, or how to find the right weights.

## Worked example: a forward pass

One input $x = 2$ feeds two ReLU hidden units, and then one output:

- $h_1 = \max(0, x - 1) = 1$
- $h_2 = \max(0, -x + 1) = 0$
- $y = 3h_1 + 2h_2 + 1 = 4$

Running inputs forward through the network like this is the **forward pass**.

With the same network, what is $y$ when $x = 0$?

<details class="check"><summary>Show the answer</summary>

$h_1 = \max(0, -1) = 0$ and $h_2 = \max(0, 1) = 1$, so $y = 3 \times 0 + 2 \times 1 + 1 = 3$.

</details>

## Going deep, and counting parameters

A **multilayer perceptron (MLP)** stacks several **fully connected** layers, where every neuron sees every output of the layer before. Deep networks can build far more linear pieces per parameter than shallow ones, because each layer folds and reuses the pieces made by the layers before it. That's one reason depth helps.

Each fully connected layer from $n$ inputs to $m$ neurons has $n \times m$ weights and $m$ biases. A network from 4 inputs to 8 hidden units to 3 outputs has

$$(4 \times 8 + 8) + (8 \times 3 + 3) = 67$$

parameters.

<section data-box="traps">

## Common traps

**Forgetting the biases.** Each neuron has one, so add one per neuron when you count parameters.

**Using softmax for multi-label problems.** If an X-ray can show several findings at once, give each finding its own sigmoid. Softmax forces the probabilities to compete.

**Thinking universal approximation means easy learning.** It promises that good weights exist, not that training will find them.

</section>

<section data-box="summary">

## Remember this

- Neuron: weighted sum, plus bias, then activation.
- ReLU is $\max(0, z)$. Sigmoid gives 0 to 1. Softmax gives probabilities that add to 1.
- With no activation, stacked layers collapse into one linear function.
- A shallow ReLU network is piecewise linear, with at most $D + 1$ pieces for one input.
- Layer parameters = inputs × neurons + neurons.

</section>
