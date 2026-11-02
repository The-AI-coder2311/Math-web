---
order: 7
difficulty: medium
lesson: 01-if-then-reasoning
choices: ["Zed is a blip.","Zed is not a blip.","Every zorp is a blip.","No blip is a zorp."]
answer: B
mistakes:
  A: "If Zed were a blip, Zed would have to be a zorp. But Zed isn't one."
  C: "That flips the first statement, and a flipped statement doesn't have to be true."
  D: "The first statement says that every blip is a zorp, which is the opposite of this."
verify: "product([true, false], [true, false]).filter(([b, z]) => (!b || z) && !z).every(([b]) => !b) ? 'Zed is not a blip.' : 'Not forced'"
---

All blips are zorps. Zed is not a zorp. What must be true?

## Hint

Rewrite the first statement as "If it's a blip, then it's a zorp."

## Hint 2

Flip and negate that rule. What does it say about something that isn't a zorp?

## Solution

The rule says, "If it's a blip, it's a zorp." Flipped and negated, it says, "If it's not a zorp, it's not a blip." Zed isn't a zorp, so Zed isn't a blip.

**Answer: (B) Zed is not a blip.**
