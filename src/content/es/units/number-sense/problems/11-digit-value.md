---
order: 6
difficulty: easy
lesson: 01-place-value
choices: ["7","70","700","4730","7000"]
answer: C
mistakes:
  A: "Ese es el valor aparente del dígito. Su posición hace que valga más."
  B: "Esa es la posición de las decenas. El 3 está en las decenas, y el 7 está una posición a su izquierda."
  D: "Ese es el número completo. La pregunta es sobre el 7 solo."
  E: "Esa es la posición de los millares, donde está el 4."
verify: "Math.floor(4730 / 100) % 10 * 100"
---

En el número 4,730, ¿cuánto vale el dígito 7?

## Hint

¿En qué posición está el 7?

## Hint 2

De derecha a izquierda, las posiciones son unidades, decenas, centenas y millares.

## Solution

El 7 está en las centenas, así que vale $7 \times 100 = 700$.

**Respuesta: (C) 700**
