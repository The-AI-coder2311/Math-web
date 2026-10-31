---
order: 8
difficulty: medium
choices: [Ana, Ben, Cal, "It can't be determined"]
answer: C
verify: "['Ana', 'Ben', 'Cal'].filter((eater) => [eater === 'Ben', eater !== 'Ben', eater !== 'Cal'].filter(Boolean).length === 1).join()"
---

One of three friends ate the last cookie. Exactly **one** of these statements is true:

- Ana says, "Ben ate it."
- Ben says, "I didn't eat it."
- Cal says, "I didn't eat it."

Who ate the cookie?

## Hint

Make a table with a row for each friend. If that friend ate the cookie, how many of the statements are true?

## Solution

Test each possibility, and count the true statements:

| If the cookie-eater is... | Ana | Ben | Cal | True statements |
|---|---|---|---|---|
| Ana | false | true | true | 2 |
| Ben | true | false | true | 2 |
| Cal | false | true | false | 1 |

Only Cal gives exactly one true statement.

**Answer: (C) Cal**
