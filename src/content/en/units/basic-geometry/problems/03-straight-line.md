---
order: 3
difficulty: easy
lesson: 03-angle-facts
choices: ["35","125","65","55","235"]
answer: D
mistakes:
  A: "That's $160 - 125$. A straight line is 180°."
  C: "Check your subtraction: $180 - 125$."
  B: "That's the angle you were given. The two angles aren't equal."
  E: "That's $360 - 125$. A full turn is 360°, but a straight line is half of that."
verify: "range(1, 179).find((x) => x + 125 === 180)"
---

Two angles sit side by side and make a straight line. One of them measures 125°. How many degrees does the other angle measure?

## Hint

How many degrees are in a straight line?

## Hint 2

A straight line is 180°. Subtract 125 from that.

## Solution

Angles that make a straight line add up to 180°, so the other angle is $180 - 125 = 55$ degrees.

**Answer: (D) 55**
