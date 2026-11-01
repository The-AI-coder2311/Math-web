---
order: 4
difficulty: easy
lesson: 02-stars-and-bars
choices: ["12","81","27","64","15"]
answer: E
mistakes:
  A: "That's $4 \\times 3$. The number of each kind affects the others, so multiplying doesn't work here."
  C: "That's $3^3$. Try writing a box as stars and bars. You should get 6 symbols."
  D: "That's $4^3$. You aren't making 3 separate choices from 4 options, since the counts must add up to 4."
  B: "That's $3^4$, which would count donuts picked one at a time, in order. Only the amounts of each kind matter."
verify: "product(range(0, 4), range(0, 4), range(0, 4)).filter((box) => sum(box) === 4).length"
---

A shop sells 3 kinds of donuts. You buy 4 donuts, and you can buy any number of each kind. How many different boxes of donuts are possible? (Only the number of each kind matters.)

## Hint

Think of the 4 donuts as stars. How many bars do you need to separate 3 kinds?

## Hint 2

There are 4 stars and 2 bars, which makes 6 symbols. Choose where the bars go.

## Solution

There are 4 stars and 2 bars, which makes 6 symbols. Choosing the spots for the bars gives $\binom{6}{2} = \frac{6 \times 5}{2} = 15$.

**Answer: (E) 15**
