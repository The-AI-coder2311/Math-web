---
order: 11
difficulty: medium
lesson: 02-stars-and-bars
choices: ["36","45","55","66","120"]
answer: A
mistakes:
  B: "That's $\\binom{10}{2}$. After handing out 3 cookies, only 7 stars are left, so there are 9 symbols."
  C: "That's the count for sharing 9 cookies with no rule. Giving each kid 1 cookie first leaves 7 cookies to share, not 9."
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

**Answer: (A) 36**
