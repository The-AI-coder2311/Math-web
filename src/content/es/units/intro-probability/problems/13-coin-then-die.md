---
order: 13
difficulty: medium
lesson: 03-trees-and-multiplying
choices: ["$\\frac{1}{12}$","$\\frac{2}{3}$","$\\frac{1}{2}$","$\\frac{1}{4}$","1"]
answer: D
mistakes:
  A: "Esa es la probabilidad de cara y un número específico. Hay 3 números pares."
  C: "Esa es la probabilidad de una sola de las dos cosas. Tienen que pasar las dos."
  B: "Las dos cosas tienen probabilidad de un medio. Multiplícalas."
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

**Respuesta: (D) $\frac{1}{4}$**
