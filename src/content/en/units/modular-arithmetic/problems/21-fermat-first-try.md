---
order: 21
difficulty: easy
lesson: 05-fermat-and-euler
choices: ["0","1","3","12","13"]
answer: B
mistakes:
  A: "A remainder of 0 means that 13 divides $3^{12}$. But 13 is prime, and it doesn't divide 3."
  C: "That would be $3^{13}$ mod 13. The exponent here is $13 - 1$."
  D: "Twelve is the exponent, and that's a clue. What does Fermat's theorem say about it?"
  E: "A remainder when dividing by 13 has to be less than 13."
verify: "Number(3n ** 12n % 13n)"
---

What is the remainder when $3^{12}$ is divided by 13?

## Hint

13 is prime. How does the exponent compare with 13?

## Hint 2

Use Fermat's Little Theorem with $p = 13$.

## Solution

Since 13 is prime and doesn't divide 3, Fermat's Little Theorem says that $3^{12} \equiv 1 \pmod{13}$.

**Answer: (B) 1**
