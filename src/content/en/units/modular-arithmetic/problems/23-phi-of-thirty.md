---
order: 23
difficulty: medium
lesson: 05-fermat-and-euler
choices: ["8","10","15","16","29"]
answer: A
mistakes:
  B: "That's $30 \\times \\frac{1}{3}$. Use all three primes: 2, 3, and 5."
  C: "That only removes the even numbers. Numbers such as 3 and 5 share a factor with 30 too."
  D: "You used only two of the primes. Include all of 2, 3, and 5."
  E: "That would be true if 30 were prime. It isn't."
verify: "range(1, 30).filter((k) => gcd(k, 30) === 1).length"
---

How many whole numbers from 1 to 30 share no factor greater than 1 with 30?

## Hint

The primes that divide 30 are 2, 3, and 5.

## Hint 2

Start with 30, and multiply by $\frac{1}{2}$, $\frac{2}{3}$, and $\frac{4}{5}$.

## Solution

This count is $\varphi(30)$. The primes are 2, 3, and 5, so $\varphi(30) = 30 \times \frac{1}{2} \times \frac{2}{3} \times \frac{4}{5} = 8$. The numbers are 1, 7, 11, 13, 17, 19, 23, and 29.

**Answer: (A) 8**
