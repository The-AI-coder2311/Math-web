---
order: 30
difficulty: hard
lesson: 04-count-the-opposite
choices: ["120","240","480","600"]
answer: C
mistakes:
  A: "Eso es 5 factorial. Cuenta la fila con Al y Bo como una sola unidad, y sin sus dos órdenes."
  B: "Esa es la cantidad de formas en que SÍ se sientan juntos. Réstala del total."
  D: "Revisa la cuenta de los acomodos juntos: es 5 factorial por 2, que es 240."
verify: "perms(range(1, 6)).filter((p) => Math.abs(p.indexOf(1) - p.indexOf(2)) !== 1).length"
---

Seis niños se forman en fila, entre ellos Al y Bo, que no pueden estar uno al lado del otro. ¿Cuántos órdenes son posibles?

## Hint

Cuenta los órdenes en que SÍ están juntos, y resta.

## Hint 2

Pégalos en una sola unidad. Eso da 5 unidades, y dentro del bloque tienen 2 órdenes.

## Solution

Hay $6! = 720$ órdenes en total. Si Al y Bo están juntos, hay $5! \times 2 = 240$ órdenes. Así que $720 - 240 = 480$ los mantienen separados.

**Respuesta: (C) 480**
