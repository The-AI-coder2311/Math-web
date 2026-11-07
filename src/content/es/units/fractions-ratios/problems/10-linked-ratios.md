---
order: 11
difficulty: medium
lesson: 02-ratios-as-boxes
choices: ["2:5","3:4","6:10","10:12","8:15"]
answer: E
mistakes:
  A: "Eso usa el primer y el último número que te dan, pero las cantidades de gansos todavía no coinciden. Haz que coincidan primero."
  B: "Esas son las cantidades de gansos en las dos razones. Usa un número común de gansos."
  C: "Revísalo con 12 gansos: habría 8 patos y 15 cisnes."
  D: "Eso suma en lugar de escalar. Para conservar una razón, multiplica las dos partes por el mismo número."
verify: "(() => { const best = product(range(1, 60), range(1, 60), range(1, 60)).find(([a, b, c]) => a * 3 === b * 2 && b * 5 === c * 4); return `${best[0]}:${best[2]}`; })()"
---

En una granja, la razón de patos a gansos es 2:3. La razón de gansos a cisnes es 4:5. ¿Cuál es la razón de patos a cisnes?

## Hint

Los gansos están en las dos razones, pero aparecen como 3 en una y como 4 en la otra. ¿Puedes elegir un número de gansos que funcione para las dos?

## Hint 2

Usa 12 gansos. Entonces 2:3 se vuelve 8:12, y 4:5 se vuelve 12:15.

## Solution

**Paso 1.** El número de gansos debe funcionar con las dos razones, así que prueba un múltiplo de 3 y de 4. El más pequeño es 12.

**Paso 2.** Con 12 gansos, la razón 2:3 se vuelve 8:12, así que hay 8 patos.

**Paso 3.** Con 12 gansos, la razón 4:5 se vuelve 12:15, así que hay 15 cisnes.

**Paso 4.** Así que la razón de patos a cisnes es 8:15.

**Respuesta: (E) 8:15**
