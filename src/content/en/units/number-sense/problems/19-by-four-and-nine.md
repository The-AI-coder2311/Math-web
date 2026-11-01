---
order: 19
difficulty: hard
lesson: 03-divisibility-rules
choices: ["28","26","27","25","36"]
answer: D
mistakes:
  B: "That removes only one number. Both 36 and 72 have only 2 digits."
  C: "That counts all of the multiples of 36 up to 999, including 36 and 72, which have 2 digits."
  A: "The largest multiple is $36 \\times 27 = 972$, so there are 27 up to 999. Then remove the 2-digit ones."
  E: "That's the number you're counting multiples of. Divide to find how many multiples there are."
verify: "range(100, 999).filter((n) => n % 4 === 0 && n % 9 === 0).length"
---

How many 3-digit numbers are divisible by both 4 and 9?

## Hint

A number divisible by both 4 and 9 is a multiple of what number?

## Hint 2

It's a multiple of 36. How many multiples of 36 are at most 999? How many of those are below 100?

## Solution

**Step 1.** 4 and 9 share no factors, so the number must be a multiple of 36.

**Step 2.** Since $36 \times 27 = 972$, there are 27 multiples up to 999.

**Step 3.** Two of those, 36 and 72, have only 2 digits. So $27 - 2 = 25$.

**Answer: (D) 25**
