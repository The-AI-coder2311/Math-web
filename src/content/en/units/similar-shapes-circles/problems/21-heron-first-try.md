---
order: 21
difficulty: easy
lesson: 05-heron-and-inradius
choices: ["60","65","120","130","169"]
answer: A
mistakes:
  B: "That's half of $13 \\times 10$. The height isn't 13, since 13 is a slanted side."
  C: "That leaves out the $\\frac{1}{2}$, if you used the base and height. It's $\\frac{1}{2} \\times 10 \\times 12$."
  D: "That's $13 \\times 10$, but 13 is a slanted side, not a height."
  E: "That's $13 \\times 13$. The height to the side of 10 is 12, so the area is half of $10 \\times 12$."
verify: "Math.sqrt(18 * 5 * 5 * 8)"
---

What is the area of a triangle with sides 13, 13, and 10?

## Hint

Half the perimeter is $s = 18$. What are the three differences?

## Hint 2

The differences are 5, 5, and 8. Put them under the square root with 18.

## Solution

Here, $s = 18$, and the differences are 5, 5, and 8. So $A = \sqrt{18 \times 5 \times 5 \times 8} = \sqrt{3600} = 60$. You can check that with the height: it splits the triangle into two 5-12-13 triangles, and $\frac{1}{2} \times 10 \times 12 = 60$.

**Answer: (A) 60**
