---
title: Lists and Grids of Numbers
summary: Learn scalars, vectors, matrices, and tensors, how to take a dot product, and how one matrix multiplication runs a whole layer of a neural network.
minutes: 12
---

A photo on your phone is a grid of numbers. A sentence sent to a chatbot becomes a list of numbers. A trained model is millions of numbers. Machine learning is mostly arithmetic on lists and grids, so this is where the path starts.

> **The big idea:** Machine learning stores everything as numbers arranged in lists (vectors) and grids (matrices). The **dot product**, which multiplies matching entries and adds them up, is the single most common calculation in the field.

## Key words

| Word | Meaning | Example |
|---|---|---|
| Scalar | One number | $7$ |
| Vector | A list of numbers | $(2, 0, 5)$ |
| Matrix | A grid with rows and columns | a 3 by 4 grid has 12 entries |
| Tensor | Any number of dimensions | a batch of 32 color photos, each 224 by 224, has shape (32, 3, 224, 224) |
| Shape | The size along each dimension | a 3 by 4 matrix has shape (3, 4) |
| Transpose | Rows become columns | a (3, 4) matrix becomes (4, 3) |

## The dot product

To take the dot product of two vectors of the same length, multiply the entries that line up, then add:

$$(2, 1, 3) \cdot (4, 0, 5) = 2 \times 4 + 1 \times 0 + 3 \times 5 = 23$$

Why does machine learning care? Imagine a model that guesses a house price from its size, age, and number of rooms. It gives each input a **weight**, a number for how much that input matters. The guess is the dot product of the inputs and the weights. A neuron in a neural network does the same thing, then adds one more number called the bias.

The dot product also measures how much two vectors point the same way. If it's large and positive, they point roughly the same way. If it's zero, they're at right angles. If it's negative, they point roughly opposite ways. Language models use this to judge how related two words are.

## Matrix multiplication

A matrix times a vector is a stack of dot products, one per row:

$$\begin{pmatrix} 1 & 2 \\ 3 & 4 \end{pmatrix} \begin{pmatrix} 5 \\ 6 \end{pmatrix} = \begin{pmatrix} 1 \times 5 + 2 \times 6 \\ 3 \times 5 + 4 \times 6 \end{pmatrix} = \begin{pmatrix} 17 \\ 39 \end{pmatrix}$$

Each row of the matrix holds the weights of one neuron. So one matrix multiplication runs a whole layer of neurons at once. That's why graphics cards, which are built to multiply matrices quickly, made deep learning practical.

**The shape rule.** You can multiply an $m \times n$ matrix by an $n \times p$ matrix. The inner numbers have to match, and the answer has shape $m \times p$. A (2, 3) matrix times a (3, 5) matrix gives a (2, 5) matrix. A (2, 3) matrix times a (2, 3) matrix doesn't work at all. Printing shapes is the fastest way to find most bugs in machine learning code.

## Worked example: a tiny layer

A layer has 2 neurons and gets 3 inputs, $x = (1, 2, 1)$. Neuron 1 has weights $(1, 0, 2)$, and neuron 2 has weights $(0, 3, -1)$.

- Neuron 1: $1 \times 1 + 0 \times 2 + 2 \times 1 = 3$
- Neuron 2: $0 \times 1 + 3 \times 2 + (-1) \times 1 = 5$

The output is the vector $(3, 5)$. The weight matrix has shape (2, 3): one row per neuron and one column per input. It holds $2 \times 3 = 6$ weights.

What is $(1, -1, 2) \cdot (3, 4, 1)$?

<details class="check"><summary>Show the answer</summary>

$1 \times 3 + (-1) \times 4 + 2 \times 1 = 1$. Watch the minus sign on the middle term.

</details>

## Eigenvectors, briefly

Most vectors change direction when a matrix multiplies them. A few special ones only get stretched. These are **eigenvectors**, and the stretch factor is the **eigenvalue**. For the matrix with rows $(2, 0)$ and $(0, 3)$, the vector $(1, 0)$ becomes $(2, 0)$. It's stretched by 2 and doesn't turn. Principal component analysis, which you'll meet later, uses eigenvectors to find the directions where data spreads out most.

<section data-box="traps">

## Common traps

**Multiplying in the wrong order.** For matrices, $AB$ and $BA$ are usually different, and often only one of them has shapes that fit.

**Mixing up the shape rule.** The inner sizes must match, and the outer sizes give the answer's shape. (2, 3) times (3, 5) gives (2, 5), not (3, 3).

**Forgetting the adding.** A dot product is a single number, not a list. Multiply the matching entries, then add all of them.

</section>

<section data-box="summary">

## Remember this

- Scalar: one number. Vector: a list. Matrix: a grid. Tensor: any number of dimensions.
- Dot product: multiply matching entries, then add.
- Matrix times vector: one dot product per row. One matrix multiply runs a whole layer.
- $(m \times n)$ times $(n \times p)$ gives $(m \times p)$.
- When code breaks, print the shapes.

</section>
