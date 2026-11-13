---
order: 10
difficulty: medium
lesson: 04-boxes-and-3d
choices: ["16","64","96","128","384"]
answer: C
mistakes:
  A: "That's one face. A cube has 6."
  B: "That's the volume. The surface area is the outside."
  D: "That uses 8 faces. A cube has 6."
  E: "That's $64 \\times 6$, which uses the volume as the area of a face. Each face has an area of 16."
verify: "(() => { const side = range(1, 64).find((s) => s * s * s === 64); return 6 * side * side; })()"
---

A cube has a volume of 64 cubic inches. What is its surface area, in square inches?

## Hint

Which number, used three times in a multiplication, makes 64? That's the side length.

## Hint 2

The side is 4, so each face has an area of 16. There are 6 faces.

## Solution

**Step 1.** Since $4 \times 4 \times 4 = 64$, the side length is 4.

**Step 2.** Each face has an area of $4 \times 4 = 16$.

**Step 3.** A cube has 6 faces, so the surface area is $6 \times 16 = 96$.

**Answer: (C) 96**
