---
order: 28
difficulty: medium
lesson: 04-logic-tables-pigeonholes
choices: ["Ari","Bo","Cy"]
answer: B
mistakes:
  A: "If Ari won, then Ari's and Bo's statements are both true. That's 2 true statements."
  C: "If Cy won, then Bo's and Cy's statements are both true. That's 2 true statements."
verify: "['Ari', 'Bo', 'Cy'].filter((x) => [x === 'Ari', x !== 'Bo', x !== 'Ari'].filter(Boolean).length === 1).join()"
---

Ari, Bo, and Cy played a game, and one of them won. Exactly **one** of these statements is true:

- Ari says, "I won."
- Bo says, "I didn't win."
- Cy says, "Ari didn't win."

Who won?

## Hint

Make a table with one row for each possible winner.

## Hint 2

In each row, count the true statements. You want a row with exactly 1.

## Solution

If Ari won, Ari and Bo are telling the truth, which is 2. If Cy won, Bo and Cy are telling the truth, which is 2. If Bo won, only Cy is telling the truth. So Bo won.

**Answer: (B) Bo**
