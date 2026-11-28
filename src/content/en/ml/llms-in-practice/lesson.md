---
title: Large Language Models in the Real World
summary: Learn how large language models are pretrained, fine-tuned, and aligned, how prompting, sampling, and retrieval shape their answers, and how LoRA, quantization, and careful deployment make them practical and responsible.
minutes: 15
---

A large language model writes essays, answers questions, and explains code. Underneath, it does one thing: predict the next token, over and over. Turning that simple skill into a helpful, reasonably safe assistant takes several more stages of training, plus engineering to make it fast and cheap enough to use. This last topic follows a model from pretraining to the real world.

> **The big idea:** A **large language model (LLM)** is a big transformer **pretrained** to predict the next token on huge amounts of text. **Fine-tuning** and **preference training** shape it into an assistant. **Prompting**, **sampling settings**, and **retrieval** steer each answer, and **LoRA** and **quantization** make models cheaper to adapt and run.

## Stage 1: pretraining

The model reads an enormous amount of text and learns to predict each next token. This is self-supervised learning, since the text supplies its own labels. **Scaling laws** describe a remarkably steady pattern: performance improves predictably as the number of parameters, the amount of training data, and the computing power grow together. One well-known rule of thumb says to train on about 20 tokens for every parameter.

## Stage 2: becoming an assistant

- **Supervised fine-tuning (SFT)**, or instruction tuning, trains on examples of prompts with good responses.
- **RLHF**, reinforcement learning from human feedback, has people compare pairs of answers. A **reward model** learns their preferences, and reinforcement learning, often PPO, pushes the LLM toward preferred answers.
- **DPO**, direct preference optimization, learns from the same preference pairs without a separate reward model.

## Steering each answer

- **Prompt engineering:** writing the input carefully changes the output a lot.
- **In-context, or few-shot, learning:** putting a few worked examples in the prompt teaches a task with no change to the weights.
- **Chain-of-thought:** asking the model to reason step by step often improves answers on multi-step problems.
- **Temperature:** the logits are divided by a temperature $T$ before softmax. A low $T$ makes the likeliest token dominate, so answers are predictable. A high $T$ flattens the probabilities, so answers are more varied and more random.
- **Top-p sampling:** keep only the smallest set of tokens whose probabilities add up to at least $p$, then sample from those.

**Worked example.** Two tokens have weights $e^{z} = 4$ and $1$, so at $T = 1$ the first has probability $\frac{4}{5}$. At $T = 2$, each weight becomes its square root, which gives 2 and 1. The first token's probability drops to $\frac{2}{3}$.

## Hallucination and retrieval

LLMs sometimes state false things confidently. This is called **hallucination**. **Retrieval-augmented generation (RAG)** reduces it: search a collection of trusted documents for passages related to the question, often with a **vector database** that compares embeddings, and put those passages into the prompt so the model can answer from them.

## Making models cheaper

- **LoRA** (low-rank adaptation), a kind of **parameter-efficient fine-tuning (PEFT)**, freezes a big weight matrix and learns a small correction, the product of two thin matrices. For a $1000 \times 1000$ matrix with rank 8, that's $1000 \times 8 + 8 \times 1000 = 16000$ trainable numbers instead of a million.
- **Quantization** stores weights with fewer bits. A 7-billion-parameter model needs about 14 GB at 16 bits (2 bytes per weight), but about 3.5 GB at 4 bits.
- **Distillation** trains a small model to imitate a large one.
- **Mixture of experts (MoE)** routes each token through only some of the model's sub-networks, so less computing is used per token.

How much memory do 7 billion weights take at 8 bits each?

<details class="check"><summary>Show the answer</summary>

8 bits is 1 byte, so it's about 7 billion bytes, or 7 GB.

</details>

## Deploying responsibly

**Model serving** puts a model behind an interface that apps can call. Engineers track **latency**, the time per request, and **throughput**, the requests handled per second. Once deployed, a model needs **monitoring**, because the world changes. When incoming data drifts away from the training data, performance drops. That's called **model drift**. A **model card** documents what a model is for, what data trained it, and where it fails.

The last chapter of *Understanding Deep Learning* asks builders to take responsibility for their models' effects. Models can treat groups of people unfairly when their training data does, which is **algorithmic bias**. They can be misused, and powerful systems need to reliably do what people intend, which is the goal of **AI alignment**. These aren't side issues. They're part of building a good model.

<section data-box="traps">

## Common traps

**Treating fluent text as true text.** Confident wording isn't evidence. Check claims, or ground the model with retrieval.

**Thinking few-shot prompts retrain the model.** The weights don't change, and the model forgets the examples when the conversation ends.

**Assuming a deployed model stays good.** Data drifts, so keep measuring.

</section>

<section data-box="summary">

## Remember this

- Pretraining: predict the next token on huge amounts of text. Then SFT and preference training (RLHF or DPO).
- Low temperature is predictable, and high temperature is varied. Top-p keeps the likeliest tokens up to probability $p$.
- RAG retrieves trusted text to reduce hallucination.
- LoRA trains small add-on matrices. Quantization stores weights in fewer bits.
- Monitor for drift, document with model cards, and check for bias.

</section>
