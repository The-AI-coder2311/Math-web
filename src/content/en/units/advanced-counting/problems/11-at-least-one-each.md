---
order: 11
difficulty: medium
lesson: 02-stars-and-bars
choices: ["30","36","45","66","120"]
answer: B
mistakes:
  A: "That's $10 \\times 3$. The kids' amounts depend on each other, so this doesn't work."
  C: "That's $\\binom{10}{2}$. After handing out 3 cookies, only 7 stars are left, so there are 9 symbols."
  D: "That's $\\binom{12}{2}$, which allows a kid to get 0. Each kid must get at least 1."
  E: "That's $\\binom{10}{3}$. With 3 kids, you need 2 bars, not 3."
verify: "product(range(1, 10), range(1, 10), range(1, 10)).filter((s) => sum(s) === 10).length"
---

In how many ways can 10 identical cookies be shared among 3 kids, if each kid must get at least 1 cookie?

## Hint

Take care of the rule first. What can you do so that "at least 1" no longer matters?

## Hint 2

Give each kid 1 cookie right away. Now share the remaining 7 with no rules.

## Solution

**Step 1.** Give each kid 1 cookie. That leaves 7 cookies to share freely.

**Step 2.** There are 7 stars and 2 bars, so the count is $\binom{9}{2} = 36$.

**Answer: (B) 36**
