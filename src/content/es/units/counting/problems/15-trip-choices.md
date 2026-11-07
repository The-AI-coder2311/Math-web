---
order: 15
difficulty: medium
lesson: 05-split-into-cases
choices: ["15","24","25","144","288"]
answer: B
mistakes:
  A: "Eso es $4 + 3 + 2 + 6$. Dentro de un caso, eliges una cosa y luego otra, así que multiplica."
  C: "Eso es $12 + 13$. Revisa el segundo caso: $2 \\times 6$ es 12."
  D: "Eso es $12 \\times 12$. Un estudiante elige un plan **o** el otro, así que suma los dos casos."
  E: "Eso es $4 \\times 3 \\times 2 \\times 6$, que haría que cada estudiante hiciera los dos planes."
verify: "4 * 3 + 2 * 6"
---

En una excursión, cada estudiante elige **o bien** una caminata y un almuerzo empacado, **o bien** un paseo en bote y un refrigerio. Hay 4 caminatas, 3 almuerzos empacados, 2 paseos en bote y 6 refrigerios. ¿Cuántos planes diferentes son posibles?

## Hint

Divide en dos casos. Dentro de cada caso, ¿haces una cosa y luego otra?

## Hint 2

El caso de la caminata da $4 \times 3$ planes, y el caso del bote da $2 \times 6$ planes.

## Solution

Caminata y almuerzo: $4 \times 3 = 12$. Bote y refrigerio: $2 \times 6 = 12$. Un estudiante hace uno o el otro, así que suma: $12 + 12 = 24$.

**Respuesta: (B) 24**
