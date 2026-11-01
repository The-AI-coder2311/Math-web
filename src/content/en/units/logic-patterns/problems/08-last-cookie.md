---
order: 9
difficulty: medium
lesson: 04-logic-tables-pigeonholes
choices: ["Ana","Ben","Cal","It can't be determined"]
answer: C
mistakes:
  A: "If Ana ate it, then Ben's and Cal's statements are both true. That's 2 true statements."
  B: "If Ben ate it, then Ana's and Cal's statements are both true. That's 2 true statements."
  D: "Test all three cases. Exactly one of them gives exactly one true statement."
verify: "['Ana', 'Ben', 'Cal'].filter((eater) => [eater === 'Ben', eater !== 'Ben', eater !== 'Cal'].filter(Boolean).length === 1).join()"
---

One of three friends ate the last cookie. Exactly **one** of these statements is true:

- Ana says, "Ben ate it."
- Ben says, "I didn't eat it."
- Cal says, "I didn't eat it."

Who ate the cookie?

## Hint

Make a table with a row for each friend. If that friend ate the cookie, how many of the statements are true?

## Hint 2

Test each friend in turn. If Ana ate it, which statements are true?

## Solution

Test each possibility, and count the true statements:

| If the cookie-eater is... | Ana | Ben | Cal | True statements |
|---|---|---|---|---|
| Ana | false | true | true | 2 |
| Ben | true | false | true | 2 |
| Cal | false | true | false | 1 |

Only Cal gives exactly one true statement.

**Answer: (C) Cal**
