---
order: 2
difficulty: easy
lesson: 01-if-then-reasoning
choices: ["star and purple","star and green","star only","star, green, and purple"]
answer: A
mistakes:
  B: "A green back can't break the rule, whatever is on its front. Think about which back could."
  C: "The star does need checking, but a purple card might have a star on its front."
  D: "The green card can't break the rule, so flipping it is wasted effort."
verify: "['star', 'moon', 'green', 'purple'].filter((c) => product(['star', 'moon'], ['green', 'purple']).some(([f, b]) => (f === c || b === c) && f === 'star' && b !== 'green')).join(' and ')"
---

Each card has a star or a moon on its front, and a green or purple back. Someone claims, "If a card has a star on the front, it has a green back." You can see four cards: a star, a moon, a green back, and a purple back. Which cards must you flip to test the claim?

## Hint

What would one card that breaks the rule look like?

## Hint 2

A card that breaks the rule has a star on the front and a purple back. Which of the four cards could be that card?

## Solution

The only card that breaks the rule has a star and a purple back. The star might have a purple back, so flip it. The purple back might have a star, so flip it. The moon and the green back can't break the rule.

**Answer: (A) star and purple**
