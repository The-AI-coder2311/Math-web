---
order: 12
difficulty: medium
lesson: 04-one-minus
choices: ["$\\frac{1}{36}$","$\\frac{1}{6}$","$\\frac{25}{36}$","$\\frac{1}{3}$","$\\frac{11}{36}$"]
answer: E
mistakes:
  A: "Esa es la probabilidad de dos 6. \"Al menos uno\" también incluye un solo 6."
  B: "Esa es la probabilidad para un lanzamiento. Dos lanzamientos te dan más oportunidades."
  D: "Eso suma $\\frac{1}{6} + \\frac{1}{6}$, que cuenta dos veces el doble 6."
  C: "Esa es la probabilidad de ningún 6. Réstala de 1."
verify: "fraction(product(range(1, 6), range(1, 6)).filter((r) => r.includes(6)).length, 36)"
---

Lanzas un dado 2 veces. ¿Cuál es la probabilidad de sacar al menos un 6?

## Hint

¿Qué es lo contrario de "al menos un 6"?

## Hint 2

Lo contrario es ningún 6. Su probabilidad es $\frac{5}{6} \times \frac{5}{6}$.

## Solution

La probabilidad de ningún 6 es $\frac{5}{6} \times \frac{5}{6} = \frac{25}{36}$. Así que la probabilidad de al menos un 6 es $1 - \frac{25}{36} = \frac{11}{36}$.

**Respuesta: (E) $\frac{11}{36}$**
