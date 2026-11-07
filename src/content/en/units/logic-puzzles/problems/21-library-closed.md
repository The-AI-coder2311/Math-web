---
order: 21
difficulty: easy
lesson: 01-if-then-reasoning
choices: ["Today is Monday.","Today is not Monday.","The library is open every day but Monday.","It can't be determined."]
answer: B
mistakes:
  A: "On Mondays, the library is closed, and it's open today."
  C: "The rule doesn't say what happens on other days."
  D: "Flip and negate the rule. It does tell you something."
verify: "product([true, false], [true, false]).filter(([monday, closed]) => (!monday || closed) && !closed).every(([monday]) => !monday) ? 'Today is not Monday.' : 'No'"
---

The rule is, "If it's Monday, the library is closed." Today, the library is open. What must be true?

## Hint

Flip and negate the rule.

## Hint 2

"If the library isn't closed, then it's not Monday."

## Solution

Flipped and negated, the rule says, "If the library isn't closed, then it's not Monday." The library is open, so today isn't Monday.

**Answer: (B) Today is not Monday.**
