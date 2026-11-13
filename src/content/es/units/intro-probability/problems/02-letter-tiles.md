---
order: 2
difficulty: easy
lesson: 01-count-what-you-want
choices: ["$\\frac{1}{11}$","$\\frac{1}{8}$","$\\frac{2}{11}$","$\\frac{2}{9}$","$\\frac{1}{4}$"]
answer: C
mistakes:
  A: "Eso cuenta una sola M. La palabra tiene 2."
  B: "Eso usa 8 como total. Cada ficha es un resultado, y hay 11 fichas."
  D: "La palabra tiene 11 letras, no 9. Vuelve a contarlas."
  E: "Cuenta las fichas y las M: 2 M de 11 fichas."
verify: "fraction([...'MATEMATICAS'].filter((c) => c === 'M').length, 'MATEMATICAS'.length)"
---

Cada letra de la palabra MATEMÁTICAS se escribe en su propia ficha, y las fichas se ponen en una bolsa. Sacas una ficha sin ver. ¿Cuál es la probabilidad de que tenga la letra M?

## Hint

¿Cuántas fichas hay en la bolsa? Cuenta cada letra, incluso las repetidas.

## Hint 2

Hay 11 fichas, y la M aparece dos veces.

## Solution

**Paso 1.** La palabra MATEMÁTICAS tiene 11 letras, así que hay 11 fichas.

**Paso 2.** La letra M aparece 2 veces, así que la probabilidad es $\frac{2}{11}$.

**Respuesta: (C) $\frac{2}{11}$**
