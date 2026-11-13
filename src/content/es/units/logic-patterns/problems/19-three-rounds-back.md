---
order: 19
difficulty: hard
lesson: 03-working-backwards
choices: ["4","5","10","22","23"]
answer: A
mistakes:
  B: "Síguelo hacia adelante: 5 se vuelve 12, luego 26 y luego 54."
  C: "Eso es después de una ronda desde el inicio. Regresa una ronda más."
  D: "Eso es solo una ronda hacia atrás desde 46. Son tres rondas."
  E: "Eso es $46 \\div 2$. También tienes que restar 1, y hacerlo en las tres rondas."
verify: "range(0, 50).find((n) => [1, 2, 3].reduce((x) => (x + 1) * 2, n) === 46)"
---

Empieza con un número, súmale 1 y duplica el resultado. Luego repite eso con el número nuevo: suma 1 y duplica. Hazlo una tercera vez, y el resultado es 46. ¿Con qué número empezaste?

## Hint

Trabaja hacia atrás. Para deshacer "sumar 1 y duplicar", ¿qué haces, y en qué orden?

## Hint 2

Divide entre 2 y luego resta 1. Desde 46, eso da 22. Hazlo dos veces más.

## Solution

Deshaz cada ronda dividiendo entre 2 y restando 1: 46 se vuelve 22, luego 22 se vuelve 10, y luego 10 se vuelve 4.

**Comprobación:** 4 se vuelve 10, luego 22 y luego 46.

**Respuesta: (A) 4**
