---
order: 29
difficulty: hard
lesson: 04-percents
choices: ["5","6","10","12"]
answer: C
mistakes:
  A: "Test it: 11 liters of juice in 35 liters is less than 40%."
  B: "That's the juice already in the drink."
  D: "Test it: 18 liters of juice in 42 liters is more than 40%."
verify: "range(1, 100).find((x) => (6 + x) * 5 === (30 + x) * 2)"
---

A 30-liter drink is 20% juice and 80% water. How many liters of pure juice do you need to add to make it 40% juice?

## Hint

Adding juice doesn't change the water. How much water is there?

## Hint 2

There are 24 liters of water, and that will be 60% of the new drink.

## Solution

There are 24 liters of water, and that stays the same. In the new drink, water is 60%, so the new total is $24 \div 0.6 = 40$ liters. So you add $40 - 30 = 10$ liters of juice.

**Answer: (C) 10**
