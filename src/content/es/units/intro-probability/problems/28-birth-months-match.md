---
order: 28
difficulty: medium
lesson: 04-one-minus
choices: ["$\\frac{1}{12}$","$\\frac{17}{72}$","$\\frac{55}{72}$","$\\frac{11}{12}$"]
answer: B
mistakes:
  A: "Esa es la probabilidad para una pareja de personas. Aquí hay tres parejas."
  C: "Esa es la probabilidad de que las tres sean diferentes. Réstala de 1."
  D: "Esa es la probabilidad de que dos personas en particular sean diferentes."
verify: "fraction(1728 - 12 * 11 * 10, 1728)"
---

Cada una de tres personas puede haber nacido, con la misma probabilidad, en cualquiera de los 12 meses. ¿Cuál es la probabilidad de que al menos dos compartan el mes?

## Hint

Encuentra la probabilidad de que los tres meses sean diferentes.

## Hint 2

Esa probabilidad es $\frac{12}{12} \times \frac{11}{12} \times \frac{10}{12}$.

## Solution

Las tres son diferentes con probabilidad $\frac{11}{12} \times \frac{10}{12} = \frac{55}{72}$. Así que al menos dos comparten el mes con probabilidad $1 - \frac{55}{72} = \frac{17}{72}$.

**Respuesta: (B) $\frac{17}{72}$**
