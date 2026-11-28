---
title: Models That Make New Things
summary: Learn the difference between generative and discriminative models, and how GANs, variational autoencoders, normalizing flows, autoregressive models, and diffusion models create new images and text.
minutes: 15
---

Everything so far has been about answering questions: is this email spam, what's this house worth? A different kind of model makes things: faces of people who don't exist, music, paragraphs of text. Instead of learning a boundary between classes, it learns what the data itself looks like, well enough to produce new examples.

> **The big idea:** A **generative model** learns the probability distribution of the data, so it can **sample** new examples from it. Most turn simple random noise into realistic data. They differ in how they learn that transformation: a contest (GANs), a compressed code (VAEs), an invertible function (flows), one piece at a time (autoregressive models), or removing noise step by step (diffusion).

## Generative versus discriminative

A **discriminative** model learns $P(\text{label} \mid \text{data})$, how to tell classes apart. A **generative** model learns about the data itself, often by mapping random points in a simple **latent space** to realistic outputs. Nearby points in the latent space tend to give similar outputs, so walking through it smoothly morphs one face into another.

## Generative adversarial networks (GANs)

A GAN trains two networks against each other:

- The **generator** turns random noise into fake examples.
- The **discriminator** tries to tell real examples from fakes.

The generator improves by fooling the discriminator, and the discriminator improves by catching the generator. If training reaches balance, the fakes are so good that the discriminator can only guess, outputting 0.5 for everything. GANs make very sharp images but are hard to train. A common failure is **mode collapse**: the generator finds a few outputs that fool the discriminator and produces only those, losing the variety of the real data.

## Variational autoencoders (VAEs)

An **autoencoder** squeezes its input into a small code and rebuilds it. A VAE makes the code space smooth enough to sample from. Its **encoder** outputs a mean $\mu$ and a spread $\sigma$ for each input, and the **decoder** rebuilds the input from a random point drawn near $\mu$. It's trained by maximizing a bound on the likelihood called the **ELBO**, which balances rebuilding well against keeping the codes tidy.

Sampling is random, and you can't take a derivative through a coin flip. The **reparameterization trick** moves the randomness aside: draw $\epsilon$ from a standard normal distribution, then set

$$z = \mu + \sigma \epsilon$$

Now $z$ depends smoothly on $\mu$ and $\sigma$, so gradients can flow back to the encoder. With $\mu = 2$, $\sigma = 0.5$, and $\epsilon = -1$, the sample is $z = 2 - 0.5 = 1.5$.

## Normalizing flows

A flow transforms simple noise through a chain of **invertible** layers, so every output can be traced back to exactly one input. That lets it compute the exact probability of any data point. Stretching space spreads probability thinner. If $x = 3z$, the density of $x$ is the density of $z$ divided by 3.

## Autoregressive models

An autoregressive model generates one piece at a time, each conditioned on the pieces before. GPT does this with tokens. The probability of a whole sequence is a product:

$$P(\text{the cat}) = P(\text{the}) \times P(\text{cat} \mid \text{the})$$

## Diffusion models

A diffusion model has two processes:

- The **forward process** adds a little noise at each of many steps until the data becomes pure noise. A handy formula jumps straight to step $t$: $x_t = \sqrt{\bar\alpha_t} \, x_0 + \sqrt{1 - \bar\alpha_t} \, \epsilon$, where $\bar\alpha_t$ shrinks toward 0 as $t$ grows.
- The **reverse process** is a network trained to remove a little noise at a time, often by predicting the noise $\epsilon$ that was added.

To generate, start from pure noise and run the reverse process step by step. Image tools like Stable Diffusion work this way.

**Worked example.** With $\bar\alpha_t = 0.64$, a pixel value $x_0 = 5$, and noise $\epsilon = 2$, the noisy value is $0.8 \times 5 + 0.6 \times 2 = 5.2$. The signal is shrinking and the noise is growing.

A VAE has $\mu = 1$ and $\sigma = 2$, and draws $\epsilon = 0.5$. What is $z$?

<details class="check"><summary>Show the answer</summary>

