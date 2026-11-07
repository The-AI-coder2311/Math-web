---
order: 27
difficulty: medium
lesson: 02-truth-tellers-and-liars
choices: ["Al","Bo","Cy"]
answer: C
mistakes:
  A: "If Al did it, then Bo's and Cy's statements are both true. That's 2 true statements."
  B: "If Bo did it, then Al's and Cy's statements are both true. That's 2 true statements."
verify: "['Al', 'Bo', 'Cy'].filter((x) => [x === 'Bo', x !== 'Bo', x !== 'Cy'].filter(Boolean).length === 1).join()"
---

One of three friends spilled the paint. Exactly **one** of these statements is true:

- Al says, "Bo did it."
- Bo says, "I didn't do it."
- Cy says, "I didn't do it."

Who spilled the paint?

## Hint

Al's and Bo's statements are opposites. What does that tell you?

## Hint 2

Exactly one of those two is true. So Cy's statement must be false.

## Solution

Al's and Bo's statements are opposites, so exactly one of them is true. That uses up the one true statement, so Cy's statement is false. So Cy did it.

**Answer: (C) Cy**
