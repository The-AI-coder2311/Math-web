---
order: 20
difficulty: hard
lesson: 03-divisibility-rules
choices: ["0","2","12","8","6"]
answer: E
mistakes:
  A: "Ese es uno de los dígitos que funcionan, pero hay otro. Prueba el 6."
  B: "Esa es la cantidad de dígitos que funcionan. La pregunta pide su suma."
  D: "Prueba el 8: la suma de dígitos de 884 es 20, que no es múltiplo de 3."
  C: "Ese es el divisor. Encuentra los dígitos que pasan las dos pruebas y súmalos."
verify: "sum(range(0, 9).filter((d) => (800 + 10 * d + 4) % 12 === 0))"
---

El número $8\square4$ es divisible entre 12. ¿Cuál es la suma de todos los dígitos que podrían ir en el cuadro?

## Hint

Usa dos pruebas sin factores en común: la del 3 y la del 4.

## Hint 2

Para el 4, los dos últimos dígitos tienen que ser múltiplo de 4, así que el cuadro es 0, 2, 4, 6 u 8. Para el 3, la suma de los dígitos tiene que ser múltiplo de 3.

## Solution

**Paso 1.** Para el 4, los dos últimos dígitos tienen que ser múltiplo de 4. Así que el cuadro es 0, 2, 4, 6 u 8.

**Paso 2.** Para el 3, la suma de dígitos $8 + 4 + \square$ tiene que ser múltiplo de 3. Así que el cuadro es 0, 3, 6 o 9.

**Paso 3.** Solo 0 y 6 pasan las dos pruebas. Su suma es 6.

**Comprobación:** $804 = 12 \times 67$, y $864 = 12 \times 72$.

**Respuesta: (E) 6**
