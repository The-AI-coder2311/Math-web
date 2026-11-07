---
order: 2
difficulty: easy
lesson: 01-perimeter-and-area
choices: ["28","14","21","7","49"]
answer: A
mistakes:
  D: "Esa es la longitud de un lado. El perímetro rodea toda la figura."
  B: "Eso son solo 2 lados."
  C: "Eso son solo 3 lados."
  E: "Esa es el área. La pregunta pide el perímetro."
verify: "4 * range(1, 49).find((side) => side * side === 49)"
---

Un patio cuadrado tiene un área de 49 pies cuadrados. ¿Cuál es su perímetro, en pies?

## Hint

¿Qué número multiplicado por sí mismo da 49? Esa es la longitud de un lado.

## Hint 2

Cada lado mide 7 pies. Un cuadrado tiene 4 lados.

## Solution

**Paso 1.** El área de un cuadrado es su lado multiplicado por sí mismo. Como $7 \times 7 = 49$, cada lado mide 7 pies.

**Paso 2.** Un cuadrado tiene 4 lados iguales, así que su perímetro es $4 \times 7 = 28$ pies.

**Respuesta: (A) 28**
