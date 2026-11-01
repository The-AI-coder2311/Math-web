---
order: 2
difficulty: easy
lesson: 01-perimeter-and-area
choices: ["28","14","21","7","49"]
answer: A
mistakes:
  D: "That's the length of one side. The perimeter goes all the way around."
  B: "That's only 2 sides."
  C: "That's only 3 sides."
  E: "That's the area. The question asks for the perimeter."
verify: "4 * range(1, 49).find((side) => side * side === 49)"
---

A square patio has an area of 49 square feet. What is its perimeter, in feet?

## Hint

Which number times itself gives 49? That's the length of one side.

## Hint 2

Each side is 7 feet. A square has 4 sides.

## Solution

**Step 1.** A square's area is its side times itself. Since $7 \times 7 = 49$, each side is 7 feet.

**Step 2.** A square has 4 equal sides, so its perimeter is $4 \times 7 = 28$ feet.

**Answer: (A) 28**
