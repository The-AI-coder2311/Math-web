---
order: 24
difficulty: hard
lesson: 04-p-adic-valuation
choices: ["23","24","27","31","32"]
answer: A
mistakes:
  B: "That includes 0. The problem starts at $n = 1$."
  C: "That's $3^3$. Count the numbers whose base 3 digits are all 0 or 1, up to 100."
  D: "Check the numbers from 81 to 100. Their second base 3 digit must be 0, so only 8 of them work."
  E: "That counts every 5-digit base 3 number with digits 0 and 1. Only those starting with 10 are at most 100."
verify: "range(1, 100).filter((n) => n.toString(3).split('').every((d) => d !== '2')).length"
---

For how many integers $n$ with $1 \le n \le 100$ is $\binom{2n}{n}$ not divisible by 3?

## Hint

By Kummer, $\binom{2n}{n}$ isn't divisible by 3 exactly when adding $n + n$ in base 3 has no carries.

## Hint 2

That means every base 3 digit of $n$ is 0 or 1. Count those numbers up to 100.

## Solution

Adding $n + n$ in base 3 carries in a column exactly when that digit is 2. So we need every base 3 digit of $n$ to be 0 or 1.

Below $81 = 3^4$, numbers have up to 4 base 3 digits, which gives $2^4 = 16$ choices including 0, so 15 positive numbers. From 81 to 100, the base 3 form is $1abcd$ and at most 10201. That forces $a = 0$, and $b$, $c$, $d$ are free, giving 8 more. The total is $15 + 8 = 23$.

**Answer: (A) 23**
