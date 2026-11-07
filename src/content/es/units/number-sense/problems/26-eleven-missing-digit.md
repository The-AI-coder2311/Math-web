---
order: 26
difficulty: medium
lesson: 03-divisibility-rules
choices: ["2","5","8","9"]
answer: C
mistakes:
  A: "Pruébalo: 523 entre 11 deja residuo. Usa la suma alternada."
  B: "Pruébalo: 553 entre 11 deja residuo. Usa la suma alternada."
  D: "Pruébalo: 593 entre 11 deja residuo. Usa la suma alternada."
verify: "[2, 5, 8, 9].find((d) => (500 + 10 * d + 3) % 11 === 0)"
---

El número de tres dígitos $5d3$ tiene el dígito $d$ en el medio, y es divisible entre 11. ¿Cuánto vale $d$?

## Hint

Usa la suma alternada de los dígitos: el primero menos el segundo más el tercero.

## Hint 2

Esa suma es $5 - d + 3 = 8 - d$. ¿Cuándo es múltiplo de 11?

## Solution

La suma alternada es $5 - d + 3 = 8 - d$. Para un dígito $d$, esto solo es múltiplo de 11 cuando $d = 8$. Comprobación: $583 = 11 \times 53$.

**Respuesta: (C) 8**
