---
order: 23
difficulty: easy
lesson: 03-ordering-and-seating
choices: ["Ann","Bo","Cy","Dan"]
answer: B
mistakes:
  A: "Ann is ahead of Bo, and Bo is ahead of the others. So Ann is first."
  C: "Bo is ahead of Cy, and Ann is ahead of Bo. So Cy is third."
  D: "Dan is behind Cy, so Dan is last."
verify: "perms(['Ann', 'Bo', 'Cy', 'Dan']).filter((o) => o.indexOf('Ann') < o.indexOf('Bo') && o.indexOf('Bo') < o.indexOf('Cy') && o.indexOf('Dan') > o.indexOf('Cy')).map((o) => o[1]).join()"
---

Four friends stand in a line. Ann is ahead of Bo, and Bo is ahead of Cy. Dan is behind Cy. Who is second in line?

## Hint

Chain the clues together into one line.

## Hint 2

The line goes Ann, then Bo, then Cy, then Dan.

## Solution

Chaining the clues gives Ann, Bo, Cy, Dan. So Bo is second.

**Answer: (B) Bo**
