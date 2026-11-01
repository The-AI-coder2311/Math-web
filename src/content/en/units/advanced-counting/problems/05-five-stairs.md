---
order: 5
difficulty: easy
lesson: 03-counting-step-by-step
choices: ["5","8","10","13","32"]
answer: B
mistakes:
  A: "That's the count for step 4. Add step 3 and step 4 to get step 5."
  C: "That's $5 \\times 2$. The rule adds the two previous counts: $3 + 5$."
  D: "That's the count for step 6."
  E: "That's $2^5$, which treats every step as a separate choice. A 2-step move uses up two steps."
verify: "range(3, 5).reduce(([a, b]) => [b, a + b], [1, 2])[1]"
---

You climb a staircase with 5 steps, taking either 1 or 2 steps at a time. How many different ways can you climb it?

## Hint

What was your last move to reach step 5? Where could you have been before that?

## Hint 2

Ways to reach a step = ways to the step before + ways to the step 2 before. Start with 1 way for step 1 and 2 ways for step 2.

## Solution

Each step's count is the sum of the two before it, starting with 1 way for step 1 and 2 ways for step 2. That gives 1, 2, 3, 5, 8. So there are 8 ways to reach step 5.

**Answer: (B) 8**
