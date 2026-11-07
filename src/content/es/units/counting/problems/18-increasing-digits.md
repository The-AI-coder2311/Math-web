---
order: 18
difficulty: hard
lesson: 03-overcount-then-divide
choices: ["56","84","120","504","720"]
answer: B
mistakes:
  A: "Eso es $\\binom{8}{3}$. Los dígitos del 1 al 9 son 9 dígitos, no 8."
  C: "Eso es $\\binom{10}{3}$, que incluye el 0. Un 0 tendría que ir primero, y entonces no sería un número de 3 dígitos."
  D: "Eso es $9 \\times 8 \\times 7$, que cuenta todos los órdenes. Solo un orden de 3 dígitos es creciente."
  E: "Eso es $10 \\times 9 \\times 8$, que cuenta todos los órdenes y además incluye el 0."
verify: "range(100, 999).filter((n) => { const [a, b, c] = digits(n); return a < b && b < c; }).length"
---

¿Cuántos números de 3 dígitos tienen dígitos que van aumentando de izquierda a derecha, como 247?

## Hint

¿Puede aparecer el dígito 0? Una vez que elegiste 3 dígitos diferentes, ¿de cuántas formas puedes ponerlos en orden creciente?

## Hint 2

El 0 no puede aparecer, porque tendría que ir primero. Solo hay un orden creciente, así que solo necesitas elegir 3 de los dígitos del 1 al 9.

## Solution

**Paso 1.** El 0 no puede aparecer, porque tendría que ser el primer dígito.

**Paso 2.** Cualesquiera 3 dígitos diferentes del 1 al 9 se pueden poner en orden creciente de exactamente 1 forma. Así que la cuenta es $\binom{9}{3} = \frac{9 \times 8 \times 7}{3 \times 2 \times 1} = 84$.

**Respuesta: (B) 84**
