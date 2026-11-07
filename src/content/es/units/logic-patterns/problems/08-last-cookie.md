---
order: 9
difficulty: medium
lesson: 04-logic-tables-pigeonholes
choices: ["Ana","Ben","Cal","No se puede saber"]
answer: C
mistakes:
  A: "Si Ana se la comió, las afirmaciones de Ben y de Cal son verdaderas. Son 2 afirmaciones verdaderas."
  B: "Si Ben se la comió, las afirmaciones de Ana y de Cal son verdaderas. Son 2 afirmaciones verdaderas."
  D: "Prueba los tres casos. Exactamente uno de ellos da exactamente una afirmación verdadera."
verify: "['Ana', 'Ben', 'Cal'].filter((eater) => [eater === 'Ben', eater !== 'Ben', eater !== 'Cal'].filter(Boolean).length === 1).join()"
---

Uno de tres amigos se comió la última galleta. Exactamente **una** de estas afirmaciones es verdadera:

- Ana dice: "Ben se la comió".
- Ben dice: "Yo no me la comí".
- Cal dice: "Yo no me la comí".

¿Quién se comió la galleta?

## Hint

Haz una tabla con una fila por cada amigo. Si ese amigo se comió la galleta, ¿cuántas afirmaciones son verdaderas?

## Hint 2

Prueba a cada amigo por turnos. Si Ana se la comió, ¿qué afirmaciones son verdaderas?

## Solution

Prueba cada posibilidad y cuenta las afirmaciones verdaderas:

| Si se la comió... | Ana | Ben | Cal | Afirmaciones verdaderas |
|---|---|---|---|---|
| Ana | falso | verdadero | verdadero | 2 |
| Ben | verdadero | falso | verdadero | 2 |
| Cal | falso | verdadero | falso | 1 |

Solo Cal da exactamente una afirmación verdadera.

**Respuesta: (C) Cal**
