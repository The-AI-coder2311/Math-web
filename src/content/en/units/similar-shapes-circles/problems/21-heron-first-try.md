---
order: 21
difficulty: easy
lesson: 05-heron-and-inradius
choices: ["30","60","65","120","130"]
answer: B
mistakes:
  A: "That's half of the answer. Check the square root: $\\sqrt{3600}$ is 60."
  C: "That's half of $13 \\times 10$. The height isn't 13, since 13 is a slanted side."
  D: "That leaves out the $\\frac{1}{2}$, if you used the base and height. It's $\\frac{1}{2} \\times 10 \\times 12$."
  E: "That's $13 \\times 10$, but 13 is a slanted side, not a height."
verify: "Math.sqrt(18 * 5 * 5 * 8)"
---

What is the area of a triangle with sides 13, 13, and 10?

## Hint

Half the perimeter is $s = 18$. What are the three differences?

## Hint 2

The differences are 5, 5, and 8. Put them under the square root with 18.

## Solution

Here, $s = 18$, and the differences are 5, 5, and 8. So $A = \sqrt{18 \times 5 \times 5 \times 8} = \sqrt{3600} = 60$. You can check that with the height: it splits the triangle into two 5-12-13 triangles, and $\frac{1}{2} \times 10 \times 12 = 60$.

**Answer: (B) 60**
