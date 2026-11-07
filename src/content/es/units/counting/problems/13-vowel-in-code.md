---
order: 13
difficulty: medium
lesson: 04-count-the-opposite
choices: ["27","75","98","100","125"]
answer: C
mistakes:
  A: "Esa es la cantidad de códigos **sin** vocales. Réstala del total."
  B: "Eso es $3 \\times 5 \\times 5$, que solo asegura que un lugar no sea vocal. Cuenta los códigos que no tienen ninguna vocal."
  D: "Eso es $125 - 25$. Los códigos sin vocales tienen 3 opciones por lugar, así que hay 27."
  E: "Eso son todos los códigos, incluidos los que no tienen vocales."
verify: "product([...'ABCDE'], [...'ABCDE'], [...'ABCDE']).filter((c) => c.includes('A') || c.includes('E')).length"
---

Un código de 3 letras usa solo las letras A, B, C, D y E, y las letras se pueden repetir. ¿Cuántos códigos tienen al menos una vocal? (Aquí, las vocales son A y E.)

## Hint

"Al menos una" es una pista. ¿Qué es lo contrario?

## Hint 2

Lo contrario es "ninguna vocal", que solo usa B, C y D. Son $3 \times 3 \times 3$ códigos.

## Solution

Hay $5 \times 5 \times 5 = 125$ códigos en total. Los códigos sin vocales solo usan B, C y D: $3 \times 3 \times 3 = 27$. Así que $125 - 27 = 98$ tienen al menos una vocal.

**Respuesta: (C) 98**
