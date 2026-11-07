---
order: 1
difficulty: easy
lesson: 01-count-what-you-want
choices: ["$\\frac{1}{8}$","$\\frac{1}{2}$","$\\frac{3}{8}$","$\\frac{1}{3}$","$\\frac{1}{4}$"]
answer: E
mistakes:
  A: "Eso cuenta solo un múltiplo de 3. Cuentan el 3 y el 6."
  C: "Eso cuenta 3 secciones. Solo 3 y 6 son múltiplos de 3."
  D: "Eso confunde \"múltiplo de 3\" con \"uno de cada 3\". Hay 8 secciones, y 2 son múltiplos."
  B: "Eso serían 4 secciones. Solo 3 y 6 son múltiplos de 3."
verify: "fraction(range(1, 8).filter((n) => n % 3 === 0).length, 8)"
---

Una ruleta tiene 8 secciones iguales numeradas del 1 al 8. ¿Cuál es la probabilidad de caer en un múltiplo de 3?

## Hint

Haz la lista de los múltiplos de 3 que hay en la ruleta. ¿Cuántos son?

## Hint 2

Los múltiplos de 3 del 1 al 8 son 3 y 6.

## Solution

**Paso 1.** Los múltiplos de 3 de la ruleta son 3 y 6, así que hay 2 resultados que quieres.

**Paso 2.** Hay 8 resultados igual de probables en total, así que la probabilidad es $\frac{2}{8}$, que se simplifica a $\frac{1}{4}$.

**Respuesta: (E) $\frac{1}{4}$**
