---
order: 15
difficulty: medium
lesson: 04-other-bases
choices: ["32","57","102","122","112"]
answer: E
mistakes:
  A: "That's the sum in base 10. The question asks for it in base 5."
  B: "That adds as in base 10. Also, 7 isn't a digit in base 5."
  C: "That forgets to add the carry in the fives place."
  D: "Check the fives place: $3 + 2 + 1 = 6$, which is 1 with a carry."
verify: "(parseInt('34', 5) + parseInt('23', 5)).toString(5)"
---

What is $34_5 + 23_5$, written in base 5?

## Hint

Add the ones place first. You carry at 5, not at 10.

## Hint 2

$4 + 3 = 7$, which is one 5 and 2 left over. Write 2, and carry 1.

## Solution

**Ones place:** $4 + 3 = 7$, which is one 5 and 2 left over. Write 2, and carry 1.

**Fives place:** $3 + 2 + 1 = 6$, which is one 5 and 1 left over. Write 1, and carry 1.

So the digits are 112.

**Check:** $19 + 13 = 32$, and $112_5 = 25 + 5 + 2 = 32$.

**Answer: (E) 112**
