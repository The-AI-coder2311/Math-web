---
order: 16
difficulty: hard
lesson: 03-overcount-then-divide
choices: ["25","75","150","300","462"]
answer: C
mistakes:
  A: "That's $15 + 10$. Every group of boys can go with every group of girls, so multiply."
  B: "That's half of the right answer. Check the girls: $\\binom{5}{3} = 10$."
  D: "That's $30 \\times 10$, which counts the 2 boys in order. Divide their count by 2."
  E: "That's $\\binom{11}{5}$, any 5 people from the class. The committee needs exactly 2 boys and 3 girls."
verify: "combos(range(1, 6), 2).length * combos(range(1, 5), 3).length"
---

A class has 6 boys and 5 girls. A committee will have 2 boys and 3 girls. How many different committees are possible?

## Hint

Do the boys and the girls separately. Does order matter inside each group?

## Hint 2

Boys: $\binom{6}{2}$. Girls: $\binom{5}{3}$. You choose boys **and** girls.

## Solution

**Step 1.** Choose the boys: $\binom{6}{2} = \frac{6 \times 5}{2} = 15$.

**Step 2.** Choose the girls: $\binom{5}{3} = \frac{5 \times 4 \times 3}{3 \times 2 \times 1} = 10$.

**Step 3.** You do both, so multiply: $15 \times 10 = 150$.

**Answer: (C) 150**
