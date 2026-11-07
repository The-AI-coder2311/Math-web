---
order: 20
difficulty: hard
from: fractions-ratios/01-equal-groups
choices: ["40","60","72","90","120"]
answer: B
mistakes:
  A: "Eso toma 24 como $\\frac{3}{5}$ del garrafón, sin contar el domingo."
  C: "Eso toma 24 como $\\frac{1}{3}$ del garrafón. Encuentra la fracción que queda después de los dos días."
  D: "Síguelo hacia adelante: el sábado deja 54, y el domingo deja 36."
  E: "Eso toma 24 como $\\frac{1}{5}$ del garrafón. Es $\\frac{2}{5}$."
verify: "range(1, 300).find((n) => n - (2 * n) / 5 - (n - (2 * n) / 5) / 3 === 24)"
---

Una campista usa $\frac{2}{5}$ de un garrafón de agua el sábado, y luego $\frac{1}{3}$ de lo que queda el domingo. Quedan 24 litros. ¿Cuántos litros tenía el garrafón al principio?

## Hint

La fracción del domingo es una fracción de lo que quedaba. ¿Qué fracción queda después del sábado?

## Hint 2

Después del sábado queda $\frac{3}{5}$. Después del domingo queda $\frac{2}{3}$ de eso.

## Solution

Después de los dos días, queda $\frac{2}{3} \times \frac{3}{5} = \frac{2}{5}$ del garrafón. Así que $\frac{2}{5}$ del garrafón son 24 litros. Un quinto son 12, y el garrafón completo tenía 60 litros.

**Respuesta: (B) 60**
