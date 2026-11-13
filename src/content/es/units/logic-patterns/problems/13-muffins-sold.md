---
order: 13
difficulty: medium
lesson: 03-working-backwards
choices: ["18","24","36","48","72"]
answer: C
mistakes:
  A: "Eso es lo que quedaba después de la mañana. Regresa un paso más."
  B: "Síguelo hacia adelante: la mitad de 24 es 12, y vender un tercio deja 8."
  D: "Síguelo hacia adelante: la mitad de 48 es 24, y vender un tercio deja 16."
  E: "Eso toma 12 como $\\frac{1}{6}$ del inicio. Revísalo: ¿qué fracción queda después de las dos ventas?"
verify: "range(1, 100).find((n) => n - n / 2 - (n / 2) / 3 === 12)"
---

Una panadería vende $\frac{1}{2}$ de sus panquecitos en la mañana, y luego $\frac{1}{3}$ de los que quedan en la tarde. Le quedan 12 panquecitos. ¿Con cuántos empezó?

## Hint

Trabaja hacia atrás. Si se vendió $\frac{1}{3}$ de lo que quedaba, ¿qué fracción queda?

## Hint 2

Los 12 panquecitos son $\frac{2}{3}$ de lo que quedaba después de la mañana, así que eso eran 18.

## Solution

**Paso 1.** Los 12 panquecitos son $\frac{2}{3}$ de lo que había después de la mañana. Así que un tercio es 6, y esa cantidad era 18.

**Paso 2.** Los 18 panquecitos son la mitad que quedó después de la mañana, así que la panadería empezó con 36.

**Comprobación:** 36 se vuelve 18, y luego vender un tercio de 18 deja 12.

**Respuesta: (C) 36**
