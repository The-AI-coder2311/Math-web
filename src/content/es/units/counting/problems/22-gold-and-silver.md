---
order: 22
difficulty: easy
lesson: 02-when-order-matters
choices: ["10","20","25","120"]
answer: B
mistakes:
  A: "Esa es la cantidad de parejas si el orden no importara. El oro y la plata son premios diferentes."
  C: "Eso deja que un corredor gane las dos medallas."
  D: "Eso llena 5 lugares. Solo hay 2 medallas."
verify: "perms(range(1, 5)).map((p) => p.slice(0, 2).join()).filter((x, i, l) => l.indexOf(x) === i).length"
---

Cinco corredores compiten. ¿De cuántas formas se pueden repartir las medallas de oro y plata?

## Hint

¿Cuántos corredores pueden ganar el oro? Después, ¿cuántos quedan para la plata?

## Hint 2

Hay 5 opciones para el oro y luego 4 para la plata.

## Solution

El oro puede ir a cualquiera de los 5 corredores. La plata puede ir a cualquiera de los otros 4. Así que hay $5 \times 4 = 20$ formas.

**Respuesta: (B) 20**
