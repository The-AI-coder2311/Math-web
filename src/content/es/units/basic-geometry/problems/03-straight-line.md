---
order: 3
difficulty: easy
lesson: 03-angle-facts
choices: ["35","125","65","55","235"]
answer: D
mistakes:
  A: "Eso es $160 - 125$. Una línea recta mide 180°."
  C: "Revisa tu resta: $180 - 125$."
  B: "Ese es el ángulo que te dieron. Los dos ángulos no son iguales."
  E: "Eso es $360 - 125$. Una vuelta completa es 360°, pero una línea recta es la mitad."
verify: "range(1, 179).find((x) => x + 125 === 180)"
---

Dos ángulos están uno junto al otro y forman una línea recta. Uno de ellos mide 125°. ¿Cuántos grados mide el otro ángulo?

## Hint

¿Cuántos grados tiene una línea recta?

## Hint 2

Una línea recta mide 180°. Réstale 125.

## Solution

Los ángulos que forman una línea recta suman 180°, así que el otro ángulo mide $180 - 125 = 55$ grados.

**Respuesta: (D) 55**
