---
order: 20
difficulty: hard
lesson: 04-percents
choices: ["85","95","100","105","120"]
answer: C
mistakes:
  A: "Eso es $90 - 5$, restando la diferencia de los porcentajes. Revisa tu respuesta siguiendo la historia hacia adelante."
  B: "Eso es $90 + 5$, sumando la diferencia de los porcentajes. Los porcentajes se multiplican entre sí."
  D: "Síguelo hacia adelante: 105 sube a 126 y luego baja a 94.5."
  E: "Ese es el número después del aumento y antes del descuento. Regresa un paso más."
verify: "range(1, 300).find((n) => n * 120 * 75 === 90 * 10000)"
---

Un número aumenta un 20%. Luego el resultado disminuye un 25%, y la respuesta final es 90. ¿Cuál era el número original?

## Hint

Subir 20% significa multiplicar por 1.2. Bajar 25% significa multiplicar por 0.75.

## Hint 2

Juntos multiplican por $1.2 \times 0.75 = 0.9$. Así que 90 es 0.9 del original.

## Solution

Los pasos multiplican el número por $1.2 \times 0.75 = 0.9$. Así que $0.9$ del original es 90, lo que significa que el original es 100.

**Comprobación:** 100 sube a 120 y luego baja un 25% a 90.

**Respuesta: (C) 100**
