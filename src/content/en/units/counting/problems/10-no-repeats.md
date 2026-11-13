---
order: 11
difficulty: medium
lesson: 02-when-order-matters
choices: ["81","504","576","648","720"]
answer: D
mistakes:
  A: "That's $9 \\times 9$, which fills only the first two digits. The third digit still has 8 options."
  B: "That's $9 \\times 8 \\times 7$. The second digit has 9 options, since 0 is allowed there."
  C: "That's $9 \\times 8 \\times 8$. Count again: 9, then 9, then 8."
  E: "That's $10 \\times 9 \\times 8$, which allows a first digit of 0. That isn't a 3-digit number."
verify: "range(100, 999).filter((n) => new Set(digits(n)).size === 3).length"
---

How many three-digit numbers have three different digits? (For example, 305 counts, but 330 does not.)

## Hint

Start with the pickiest digit: the hundreds digit can't be 0. Then ask yourself whether the tens digit can be 0.

## Hint 2

The hundreds digit has 9 options. The tens digit also has 9, since 0 is now allowed. How many does the ones digit have?

## Solution

**Step 1.** The hundreds digit can't be 0, so it can be 1 through 9. That's 9 options.

**Step 2.** The tens digit can be any of the 10 digits except the one already used. Now 0 is allowed, so there are 9 options.

**Step 3.** The ones digit can't match either of the two digits already used. That leaves 8 options.

**Step 4.** Multiply:

$$9 \times 9 \times 8 = 648$$

**A common mistake:** answering $10 \times 9 \times 8 = 720$. That count includes "numbers" like 012, which don't really have three digits.

**Answer: (D) 648**
