---
order: 23
difficulty: easy
lesson: 03-overcount-then-divide
choices: ["14","21","42","49"]
answer: B
mistakes:
  A: "Eso es 7 por 2. Cada persona le da la mano a otras 6."
  C: "Eso cuenta cada apretón dos veces. Un apretón de manos es entre dos personas."
  D: "Eso es 7 por 7, como si cada persona se diera la mano a sí misma."
verify: "combos(range(1, 7), 2).length"
---

Siete personas se reúnen, y cada pareja se da la mano una vez. ¿Cuántos apretones de manos hay?

## Hint

Cada persona da 6 apretones. ¿Qué pasa si multiplicas 7 por 6?

## Hint 2

Al multiplicar, cada apretón se cuenta dos veces, así que divide entre 2.

## Solution

Cada una de las 7 personas da 6 apretones, lo que da $7 \times 6 = 42$. Eso cuenta cada apretón dos veces, así que hay $42 \div 2 = 21$ apretones.

**Respuesta: (B) 21**
