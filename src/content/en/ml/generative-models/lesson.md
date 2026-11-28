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

<section data-box="traps">

## Common traps

**Calling every image model generative.** A classifier that labels photos is discriminative. Generative models produce new data.

**Thinking a GAN's discriminator should win.** At the ideal balance, it can only guess, outputting 0.5.

**Forgetting what diffusion learns.** It doesn't memorize images. It learns to remove noise.

</section>

<section data-box="summary">

## Remember this

- Generative models learn the data's distribution and sample new examples.
- GAN: a generator fools a discriminator. Watch for mode collapse.
- VAE: an encoder gives $\mu$ and $\sigma$, and the sample is $z = \mu + \sigma \epsilon$.
- Flows: invertible layers give exact probabilities.
- Diffusion: add noise forward, and learn to remove it in reverse.

</section>
