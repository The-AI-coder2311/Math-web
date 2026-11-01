---
order: 13
difficulty: medium
lesson: 04-count-the-opposite
choices: ["27","75","98","100","125"]
answer: C
mistakes:
  A: "That's the number of codes with **no** vowels. Subtract it from the total."
  B: "That's $3 \\times 5 \\times 5$, which only makes sure that one spot is not a vowel. Count the codes with no vowels at all."
  D: "That's $125 - 25$. Codes with no vowels have 3 options per spot, so there are 27 of them."
  E: "That's all of the codes, including those with no vowels."
verify: "product([...'ABCDE'], [...'ABCDE'], [...'ABCDE']).filter((c) => c.includes('A') || c.includes('E')).length"
---

A 3-letter code uses only the letters A, B, C, D, and E, and letters can repeat. How many codes contain at least one vowel? (Here, A and E are the vowels.)

## Hint

"At least one" is a clue. What's the opposite?

## Hint 2

The opposite is "no vowels," which uses only B, C, and D. That's $3 \times 3 \times 3$ codes.

## Solution

There are $5 \times 5 \times 5 = 125$ codes in all. Codes with no vowels use only B, C, and D: $3 \times 3 \times 3 = 27$. So $125 - 27 = 98$ have at least one vowel.

**Answer: (C) 98**
