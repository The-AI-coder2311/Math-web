---
order: 5
difficulty: easy
lesson: 03-ordering-and-seating
choices: ["Ty","Uma","Vic","Wes"]
answer: C
mistakes:
  A: "Ty finished before Uma, so Ty can't be last."
  B: "Vic finished after Uma, so Uma can't be last."
  D: "Wes finished before Ty, which makes Wes first, not last."
verify: "perms(['Ty', 'Uma', 'Vic', 'Wes']).filter((o) => o.indexOf('Ty') < o.indexOf('Uma') && o.indexOf('Vic') > o.indexOf('Uma') && o.indexOf('Wes') < o.indexOf('Ty')).map((o) => o[3]).join()"
---

Ty finished a race before Uma. Vic finished after Uma. Wes finished before Ty. Who finished last?

## Hint

Write each clue with the earlier runner first. Which clues share a name?

## Hint 2

The clues chain together into one line, starting with Wes.

## Solution

Chaining the clues gives Wes, Ty, Uma, Vic. So Vic finished last.

**Answer: (C) Vic**
