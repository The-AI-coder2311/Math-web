---
order: 11
difficulty: medium
lesson: 02-truth-tellers-and-liars
choices: ["Eve","Finn","Gus","Hal"]
answer: D
mistakes:
  A: "If Eve took it, then Gus and Hal are both telling the truth. That's 2 true statements."
  B: "If Finn took it, then Eve, Gus, and Hal are all telling the truth. That's 3 true statements."
  C: "If Gus took it, then Finn and Hal are both telling the truth. That's 2 true statements."
verify: "['Eve', 'Finn', 'Gus', 'Hal'].filter((x) => [x === 'Finn', x === 'Gus', x !== 'Gus', x !== 'Hal'].filter(Boolean).length === 1).join()"
---

One of four friends took the last cookie. Exactly **one** of these statements is true:

- Eve says, "Finn took it."
- Finn says, "Gus took it."
- Gus says, "Finn is lying."
- Hal says, "I didn't take it."

Who took the cookie?

## Hint

Make a table with one row for each possible cookie-taker, and count the true statements in each row.

## Hint 2

Gus's statement is true exactly when Finn's is false. So those two give one true statement between them in every row.

## Solution

Test each case, counting true statements:

| If the taker is... | Eve | Finn | Gus | Hal | True statements |
|---|---|---|---|---|---|
| Eve | false | false | true | true | 2 |
| Finn | true | false | true | true | 3 |
| Gus | false | true | false | true | 2 |
| Hal | false | false | true | false | 1 |

Only Hal's row has exactly one true statement.

**Answer: (D) Hal**
