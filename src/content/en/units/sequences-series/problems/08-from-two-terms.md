---
order: 8
difficulty: medium
lesson: 01-arithmetic-sequences
choices: ["2","4","6","8","10"]
answer: C
mistakes:
  A: "You may have gone back 3 steps from the 3rd term. The 1st term is only 2 steps before the 3rd."
  B: "That's the common difference. The question asks for the 1st term, so there's one more step."
  D: "You may have used a common difference of 3. The climb of 16 happens over 4 steps, not 5 or 6."
  E: "That's only 1 step back from the 3rd term, which gives the 2nd term."
verify: "product(range(-20, 20), range(-20, 20)).filter(([a, d]) => a + 2 * d === 14 && a + 6 * d === 30)[0][0]"
---

In an arithmetic sequence, the 3rd term is 14 and the 7th term is 30. What is the 1st term?

## Hint

How many steps are there from the 3rd term to the 7th term? How much does the list climb over those steps?

## Hint 2

It climbs 16 in 4 steps, so each step adds 4. Now go backwards from the 3rd term.

## Solution

**Step 1.** From the 3rd term to the 7th is 4 steps, and the list climbs $30 - 14 = 16$. So each step is $16 \div 4 = 4$.

**Step 2.** The 1st term is 2 steps before the 3rd term: $14 - 2 \times 4 = 6$.

**Answer: (C) 6**
