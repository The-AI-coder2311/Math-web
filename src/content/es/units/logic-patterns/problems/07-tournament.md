---
order: 8
difficulty: medium
lesson: 02-small-cases
choices: ["16","64","32","56","28"]
answer: E
mistakes:
  A: "Eso es $8 \\times 2$. Cada jugador juega contra otros 7."
  C: "Eso es $8 \\times 4$. Cada jugador juega 7 partidas, y cada partida tiene 2 jugadores."
  D: "Eso cuenta cada partida dos veces. Una partida tiene 2 jugadores, así que divide entre 2."
  B: "Eso es $8 \\times 8$, como si los jugadores jugaran contra sí mismos."
verify: "combos(range(1, 8), 2).length"
---

En un torneo de un club de ajedrez, cada uno de 8 jugadores juega exactamente una vez contra cada uno de los demás. ¿Cuántas partidas se juegan?

## Hint

Funciona como los apretones de manos. ¿Cuántas partidas juega cada jugador? ¿Eso cuenta alguna partida dos veces?

## Hint 2

$8 \times 7$ cuenta cada partida dos veces, una por cada jugador.

## Solution

**Paso 1.** Cada uno de los 8 jugadores juega 7 partidas, lo que da $8 \times 7 = 56$.

**Paso 2.** Pero cada partida tiene 2 jugadores, así que cada partida se contó dos veces. Divide entre 2: $56 \div 2 = 28$.

**Respuesta: (E) 28**
