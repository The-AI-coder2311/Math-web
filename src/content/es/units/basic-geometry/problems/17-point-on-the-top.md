---
order: 17
difficulty: hard
lesson: 02-triangle-area
choices: ["36","48","72","96","144"]
answer: C
mistakes:
  A: "Ese es solo un triángulo lateral, si $P$ está a la mitad. La pregunta pide los dos juntos."
  B: "Eso es $\\frac{1}{3}$ del cuadrado. Los tres triángulos en general no son iguales."
  D: "Eso es $\\frac{2}{3}$ del cuadrado. El triángulo del medio es exactamente la mitad del cuadrado, así que el resto es la otra mitad."
  E: "Ese es todo el cuadrado, que incluye el triángulo del medio."
verify: "(() => { const middle = (x) => Math.abs(12 * 12 - x * 0) / 2; const left = range(0, 12).map((x) => 144 - middle(x)); return new Set(left).size === 1 ? left[0] : -1; })()"
---

Un cuadrado tiene lados de 12. El punto $P$ está en cualquier lugar del lado de arriba, entre las dos esquinas de arriba. Las líneas de $P$ a las dos esquinas de abajo cortan el cuadrado en 3 triángulos. ¿Cuál es el área total de los dos triángulos laterales?

## Hint

Empieza con el triángulo del medio. ¿Cuáles son su base y su altura?

## Hint 2

Su base es el lado de abajo, 12, y su altura es toda la altura del cuadrado, 12. Así que su área es la mitad del cuadrado, sin importar dónde esté $P$.

## Solution

El triángulo del medio tiene base 12 y altura 12, así que su área es $\frac{1}{2} \times 12 \times 12 = 72$. El área del cuadrado es 144, así que los dos triángulos laterales juntos tienen $144 - 72 = 72$.

**Respuesta: (C) 72**
