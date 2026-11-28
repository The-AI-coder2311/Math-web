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

<section data-box="deeper">

## Going deeper

### A full backward pass through two layers

Take a tiny network with one input, one hidden ReLU unit, and one output:

$$h = \text{ReLU}(w_1 x) \qquad y = w_2 h \qquad L = (y - t)^2$$

Use $x = 1$, $w_1 = 2$, $w_2 = 3$, and target $t = 4$.

**Forward pass.** $h = \text{ReLU}(2) = 2$, then $y = 3 \times 2 = 6$, and the loss is $(6 - 4)^2 = 4$. Store $h$ and $y$, because the backward pass needs them.

**Backward pass**, from the end:

1. $\frac{\partial L}{\partial y} = 2(y - t) = 4$.
2. For the last weight: $\frac{\partial L}{\partial w_2} = \frac{\partial L}{\partial y} \times h = 4 \times 2 = 8$.
3. Pass the gradient back to the hidden unit: $\frac{\partial L}{\partial h} = \frac{\partial L}{\partial y} \times w_2 = 4 \times 3 = 12$.
4. Through the ReLU: its input was positive, so its slope is 1, and the gradient stays 12.
5. For the first weight: $\frac{\partial L}{\partial w_1} = 12 \times x = 12$.

Each step multiplies the incoming gradient by one local derivative. Step 3 is the key move: the gradient sent backward uses the **weight**, while the gradient for a weight uses the **activation** that fed it. Gradient descent then lowers both weights, which lowers the prediction toward 4.

### Dead ReLUs

Now change $w_1$ to $-2$. The ReLU's input is $-2$, so $h = 0$ and its slope is 0. In step 4, the gradient is multiplied by 0, so $w_1$ gets no gradient at all. If a ReLU unit's input is negative for every training example, it never updates again. It's a **dead ReLU**. Leaky ReLU, which keeps a small slope like 0.01 for negative inputs, avoids this.

### Why the backward pass is cheap

A naive approach would nudge each weight separately and rerun the network, which takes one extra forward pass for every weight. That's billions of passes for a large model. Backpropagation reuses each layer's incoming gradient for all of that layer's weights at once, so the whole backward pass costs about as much as one or two forward passes. The price is memory: every activation from the forward pass must be stored until the backward pass uses it. That's why training needs far more memory than running a trained model.

### Exploding gradients and clipping

When gradients explode, one huge step can wreck a model that was training well. **Gradient clipping** sets a maximum size for the gradient vector: if it's longer than the limit, it's scaled down to the limit, keeping its direction. Recurrent networks and transformers commonly use clipping as a safety net.

### Initialization, by the numbers

Each neuron adds up $n$ weighted inputs. If every weight has variance $\sigma^2$, the sum's variance grows with $n\sigma^2$. Choosing $\sigma^2 = \frac{1}{n}$ keeps it steady from layer to layer. ReLU zeroes about half of its inputs, which halves the variance, so He initialization doubles it back with $\frac{2}{n}$.

In the two-layer example, what is $\frac{\partial L}{\partial w_1}$ if the input is $x = 2$ instead, with the same weights and target?

<details class="check"><summary>Show the answer</summary>

Forward: $h = 4$ and $y = 12$, so $\frac{\partial L}{\partial y} = 2(12 - 4) = 16$. Then $\frac{\partial L}{\partial h} = 16 \times 3 = 48$, the ReLU passes it through, and $\frac{\partial L}{\partial w_1} = 48 \times 2 = 96$.

</details>

</section>

<section data-box="traps">

## Common traps

**Forgetting to clear gradients.** Without `zero_grad()`, each step adds the new gradients to the old ones.

**Starting all weights equal.** The neurons stay copies of each other. Start from small random values.

**Blaming the data for a stuck network.** If the early layers' gradients are near zero, check the activations, initialization, and depth first.

</section>

<section data-box="connections">

## Connections

This is the chain rule from [Derivatives, Gradients & the Chain Rule](/ml/derivatives-gradients/), applied to [Neural Networks](/ml/neural-networks/). Its gradients feed [Training with Gradient Descent](/ml/gradient-descent/), and residual connections are central to [Attention & Transformers](/ml/transformers/).

</section>

<section data-box="summary">

## Remember this

- Backpropagation: a forward pass for the loss, then a backward pass using the chain rule.
- Each layer's gradient = the gradient from above × its local derivative.
- Long products of small factors vanish, and of large factors explode.
- He initialization: variance $\frac{2}{n}$ for ReLU layers.
- Residual connections ($x + f(x)$) and normalization keep deep networks trainable.

</section>
