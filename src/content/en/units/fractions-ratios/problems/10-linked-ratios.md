---
order: 11
difficulty: medium
lesson: 02-ratios-as-boxes
choices: ["2:5","3:4","6:10","10:12","8:15"]
answer: E
mistakes:
  A: "That uses the first and last numbers given, but the geese amounts don't match yet. Make them match first."
  B: "Those are the geese amounts in the two ratios. Use a common number of geese."
  C: "Check that with 12 geese: there would be 8 ducks and 15 swans."
  D: "That adds in place of scaling. To keep a ratio, multiply both parts by the same number."
verify: "(() => { const best = product(range(1, 60), range(1, 60), range(1, 60)).find(([a, b, c]) => a * 3 === b * 2 && b * 5 === c * 4); return `${best[0]}:${best[2]}`; })()"
---

On a farm, the ratio of ducks to geese is 2:3. The ratio of geese to swans is 4:5. What is the ratio of ducks to swans?

## Hint

The geese are in both ratios, but they appear as 3 in one and 4 in the other. Can you pick a number of geese that works for both?

## Hint 2

Use 12 geese. Then 2:3 becomes 8:12, and 4:5 becomes 12:15.

## Solution

**Step 1.** The number of geese should work with both ratios, so try a multiple of both 3 and 4. The smallest one is 12.

**Step 2.** With 12 geese, the ratio 2:3 becomes 8:12, so there are 8 ducks.

**Step 3.** With 12 geese, the ratio 4:5 becomes 12:15, so there are 15 swans.

**Step 4.** So ducks to swans is 8:15.

**Answer: (E) 8:15**
