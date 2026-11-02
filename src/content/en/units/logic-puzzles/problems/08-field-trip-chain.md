---
order: 8
difficulty: medium
lesson: 01-if-then-reasoning
choices: ["1","2","3","4"]
answer: C
mistakes:
  A: "Ida goes for sure, and that sets off a chain. Follow the first rule."
  B: "You have Ida and Jo. The last clue about Kim and Lee adds one more."
  D: "Jo going means that Kim stays home, so not everyone goes."
verify: "product([true, false], [true, false], [true, false], [true, false]).filter(([i, j, k, l]) => i && (!i || j) && (!j || !k) && (k || l)).map((w) => w.filter(Boolean).length).join()"
---

Four friends are deciding who goes on a field trip.

- If Ida goes, Jo goes.
- If Jo goes, Kim stays home.
- Kim or Lee goes, or both do.
- Ida goes.

How many of the four friends go?

## Hint

Start with the one thing you know for sure, and follow the rules in order.

## Hint 2

Ida goes, so Jo goes, so Kim stays home. What does the third clue say now?

## Solution

Ida goes, so Jo goes. Jo goes, so Kim stays home. At least one of Kim and Lee goes, and Kim doesn't, so Lee goes. That's Ida, Jo, and Lee.

**Answer: (C) 3**
