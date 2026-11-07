---
order: 20
difficulty: hard
lesson: 04-count-the-opposite
choices: ["72","90","78","96","114"]
answer: C
mistakes:
  A: "Eso es $120 - 24 - 24$. Las filas con Ari primero **y** Bo al final se restaron dos veces, así que suma esas 6 de vuelta."
  B: "Eso es $120 - 24 - 6$. Cada una de las dos reglas quita 24 filas."
  D: "Eso es $120 - 24$, que solo usa una regla."
  E: "Eso es $120 - 6$, que solo quita las filas que rompen las dos reglas. Una fila que rompe cualquiera de las reglas tiene que salir."
verify: "perms(['A', 'B', 'C', 'D', 'E']).filter((p) => p[0] !== 'A' && p[4] !== 'B').length"
---

Cinco amigos, entre ellos Ari y Bo, se forman en fila para una foto. Ari no quiere estar primero, y Bo no quiere estar al final. ¿Cuántas filas son posibles?

## Hint

Empieza con todas las filas y resta las que no quieres. ¿Cuántas tienen a Ari primero? ¿Cuántas tienen a Bo al final?

## Hint 2

Hay 24 de cada una. Pero algunas filas tienen a Ari primero y a Bo al final, y esas se restaron dos veces.

## Solution

**Paso 1.** Hay $5! = 120$ filas.

**Paso 2.** Ari primero: $4! = 24$. Bo al final: $4! = 24$.

**Paso 3.** Las dos cosas a la vez: $3! = 6$. Esas se restaron dos veces, así que súmalas de vuelta.

**Paso 4.** $120 - 24 - 24 + 6 = 78$.

**Respuesta: (C) 78**
