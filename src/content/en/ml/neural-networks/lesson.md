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

<section data-box="deeper">

## Going deeper

### Building a shape out of ReLUs

Here's how a shallow network builds a curve. Combine three ReLU units:

$$f(x) = \text{ReLU}(x) - 2 \, \text{ReLU}(x - 1) + \text{ReLU}(x - 2)$$

- For $x \le 0$, every unit is 0, so $f(x) = 0$.
- Between 0 and 1, only the first unit is on, so $f(x) = x$, rising to 1.
- Between 1 and 2, the second unit switches on and subtracts $2(x - 1)$, so the graph slopes down to 0.
- For $x \ge 2$, the third unit switches on and cancels the slope, so $f(x) = 0$ again.

The result is a triangle, a little "bump" between 0 and 2. Add many bumps of different heights and positions, and you can trace out almost any curve. That's the idea behind the universal approximation theorem, made visible.

### A layer in matrix form

A fully connected layer applies every neuron at once:

$$h = a(Wx + b)$$

where $W$ holds one row of weights per neuron, $b$ is the vector of biases, and the activation $a$ acts on each entry separately. A deep network chains these: $h_1 = a(W_1 x + b_1)$, then $h_2 = a(W_2 h_1 + b_2)$, and so on, with a final layer that produces the output. This compact notation is how *Understanding Deep Learning* writes every network in the book.

### Why depth folds space

With one input, a shallow network with $D$ ReLU units makes at most $D + 1$ linear pieces. Deep networks can do much better. Think of each layer as folding the input line over on itself. The next layer's pieces get repeated in every fold. Two layers that each fold the line in half produce 4 copies of whatever the third layer builds, and $k$ such layers produce $2^k$. A deep network can make a huge number of linear pieces from relatively few parameters. Not every function needs that, but natural data like images and speech seems to have this kind of repeated, layered structure.

### Hidden layers learn features

In a trained image network, early layers respond to edges and colors, middle layers to textures and parts like eyes or wheels, and late layers to whole objects. Nobody programs these features. They emerge because they help reduce the loss. That's the key difference from classical methods, where people design the features by hand.

### Choosing the output layer

| Task | Output layer | Loss |
|---|---|---|
| Regression | no activation | squared error |
| Yes or no | 1 sigmoid unit | binary cross-entropy |
| One of many classes | softmax over classes | cross-entropy |
| Several labels at once | 1 sigmoid per label | binary cross-entropy per label |

What is $f(1.5)$ for the triangle function above?

<details class="check"><summary>Show the answer</summary>

$\text{ReLU}(1.5) - 2 \, \text{ReLU}(0.5) + \text{ReLU}(-0.5) = 1.5 - 1 + 0 = 0.5$, halfway down the right side of the triangle.

</details>

</section>

<section data-box="traps">

## Common traps

**Forgetting the biases.** Each neuron has one, so add one per neuron when you count parameters.

**Using softmax for multi-label problems.** If an X-ray can show several findings at once, give each finding its own sigmoid. Softmax forces the probabilities to compete.

**Thinking universal approximation means easy learning.** It promises that good weights exist, not that training will find them.

</section>

<section data-box="connections">

## Connections

Each layer is a matrix multiplication from [Vectors, Matrices & Dot Products](/ml/vectors-matrices/). Training these networks needs [Backpropagation](/ml/backpropagation/), and specialized versions appear in [Convolutional Networks](/ml/convolutional-networks/) and [Attention & Transformers](/ml/transformers/).

</section>

<section data-box="summary">

## Remember this

- Neuron: weighted sum, plus bias, then activation.
- ReLU is $\max(0, z)$. Sigmoid gives 0 to 1. Softmax gives probabilities that add to 1.
- With no activation, stacked layers collapse into one linear function.
- A shallow ReLU network is piecewise linear, with at most $D + 1$ pieces for one input.
- Layer parameters = inputs × neurons + neurons.

</section>
