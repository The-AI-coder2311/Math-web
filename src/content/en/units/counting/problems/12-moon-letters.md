---
order: 12
difficulty: medium
lesson: 03-overcount-then-divide
choices: ["4","6","12","16","24"]
answer: C
mistakes:
  A: "That's the number of letters. Many arrangements are possible."
  B: "That divides by 4. Only one letter repeats, and 2 copies can swap in 2 ways, so divide by 2."
  D: "That's $4 \\times 4$. Letters get used up as you place them, and the two Os look the same."
  E: "That treats the two Os as different. Swapping them doesn't make a new word."
verify: "new Set(perms([...'MOON']).map((p) => p.join(''))).size"
---

How many different ways can you arrange the letters in the word MOON?

## Hint

How many arrangements would there be if all 4 letters were different? What does swapping the two Os do?

## Hint 2

There would be $4! = 24$. Each real word gets counted twice, since the Os can swap.

## Solution

If all 4 letters were different, there would be $4! = 24$ arrangements. Swapping the two Os doesn't change the word, so each word is counted twice: $24 \div 2 = 12$.

**Answer: (C) 12**
