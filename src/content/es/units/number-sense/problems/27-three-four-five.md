---
order: 27
difficulty: medium
lesson: 03-divisibility-rules
choices: ["60","100","120","180"]
answer: C
mistakes:
  A: "Es divisible entre los tres, pero solo tiene dos dígitos."
  B: "100 no es divisible entre 3, porque la suma de sus dígitos es 1."
  D: "Funciona, pero hay uno más pequeño."
verify: "range(100, 999).find((n) => n % 3 === 0 && n % 4 === 0 && n % 5 === 0)"
---

¿Cuál es el menor número de tres dígitos que es divisible entre 3, entre 4 y entre 5?

## Hint

Un número divisible entre 3, 4 y 5 tiene que ser múltiplo de ¿qué número?

## Hint 2

Estos tres números no tienen factores en común, así que tiene que ser múltiplo de $3 \times 4 \times 5 = 60$.

## Solution

Un número así tiene que ser múltiplo de $3 \times 4 \times 5 = 60$. Los múltiplos son 60, 120, 180, y así sucesivamente. El primero de tres dígitos es 120.

**Respuesta: (C) 120**
