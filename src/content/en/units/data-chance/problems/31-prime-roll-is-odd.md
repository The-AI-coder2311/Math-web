---
order: 31
difficulty: easy
lesson: 05-told-something
choices: ["$\\frac{1}{3}$","$\\frac{1}{2}$","$\\frac{3}{5}$","$\\frac{2}{3}$","$\\frac{3}{4}$"]
answer: D
mistakes:
  A: "That's 2 out of all 6 faces. After the clue, only 3 faces are possible, so divide by 3."
  B: "That's the chance of an odd number with no clue. The clue leaves only 2, 3, and 5."
  C: "A die has only 3 prime numbers: 2, 3, and 5. Two of them are odd."
  E: "That counts 1 as a prime. The primes on a die are 2, 3, and 5."
verify: "(() => { const left = range(1, 6).filter(isPrime); return fraction(left.filter((n) => n % 2 === 1).length, left.length); })()"
---

You roll a standard die. A friend looks at it and tells you that the number is prime. What is the probability that the number is odd?

## Hint

Which faces of a die are prime numbers? Those are the only outcomes left.

## Hint 2

The primes on a die are 2, 3, and 5. How many of those 3 numbers are odd?

## Solution

**Step 1.** Use the clue to shrink the list. The prime numbers on a die are 2, 3, and 5, so 3 outcomes are left. They're equally likely.

**Step 2.** Count the ones you want. The odd ones are 3 and 5, which is 2 outcomes.

**Step 3.** Divide by what's left, not by 6:

$$\frac{2}{3}$$

**Answer: (D) $\frac{2}{3}$**
