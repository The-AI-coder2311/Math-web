---
order: 10
difficulty: medium
choices: ['2:5', '3:4', '6:10', '8:15', '10:12']
answer: D
verify: "(() => { const best = product(range(1, 60), range(1, 60), range(1, 60)).find(([a, b, c]) => a * 3 === b * 2 && b * 5 === c * 4); return `${best[0]}:${best[2]}`; })()"
---

On a farm, the ratio of ducks to geese is 2:3. The ratio of geese to swans is 4:5. What is the ratio of ducks to swans?

## Hint

The geese are in both ratios, but they appear as 3 in one and 4 in the other. Can you pick a number of geese that works for both?

## Solution

**Step 1.** The number of geese should work with both ratios, so try a multiple of both 3 and 4. The smallest one is 12.

**Step 2.** With 12 geese, the ratio 2:3 becomes 8:12, so there are 8 ducks.

**Step 3.** With 12 geese, the ratio 4:5 becomes 12:15, so there are 15 swans.

**Step 4.** So ducks to swans is 8:15.

**Answer: (D) 8:15**
