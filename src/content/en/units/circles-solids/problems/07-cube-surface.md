---
order: 7
difficulty: medium
choices: [16, 64, 96, 128, 384]
answer: C
verify: "(() => { const side = range(1, 64).find((s) => s * s * s === 64); return 6 * side * side; })()"
---

A cube has a volume of 64 cubic inches. What is its surface area, in square inches?

## Hint

Which number, used three times in a multiplication, makes 64? That's the side length.

## Solution

**Step 1.** Since $4 \times 4 \times 4 = 64$, the side length is 4.

**Step 2.** Each face has an area of $4 \times 4 = 16$.

**Step 3.** A cube has 6 faces, so the surface area is $6 \times 16 = 96$.

**Answer: (C) 96**
