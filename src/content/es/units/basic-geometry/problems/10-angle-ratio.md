---
order: 11
difficulty: medium
lesson: 03-angle-facts
choices: ["40","60","100","90","80"]
answer: E
mistakes:
  A: "Ese es el ángulo menor, que tiene 2 cajas."
  B: "Ese es el ángulo de en medio, que tiene 3 cajas."
  D: "Eso supone un triángulo rectángulo. La razón te da los ángulos directamente."
  C: "Eso son 5 cajas. El ángulo mayor tiene 4 cajas."
verify: "(() => { const unit = range(1, 60).find((u) => 2 * u + 3 * u + 4 * u === 180); return 4 * unit; })()"
---

Los tres ángulos de un triángulo están en la razón 2 a 3 a 4. ¿Cuántos grados mide el ángulo mayor?

## Hint

Esto usa la idea de la unidad de razones. Dibuja 2 cajas, 3 cajas y 4 cajas. ¿Cuántos grados hay que repartir?

## Hint 2

Hay 9 cajas en total que se reparten 180 grados. Así que cada caja tiene 20 grados.

## Solution

**Paso 1.** Hay $2 + 3 + 4 = 9$ cajas iguales, y los ángulos suman 180°.

**Paso 2.** Cada caja tiene $180 \div 9 = 20$ grados.

**Paso 3.** El ángulo mayor tiene 4 cajas: $4 \times 20 = 80$ grados.

**Comprobación:** Los ángulos miden 40°, 60° y 80°, y $40 + 60 + 80 = 180$.

**Respuesta: (E) 80**
