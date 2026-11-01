---
order: 20
difficulty: hard
lesson: 04-expected-value
choices: ["4","6","8","10","20"]
answer: C
mistakes:
  A: "That's the expected value of one ticket. You draw two."
  B: "That's $4 + 2$. Each ticket has the same expected value of 4."
  D: "That's half of the total. There are 5 tickets, and you draw 2, so you get $\\frac{2}{5}$ of the total on average."
  E: "That's the total of all of the tickets. You draw only two."
verify: "(() => { const pairs = combos([1, 2, 2, 5, 10], 2); return sum(pairs.map(sum)) / pairs.length; })()"
---

A bag has 5 tickets, marked with \$1, \$2, \$2, \$5, and \$10. You draw 2 tickets without putting the first back, and you win their total. What is your expected win, in dollars?

## Hint

What's the expected value of one ticket?

## Hint 2

One ticket is worth $20 \div 5 = 4$ on average. Expected values add.

## Solution

Each ticket, before you look, is equally likely to be any of the 5. So each has an expected value of $20 \div 5 = 4$. Expected values add, so 2 tickets give $4 + 4 = 8$.

**Answer: (C) 8**
