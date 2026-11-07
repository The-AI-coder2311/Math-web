---
order: 12
difficulty: medium
lesson: 01-place-value
choices: ["450","555","522","792","830"]
answer: C
mistakes:
  A: "Eso es $830 - 380$. Para el número menor, pon el 0 justo después del 3."
  B: "Revisa tu resta: $830 - 308$."
  D: "Eso es $830 - 38$, que trata 038 como un número de 3 dígitos. No puede empezar con 0."
  E: "Ese es solo el número mayor. Todavía tienes que restar el menor."
verify: "(() => { const all = perms([3, 0, 8]).map((p) => 100 * p[0] + 10 * p[1] + p[2]).filter((n) => n >= 100); return Math.max(...all) - Math.min(...all); })()"
---

Usando cada uno de los dígitos 3, 0 y 8 exactamente una vez, formas el mayor y el menor número de 3 dígitos posibles. ¿Cuál es su diferencia?

## Hint

Para el número mayor, los dígitos más grandes van a la izquierda. ¿Qué no puede ser el primer dígito del número menor?

## Hint 2

El mayor es 830. El menor no puede empezar con 0, así que empieza con 3.

## Solution

El número mayor es 830. El menor no puede empezar con 0, así que es 308. La diferencia es $830 - 308 = 522$.

**Respuesta: (C) 522**
