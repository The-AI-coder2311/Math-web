---
order: 6
difficulty: medium
choices: [9, 16, 21, 24, 25]
answer: E
verify: "Math.max(...range(1, 9).map((length) => length * (10 - length)))"
---

Sam has 20 meters of fence to go around a rectangular garden. The side lengths must be whole numbers of meters, and Sam uses all of the fence. What is the largest area the garden can have, in square meters?

## Hint

The length plus the width must be half of the perimeter. Make a list of the possibilities.

## Solution

**Step 1.** Going around the rectangle uses each side length twice, so the length plus the width is $20 \div 2 = 10$ meters.

**Step 2.** List the pairs that add up to 10, along with their areas:

| Length and width | Area |
|---|---|
| 1 and 9 | 9 |
| 2 and 8 | 16 |
| 3 and 7 | 21 |
| 4 and 6 | 24 |
| 5 and 5 | 25 |

The largest area is 25 square meters, and it comes from the square.

**Answer: (E) 25**
