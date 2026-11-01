---
order: 19
difficulty: hard
lesson: 02-restrictions
choices: ["2400","2880","7200","14400","40320"]
answer: D
mistakes:
  A: "That's $120 \\times 20$, which chooses 3 gaps without ordering the girls. The girls are different people."
  B: "That's $4! \\times 120$. There are 5 boys, so they line up in $5!$ ways."
  C: "That's $120 \\times 60$, which uses only 5 gaps. There are 6, counting the two ends."
  E: "That's $8!$, every lineup with no rule."
verify: "(() => { const boys = perms([1, 2, 3, 4, 5]).length; return boys * 6 * 5 * 4; })()"
---

Five boys and 3 girls line up. No two girls may stand next to each other. How many lineups are possible?

## Hint

Line up the boys first. How many gaps do they make?

## Hint 2

The boys line up in $5! = 120$ ways, and they make 6 gaps. The girls go in different gaps.

## Solution

**Step 1.** The boys line up in $5! = 120$ ways, which makes 6 gaps.

**Step 2.** The girls take 3 different gaps: $6 \times 5 \times 4 = 120$ ways.

**Step 3.** The total is $120 \times 120 = 14400$.

**Answer: (D) 14400**
