---
title: "Logarithms in Contest Problems"
summary: Use logs to compare huge numbers, count digits, and handle sequences that grow by multiplication.
minutes: 13
---

Which is bigger, $2^{300}$ or $3^{200}$? Neither number fits on a page, and no calculator is allowed. But one quick observation settles it, and the same thinking lets you count the digits of $2^{100}$ or find the sum of a hundred logs in a few lines. Logarithms are the natural tool whenever a problem involves things that **multiply**, because logs turn multiplying into adding.

> **The big idea:** Taking a log turns **multiplication into addition** and **powers into products**. Use that to compare giant numbers, count digits, and turn geometric patterns into arithmetic ones.

## Comparing huge numbers

For the hook, notice that both exponents share a factor of 100:

$$2^{300} = (2^3)^{100} = 8^{100} \quad\text{and}\quad 3^{200} = (3^2)^{100} = 9^{100}$$

Since $9 > 8$, we get $3^{200} > 2^{300}$. In log language, we compared $300 \log 2$ with $200 \log 3$, which is the same as comparing $\log 8$ with $\log 9$ after dividing by 100.

When the exponents don't share a nice factor, compare the logs directly. To compare $a^m$ and $b^n$, compare $m \log a$ with $n \log b$.

## Counting digits

From the first lesson, a whole number $N$ has $\lfloor \log N \rfloor + 1$ digits. Contests usually give you a value such as $\log 2 \approx 0.30103$ when they want you to do this.

## Example 1: Digits of a big power

How many digits does $2^{100}$ have, given $\log 2 \approx 0.30103$?

**What's the plan?** By the power rule, $\log (2^{100}) = 100 \log 2 \approx 30.103$. That means $2^{100}$ is between $10^{30}$ and $10^{31}$. Every number in that range has 31 digits.

**Why the plus one?** $10^{30}$ itself is a 1 followed by 30 zeros, which is 31 digits. So a log of 30.1 means 31 digits.

Try one yourself. Given $\log 3 \approx 0.4771$, how many digits does $3^{50}$ have?

<details class="check"><summary>Show the answer</summary>

$\log (3^{50}) = 50 \log 3 \approx 23.86$. So $3^{50}$ is between $10^{23}$ and $10^{24}$, and it has 24 digits.

</details>

## Example 2: A sum of logs that is really a product

Find $\log_2 1 + \log_2 2 + \log_2 4 + \log_2 8 + \cdots + \log_2 1024$.

**What do we know?** The inputs are powers of 2, from $2^0$ to $2^{10}$. Each log is its exponent, so the sum is $0 + 1 + 2 + \cdots + 10$.

**What's the question really asking?** That's an arithmetic sum: $\frac{10 \times 11}{2} = 55$.

A geometric sequence of inputs turned into an arithmetic sequence of logs. That's the pattern to watch for.

## Example 3: Logs with an unknown base

Suppose $\log_b 2 + \log_b 3 + \log_b 6 = 2$. Find $b$, where $b > 0$.

**What's the plan?** Combine with the product rule: $\log_b (2 \cdot 3 \cdot 6) = \log_b 36 = 2$. In exponent form, $b^2 = 36$. Since $b$ must be positive, $b = 6$.

## Example 4: A system with logs

Positive numbers $x$ and $y$ satisfy $\log_2 x + \log_2 y = 7$ and $\log_2 x - \log_2 y = 1$. Find $x + y$.

**What's the plan?** Let $p = \log_2 x$ and $q = \log_2 y$. Then $p + q = 7$ and $p - q = 1$. Adding gives $2p = 8$, so $p = 4$, and $q = 3$. That means $x = 2^4 = 16$ and $y = 2^3 = 8$, so $x + y = 24$.

**Another view:** the first equation says $xy = 2^7 = 128$ and the second says $\frac{x}{y} = 2$. Both views give the same answer, but the substitution keeps everything linear.

Try one. If $\log_3 a = 2\log_3 b$ and $ab = 27$, with $a, b > 0$, find $a$.

<details class="check"><summary>Show the answer</summary>

The first equation says $a = b^2$. Then $b^3 = 27$, so $b = 3$ and $a = 9$.

</details>

## Building other logs from two values

Contests often give only $\log 2$ and $\log 3$, but you can build many others from them. Since $4 = 2^2$, $\log 4 \approx 0.602$. Since $6 = 2 \cdot 3$, $\log 6 \approx 0.778$. Since $5 = \frac{10}{2}$, $\log 5 \approx 0.699$. And $\log 8 \approx 0.903$, $\log 9 \approx 0.954$. With these landmarks you can locate the decimal part of any log between two whole-number leading digits. That's the key to the leading-digit question below.

<section data-box="deeper">

## Going deeper

Logs also find the **first digit** of a big number. The whole-number part of $\log N$ counts digits, and the decimal part tells you the leading digits.

**A harder one:** What is the first digit of $2^{100}$? Use $\log 2 \approx 0.30103$ and $\log 3 \approx 0.47712$.

**What do we know?** $\log (2^{100}) \approx 30.103$. So $2^{100} \approx 10^{30} \times 10^{0.103}$. The first digit comes from $10^{0.103}$.

**Trap it.** We have $\log 1 = 0$ and $\log 2 \approx 0.301$. Since $0.103$ lies between those, $10^{0.103}$ is between 1 and 2. So $2^{100}$ starts with the digit 1. (In fact, it begins 1267.)

This trick works for any leading-digit question. Compare the decimal part of the log with $\log 2$, $\log 3$, and so on, which you can build from $\log 2$ and $\log 3$ using the log rules.

</section>

<section data-box="traps">

## Common traps

**Off by one when counting digits.** A log of 30.1 means 31 digits, not 30. Test with a small case: $\log 100 = 2$, and 100 has 3 digits.

**Comparing exponents alone.** $2^{300}$ has the bigger exponent, but $3^{200}$ is bigger. Compare $m \log a$ with $n \log b$, which accounts for both base and exponent.

**Rounding too early.** In digit problems, keep at least four decimal places in the log. A small rounding error times 100 can push you over a whole number.

**Forgetting the base is positive.** In Example 3, $b^2 = 36$ has the root $-6$, but a base can't be negative.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Huge powers, "how many digits," products of many terms, or a geometric sequence inside logs. Take a log, and the problem becomes about sums.

**Look for a common exponent.** Before using decimal values, check whether the exponents share a factor, as in the hook. It's faster and exact.

**Substitute.** Systems with several logs become linear when you let each log be a letter.

**Know your landmarks.** $\log 2 \approx 0.301$, $\log 3 \approx 0.477$, and $\log 5 = 1 - \log 2 \approx 0.699$.

</section>

<section data-box="connections">

## Connections

This uses all three earlier lessons, from [what logs mean](/pathway/logarithms/01-what-logs-mean/) to [change of base](/pathway/logarithms/03-change-of-base/). The arithmetic sums come from [adding long lists fast](/pathway/sequences-series/02-fast-sums/).

</section>

<section data-box="summary">

## Remember this

- To compare $a^m$ and $b^n$, compare $m \log a$ with $n \log b$, or find a common exponent.
- $N$ has $\lfloor \log N \rfloor + 1$ digits.
- The decimal part of $\log N$ gives the leading digits.
- A geometric sequence inside logs becomes an arithmetic sequence.
- Substitute letters for logs to make systems linear.

</section>
