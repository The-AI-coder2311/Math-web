---
order: 19
difficulty: hard
lesson: 03-angle-facts
choices: ["40","100","80","50","130"]
answer: D
mistakes:
  A: "Eso parte a la mitad el ángulo de arriba. Los ángulos de abajo se reparten lo que queda después del ángulo de arriba."
  C: "Ese es el ángulo interior de arriba. Cada ángulo de abajo es más pequeño."
  B: "Ese es el ángulo exterior, y también lo que se reparten los ángulos de abajo. A cada uno le toca la mitad."
  E: "Ese es un ángulo exterior de abajo, no uno interior."
verify: "range(1, 90).find((b) => b + b + (180 - 100) === 180)"
---

En un triángulo isósceles, los dos ángulos iguales están abajo. Un lado de la esquina de arriba se extiende más allá de la esquina, lo que forma un ángulo exterior de 100° arriba. ¿Cuántos grados mide cada ángulo de abajo?

## Hint

El ángulo exterior y el ángulo interior de arriba forman una línea recta.

## Hint 2

El ángulo interior de arriba mide $180 - 100 = 80$ grados. Los otros dos se reparten lo que queda.

## Solution

**Paso 1.** El ángulo interior de arriba mide $180 - 100 = 80$ grados.

**Paso 2.** Los ángulos de abajo se reparten $180 - 80 = 100$ grados, así que cada uno mide $100 \div 2 = 50$ grados.

**Respuesta: (D) 50**
