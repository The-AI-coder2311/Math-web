---
order: 30
difficulty: hard
lesson: 03-repeats
choices: ["20","30","40","50"]
answer: C
mistakes:
  A: "That's the number with the two N's together. Subtract it from the total."
  B: "Check the total. BANANA has 60 arrangements."
  D: "Check the count with the N's together. It's 20, not 10."
verify: "new Set(perms([...'BANANA']).filter((p) => !p.join('').includes('NN')).map((p) => p.join(''))).size"
---

How many arrangements of the letters in BANANA have the two N's apart?

## Hint

Count all of the arrangements. Then subtract the ones with the N's together.

## Hint 2

For the N's together, glue them into one unit. That makes 5 units, with 3 identical A's.

## Solution

BANANA has $\frac{6!}{3! \times 2!} = 60$ arrangements. With the N's glued together, there are 5 units, including 3 identical A's, for $\frac{5!}{3!} = 20$ arrangements. So $60 - 20 = 40$ have the N's apart.

**Answer: (C) 40**
