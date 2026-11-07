---
order: 7
difficulty: medium
from: counting/02-when-order-matters
choices: ["9","10","20","25","120"]
answer: C
mistakes:
  A: "Eso es $5 + 4$. Repartes oro **y** plata, así que multiplica."
  B: "Eso divide entre 2, lo que trata las medallas como iguales. El oro y la plata son diferentes."
  D: "Eso es $5 \\times 5$, que deja que un corredor gane las dos."
  E: "Eso es $5!$, que ordena a los 5 corredores. Solo se reparten 2 medallas."
verify: "perms([1, 2, 3, 4, 5]).length / perms([1, 2, 3]).length"
---

Hay cinco corredores en una carrera. ¿De cuántas formas se pueden repartir las medallas de oro y plata?

## Hint

¿Ganar el oro es diferente de ganar la plata?

## Hint 2

Hay 5 opciones para el oro y luego 4 para la plata.

## Solution

Hay 5 opciones para el oro y luego 4 para la plata: $5 \times 4 = 20$.

**Respuesta: (C) 20**
