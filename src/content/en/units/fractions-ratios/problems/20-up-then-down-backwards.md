---
order: 20
difficulty: hard
lesson: 04-percents
choices: ["85","95","100","105","120"]
answer: C
mistakes:
  A: "That's $90 - 5$, subtracting the difference of the percents. Run your answer forward through the story to check."
  B: "That's $90 + 5$, adding the difference of the percents. Percents multiply each other."
  D: "Run it forward: 105 goes up to 126, and then down to 94.5."
  E: "That's the number after the increase, before the decrease. Go back one more step."
verify: "range(1, 300).find((n) => n * 120 * 75 === 90 * 10000)"
---

A number is increased by 20%. The result is then decreased by 25%, and the final answer is 90. What was the original number?

## Hint

Up 20% means multiply by 1.2. Down 25% means multiply by 0.75.

## Hint 2

The two together multiply by $1.2 \times 0.75 = 0.9$. So 90 is 0.9 of the original.

## Solution

The steps multiply the number by $1.2 \times 0.75 = 0.9$. So $0.9$ of the original is 90, which means the original is 100.

**Check:** 100 goes up to 120, and then down 25% to 90.

**Answer: (C) 100**
