---
order: 23
difficulty: easy
lesson: 04-one-minus
choices: ["$\\frac{1}{4}$","$\\frac{1}{2}$","$\\frac{3}{4}$","$1$"]
answer: C
mistakes:
  A: "Esa es la probabilidad de ninguna cruz. Réstala de 1."
  B: "Esa es la probabilidad de exactamente una cruz. Dos cruces también cuentan."
  D: "Dos caras es posible, así que no es seguro."
verify: "fraction(product([0, 1], [0, 1]).filter((f) => f.includes(1)).length, 4)"
---

Se lanza una moneda dos veces. ¿Cuál es la probabilidad de sacar al menos una cruz?

## Hint

¿Qué es lo contrario de "al menos una cruz"?

## Hint 2

Lo contrario es dos caras, que tiene probabilidad $\frac{1}{4}$.

## Solution

Lo contrario es dos caras, con probabilidad $\frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$. Así que la respuesta es $1 - \frac{1}{4} = \frac{3}{4}$.

**Respuesta: (C) $\frac{3}{4}$**
