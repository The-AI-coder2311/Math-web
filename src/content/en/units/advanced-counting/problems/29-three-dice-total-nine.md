---
order: 29
difficulty: medium
lesson: 02-stars-and-bars
choices: ["25","27","28","36"]
answer: A
mistakes:
  B: "That's the count for a total of 10."
  C: "That leaves out the rule that no die can show more than 6."
  D: "That's the count for a total of 10, with no upper limit."
verify: "product(range(1, 6), range(1, 6), range(1, 6)).filter((d) => sum(d) === 9).length"
---

In how many ordered ways can three dice show a total of 9?

## Hint

Subtract 1 from each die, so that each number goes from 0 to 5, with a total of 6.

## Hint 2

Without a limit, that's $\binom{8}{2} = 28$. Which of those break the limit?

## Solution

Subtract 1 from each die. Now we need three numbers from 0 to 5 with a total of 6. Without the limit, there are $\binom{8}{2} = 28$ ways. A number above 5 must be 6, with the other two at 0, which happens in 3 ways. So $28 - 3 = 25$.

**Answer: (A) 25**
