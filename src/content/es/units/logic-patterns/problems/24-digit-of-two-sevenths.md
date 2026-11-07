---
order: 24
difficulty: medium
lesson: 01-repeating-and-growing
choices: ["2","5","7","8"]
answer: D
mistakes:
  A: "Ese es el 1.er dígito del ciclo. Divide 50 entre 6 y usa el residuo."
  B: "Ese es el 3.er dígito del ciclo. Revisa el residuo de dividir 50 entre 6."
  C: "Ese es el 4.º dígito del ciclo. Revisa el residuo de dividir 50 entre 6."
verify: "Number('285714'[(50 - 1) % 6])"
---

Como decimal, $\frac{2}{7}$ es 0.285714285714..., con los dígitos 285714 repitiéndose. ¿Cuál es el dígito 50 después del punto decimal?

## Hint

El ciclo tiene 6 dígitos. ¿Cuál es el residuo al dividir 50 entre 6?

## Hint 2

$50 = 6 \times 8 + 2$.

## Solution

Como $50 = 6 \times 8 + 2$, el dígito 50 es el 2.º dígito del ciclo, que es 8.

**Respuesta: (D) 8**
