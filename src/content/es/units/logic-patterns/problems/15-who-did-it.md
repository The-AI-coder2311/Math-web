---
order: 15
difficulty: medium
lesson: 04-logic-tables-pigeonholes
choices: ["Dee","Eli","Fay","No se puede saber"]
answer: A
mistakes:
  B: "Si Eli se lo comió, las tres afirmaciones son verdaderas. El problema dice que una es falsa."
  C: "Si Fay se lo comió, las tres afirmaciones son falsas. El problema dice que solo una lo es."
  D: "Prueba los tres casos. Exactamente uno de ellos tiene exactamente una afirmación falsa."
verify: "['Dee', 'Eli', 'Fay'].filter((x) => [x === 'Eli', x !== 'Fay', x !== 'Fay'].filter((s) => !s).length === 1).join()"
---

Uno de tres amigos se comió la última rebanada de pay. Exactamente **una** de estas afirmaciones es falsa:

- Dee dice: "Eli se lo comió".
- Eli dice: "Fay no se lo comió".
- Fay dice: "Yo no me lo comí".

¿Quién se comió el pay?

## Hint

Haz una tabla con una fila por cada amigo. En cada fila, ¿cuántas afirmaciones son falsas?

## Hint 2

Si Eli se lo comió, las tres afirmaciones son verdaderas. Si Fay se lo comió, las tres son falsas. ¿Y Dee?

## Solution

Prueba cada caso, contando las afirmaciones falsas:

| Si se lo comió... | Dee | Eli | Fay | Afirmaciones falsas |
|---|---|---|---|---|
| Dee | falso | verdadero | verdadero | 1 |
| Eli | verdadero | verdadero | verdadero | 0 |
| Fay | falso | falso | falso | 3 |

Solo Dee da exactamente una afirmación falsa.

**Respuesta: (A) Dee**
