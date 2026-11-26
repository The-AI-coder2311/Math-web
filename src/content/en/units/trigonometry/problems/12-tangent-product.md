---
order: 12
difficulty: hard
lesson: 02-trig-identities
choices: ["11","22","23","44","45"]
answer: B
mistakes:
  A: "That counts only half the pairs. Each pair contributes one factor of 2."
  C: "That includes the term $1 + \\tan 45^\\circ = 2$, but the product stops at $44^\\circ$."
  D: "That's one factor of 2 per term. The terms pair up, and each pair gives one factor of 2."
  E: "The product has 44 terms, and they pair into 22 pairs."
verify: "Math.round(Math.log2(range(1,44).reduce((p,k) => p*(1+Math.tan(k*Math.PI/180)), 1)))"
---

The product $(1 + \tan 1^\circ)(1 + \tan 2^\circ)(1 + \tan 3^\circ)\cdots(1 + \tan 44^\circ)$ equals $2^n$. What is $n$?

## Hint

Look at two angles that add up to $45^\circ$.

## Hint 2

If $A + B = 45^\circ$, then $\tan(A + B) = 1$. Rearrange the addition formula.

## Solution

**Step 1.** If $A + B = 45^\circ$, then $\frac{\tan A + \tan B}{1 - \tan A\tan B} = 1$, so $\tan A + \tan B + \tan A\tan B = 1$.

**Step 2.** Adding 1 to both sides gives $(1 + \tan A)(1 + \tan B) = 2$.

**Step 3.** The 44 factors pair as $1^\circ$ with $44^\circ$, $2^\circ$ with $43^\circ$, and so on, making 22 pairs that each multiply to 2. The product is $2^{22}$.

**Answer: (B) 22**
