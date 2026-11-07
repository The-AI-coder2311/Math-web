---
order: 25
difficulty: medium
lesson: 02-ratios-as-boxes
choices: ["12","16","20","24"]
answer: C
mistakes:
  A: "That's the number of boys. The question asks for the whole class."
  B: "Check it: 16 doesn't split into 5 equal boxes."
  D: "Check it: a class of 24 doesn't split into 5 equal boxes."
verify: "range(1, 100).find((n) => n % 5 === 0 && (n * 3) / 5 - (n * 2) / 5 === 4)"
---

A class has boys and girls in a ratio of 3 to 2, and there are 4 more boys than girls. How many students are in the class?

## Hint

How many more boxes do the boys have than the girls?

## Hint 2

One extra box holds 4 students.

## Solution

The boys have 1 more box than the girls, so 1 box holds 4 students. There are 5 boxes in all, so there are $5 \times 4 = 20$ students.

**Answer: (C) 20**
