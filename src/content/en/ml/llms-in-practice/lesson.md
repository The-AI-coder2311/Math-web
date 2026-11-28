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

<section data-box="deeper">

## Going deeper

### What pretraining optimizes

For every position in every training text, the model outputs a probability for each token in its vocabulary, and the loss is the cross-entropy of the true next token. If the model gives the true next token probability 0.25, that position's loss is $-\ln 0.25 \approx 1.39$ with natural logs. Average over trillions of positions and you get the training loss. Driving it down forces the model to pick up grammar, facts, and patterns of reasoning, because all of them help predict the next token. Perplexity is this average loss turned back into a number of "equally likely choices."

### How much computing does training take?

A handy estimate is that training costs about $6 \times N \times D$ arithmetic operations, where $N$ is the number of parameters and $D$ is the number of training tokens. For $N = 1$ billion and $D = 20$ billion:

$$6 \times 10^9 \times 2 \times 10^{10} = 1.2 \times 10^{20}$$

That's 120 billion billion operations. Scaling laws use estimates like this to plan how to split a fixed budget between a bigger model and more data.

### Tokens, words, and context windows

For English, one token is about three-quarters of a word on average, so 1,000 tokens hold roughly 750 words. The context window counts the prompt, any retrieved documents, the conversation so far, and the answer, all together. When a conversation outgrows it, the oldest parts no longer fit, and the model can't see them.

### Inside LoRA

A LoRA update replaces a frozen weight matrix $W$ with $W + BA$, where $B$ is tall and thin and $A$ is short and wide. For a $d \times d$ matrix with rank $r$, the update has $2dr$ numbers instead of $d^2$. At $d = 4096$ and $r = 16$, that's 131,072 numbers instead of about 16.8 million, under 1%. Different tasks can each have their own small LoRA files swapped onto the same base model.

### Evaluating LLMs

LLMs are tested on **benchmarks**: collections of questions in math, coding, science, and reasoning. Two cautions apply. First, benchmark questions can leak into the huge pretraining data, so a model may have seen the answers. That's **contamination**, a form of data leakage. Second, a benchmark score doesn't tell you how a model behaves in your setting, so testing on your own examples matters. People also rate open-ended answers directly, by comparing pairs of responses.

### Agents and tool use

An **agent** is an LLM that takes actions, such as searching the web, running code, or calling other programs, and uses the results to keep working on a multi-step task. Agents raise new reliability and safety questions, because their mistakes can have real effects, not only wrong text. Well-designed agent systems limit what actions are allowed and ask a person before anything that's hard to undo.

### Responsible building

*Understanding Deep Learning* closes with ethics for a reason. Models trained on internet text absorb its biases. They can be misused to produce spam or misinformation at scale. Their training uses large amounts of energy. No single fix solves these, but documenting models honestly, testing them across different groups of people, and thinking about misuse before release are part of doing the job well.

About how many words fit in a 4,000-token context window, using three-quarters of a word per token?

<details class="check"><summary>Show the answer</summary>

$4000 \times 0.75 = 3000$, so about 3,000 words, counting the prompt and the answer together.

</details>

</section>

<section data-box="traps">

## Common traps

**Treating fluent text as true text.** Confident wording isn't evidence. Check claims, or ground the model with retrieval.

**Thinking few-shot prompts retrain the model.** The weights don't change, and the model forgets the examples when the conversation ends.

**Assuming a deployed model stays good.** Data drifts, so keep measuring.

</section>

<section data-box="connections">

## Connections

LLMs are decoder transformers from [Attention & Transformers](/ml/transformers/), pretrained with the cross-entropy from [Loss Functions](/ml/loss-functions/). RLHF builds on [Reinforcement Learning](/ml/reinforcement-learning/), and drift and fairness checks come from [Measuring Performance](/ml/evaluation-metrics/).

</section>

<section data-box="summary">

## Remember this

- Pretraining: predict the next token on huge amounts of text. Then SFT and preference training (RLHF or DPO).
- Low temperature is predictable, and high temperature is varied. Top-p keeps the likeliest tokens up to probability $p$.
- RAG retrieves trusted text to reduce hallucination.
- LoRA trains small add-on matrices. Quantization stores weights in fewer bits.
- Monitor for drift, document with model cards, and check for bias.

</section>
