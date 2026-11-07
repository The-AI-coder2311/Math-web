---
order: 25
difficulty: medium
lesson: 02-mental-math
choices: ["100","110","120","200"]
answer: B
mistakes:
  A: "Esa es la suma de los primeros 10 números impares. Revisa con parejas de números pares."
  C: "Hay 5 parejas que suman 22, no 24."
  D: "Eso es 10 por 20. Cada pareja suma 22, y hay 5 parejas."
verify: "sum(range(1, 10).map((n) => 2 * n))"
---

¿Cuánto es $2 + 4 + 6 + \cdots + 20$?

## Hint

Junta el primer número con el último, el segundo con el penúltimo, y así sucesivamente.

## Hint 2

$2 + 20 = 22$. ¿Cuántas parejas hay?

## Solution

Hay 10 números, así que hay 5 parejas. Cada pareja suma 22, como $2 + 20$ y $4 + 18$. Así que la suma es $5 \times 22 = 110$.

**Respuesta: (B) 110**
