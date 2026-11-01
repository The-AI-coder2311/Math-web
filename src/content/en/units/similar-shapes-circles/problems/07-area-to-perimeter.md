---
order: 7
difficulty: medium
lesson: 01-similarity-tools
choices: ["35","28","40","49","61.25"]
answer: A
mistakes:
  B: "You may have used a ratio of 5 to 7. Take the square roots of 16 and 49, which are 4 and 7."
  C: "That doubles the perimeter. Find the scale factor from the areas: $\\frac{7}{4}$."
  D: "That's the larger area. The question asks for the perimeter, which is a length."
  E: "That's $20 \\times \\frac{49}{16}$, which uses the area ratio directly. Perimeters scale by the square root of the area ratio."
verify: "range(1, 200).find((p) => p * p * 16 === 20 * 20 * 49)"
---

Two similar triangles have areas of 16 and 49. The smaller one has a perimeter of 20. What is the perimeter of the larger one?

## Hint

Areas scale by the square of the scale factor. What's the scale factor for lengths?

## Hint 2

Since $16 = 4^2$ and $49 = 7^2$, the lengths are in a ratio of 4 to 7.

## Solution

**Step 1.** The areas are in a ratio of 16 to 49, so the lengths are in a ratio of 4 to 7.

**Step 2.** A perimeter is a length, so the larger one is $20 \times \frac{7}{4} = 35$.

**Answer: (A) 35**
