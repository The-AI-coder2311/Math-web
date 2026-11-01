---
order: 8
difficulty: medium
lesson: 04-factors-primes-leftovers
choices: ["4","7","8","9","12"]
answer: B
mistakes:
  A: "That's only part of the list. Factors of 36 above 2 are 3, 4, 6, 9, 12, 18, and 36."
  C: "List the factors of 36: there are 9. Only 1 and 2 are too small."
  D: "That counts all of the factors of 36. With 1 or 2 friends, the 2 extra cookies could still be shared."
  E: "That's one possible number of friends, not how many possibilities there are."
verify: "range(1, 38).filter((friends) => 38 % friends === 2).length"
---

Nadia shares 38 cookies equally among some friends, giving out as many as possible, and there are exactly 2 cookies left over. How many different numbers of friends are possible?

## Hint

Set aside the 2 leftover cookies first. How many cookies were shared evenly? Then remember: if there were only 2 friends, could 2 cookies really be left over?

## Hint 2

The friends shared 36 cookies evenly. So the number of friends is a factor of 36, and it must be more than 2.

## Solution

**Step 1.** Set aside the leftovers. The number of cookies shared evenly is:

$$38 - 2 = 36$$

**Step 2.** So the number of friends must be a factor of 36. The factors are 1, 2, 3, 4, 6, 9, 12, 18, and 36.

**Step 3.** The number of friends must also be greater than 2. With 1 or 2 friends, the 2 extra cookies could still be shared, so they wouldn't be left over.

**Step 4.** Cross out 1 and 2. That leaves 3, 4, 6, 9, 12, 18, and 36, which is 7 possibilities.

**A common mistake:** answering 9 by counting every factor of 36.

**Answer: (B) 7**
