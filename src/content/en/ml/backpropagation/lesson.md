---
title: Sending the Error Backward
summary: Learn how backpropagation uses the chain rule to find every weight's gradient, why gradients vanish or explode in deep networks, and how good initialization, residual connections, and normalization fix it.
minutes: 15
---

Gradient descent needs the gradient of the loss with respect to every weight, and a large network has billions of them. Nudging each weight one at a time to see what happens would take forever. **Backpropagation** gets all of them in roughly the time of one extra pass through the network. It's the algorithm that made deep learning practical.

> **The big idea:** Run the network forward to get the loss. Then go **backward**, layer by layer, using the chain rule: each layer's gradient is the gradient arriving from above, multiplied by that layer's own local derivative. One backward pass gives the gradient for every weight at once.

## A tiny computational graph

A **computational graph** records every operation in the forward pass. Take one weight $w = 2$, input $x = 3$, and target 5:

- **Forward:** $y = wx = 6$, and the loss is $L = (y - 5)^2 = 1$.
- **Backward:** $\frac{dL}{dy} = 2(y - 5) = 2$. Then $\frac{dy}{dw} = x = 3$.
- **Chain rule:** $\frac{dL}{dw} = 2 \times 3 = 6$.

In a deep network, the same thing happens layer after layer. The gradient arriving at each layer is reused to compute the gradients for that layer's weights and the gradient passed further back. Nothing is computed twice, which is why backpropagation is fast.

Frameworks like PyTorch build the graph automatically as your code runs. This is called **autograd**: calling `loss.backward()` runs the backward pass. Because gradients add up across calls, a training loop clears them with `zero_grad()` before each step, then calls the optimizer's `step()` to update the weights.

## Vanishing and exploding gradients

Going backward through $n$ layers multiplies about $n$ factors together. If each factor is a bit below 1, the product shrinks fast. Ten factors of 0.5 give

$$0.5^{10} = \frac{1}{1024}$$

The early layers then get almost no gradient and barely learn. This is the **vanishing gradient** problem. If the factors are above 1, the product blows up instead, and the weights jump wildly. That's an **exploding gradient**.

The sigmoid made this worse. Its slope is never more than 0.25, so every sigmoid layer shrinks the gradient by at least a factor of 4. ReLU has slope exactly 1 for positive inputs, which is one reason it replaced sigmoid in hidden layers.

Ten layers each multiply the gradient by 2. By what factor does the gradient grow?

<details class="check"><summary>Show the answer</summary>

$2^{10} = 1024$. That's an exploding gradient.

</details>

## Fix 1: careful initialization

If weights start too large, signals and gradients explode. If they start too small, they vanish. **He initialization**, designed for ReLU networks, draws each weight with variance $\frac{2}{n}$, where $n$ is the number of inputs to the neuron. That keeps the size of the signal roughly steady from layer to layer. **Xavier initialization** plays the same role for tanh and sigmoid.

Never start every weight at the same value, such as zero. Every neuron in a layer would compute the same thing and get the same gradient, so they'd stay identical forever.

## Fix 2: residual connections

A **residual connection**, or skip connection, adds a block's input to its output: $y = x + f(x)$. Its derivative is $1 + f'(x)$. Even if $f'(x)$ is tiny, the 1 gives the gradient a clear path backward. Three plain layers that each multiply the gradient by 0.1 shrink it to 0.001. Three residual blocks multiply it by $1.1^3 \approx 1.33$ instead. Residual networks (ResNets) with over a hundred layers train well because of this.

## Fix 3: normalization

**Batch normalization** rescales each neuron's outputs across a batch to mean 0 and standard deviation 1, then applies a learned scale and shift. It keeps the numbers flowing through the network in a steady range. **Layer normalization** does the same across the features of each single example instead of across the batch. It's standard in transformers.

<section data-box="traps">

## Common traps

**Forgetting to clear gradients.** Without `zero_grad()`, each step adds the new gradients to the old ones.

**Starting all weights equal.** The neurons stay copies of each other. Start from small random values.

**Blaming the data for a stuck network.** If the early layers' gradients are near zero, check the activations, initialization, and depth first.

</section>

<section data-box="summary">

## Remember this

- Backpropagation: a forward pass for the loss, then a backward pass using the chain rule.
- Each layer's gradient = the gradient from above × its local derivative.
- Long products of small factors vanish, and of large factors explode.
- He initialization: variance $\frac{2}{n}$ for ReLU layers.
- Residual connections ($x + f(x)$) and normalization keep deep networks trainable.

</section>
