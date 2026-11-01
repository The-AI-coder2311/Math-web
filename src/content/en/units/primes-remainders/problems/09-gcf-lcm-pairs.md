---
order: 16
difficulty: hard
lesson: 03-gcf-and-lcm
choices: ["1","2","3","4","6"]
answer: B
mistakes:
  A: "That misses one. The pairs for $x$ and $y$ are 1 and 12, and 3 and 4."
  C: "That includes 2 and 6, which share a factor of 2. The GCF would be 12."
  D: "Only pairs with $x$ and $y$ sharing no factors count."
  E: "That's the GCF. The question asks how many pairs there are."
verify: "product(range(1, 72), range(1, 72)).filter(([a, b]) => a < b && gcd(a, b) === 6 && lcm(a, b) === 72).length"
---

Two whole numbers $a$ and $b$, with $a$ smaller than $b$, have a GCF of 6 and an LCM of 72. How many such pairs are there?

## Hint

Both numbers are multiples of 6, so write $a = 6x$ and $b = 6y$. If $x$ and $y$ shared a factor, the GCF would be bigger than 6.

## Hint 2

With $a = 6x$ and $b = 6y$, you get $x \times y = 12$. The two can't share a factor.

## Solution

**Step 1.** Since the GCF is 6, write $a = 6x$ and $b = 6y$. The numbers $x$ and $y$ can't share any factor other than 1, or the GCF would be larger.

**Step 2.** GCF times LCM equals the product of the numbers: $6 \times 72 = 432$. So $6x \times 6y = 432$, which means $x \times y = 12$.

**Step 3.** List the factor pairs of 12: 1 and 12, 2 and 6, and 3 and 4. The pair 2 and 6 shares a factor of 2, so it's out.

**Step 4.** That leaves two pairs: $(6, 72)$ and $(18, 24)$.

**Answer: (B) 2**
