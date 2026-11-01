---
order: 3
difficulty: easy
lesson: 01-repeating-and-growing
choices: ["Monday","Wednesday","Thursday","Friday","Sunday"]
answer: D
mistakes:
  A: "That goes backward. Count forward from Wednesday."
  B: "That would be right if 100 were a multiple of 7. There are 2 days left over after 14 full weeks."
  C: "That's 1 day after Wednesday. The remainder when 100 is divided by 7 is 2."
  E: "That's 4 days after Wednesday. Check your remainder: $100 - 98 = 2$."
verify: "['Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday'][100 % 7]"
---

Today is Wednesday. What day of the week will it be 100 days from now?

## Hint

Every 7 days, you land on Wednesday again. How many days are left over after removing full weeks?

## Hint 2

$7 \times 14 = 98$, so 98 days from now is Wednesday again. Count the last 2 days.

## Solution

**Step 1.** Since $7 \times 14 = 98$, it will be Wednesday again 98 days from now.

**Step 2.** There are $100 - 98 = 2$ more days. Two days after Wednesday is Friday.

**Answer: (D) Friday**
