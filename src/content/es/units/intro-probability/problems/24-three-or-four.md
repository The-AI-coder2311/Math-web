---
order: 24
difficulty: medium
lesson: 01-count-what-you-want
choices: ["$\\frac{9}{20}$","$\\frac{1}{2}$","$\\frac{11}{20}$","$\\frac{3}{5}$"]
answer: B
mistakes:
  A: "Revisa lo que se traslapa. Solo el 12 está en las dos listas."
  C: "Eso cuenta el 12 dos veces. Resta lo que se traslapa."
  D: "Revisa las cuentas: 6 múltiplos de 3 y 5 múltiplos de 4."
verify: "fraction(range(1, 20).filter((n) => n % 3 === 0 || n % 4 === 0).length, 20)"
---

Se elige al azar un número entero del 1 al 20. ¿Cuál es la probabilidad de que sea múltiplo de 3 o múltiplo de 4?

## Hint

Cuenta cada lista, y fíjate en los números que están en las dos.

## Hint 2

Hay 6 múltiplos de 3 y 5 múltiplos de 4. ¿Qué número está en las dos?

## Solution

Hay 6 múltiplos de 3 y 5 múltiplos de 4. Solo el 12 está en las dos. Así que $6 + 5 - 1 = 10$ números cumplen, y la probabilidad es $\frac{10}{20} = \frac{1}{2}$.

**Respuesta: (B) $\frac{1}{2}$**
