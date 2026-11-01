---
order: 16
difficulty: hard
lesson: 02-median-tables-graphs
choices: ["9","12","21","15","14"]
answer: E
mistakes:
  A: "That would need $x = 12$, which isn't as small as possible. Make $x$ small to make $y$ large."
  B: "That would need $x = 9$. A smaller $x$ gives a larger $y$."
  D: "That would need $x = 6$. Then 6 appears twice and ties with 4 as a mode."
  C: "That's $x + y$. The two numbers share that total."
verify: "Math.max(...product(range(1, 6), range(1, 6), range(6, 35), range(6, 35)).map(([a, b, d, e]) => [a, b, 6, d, e]).filter((l) => l[0] <= l[1] && l[3] <= l[4] && sum(l) === 35 && range(1, 40).every((v) => v === 4 || l.filter((x) => x === v).length < l.filter((x) => x === 4).length)).map((l) => l[4]))"
---

Five whole numbers have a mean of 7 and a median of 6. The number 4 is the only mode, meaning that 4 appears more often than any other number. What is the largest number that could be in the list?

## Hint

Write the list in order. The middle number is 6. What must the first two numbers be? What must the numbers add up to?

## Hint 2

The list is 4, 4, 6, $x$, $y$, and $x + y = 21$. How small can $x$ be?

## Solution

**Step 1.** The mean is 7, so the 5 numbers add up to $5 \times 7 = 35$.

**Step 2.** In order, the middle number is 6, so only the two smallest numbers can be 4. For 4 to be the mode, both of them must be 4. The list is 4, 4, 6, $x$, $y$.

**Step 3.** Then $x + y = 35 - 4 - 4 - 6 = 21$.

**Step 4.** To make $y$ as big as possible, make $x$ as small as possible. It can't be less than 6, and it can't be 6, since then 6 would appear twice and tie with 4. So $x = 7$, and $y = 21 - 7 = 14$.

**Answer: (E) 14**
