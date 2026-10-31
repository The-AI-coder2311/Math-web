---
order: 10
difficulty: medium
choices: [504, 576, 648, 720, 900]
answer: C
verify: "range(100, 999).filter((n) => new Set(digits(n)).size === 3).length"
---

How many three-digit numbers have three different digits? (For example, 305 counts, but 330 does not.)

## Hint

Start with the pickiest digit: the hundreds digit can't be 0. Then ask yourself whether the tens digit can be 0.

## Solution

**Step 1.** The hundreds digit can't be 0, so it can be 1 through 9. That's 9 options.

**Step 2.** The tens digit can be any of the 10 digits except the one already used. Now 0 is allowed, so there are 9 options.

**Step 3.** The ones digit can't match either of the two digits already used. That leaves 8 options.

**Step 4.** Multiply:

$$9 \times 9 \times 8 = 648$$

**A common mistake:** answering $10 \times 9 \times 8 = 720$. That count includes "numbers" like 012, which don't really have three digits.

**Answer: (C) 648**
