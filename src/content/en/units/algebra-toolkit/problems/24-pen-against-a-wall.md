---
order: 24
difficulty: hard
lesson: 05-am-gm-inequality
choices: ["400","600","750","800","1600"]
answer: D
mistakes:
  A: "That's a 20 by 20 square, which only uses 60 feet of fence."
  B: "That's a pen with sides of 30, 30, and 20. It uses all of the fence, but a different shape holds more."
  C: "That's a pen with sides of 15, 15, and 50. It's good, but make $2w$ and $l$ equal."
  E: "That's a 40 by 40 square, which needs 120 feet of fence."
verify: "Math.max(...range(1, 39).map((w) => w * (80 - 2 * w)))"
---

A rectangular pen sits against a long wall, so fence is only needed on three sides. There are 80 feet of fence. What is the largest possible area of the pen, in square feet?

## Hint

Call the two sides touching the wall $w$, and the third side $l$. What is fixed?

## Hint 2

$2w + l = 80$ is fixed. So make the two parts, $2w$ and $l$, equal.

## Solution

Since $2w + l = 80$ is fixed, the product of $2w$ and $l$ is largest when they're equal. So $2w = 40$ and $l = 40$, which makes $w = 20$. The area is $20 \times 40 = 800$.

**Answer: (D) 800**
