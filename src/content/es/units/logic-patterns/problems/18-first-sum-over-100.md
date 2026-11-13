---
order: 18
difficulty: hard
lesson: 02-small-cases
choices: ["10","11","12","13","14"]
answer: E
mistakes:
  A: "La suma hasta 10 es solo 55."
  B: "La suma del 1 al 11 es 66, que todavía no pasa de 100."
  C: "La suma del 1 al 12 es 78, que todavía no pasa de 100."
  D: "La suma hasta 13 es 91, que no es mayor que 100."
verify: "range(1, 100).find((n) => sum(range(1, n)) > 100)"
---

¿Cuál es el menor número entero $n$ para el que $1 + 2 + 3 + \cdots + n$ es mayor que 100?

## Hint

La suma es $\frac{n(n + 1)}{2}$. Prueba algunos valores. ¿Alcanza con $n = 10$?

## Hint 2

Con $n = 13$, la suma es 91. Con $n = 14$, es 105.

## Solution

La suma es $\frac{n(n + 1)}{2}$. Con $n = 13$, es $\frac{13 \times 14}{2} = 91$, que no alcanza. Con $n = 14$, es $\frac{14 \times 15}{2} = 105$, que es mayor que 100.

**Respuesta: (E) 14**
