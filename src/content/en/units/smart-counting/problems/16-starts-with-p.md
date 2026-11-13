---
order: 14
difficulty: medium
lesson: 03-repeats
choices: ["24","30","48","60","120"]
answer: A
mistakes:
  B: "That's half of the 60 total arrangements. Only 2 of the 5 letters are Ps, so it's $\\frac{2}{5}$ of 60."
  C: "That counts every arrangement twice, once for each P. The two Ps look the same, so swapping them doesn't make a new arrangement."
  D: "That's all of the arrangements of APPLE. Only some start with P."
  E: "That's $5!$, which treats the Ps as different and ignores the rule."
verify: "new Set(perms([...'APPLE']).map((p) => p.join('')).filter((w) => w[0] === 'P')).size"
---

How many different arrangements of the letters in APPLE start with P?

## Hint

Put a P first. Which letters are left? Do any of them repeat?

## Hint 2

The letters left are A, P, L, and E, which are all different.

## Solution

Put a P first. It doesn't matter which, since they look the same. The letters left, A, P, L, and E, are all different, so they can be arranged in $4! = 24$ ways.

**Answer: (A) 24**
