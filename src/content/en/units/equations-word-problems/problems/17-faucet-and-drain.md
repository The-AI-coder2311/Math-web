---
order: 15
difficulty: medium
lesson: 05-work-rates
choices: ["2","2.4","5","10","12"]
answer: E
mistakes:
  A: "That's $6 - 4$. Subtract the rates, not the times."
  B: "That adds the two rates, as if the drain helped fill the sink. The drain works against the faucet, so subtract its rate."
  C: "That's the average of 4 and 6. With the drain open, filling takes longer than 4 minutes, but not by this little."
  D: "That's $4 + 6$. The rates pull against each other, so subtract them."
verify: "(() => { const sink = lcm(4, 6); return sink / (sink / 4 - sink / 6); })()"
---

A faucet fills a sink in 4 minutes with the drain closed. With the faucet off, a full sink empties in 6 minutes. If the faucet is on and the drain is open, how many minutes does it take to fill the sink?

## Hint

Pick a friendly size for the sink. How much does the faucet add per minute? How much does the drain remove?

## Hint 2

Let the sink hold 12 cups. The faucet adds 3 cups per minute, and the drain removes 2.

## Solution

Let the sink hold 12 cups. The faucet adds 3 cups per minute, and the drain removes 2, so the sink gains 1 cup per minute. It fills in 12 minutes.

**Answer: (E) 12**
