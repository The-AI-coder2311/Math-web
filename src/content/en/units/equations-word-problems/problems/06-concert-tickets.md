---
order: 8
difficulty: medium
lesson: 04-two-unknowns
choices: ["12","15","20","24","29"]
answer: B
mistakes:
  A: "Check it: 12 adult tickets bring in \\$96, and 32 student tickets bring in \\$160, for a total of \\$256."
  C: "Check it: 20 adult tickets bring in \\$160, and 24 student tickets bring in \\$120, for a total of \\$280."
  D: "Check it: 24 adult tickets bring in \\$192, and 20 student tickets bring in \\$100, for a total of \\$292."
  E: "That's the number of student tickets. The question asks about adult tickets."
verify: "range(0, 44).find((a) => 8 * a + 5 * (44 - a) === 265)"
---

Concert tickets cost \$8 for adults and \$5 for students. A total of 44 tickets were sold for \$265. How many adult tickets were sold?

## Hint

Let $a$ be the number of adult tickets. How can you write the number of student tickets using $a$?

## Hint 2

Pretend that all 44 are student tickets, which brings in \$220. Each adult ticket adds \$3 more.

## Solution

**Step 1.** There are $a$ adult tickets and $44 - a$ student tickets. Adding up the money gives:

$$8a + 5(44 - a) = 265$$

**Step 2.** Multiplying out gives $8a + 220 - 5a = 265$, which simplifies to $3a + 220 = 265$.

**Step 3.** Subtract 220 to get $3a = 45$, so $a = 15$.

**Check:** 15 adult tickets bring in \$120, and 29 student tickets bring in \$145. Together, that's \$265.

**Answer: (B) 15**
