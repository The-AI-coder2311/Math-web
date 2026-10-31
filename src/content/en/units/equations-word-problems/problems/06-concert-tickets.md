---
order: 6
difficulty: medium
choices: [12, 15, 20, 24, 29]
answer: B
verify: "range(0, 44).find((a) => 8 * a + 5 * (44 - a) === 265)"
---

Concert tickets cost \$8 for adults and \$5 for students. A total of 44 tickets were sold for \$265. How many adult tickets were sold?

## Hint

Let $a$ be the number of adult tickets. How can you write the number of student tickets using $a$?

## Solution

**Step 1.** There are $a$ adult tickets and $44 - a$ student tickets. Adding up the money gives:

$$8a + 5(44 - a) = 265$$

**Step 2.** Multiplying out gives $8a + 220 - 5a = 265$, which simplifies to $3a + 220 = 265$.

**Step 3.** Subtract 220 to get $3a = 45$, so $a = 15$.

**Check:** 15 adult tickets bring in \$120, and 29 student tickets bring in \$145. Together, that's \$265.

**Answer: (B) 15**
