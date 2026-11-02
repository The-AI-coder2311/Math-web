---
order: 12
difficulty: medium
lesson: 02-truth-tellers-and-liars
choices: ["1","2","3","4","5"]
answer: D
mistakes:
  A: "If statement 1 were true, only one statement would be false. But the others would all be false too."
  B: "If statement 2 were true, the other four statements would be false, not two."
  C: "If statement 3 were true, the other four statements would be false, not three."
  E: "If all five were false, then statement 5 would be true. That's a contradiction."
verify: "range(0, 5).filter((f) => 5 - range(1, 5).filter((s) => s === f).length === f).join()"
---

A board shows five statements. For each number $k$ from 1 to 5, statement $k$ says, "Exactly $k$ of these statements are false." Which statement is true?

## Hint

Can two of these statements be true at once?

## Hint 2

They disagree, so at most one is true. That means at least 4 are false. Could all 5 be false?

## Solution

The statements disagree with each other, so at most one is true. If none were true, all 5 would be false, which makes statement 5 true. That's a contradiction. So exactly one is true, and exactly 4 are false. That's what statement 4 says.

**Answer: (D) 4**
