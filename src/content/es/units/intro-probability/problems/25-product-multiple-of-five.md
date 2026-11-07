---
order: 25
difficulty: medium
lesson: 02-list-the-real-outcomes
choices: ["$\\frac{1}{6}$","$\\frac{5}{18}$","$\\frac{11}{36}$","$\\frac{1}{3}$"]
answer: C
mistakes:
  A: "Esa es la probabilidad de que un dado muestre un 5. Cualquiera de los dos podría."
  B: "Eso es 10 de los 36 resultados. Deja fuera el lanzamiento con dos 5."
  D: "Eso cuenta dos veces el doble 5. Solo hay un resultado así."
verify: "fraction(product(range(1, 6), range(1, 6)).filter(([a, b]) => (a * b) % 5 === 0).length, 36)"
---

Se lanzan dos dados. ¿Cuál es la probabilidad de que el producto de los números sea múltiplo de 5?

## Hint

Para que el producto sea múltiplo de 5, ¿qué tiene que mostrar uno de los dados?

## Hint 2

Al menos un dado tiene que mostrar un 5. ¿Qué es lo contrario?

## Solution

Al menos un dado tiene que mostrar un 5. Lo contrario es que ninguno lo muestre, lo que tiene $5 \times 5 = 25$ resultados. Así que $36 - 25 = 11$ resultados cumplen, y la probabilidad es $\frac{11}{36}$.

**Respuesta: (C) $\frac{11}{36}$**
