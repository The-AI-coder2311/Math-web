---
order: 29
difficulty: hard
lesson: 05-nt-constructions
choices: ["71","171","271","371","471"]
answer: E
mistakes:
  A: "$71^3$ ends in 911. Keep going to the hundreds digit."
  B: "$171^3$ ends in 211. You need $3b$ to end in 2."
  C: "$271^3$ ends in 511. Check the hundreds digit with $300b + 911$."
  D: "$371^3$ ends in 811. You need $3b$ to end in 2."
verify: "range(1, 1000).find((x) => (x * x * x) % 1000 === 111)"
---

What is the smallest positive integer whose cube ends in the digits 111?

## Hint

Work one digit at a time. A cube ending in 1 needs a number ending in 1.

## Hint 2

Write $x = 10a + 1$. Then $x^3$ ends in $30a + 1$ mod 100, so $a$ ends in 7.

## Solution

A cube ends in 1 only when the number ends in 1, so write $x = 10a + 1$. Then $x^3 \equiv 30a + 1 \pmod{100}$, and we need it to end in 11. So $3a$ ends in 1, which forces $a \equiv 7 \pmod{10}$.

Now write $x = 100b + 71$. Since $71^3 = 357911$, we get $x^3 \equiv 300b + 911 \pmod{1000}$, and we need it to end in 111. So $3b$ ends in 2, which gives $b = 4$ and $x = 471$.

**Answer: (E) 471**
