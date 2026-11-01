---
order: 12
difficulty: medium
lesson: 01-place-value
choices: ["450","522","555","792","830"]
answer: B
mistakes:
  A: "That's $830 - 380$. For the smallest number, put the 0 right after the 3."
  C: "Check your subtraction: $830 - 308$."
  D: "That's $830 - 38$, which treats 038 as a 3-digit number. It can't start with 0."
  E: "That's only the largest number. You still need to subtract the smallest."
verify: "(() => { const all = perms([3, 0, 8]).map((p) => 100 * p[0] + 10 * p[1] + p[2]).filter((n) => n >= 100); return Math.max(...all) - Math.min(...all); })()"
---

Using each of the digits 3, 0, and 8 exactly once, you make the largest and the smallest possible 3-digit numbers. What is their difference?

## Hint

Biggest digits go on the left for the largest number. What can't the first digit of the smallest number be?

## Hint 2

The largest is 830. The smallest can't start with 0, so it starts with 3.

## Solution

The largest number is 830. The smallest can't start with 0, so it's 308. The difference is $830 - 308 = 522$.

**Answer: (B) 522**
