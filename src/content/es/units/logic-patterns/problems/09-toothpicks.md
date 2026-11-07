---
order: 10
difficulty: medium
lesson: 01-repeating-and-growing
choices: ["60","63","61","64","80"]
answer: C
mistakes:
  A: "Eso es $20 \\times 3$. El primer cuadrado necesita un palillo más, porque no tiene vecino."
  B: "Eso es $3 + 20 \\times 3$. Solo 19 cuadrados agregan 3 palillos cada uno."
  D: "Eso es $4 + 20 \\times 3$. Después del primer cuadrado, solo hay 19 más."
  E: "Eso es $20 \\times 4$, que cuenta dos veces los lados compartidos."
verify: "(() => { const n = 20; const edges = new Set(); range(0, n - 1).forEach((x) => { edges.add(`h${x}top`); edges.add(`h${x}bottom`); edges.add(`v${x}`); edges.add(`v${x + 1}`); }); return edges.size; })()"
---

Se usan palillos para construir una fila de cuadrados que comparten lados. Un cuadrado usa 4 palillos, dos cuadrados usan 7 y tres cuadrados usan 10. ¿Cuántos palillos usa una fila de 20 cuadrados?

## Hint

Dibújalo. Cada cuadrado nuevo comparte un lado con el anterior. ¿Cuántos palillos nuevos necesita?

## Hint 2

El primer cuadrado usa 4. Cada uno de los otros 19 cuadrados agrega 3.

## Solution

**Paso 1.** El primer cuadrado usa 4 palillos.

**Paso 2.** Cada cuadrado nuevo comparte un lado con el anterior, así que solo necesita 3 palillos más.

**Paso 3.** Después del primer cuadrado, hay 19 cuadrados más:

$$4 + 19 \times 3 = 61$$

**Respuesta: (C) 61**
