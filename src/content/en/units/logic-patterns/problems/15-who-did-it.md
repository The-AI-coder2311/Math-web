---
order: 15
difficulty: medium
lesson: 04-logic-tables-pigeonholes
choices: ["Dee","Eli","Fay","It can't be determined"]
answer: A
mistakes:
  B: "If Eli ate it, all three statements are true. The problem says that one is false."
  C: "If Fay ate it, all three statements are false. The problem says that only one is."
  D: "Test all three cases. Exactly one of them has exactly one false statement."
verify: "['Dee', 'Eli', 'Fay'].filter((x) => [x === 'Eli', x !== 'Fay', x !== 'Fay'].filter((s) => !s).length === 1).join()"
---

One of three friends ate the last slice of pie. Exactly **one** of these statements is false:

- Dee says, "Eli ate it."
- Eli says, "Fay didn't eat it."
- Fay says, "I didn't eat it."

Who ate the pie?

## Hint

Make a table with a row for each friend. In each row, how many of the statements are false?

## Hint 2

If Eli ate it, all three statements are true. If Fay ate it, all three are false. What about Dee?

## Solution

Test each case, counting false statements:

| If the pie-eater is... | Dee | Eli | Fay | False statements |
|---|---|---|---|---|
| Dee | false | true | true | 1 |
| Eli | true | true | true | 0 |
| Fay | false | false | false | 3 |

Only Dee gives exactly one false statement.

**Answer: (A) Dee**
