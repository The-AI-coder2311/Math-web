---
order: 7
difficulty: medium
from: counting/02-when-order-matters
choices: ["2","5","9","10","20"]
answer: E
mistakes:
  A: "Ese es el número de medallas. La pregunta pide el número de maneras de repartirlas."
  B: "Eso cuenta solo las maneras de dar la medalla de oro. Por cada una, todavía hay 4 corredores que pueden ganar la de plata."
  C: "Eso es $5 + 4$. Repartes oro **y** plata, así que multiplica."
  D: "Eso divide entre 2, lo que trata las medallas como iguales. El oro y la plata son diferentes."
verify: "perms([1, 2, 3, 4, 5]).length / perms([1, 2, 3]).length"
---

Hay cinco corredores en una carrera. ¿De cuántas formas se pueden repartir las medallas de oro y plata?

## Hint

¿Ganar el oro es diferente de ganar la plata?

## Hint 2

Hay 5 opciones para el oro y luego 4 para la plata.

## Solution

Hay 5 opciones para el oro y luego 4 para la plata: $5 \times 4 = 20$.

**Respuesta: (E) 20**
