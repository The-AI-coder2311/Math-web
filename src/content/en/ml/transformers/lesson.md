---
title: Attention Is How Words Look at Each Other
summary: Learn how text becomes tokens and embeddings, how attention uses queries, keys, and values, and how transformer layers, positional encodings, and masks power models like BERT and GPT.
minutes: 15
---

Read this sentence: "The trophy didn't fit in the suitcase because **it** was too big." What does "it" mean? You knew right away: the trophy. To figure that out, you connected "it" to other words, possibly far away in the sentence. Transformers, the architecture behind modern language models, are built around exactly that skill. It's called **attention**.

> **The big idea:** In **self-attention**, every token builds its new meaning as a weighted average of the other tokens. The weights come from comparing a **query** ("what am I looking for?") with each token's **key** ("what do I contain?"). What gets averaged is each token's **value**. Stack attention with small neural networks and you get a **transformer**.

## From text to vectors

1. **Tokenization** splits text into **tokens**, which are often pieces of words. "Unbelievable" might become "un," "believ," and "able." The set of all tokens a model knows is its **vocabulary**.
2. Each token is mapped to an **embedding**, a learned vector of numbers. Tokens with similar meanings end up with similar vectors.

Older methods like **bag of words** and **TF-IDF** only counted words and ignored their order. **Word2Vec** and **GloVe** learned one fixed embedding per word. Transformers go further: each token's vector is updated by its context, so "bank" gets a different meaning in "river bank" and "bank account."

## Attention, step by step

Each token's embedding is multiplied by three learned matrices to make its query $q$, its key $k$, and its value $v$. For one token:

1. **Score** it against every token: the dot product $q \cdot k$. A bigger score means more relevant.
2. **Scale** each score by dividing by $\sqrt{d}$, where $d$ is the length of the key vectors. Without this, scores grow with $d$, the softmax becomes too sharp, and the gradients become tiny.
3. **Softmax** the scores into weights that add to 1.
4. **Mix:** the output is the weighted sum of the values.

All at once, in matrix form:

$$\text{Attention}(Q, K, V) = \text{softmax}\left(\frac{QK^T}{\sqrt{d}}\right) V$$

## Worked example

A token's query is $(1, 2)$. Two tokens have keys $(3, 1)$ and $(1, 0)$, and the key length is $d = 2$. Their scores are $3 + 2 = 5$ and $1 + 0 = 1$. To keep the numbers simple, suppose that after scaling and softmax the weights come out as $\frac{3}{4}$ and $\frac{1}{4}$. If the values are 8 and 4, the output is

$$\frac{3}{4} \times 8 + \frac{1}{4} \times 4 = 7$$

The token mostly "listened" to the first one.

What is the attention score between $q = (2, 0, 1)$ and $k = (1, 5, 3)$, before scaling?

<details class="check"><summary>Show the answer</summary>

$2 \times 1 + 0 \times 5 + 1 \times 3 = 5$.

</details>

## The rest of the transformer

- **Multi-head attention** runs several attention operations side by side, each with its own query, key, and value matrices, so different heads can track different relationships, like grammar in one and meaning in another.
- **Positional encoding** adds information about each token's position. Attention by itself treats its input as a set, so "dog bites man" and "man bites dog" would look the same.
- A **transformer layer** is attention followed by a small fully connected network, each wrapped with a residual connection and layer normalization. Models stack dozens of these layers.

## Encoders and decoders

- An **encoder**, like **BERT**, lets every token attend to every other token, both before and after it. It's good for understanding tasks, like classifying a review.
- A **decoder**, like **GPT**, uses a **causal mask**: each token may only attend to tokens before it. That's what lets it generate text one token at a time, with each new token conditioned on the ones before.
- A **sequence-to-sequence** model, like a translator, uses an encoder to read the input and a decoder to write the output.

The same idea works for images. A **Vision Transformer (ViT)** cuts an image into patches and treats each patch as a token.

## Costs and scores

Every token scores against every other token, so a sequence of $n$ tokens needs $n^2$ scores. Doubling the length quadruples the work. That's why each model has a maximum **context window**, the number of tokens it can consider at once.

A **language model** predicts the probability of the next token. Its **perplexity** measures how "surprised" it is by real text: if it gives each true next token probability $\frac{1}{8}$ on average (in the geometric-mean sense), its perplexity is 8. It's as unsure as picking from 8 equally likely options. Lower is better.

<section data-box="traps">

## Common traps

**Forgetting the scale.** The scores are divided by $\sqrt{d}$, not by $d$.

**Thinking attention knows word order.** It doesn't, which is why positional encodings exist.

**Mixing up keys and values.** Keys decide how much attention each token gets. Values are what actually gets mixed into the output.

</section>

<section data-box="summary">

## Remember this

- Text becomes tokens, and tokens become embeddings.
- Attention: score with $q \cdot k$, scale by $\sqrt{d}$, apply softmax, mix the values.
- Multi-head attention runs several of these in parallel. Positional encoding adds order.
- Encoders (BERT) see both sides. Decoders (GPT) only see earlier tokens.
- Attention cost grows with $n^2$, which is why context windows have limits.

</section>
