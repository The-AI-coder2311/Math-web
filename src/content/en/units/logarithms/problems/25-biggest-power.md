---
order: 25
difficulty: medium
lesson: 04-logs-in-contests
choices: ["$2^{60}$","$5^{25}$","$7^{20}$","$10^{18}$","$3^{40}$"]
answer: E
mistakes:
  A: "$2^{60}$ is $8^{20}$, which is less than $9^{20}$."
  B: "$25 \\log 5$ is about 17.5, which is less than 18."
  C: "$20 \\log 7$ is about 16.9. Compare each $m \\log a$."
  D: "$10^{18}$ has a log of 18, but $3^{40}$ has a log of about 19.1."
verify: "(() => { const c = [['2^{60}', 60 * Math.log(2)], ['5^{25}', 25 * Math.log(5)], ['7^{20}', 20 * Math.log(7)], ['10^{18}', 18 * Math.log(10)], ['3^{40}', 40 * Math.log(3)]]; return c.sort((a, b) => b[1] - a[1])[0][0]; })()"
---

Which of these is the largest?

## Hint

Compare the logs. The log of $a^m$ is $m \log a$.

## Hint 2

$2^{60}$ and $3^{40}$ share the exponent 20 after rewriting.

## Solution

The logs are about $60 \times 0.301 \approx 18.06$, $25 \times 0.699 \approx 17.47$, $20 \times 0.845 \approx 16.9$, 18, and $40 \times 0.477 \approx 19.08$. The largest is $3^{40}$. You can also see $3^{40} = 9^{20}$ beats $2^{60} = 8^{20}$ exactly.

**Answer: (E) $3^{40}$**
