---
order: 5
difficulty: easy
lesson: 03-angle-facts
choices: ["50","65","75","130","150"]
answer: B
mistakes:
  A: "Ese es el ángulo de arriba. Los tres no son iguales, porque el triángulo no es equilátero."
  C: "Revísalo: $75 + 75 + 50$ es 200, que es demasiado."
  D: "Eso es lo que se reparten los dos ángulos de abajo. Divídelo entre ellos."
  E: "Eso es más de lo que un triángulo puede tener junto con los otros ángulos."
verify: "range(1, 179).find((x) => x + x + 50 === 180)"
---

En un triángulo isósceles, los dos ángulos iguales están abajo, y el ángulo de arriba mide 50°. ¿Cuántos grados mide cada ángulo de abajo?

## Hint

Los tres ángulos suman 180°. ¿Cuántos grados quedan para que se repartan los dos ángulos iguales?

## Hint 2

Los ángulos de abajo se reparten $180 - 50 = 130$ grados en partes iguales.

## Solution

**Paso 1.** Los tres ángulos suman 180°, así que los dos de abajo se reparten $180 - 50 = 130$ grados.

**Paso 2.** Son iguales, así que cada uno mide $130 \div 2 = 65$ grados.

**Comprobación:** $65 + 65 + 50 = 180$.

**Respuesta: (B) 65**
