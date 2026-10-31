---
order: 3
difficulty: easy
choices: [4, 7, 12, 16, 21]
answer: C
verify: "range(1, 28).find((red) => red * 4 === (28 - red) * 3)"
---

An art teacher mixes red and yellow paint in a ratio of 3 to 4 to make orange. She makes 28 ounces of orange paint. How many ounces of red paint does she use?

## Hint

Draw 3 boxes for red and 4 boxes for yellow. How much paint goes in each box?

## Solution

**Step 1.** There are $3 + 4 = 7$ equal boxes.

**Step 2.** Each box holds $28 \div 7 = 4$ ounces.

**Step 3.** Red fills 3 boxes: $3 \times 4 = 12$ ounces.

**Check:** Yellow is $4 \times 4 = 16$ ounces, and $12 + 16 = 28$.

**Answer: (C) 12**
