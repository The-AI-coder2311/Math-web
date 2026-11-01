---
order: 5
difficulty: easy
lesson: 03-repeats
choices: ["2","4","6","12","24"]
answer: C
mistakes:
  A: "That's the number of different letters. List a few, like TOOT, OTTO, and TTOO, to see that there are more."
  B: "That's what you divide by. Start from $4! = 24$."
  D: "That divides by 2, which handles only one repeated letter. Both letters repeat."
  E: "That treats the repeated letters as different."
verify: "new Set(perms([...'TOOT']).map((p) => p.join(''))).size"
---

How many different ways can you arrange the letters in the word TOOT?

## Hint

There are 2 Ts and 2 Os. What do you divide by?

## Hint 2

Start with $4! = 24$, and divide by $2! \times 2!$.

## Solution

There are $4! = 24$ orders if all of the letters are different. The two Ts can swap, and the two Os can swap, so divide by $2 \times 2 = 4$. That gives 6.

**Answer: (C) 6**
