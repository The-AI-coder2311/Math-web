---
order: 10
difficulty: medium
lesson: 02-distance-midpoints-circles
choices: ["8","10","12","14","18"]
answer: B
mistakes:
  A: "That's the upright leg. You still need to add the center's height of 2."
  C: "That's $2 + 10$, which goes straight up by the radius. But the point is also 6 across, so the upright leg is shorter."
  D: "That's $2 + 12$. Check the upright leg: $6^2 + 8^2 = 10^2$."
  E: "You may have added 16 to 2. Take the square root: the upright leg squared is 64, so the leg is 8."
verify: "range(3, 50).find((k) => (7 - 1) ** 2 + (k - 2) ** 2 === 100)"
---

The point $(7, k)$ lies on a circle with center $(1, 2)$ and a radius of 10, and $k$ is greater than 2. What is $k$?

## Hint

The distance from the center has to be 10. How long is the level leg?

## Hint 2

The level leg is 6, so the upright leg must be 8, by the 6-8-10 triple. Where does 8 up from the center land?

## Solution

**Step 1.** The level leg is $7 - 1 = 6$, and the distance is 10, so the upright leg is 8.

**Step 2.** Going 8 up from the center's height of 2 gives $k = 10$.

**Answer: (B) 10**
