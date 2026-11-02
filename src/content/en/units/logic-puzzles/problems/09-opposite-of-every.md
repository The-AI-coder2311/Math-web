---
order: 9
difficulty: medium
lesson: 01-if-then-reasoning
choices: ["No student in the room passed.","At least one student in the room did not pass.","At least one student in the room passed.","Exactly one student in the room did not pass."]
answer: B
mistakes:
  A: "That's too strong. One student not passing is enough to make the original false."
  C: "This could be true at the same time as the original, so it isn't the opposite."
  D: "Two students might not have passed, and the original would still be false."
verify: "[['No student in the room passed.', (w) => w.every((x) => !x)], ['At least one student in the room did not pass.', (w) => w.some((x) => !x)], ['At least one student in the room passed.', (w) => w.some((x) => x)], ['Exactly one student in the room did not pass.', (w) => w.filter((x) => !x).length === 1]].filter(([t, f]) => product([true, false], [true, false], [true, false]).every((w) => f(w) === !w.every((x) => x))).map(([t]) => t).join()"
---

Which statement is true exactly when this statement is false?

"Every student in the room passed the test."

## Hint

What's the smallest thing that would make the statement false?

## Hint 2

The statement is about every student. How many students have to fail to break it?

## Solution

"Every student passed" is false as soon as one student didn't pass. So its opposite is, "At least one student in the room did not pass."

**Answer: (B) At least one student in the room did not pass.**
