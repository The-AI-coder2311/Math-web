---
order: 10
difficulty: medium
lesson: 04-expected-value
choices: ["1","1.5","2","2.5","3"]
answer: C
mistakes:
  A: "Check it: over 4 spins, you win \\$8."
  B: "Check it: over 4 spins, you win \\$8."
  D: "Check it: over 4 spins, you win \\$8."
  E: "That's the middle of the prizes that aren't zero. The two \\$0 sections count too."
verify: "sum([0, 0, 2, 6]) / 4"
---

A spinner has 4 equal sections labeled \$0, \$0, \$2, and \$6. You win the amount that it lands on. What is the expected value of one spin, in dollars?

## Hint

Imagine spinning 4 times and landing on each section once. How much do you win in total?

## Hint 2

Spinning once on each section wins \$8 over 4 spins.

## Solution

**Step 1.** Landing on each section once wins $0 + 0 + 2 + 6 = 8$ dollars.

**Step 2.** That's over 4 spins, so the average is $8 \div 4 = 2$ dollars per spin.

**Answer: (C) 2**
