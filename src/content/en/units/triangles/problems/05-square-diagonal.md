---
order: 8
difficulty: medium
lesson: 02-pythagoras-why
choices: ["9","12","24","18","36"]
answer: D
mistakes:
  A: "That's $6 \\times 6 \\div 4$, treating the diagonal as a side and halving it. Use $s^2 + s^2 = 36$."
  B: "That's $6 \\times 2$. Use $s^2 + s^2 = 36$."
  C: "That's $6 \\times 4$, the perimeter if the diagonal were a side."
  E: "That's the area of a square with **sides** of 6. The 6 is the diagonal."
verify: "(() => { const sideSquared = range(1, 36).find((s) => s + s === 6 * 6); return sideSquared; })()"
---

A square has a diagonal of length 6. What is the area of the square?

## Hint

The diagonal is the hypotenuse of a right triangle with two equal legs. You don't need to find the side length itself. You only need the side times itself.

## Hint 2

$s^2 + s^2 = 36$, so $s^2 = 18$. What does $s^2$ tell you about the area?

## Solution

**Step 1.** Let the side be $s$. The diagonal makes a right triangle with two legs of length $s$, so:

$$s^2 + s^2 = 6^2$$

**Step 2.** That means $2 s^2 = 36$, so $s^2 = 18$.

**Step 3.** The area of a square is exactly $s^2$, so the area is 18.

**Answer: (D) 18**
