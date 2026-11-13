---
order: 12
difficulty: medium
from: basic-geometry/03-angle-facts
choices: ["50","60","70","120","180"]
answer: B
mistakes:
  A: "Eso es $85 - 35$. Los tres ángulos suman 180°."
  C: "Revísalo: $35 + 85 + 70$ da 190."
  D: "Eso es $35 + 85$. Réstalo de 180."
  E: "Eso es lo que suman los tres."
verify: "range(1, 179).find((x) => x + 35 + 85 === 180)"
---

Dos ángulos de un triángulo miden 35° y 85°. ¿Cuántos grados mide el tercer ángulo?

## Hint

¿Cuánto suman los tres ángulos?

## Hint 2

Suman 180°.

## Solution

El tercer ángulo mide $180 - 35 - 85 = 60$ grados.

**Respuesta: (B) 60**
