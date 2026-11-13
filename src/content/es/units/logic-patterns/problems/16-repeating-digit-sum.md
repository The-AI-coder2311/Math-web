---
order: 16
difficulty: hard
lesson: 01-repeating-and-growing
choices: ["120","124","125","128","250"]
answer: B
mistakes:
  A: "Esos son los 12 ciclos completos. También hay 2 dígitos extra."
  C: "Eso es $12.5 \\times 10$, como si lo que sobra fuera medio ciclo. Suma los dígitos extra reales, 3 y 1."
  D: "Los dígitos extra son los primeros 2 del ciclo, 3 y 1. Suman 4, no 8."
  E: "Eso son 25 ciclos. Un ciclo tiene 4 dígitos, así que 50 dígitos son 12 ciclos y un poco más."
verify: "sum(range(0, 49).map((i) => [3, 1, 4, 2][i % 4]))"
---

Los dígitos 3, 1, 4, 2 se repiten en ese orden para siempre: 3, 1, 4, 2, 3, 1, 4, 2, ... ¿Cuál es la suma de los primeros 50 dígitos?

## Hint

¿Cuánto suma un ciclo completo? ¿Cuántos ciclos completos caben en 50 dígitos?

## Hint 2

Un ciclo suma 10, y $50 = 4 \times 12 + 2$. Así que hay 12 ciclos y 2 dígitos extra.

## Solution

**Paso 1.** Un ciclo suma $3 + 1 + 4 + 2 = 10$.

**Paso 2.** $50 = 4 \times 12 + 2$, así que 12 ciclos suman 120.

**Paso 3.** Los 2 dígitos extra son 3 y 1, que suman 4. El total es 124.

**Respuesta: (B) 124**
