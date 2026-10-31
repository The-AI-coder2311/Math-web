---
order: 7
difficulty: medium
choices: [14, 21, 35, 56, 70]
answer: D
verify: "range(1, 200).filter((n) => n % 8 === 0).find((total) => (total * 5) / 8 - (total * 3) / 8 === 14)"
---

An animal shelter has cats and dogs in a ratio of 5 to 3. There are 14 more cats than dogs. How many cats and dogs are there in all?

## Hint

Draw 5 boxes for cats and 3 boxes for dogs. How many extra boxes do the cats have, and how many animals do those extra boxes hold?

## Solution

**Step 1.** Cats have 5 boxes and dogs have 3 boxes, so cats have $5 - 3 = 2$ extra boxes.

**Step 2.** Those 2 extra boxes hold the 14 extra cats, so each box holds $14 \div 2 = 7$ animals.

**Step 3.** There are $5 + 3 = 8$ boxes in all, and $8 \times 7 = 56$.

**Check:** That's $5 \times 7 = 35$ cats and $3 \times 7 = 21$ dogs. The difference is $35 - 21 = 14$.

**Answer: (D) 56**
