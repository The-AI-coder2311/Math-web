---
order: 16
difficulty: medium
lesson: 03-law-of-sines-cosines
choices: ["30","45","60","75","90"]
answer: C
mistakes:
  A: "Check the Law of Cosines: $\\frac{25 + 64 - 49}{80} = \\frac{1}{2}$."
  B: "The cosine comes out to $\\frac{1}{2}$, which is not $45^\\circ$."
  D: "Compute the cosine instead of estimating from the ratio."
  E: "A right angle at $B$ would need $5^2 + 8^2$ to equal $7^2$, but 89 is not 49."
verify: "Math.round(Math.acos((25 + 64 - 49) / (2*5*8)) * 180 / Math.PI)"
---

In triangle $ABC$, $\sin A : \sin B : \sin C = 5 : 7 : 8$. What is angle $B$, in degrees?

## Hint

By the Law of Sines, the sides are in the same ratio as the sines.

## Hint 2

Take the sides to be 5, 7, and 8, with 7 opposite $B$.

## Solution

**Step 1.** By the Law of Sines, the sides are in the ratio $5 : 7 : 8$. Scaling doesn't change angles, so use sides 5, 7, 8.

**Step 2.** $\cos B = \frac{25 + 64 - 49}{80} = \frac{40}{80} = \frac{1}{2}$.

**Step 3.** So $B = 60^\circ$.

**Answer: (C) 60**
