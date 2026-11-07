---
order: 29
difficulty: medium
lesson: 05-angle-bisector
choices: ["1 to 1","4 to 3","2 to 1","3 to 1"]
answer: C
mistakes:
  A: "That would put the incenter at the middle of the bisector. Use the theorem in triangle ABD."
  B: "That compares the sides 8 and 6. Find BD first, and use AB to BD."
  D: "Check BD. The side of 7 splits in a ratio of 3 to 4, so BD is 3."
verify: "6 / ((7 * 6) / (6 + 8)) === 2 ? '2 to 1' : 'not 2 to 1'"
---

In triangle $ABC$, $AB = 6$, $AC = 8$, and $BC = 7$. The bisector from $A$ meets $BC$ at $D$. The bisector from $B$ crosses $AD$ at $I$. What is the ratio of $AI$ to $ID$?

## Hint

First find $BD$, using the bisector from $A$.

## Hint 2

$BD = 3$. Now use the theorem inside triangle $ABD$, with the bisector from $B$.

## Solution

The side $BC = 7$ splits in a ratio of 6 to 8, which is 3 to 4, so $BD = 3$. In triangle $ABD$, the bisector from $B$ gives $\frac{AI}{ID} = \frac{AB}{BD} = \frac{6}{3}$, which is 2 to 1.

**Answer: (C) 2 to 1**
