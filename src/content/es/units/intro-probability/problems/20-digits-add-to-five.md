---
order: 20
difficulty: hard
lesson: 01-count-what-you-want
choices: ["$\\frac{2}{45}$","$\\frac{1}{20}$","$\\frac{5}{99}$","$\\frac{1}{18}$","$\\frac{1}{10}$"]
answer: D
mistakes:
  A: "Eso es $\\frac{4}{90}$, que deja fuera el número 50. Sus dígitos son 5 y 0, y suman 5."
  B: "Eso usa 100 como total. Hay 90 números de dos dígitos, del 10 al 99."
  C: "Eso usa 99 como total. Los números del 1 al 9 no son de 2 dígitos."
  E: "Eso es 9 de 90. Solo funcionan 5 números."
verify: "fraction(range(10, 99).filter((n) => sum(digits(n)) === 5).length, 90)"
---

Se elige al azar un número de 2 dígitos. ¿Cuál es la probabilidad de que sus dígitos sumen 5?

## Hint

¿Cuántos números de 2 dígitos hay? Cuidado: no empiezan en 1.

## Hint 2

Hay 90. Haz la lista de los que tienen dígitos que suman 5: 14, 23, ...

## Solution

Hay 90 números de dos dígitos. Los que queremos son 14, 23, 32, 41 y 50. Son 5 números, así que la probabilidad es $\frac{5}{90} = \frac{1}{18}$.

**Respuesta: (D) $\frac{1}{18}$**
