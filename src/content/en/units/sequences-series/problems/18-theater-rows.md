---
order: 18
difficulty: hard
lesson: 02-fast-sums
choices: ["7","8","9","10","11"]
answer: E
mistakes:
  A: "With 7 rows, the theater would have only 147 seats."
  B: "With 8 rows, the theater would have only 180 seats."
  C: "With 9 rows, the last row has 36 seats, and the total is only 216."
  D: "With 10 rows, the last row has 39 seats, and the total is only 255."
verify: "range(1, 40).find((n) => sum(range(0, n - 1).map((i) => 12 + 3 * i)) === 297)"
---

A theater has 12 seats in its first row, and each row has 3 more seats than the row in front of it. The theater has 297 seats in all. How many rows does it have?

## Hint

You can test the answer choices. For a given number of rows, how many seats are in the last row?

## Hint 2

With $n$ rows, the last row has $12 + (n - 1) \times 3$ seats, and the total is $\frac{n \times (\text{first} + \text{last})}{2}$. Try $n = 11$.

## Solution

**Step 1.** Test 11 rows. The last row has $12 + 10 \times 3 = 42$ seats.

**Step 2.** The total is $\frac{11 \times (12 + 42)}{2} = 297$. That's exactly the number we need.

**Answer: (E) 11**
