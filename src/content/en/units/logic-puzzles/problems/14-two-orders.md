---
order: 14
difficulty: medium
lesson: 03-ordering-and-seating
choices: ["15","20","30","60","120"]
answer: C
mistakes:
  A: "That divides by too much. Each clue cuts the count in half, and there are 2 clues."
  B: "That's what you'd get if A, B, and C had one fixed order. Here, there are two separate pairs."
  D: "That only uses one of the two clues. Each clue cuts the count in half."
  E: "That's the count with no clues at all."
verify: "perms(['A', 'B', 'C', 'D', 'E']).filter((o) => o.indexOf('A') < o.indexOf('B') && o.indexOf('C') < o.indexOf('D')).length"
---

Five runners, A, B, C, D, and E, finish a race with no ties. A finishes before B, and C finishes before D. How many finishing orders are possible?

## Hint

Without clues, there are $5! = 120$ orders. What fraction of those have A before B?

## Hint 2

Half of the orders have A before B. Of those, what fraction have C before D?

## Solution

There are 120 orders with no clues. In half of them, A is before B, which leaves 60. In half of those, C is before D, which leaves 30.

**Answer: (C) 30**
