---
order: 4
difficulty: easy
lesson: 02-truth-tellers-and-liars
choices: ["Always no","Always yes","Yes from a truth-teller, and no from a liar","No from a truth-teller, and yes from a liar"]
answer: B
mistakes:
  A: "A truth-teller would have to say yes, since it's true."
  C: "A liar can't answer no, since that would be telling the truth."
  D: "A truth-teller can't say no to this, since that would be a lie."
verify: "[true, false].every((truthful) => (truthful ? truthful : !truthful)) ? 'Always yes' : 'Not always'"
---

On an island, truth-tellers always tell the truth, and liars always lie. You ask someone, "Are you a truth-teller?" What answer will you hear?

## Hint

Test each type on its own. What's the true answer for each one?

## Hint 2

For a liar, the true answer is no. A liar has to say the opposite of that.

## Solution

A truth-teller answers truthfully, so says yes. For a liar, the true answer is no, and a liar must give the false answer, which is yes. So the answer is always yes, and this question tells you nothing.

**Answer: (B) Always yes**
