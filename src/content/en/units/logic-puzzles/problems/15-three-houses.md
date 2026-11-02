---
order: 15
difficulty: medium
lesson: 03-ordering-and-seating
choices: ["Yellow","Gray","Green","It can't be determined"]
answer: A
mistakes:
  B: "Tess's house is gray, and Vi isn't Tess."
  C: "Uri's house is green, and Vi isn't Uri."
  D: "Each clue crosses out options, and exactly one arrangement survives."
verify: "[...new Set(perms(['Yellow', 'Gray', 'Green']).flatMap((c) => perms(['Tess', 'Uri', 'Vi']).map((n) => [c, n])).filter(([c, n]) => c.indexOf('Yellow') + 1 === c.indexOf('Gray') && n[1] !== 'Tess' && c[n.indexOf('Uri')] === 'Green' && c[n.indexOf('Tess')] === 'Gray').map(([c, n]) => c[n.indexOf('Vi')]))].join()"
---

Three houses stand in a row, and Tess, Uri, and Vi own them. The houses are yellow, gray, and green, in some order. The yellow house is directly to the left of the gray house. Tess's house isn't in the middle. Uri's house is green. Tess's house is gray. What color is Vi's house?

## Hint

The yellow and gray clue leaves only two color orders. Write both.

## Hint 2

The orders are yellow, gray, green, and green, yellow, gray. Which one lets Tess's gray house avoid the middle?

## Solution

Tess's house is gray, and it isn't in the middle, so the order must be green, yellow, gray. Uri has green, Tess has gray, and that leaves yellow for Vi.

**Answer: (A) Yellow**
