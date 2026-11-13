---
order: 16
difficulty: hard
lesson: 03-distance-rate-time
choices: ["1","1.5","2","2.5","3"]
answer: B
mistakes:
  A: "After 1 hour, Mia has gone 50 miles and John 60 miles. She hasn't caught up."
  C: "After 2 hours, Mia has gone 100 miles and John 90 miles. She's already passed him."
  D: "That's John's riding time. The question asks for the time after Mia leaves."
  E: "After 3 hours, Mia is far ahead. Set the two distances equal."
verify: "range(1, 100).map((n) => n / 10).find((t) => 30 * (t + 1) === 50 * t)"
---

John leaves home on a bike and rides at 30 miles per hour. One hour later, Mia leaves from the same place on the same road and rides at 50 miles per hour. How many hours after **Mia leaves** does she catch up to John?

## Hint

When Mia catches up, they've gone the same distance. If Mia has been riding for $t$ hours, how long has John been riding?

## Hint 2

Their distances are equal: $50t = 30(t + 1)$.

## Solution

**Step 1.** Let $t$ be Mia's riding time. John left 1 hour earlier, so his riding time is $t + 1$.

**Step 2.** When she catches up, their distances are equal:

$$50t = 30(t + 1)$$

**Step 3.** Multiplying out gives $50t = 30t + 30$. Subtract $30t$ to get $20t = 30$, so $t$ is $30 \div 20 = 1.5$ hours.

**Check:** Mia goes $50 \times 1.5 = 75$ miles, and John goes $30 \times 2.5 = 75$ miles.

**Answer: (B) 1.5**
