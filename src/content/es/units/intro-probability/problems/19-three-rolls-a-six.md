---
order: 19
difficulty: hard
lesson: 04-one-minus
choices: ["$\\frac{1}{216}$","$\\frac{1}{6}$","$\\frac{1}{2}$","$\\frac{91}{216}$","$\\frac{125}{216}$"]
answer: D
mistakes:
  A: "Esa es la probabilidad de tres 6. \"Al menos uno\" también incluye uno o dos."
  B: "Esa es la probabilidad para un lanzamiento. Tres lanzamientos te dan más oportunidades."
  C: "Eso suma $\\frac{1}{6}$ tres veces, lo que cuenta algunos resultados más de una vez."
  E: "Esa es la probabilidad de ningún 6. Réstala de 1."
verify: "fraction(product(range(1, 6), range(1, 6), range(1, 6)).filter((r) => r.includes(6)).length, 216)"
---

Lanzas un dado 3 veces. ¿Cuál es la probabilidad de sacar al menos un 6?

## Hint

No sumes las probabilidades. ¿Qué es lo contrario?

## Hint 2

La probabilidad de ningún 6 es $\frac{5}{6} \times \frac{5}{6} \times \frac{5}{6}$.

## Solution

La probabilidad de ningún 6 es $\frac{125}{216}$. Así que la probabilidad de al menos un 6 es $1 - \frac{125}{216} = \frac{91}{216}$.

**Respuesta: (D) $\frac{91}{216}$**
