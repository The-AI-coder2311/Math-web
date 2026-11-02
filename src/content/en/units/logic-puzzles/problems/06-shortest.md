---
order: 6
difficulty: easy
lesson: 03-ordering-and-seating
choices: ["Ann","Bea","It can't be determined","Cam"]
answer: D
mistakes:
  A: "Ann is taller than Bea, so Ann can't be the shortest."
  B: "Cam is shorter than Bea, so Bea can't be the shortest."
  C: "These clues do connect all three people. Put them in one line."
verify: "[...new Set(perms(['Ann', 'Bea', 'Cam']).filter((o) => o.indexOf('Ann') < o.indexOf('Bea') && o.indexOf('Bea') < o.indexOf('Cam')).map((o) => o[2]))].join()"
---

Ann is taller than Bea. Cam is shorter than Bea. Who is the shortest of the three?

## Hint

Bea appears in both clues, so use Bea to connect them.

## Hint 2

Write the three names in a line, from tallest to shortest.

## Solution

From tallest to shortest, the order is Ann, Bea, Cam. So Cam is the shortest.

**Answer: (D) Cam**