$z = 1 + 2 \times 0.5 = 2$.

</details>

<section data-box="deeper">

## Going deeper

### What a VAE balances

A VAE's training objective, the ELBO, has two parts pulling in different directions:

- **Reconstruction:** the decoder should rebuild each input well from its code. On its own, this would push the encoder to give every input its own far-flung, precise code, which is useless for sampling.
- **A penalty, called the KL divergence,** for codes that stray from a standard normal distribution. It pulls all the codes toward the same smooth cloud around 0.

Together, they produce a latent space where nearby codes decode to similar outputs and random draws from the cloud decode to sensible new data. Push too hard on the penalty and outputs turn blurry. Push too little and sampling gives nonsense. VAE images are often a bit blurry, which is one reason diffusion models overtook them for images.

### How a diffusion model is trained

Training a diffusion model is surprisingly simple. Repeat:

1. Pick a real training image $x_0$.
2. Pick a random step $t$, and draw random noise $\epsilon$.
3. Make the noisy image $x_t = \sqrt{\bar\alpha_t} \, x_0 + \sqrt{1 - \bar\alpha_t} \, \epsilon$.
4. Ask the network to predict $\epsilon$ from $x_t$ and $t$, and score it with squared error.

That's the whole loss. The noise schedule sets $\bar\alpha_t$. If each step keeps a fraction $\alpha$ of the signal, then $\bar\alpha_t$ is the product of all the $\alpha$s so far. With $\alpha$ values of 0.9 and then 0.8, $\bar\alpha_2 = 0.9 \times 0.8 = 0.72$. Generating takes many steps, often dozens to hundreds, which is why diffusion models are slower to sample from than GANs.

### Conditional generation

"Draw a red bicycle" needs a model that takes a condition. A **conditional** generative model gets the condition, such as a class label or a text embedding, as an extra input at every step. Text-to-image systems feed the prompt's embedding into the denoising network, often through attention. A trick called **guidance** pushes samples further toward the condition, trading variety for a closer match to the prompt.

### Judging generative models

There's no single right answer to compare against, so judging is hard. Three questions matter:

- **Quality:** do the samples look real?
- **Diversity:** do they cover the full variety of the data, or did the model collapse to a few kinds?
- **Likelihood:** how probable does the model find real test data? Flows and autoregressive models can compute this exactly. VAEs and diffusion models can bound it. GANs can't compute it at all.

A popular image score, the **FID**, compares statistics of real and generated images as seen by a trained image network. Lower is better.

### Responsible use

The same models that create art can create convincing fake photos, audio, and video of real people. Watermarks that mark generated content, tools that detect it, and careful choices about what a system will make are all active areas of work.

A diffusion schedule keeps fractions 0.9, 0.9, and 0.5 of the signal in its first three steps. What is $\bar\alpha_3$?

<details class="check"><summary>Show the answer</summary>

$0.9 \times 0.9 \times 0.5 = 0.405$.

</details>

</section>

<section data-box="traps">

## Common traps

**Calling every image model generative.** A classifier that labels photos is discriminative. Generative models produce new data.

**Thinking a GAN's discriminator should win.** At the ideal balance, it can only guess, outputting 0.5.

**Forgetting what diffusion learns.** It doesn't memorize images. It learns to remove noise.

</section>

<section data-box="connections">

## Connections

Generative models are trained with the probability ideas from [Probability, Bayes & Logarithms](/ml/probability-for-ml/) and [Loss Functions](/ml/loss-functions/). Autoregressive transformers are the subject of [Attention & Transformers](/ml/transformers/) and [Large Language Models in Practice](/ml/llms-in-practice/).

</section>

<section data-box="summary">

## Remember this

- Generative models learn the data's distribution and sample new examples.
- GAN: a generator fools a discriminator. Watch for mode collapse.
- VAE: an encoder gives $\mu$ and $\sigma$, and the sample is $z = \mu + \sigma \epsilon$.
- Flows: invertible layers give exact probabilities.
- Diffusion: add noise forward, and learn to remove it in reverse.

</section>
