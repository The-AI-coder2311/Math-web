---
order: 30
difficulty: hard
lesson: 02-ratios-as-boxes
choices: ["40","60","80","100"]
answer: C
mistakes:
  A: "Pruébalo: 40 tarjetas se reparten en 25 y 15, y dar 10 no las iguala."
  B: "Pruébalo: dar 10 tarjetas debe reducir la diferencia a 0. Dar 10 cambia la diferencia en 20, no en 10."
  D: "Pruébalo: 100 tarjetas se repartirían en 62.5 y 37.5, y eso no es posible."
verify: "range(1, 200).find((n) => n % 8 === 0 && (n * 5) / 8 - 10 === (n * 3) / 8 + 10)"
---

Ana y Bea tienen tarjetas en una razón de 5 a 3. Después de que Ana le da 10 tarjetas a Bea, tienen la misma cantidad. ¿Cuántas tarjetas tienen en total?

## Hint

Dar 10 tarjetas, ¿en cuánto cambia la diferencia?

## Hint 2

Ana pierde 10 y Bea gana 10, así que la diferencia baja 20. Al principio, la diferencia es de 2 cajas.

## Solution

Ana tiene 2 cajas más que Bea. Dar 10 tarjetas reduce la diferencia en 20, así que 2 cajas tienen 20 tarjetas, y 1 caja tiene 10. Hay 8 cajas en total, así que hay 80 tarjetas.

**Respuesta: (C) 80**
