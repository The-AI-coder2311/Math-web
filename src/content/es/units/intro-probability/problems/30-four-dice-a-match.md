---
order: 30
difficulty: hard
lesson: 04-one-minus
choices: ["$\\frac{5}{18}$","$\\frac{1}{2}$","$\\frac{13}{18}$","$\\frac{5}{6}$"]
answer: C
mistakes:
  A: "Esa es la probabilidad de que los cuatro sean diferentes. Réstala de 1."
  B: "Encuentra la probabilidad exacta de que todos sean diferentes y réstala de 1."
  D: "Esa es la probabilidad de que dos dados en particular sean diferentes."
verify: "fraction(product(range(1, 6), range(1, 6), range(1, 6), range(1, 6)).filter((d) => new Set(d).size < 4).length, 1296)"
---

Se lanzan cuatro dados. ¿Cuál es la probabilidad de que al menos dos muestren el mismo número?

## Hint

Encuentra la probabilidad de que los cuatro sean diferentes.

## Hint 2

Eso es $\frac{6 \times 5 \times 4 \times 3}{6^4}$.

## Solution

Los cuatro son diferentes con probabilidad $\frac{6 \times 5 \times 4 \times 3}{1296} = \frac{360}{1296} = \frac{5}{18}$. Así que al menos dos coinciden con probabilidad $1 - \frac{5}{18} = \frac{13}{18}$.

**Respuesta: (C) $\frac{13}{18}$**
