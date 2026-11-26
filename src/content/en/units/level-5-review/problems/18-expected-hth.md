---
order: 18
difficulty: hard
from: aime-combinatorics/05-probability-techniques
choices: ["10","12","14","16","18"]
answer: A
mistakes:
  B: "Recheck the state H. Another head keeps you at H, since that head can start the pattern."
  C: "That's the expected wait for HHH. The pattern HTH overlaps with itself in a different way."
  D: "That's 2 to the 4th power. Set up the three states and solve the equations."
  E: "Recheck the state HT. A tail there leaves you with nothing useful, but it costs only one flip."
verify: "(() => { let a = 0, b = 0, c = 0; for (let i = 0; i < 5000; i++) { const na = 1 + 0.5 * b + 0.5 * a, nb = 1 + 0.5 * b + 0.5 * c, nc = 1 + 0.5 * a; a = na; b = nb; c = nc; } return Math.round(a); })()"
---

A fair coin is flipped until heads, tails, heads (HTH) appears in three consecutive flips. What is the expected number of flips?

## Hint

Use states for how much of HTH you've built so far: nothing, H, or HT.

## Hint 2

From HT, a head finishes. A tail leaves the flips ending in TT, which is the empty state. From H, another head keeps you at H.

## Solution

Let $E_0$, $E_1$, and $E_2$ be the expected number of flips still needed from the states nothing, H, and HT. Each flip costs 1:

$$E_0 = 1 + \frac{1}{2}E_1 + \frac{1}{2}E_0$$

$$E_1 = 1 + \frac{1}{2}E_1 + \frac{1}{2}E_2$$

$$E_2 = 1 + \frac{1}{2}E_0$$

The first equation gives $E_0 = 2 + E_1$. The second gives $E_1 = 2 + E_2$, and with the third, $E_1 = 3 + \frac{1}{2}E_0$. Substituting, $E_0 = 5 + \frac{1}{2}E_0$, so $E_0$ is 10.

**Answer: (A) 10**
