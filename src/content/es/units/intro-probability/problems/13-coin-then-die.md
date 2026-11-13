---
order: 13
difficulty: medium
lesson: 03-trees-and-multiplying
choices: ["$\\frac{1}{4}$","$\\frac{1}{2}$","$\\frac{2}{3}$","$\\frac{3}{4}$","1"]
answer: A
mistakes:
  B: "Esa es la probabilidad de una sola de las dos cosas. Tienen que pasar las dos."
  C: "Las dos cosas tienen probabilidad de un medio. Multiplícalas."
  D: "Esa es la probabilidad de sacar cara **o** un número par. La pregunta pide las dos cosas a la vez."
  E: "Eso suma las dos probabilidades. Para una cosa **y** otra, multiplica."
verify: "fraction(product(['H', 'T'], range(1, 6)).filter(([c, d]) => c === 'H' && d % 2 === 0).length, 12)"
---

Lanzas una moneda y un dado. ¿Cuál es la probabilidad de sacar cara **y** un número par?

## Hint

¿Los dos resultados se afectan entre sí?

## Hint 2

No se afectan, así que multiplica: $\frac{1}{2} \times \frac{1}{2}$.

## Solution

La probabilidad de cara es $\frac{1}{2}$, y la de un número par es $\frac{3}{6} = \frac{1}{2}$. Son independientes, así que multiplica: $\frac{1}{4}$.

**Respuesta: (A) $\frac{1}{4}$**
