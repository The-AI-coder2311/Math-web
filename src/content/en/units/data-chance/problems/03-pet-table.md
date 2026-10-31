---
order: 3
difficulty: easy
choices: [1, 1.2, 1.5, 2, 6]
answer: B
verify: "(() => { const counts = [5, 8, 5, 2]; return sum(counts.map((students, pets) => students * pets)) / sum(counts); })()"
---

The table shows how many siblings each student in a class has.

| Number of siblings | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| Number of students | 5 | 8 | 5 | 2 |

What is the mean number of siblings per student?

## Hint

The 5 under "2" means that 5 students have 2 siblings each. Find the total number of siblings, and the total number of students.

## Solution

**Step 1.** The number of students is $5 + 8 + 5 + 2 = 20$.

**Step 2.** The total number of siblings is $0 \times 5 + 1 \times 8 + 2 \times 5 + 3 \times 2 = 24$.

**Step 3.** The mean is $24 \div 20 = 1.2$.

**Answer: (B) 1.2**
