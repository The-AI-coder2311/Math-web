---
order: 26
difficulty: medium
lesson: 03-angle-facts
choices: ["0","15","30","45"]
answer: B
mistakes:
  A: "It looks as if both hands point at the 6. But at 6:30, the hour hand has moved past the 6."
  C: "That's the gap between two hour marks. The hour hand has moved only halfway."
  D: "Check how far the hour hand moves in 30 minutes. It moves half a degree per minute."
verify: "Math.abs(30 * 6 + 0.5 * 30 - 6 * 30)"
---

How many degrees are between the hands of a clock at 6:30?

## Hint

The minute hand points at the 6. Where is the hour hand?

## Hint 2

The hour hand is halfway from the 6 to the 7.

## Solution

The minute hand points straight at the 6. The hour hand is halfway from the 6 to the 7. Those marks are $30^\circ$ apart, so the angle is 15 degrees.

**Answer: (B) 15**
