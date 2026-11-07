---
order: 28
difficulty: medium
lesson: 04-logic-tables-pigeonholes
choices: ["Ari","Bo","Cy"]
answer: B
mistakes:
  A: "Si ganó Ari, las afirmaciones de Ari y de Bo son verdaderas. Son 2 afirmaciones verdaderas."
  C: "Si ganó Cy, las afirmaciones de Bo y de Cy son verdaderas. Son 2 afirmaciones verdaderas."
verify: "['Ari', 'Bo', 'Cy'].filter((x) => [x === 'Ari', x !== 'Bo', x !== 'Ari'].filter(Boolean).length === 1).join()"
---

Ari, Bo y Cy jugaron un juego, y uno de ellos ganó. Exactamente **una** de estas afirmaciones es verdadera:

- Ari dice: "Yo gané".
- Bo dice: "Yo no gané".
- Cy dice: "Ari no ganó".

¿Quién ganó?

## Hint

Haz una tabla con una fila por cada posible ganador.

## Hint 2

En cada fila, cuenta las afirmaciones verdaderas. Buscas una fila con exactamente 1.

## Solution

Si ganó Ari, Ari y Bo dicen la verdad, que son 2. Si ganó Cy, Bo y Cy dicen la verdad, que son 2. Si ganó Bo, solo Cy dice la verdad. Así que ganó Bo.

**Respuesta: (B) Bo**
