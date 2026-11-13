---
order: 33
difficulty: medium
lesson: 05-told-something
choices: ["$\\frac{9}{40}$","$\\frac{3}{8}$","$\\frac{9}{20}$","$\\frac{1}{2}$","$\\frac{3}{5}$"]
answer: C
mistakes:
  A: "That divides by all 40 students. You're told that the student brings lunch, so only those 20 students are possible."
  B: "That's $\\frac{9}{24}$, the chance that a walker brings lunch. The clue is about students who bring lunch, so that group goes on the bottom."
  D: "That's the chance that a student brings lunch. The question asks about walkers among those students."
  E: "That's the chance that a student walks, with no clue. Use only the students who bring lunch."
verify: "fraction(9, 9 + 11)"
---

A teacher asks 40 students how they get to school and whether they bring lunch.

| | Brings lunch | Buys lunch |
|---|---|---|
| **Walks** | 9 | 15 |
| **Rides the bus** | 11 | 5 |

One of the 40 students is picked at random, and you're told that this student brings lunch. What is the probability that the student walks to school?

## Hint

The clue tells you which column the student is in. How many students are in that column?

## Hint 2

The "Brings lunch" column has $9 + 11 = 20$ students. How many of them walk?

## Solution

**Step 1.** Use the clue to shrink the list. The student brings lunch, so only the first column is possible. It has $9 + 11 = 20$ students.

**Step 2.** Count the ones you want. Of those 20 students, 9 walk to school.

**Step 3.** Divide by what's left:

$$\frac{9}{20}$$

**Answer: (C) $\frac{9}{20}$**
