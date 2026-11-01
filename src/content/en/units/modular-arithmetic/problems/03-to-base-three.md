---
order: 7
difficulty: medium
lesson: 04-other-bases
choices: ["1120","1200","1210","2100","1020"]
answer: B
mistakes:
  A: "That's $27 + 9 + 6$, which is 42."
  C: "That's $27 + 18 + 3$, which is 48."
  D: "That's $54 + 9$, which is 63."
  E: "That's $27 + 6$, which is 33."
verify: "(45).toString(3)"
---

What is 45 when written in base 3?

## Hint

In base 3, the places are worth 1, 3, 9, 27, and 81. Start with the biggest place value that fits in 45.

## Hint 2

$45 = 1 \times 27 + 18$, and $18 = 2 \times 9$.

## Solution

**Step 1.** The value 81 is too big, so start with 27. There's 1 twenty-seven in 45, which leaves 18.

**Step 2.** There are 2 nines in 18, which leaves 0.

**Step 3.** There are no threes and no ones left. So the digits are 1, 2, 0, 0.

**Check:** $1 \times 27 + 2 \times 9 + 0 \times 3 + 0 \times 1 = 45$.

**Answer: (B) 1200**
