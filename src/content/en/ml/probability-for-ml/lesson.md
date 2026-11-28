---
title: Uncertainty in Numbers
summary: Learn the mean, variance, and standard deviation, conditional probability and Bayes' rule, the normal distribution, and why machine learning uses logarithms everywhere.
minutes: 13
---

A weather app says there's a 70% chance of rain. A spam filter says an email is 98% likely to be spam. A language model picks its next word by weighing thousands of possibilities. Machine learning models almost never say "this is the answer." They say "this is how likely each answer is." Probability is the language they use.

> **The big idea:** Models describe uncertainty with probabilities. **Mean** and **variance** summarize data, **Bayes' rule** updates a belief when new evidence arrives, and **logarithms** turn the products of many small probabilities into sums that are easy to work with.

## Key words

| Word | Meaning |
|---|---|
| Probability | A number from 0 (impossible) to 1 (certain) |
| Distribution | How likely each possible outcome is |
| Mean | The average value |
| Variance | The average squared distance from the mean |
| Standard deviation | The square root of the variance, in the data's own units |
| Conditional probability | $P(A \mid B)$, the chance of $A$ once you know $B$ happened |

## Mean, variance, and standard deviation

Take the test scores 2, 4, 4, 6. The mean is $(2 + 4 + 4 + 6) \div 4 = 4$.

How spread out are they? Find each score's distance from the mean: $-2, 0, 0, 2$. Adding these always gives 0, so instead we square them: 4, 0, 0, 4. The average of the squares is the **variance**, $8 \div 4 = 2$. The **standard deviation** is $\sqrt{2} \approx 1.41$, which is back in points, the same unit as the scores.

The **normal distribution**, also called the Gaussian, is the bell curve. About 68% of values fall within one standard deviation of the mean, and about 95% fall within two. Many machine learning methods assume errors or noise follow a bell curve.

## Conditional probability and Bayes' rule

$P(A \mid B)$ means "the probability of $A$, given that $B$ happened." It is **not** the same as $P(B \mid A)$. Most people who play professional basketball are tall, but most tall people don't play professional basketball.

**Bayes' rule** turns one into the other:

$$P(A \mid B) = \frac{P(B \mid A) \, P(A)}{P(B)}$$

## Worked example: a rare condition

A condition affects 1 in 100 people. A test catches 90% of people who have it, but it also flags 10% of people who don't. You test positive. How worried should you be?

Counting is easier than the formula. Picture 1,000 people:

- 10 have the condition, and 9 of them test positive.
- 990 don't, and 99 of them test positive anyway.

That's $9 + 99 = 108$ positive tests, and only 9 belong to people with the condition. So the chance is $\frac{9}{108} = \frac{1}{12}$, about 8%. The test is decent, but the condition is so rare that most positives are false alarms. This is why a medical model with high accuracy can still be wrong about most of the patients it flags.

In a group of 50 students, 20 play an instrument, and 15 of those also sing in the choir. You pick an instrument player at random. What's the chance they sing in the choir?

<details class="check"><summary>Show the answer</summary>

You only look at the 20 instrument players, and 15 of them sing. So it's $\frac{15}{20} = \frac{3}{4}$.

</details>

## Logarithms turn products into sums

A model's chance of getting a whole dataset right is the product of its chances on each example. Multiply a thousand numbers like 0.9 and 0.8 together and you get something so tiny that a computer rounds it to zero. Logarithms fix this, because

$$\log(a \times b) = \log a + \log b$$

So instead of multiplying probabilities, models add up their logs. With base 2, $\log_2 8 = 3$, because $2^3 = 8$. Probabilities are below 1, so their logs are negative: $\log_2 0.5 = -1$. That's why loss functions often have a minus sign in front, to turn a negative log into a positive "amount of wrongness."

<section data-box="deeper">

## Going deeper

### Expected value

The **expected value** of a random quantity is its probability-weighted average, what you'd get on average over many tries. For a fair die,

$$\frac{1 + 2 + 3 + 4 + 5 + 6}{6} = 3.5$$

You can never roll 3.5, but it's the long-run average. In a game where you win \$10 with probability 0.2 and lose \$1 otherwise, the expected value is $0.2 \times 10 + 0.8 \times (-1) = 1.2$ dollars per play. Machine learning uses expected values everywhere: the loss is the expected error over the data, and reinforcement learning maximizes expected reward.

### Independence

Two events are **independent** when knowing one tells you nothing about the other. Then $P(A \text{ and } B) = P(A) \times P(B)$. Two coin flips are independent. "Cloudy" and "rainy" are not. Many models assume training examples are independent, which is why mixing one patient's X-rays across training and test sets causes trouble: those examples aren't independent.

### Likelihood: the idea behind training

Suppose a coin lands heads 7 times in 10 flips, and you want to estimate its chance of heads, $p$. The **likelihood** of $p$ is the probability of seeing exactly this data if the true chance were $p$:

- If $p = 0.5$, the chance of this particular sequence is $0.5^{10} \approx 0.00098$.
- If $p = 0.7$, it's $0.7^7 \times 0.3^3 \approx 0.0022$.

The data are more than twice as likely under $p = 0.7$. Trying every value shows that $p = 0.7$, the observed share of heads, makes the data most likely. Choosing parameters this way is called **maximum likelihood**, and it's how most models are trained: the loss function is the negative log of the likelihood. You'll see this again in the Loss Functions topic.

### Distributions you'll meet

- **Bernoulli:** a single yes-or-no outcome with probability $p$. Binary classifiers predict one.
- **Categorical:** one of several categories, with a probability for each. Softmax outputs one.
- **Normal (Gaussian):** the bell curve, described by its mean and standard deviation. Regression models often assume errors follow one.
- **Uniform:** every value in a range is equally likely. Random weight initialization often starts from one.

### In practice

Probabilities from models need care. A model that outputs 0.9 isn't necessarily right 90% of the time. That's called calibration, and you'll measure it in the Measuring Performance topic. And whenever you combine many probabilities, work with their logs to avoid numbers too small for the computer to store.

A coin lands heads 3 times in 4 flips. Which estimate of $p$ makes this data most likely, $0.5$ or $0.75$?

<details class="check"><summary>Show the answer</summary>

$0.75$. The likelihoods are $0.5^4 = 0.0625$ and $0.75^3 \times 0.25 \approx 0.105$, so $0.75$ wins. It matches the observed share of heads, $\frac{3}{4}$.

</details>

</section>

<section data-box="traps">

## Common traps

**Flipping conditional probabilities.** $P(\text{positive test} \mid \text{sick})$ and $P(\text{sick} \mid \text{positive test})$ can be very different, as the worked example shows.

**Ignoring the base rate.** A rare event stays fairly unlikely even after one piece of good evidence.

**Mixing up variance and standard deviation.** Variance is in squared units. Take its square root to get back to the data's units.

</section>

<section data-box="connections">

## Connections

Bayes' rule powers Naive Bayes in [Classical Algorithms](/ml/classical-algorithms/). Maximum likelihood builds the losses in [Loss Functions](/ml/loss-functions/), and base rates matter in [Measuring Performance](/ml/evaluation-metrics/).

</section>

<section data-box="summary">

## Remember this

- Probability runs from 0 to 1.
- Variance: average squared distance from the mean. Standard deviation: its square root.
- $P(A \mid B)$ isn't $P(B \mid A)$. Bayes' rule converts one to the other.
- When a formula feels slippery, count with an imaginary crowd of 1,000.
- Logs turn products into sums, which is why losses use them.

</section>
