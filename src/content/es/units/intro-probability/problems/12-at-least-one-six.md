---
order: 12
difficulty: medium
lesson: 04-one-minus
choices: ["$\\frac{1}{6}$","$\\frac{11}{36}$","$\\frac{1}{3}$","$\\frac{25}{36}$","$\\frac{35}{36}$"]
answer: B
mistakes:
  A: "Esa es la probabilidad para un lanzamiento. Dos lanzamientos te dan más oportunidades."
  C: "Eso suma $\\frac{1}{6} + \\frac{1}{6}$, que cuenta dos veces el doble 6."
  D: "Esa es la probabilidad de ningún 6. Réstala de 1."
  E: "Eso es $1 - \\frac{1}{36}$, la probabilidad de no sacar dos 6. Mejor resta la probabilidad de **ningún** 6."
verify: "fraction(product(range(1, 6), range(1, 6)).filter((r) => r.includes(6)).length, 36)"
---

Lanzas un dado 2 veces. ¿Cuál es la probabilidad de sacar al menos un 6?

## Hint

¿Qué es lo contrario de "al menos un 6"?

## Hint 2

Lo contrario es ningún 6. Su probabilidad es $\frac{5}{6} \times \frac{5}{6}$.

## Solution

La probabilidad de ningún 6 es $\frac{5}{6} \times \frac{5}{6} = \frac{25}{36}$. Así que la probabilidad de al menos un 6 es $1 - \frac{25}{36} = \frac{11}{36}$.

**Respuesta: (B) $\frac{11}{36}$**
