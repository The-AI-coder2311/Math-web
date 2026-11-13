---
order: 15
difficulty: medium
lesson: 02-ratios-as-boxes
choices: ["8","24","32","40","48"]
answer: D
mistakes:
  A: "Ese es el tamaño de una parte, $64 \\div 8 = 8$. El número mayor tiene 5 de esas partes."
  B: "Ese es el número menor. La pregunta pide el mayor."
  C: "Eso es la mitad de 64, que sería una razón de 1 a 1."
  E: "Eso es $\\frac{3}{4}$ de 64. El número mayor son 5 cajas de 8."
verify: "range(1, 64).find((x) => x * 3 === (64 - x) * 5)"
---

Dos números están en una razón de 3 a 5, y suman 64. ¿Cuál es el número mayor?

## Hint

Dibuja 3 cajas y 5 cajas. ¿Cuánto tiene una caja?

## Hint 2

Hay 8 cajas, así que cada una tiene 8.

## Solution

Hay $3 + 5 = 8$ cajas, así que cada una tiene $64 \div 8 = 8$. El número mayor es $5 \times 8 = 40$.

**Respuesta: (D) 40**
