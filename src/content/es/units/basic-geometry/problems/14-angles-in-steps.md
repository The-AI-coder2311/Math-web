---
order: 14
difficulty: medium
lesson: 03-angle-facts
choices: ["50","60","80","70","90"]
answer: D
mistakes:
  A: "Ese es $x$, el ángulo menor. La pregunta pide el mayor."
  B: "Ese es el ángulo de en medio. También es el promedio de los tres."
  C: "Revísalo: $60 + 70 + 80$ da 210, que es demasiado."
  E: "El problema no dice que sea un triángulo rectángulo. Usa la suma de 180°."
verify: "range(1, 100).find((x) => x + (x + 10) + (x + 20) === 180) + 20"
---

Los ángulos de un triángulo miden $x$, $x + 10$ y $x + 20$ grados. ¿Cuántos grados mide el ángulo mayor?

## Hint

Los tres ángulos suman 180°. Escríbelo como una ecuación.

## Hint 2

$3x + 30 = 180$, así que $3x = 150$.

## Solution

Los ángulos suman 180°: $3x + 30 = 180$. Así que $3x = 150$ y $x = 50$. El ángulo mayor mide $50 + 20 = 70$ grados.

**Respuesta: (D) 70**
