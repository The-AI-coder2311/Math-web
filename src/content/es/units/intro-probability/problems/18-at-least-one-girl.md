---
order: 18
difficulty: hard
lesson: 04-one-minus
choices: ["$\\frac{1}{15}$","$\\frac{4}{15}$","$\\frac{1}{3}$","$\\frac{2}{5}$","$\\frac{3}{5}$"]
answer: E
mistakes:
  A: "Esa es la probabilidad de que las dos personas elegidas sean niñas. \"Al menos una\" también incluye una niña y un niño."
  B: "Eso cuenta 4 parejas. Hay 9 parejas que incluyen a una niña."
  C: "Esa es la probabilidad de que una elección en particular sea niña. Hay dos elecciones."
  D: "Esa es la probabilidad de que los dos sean niños. Réstala de 1."
verify: "(() => { const all = combos(['G', 'G', 'B', 'B', 'B', 'B'], 2); return fraction(all.filter((p) => p.includes('G')).length, all.length); })()"
---

De entre 2 niñas y 4 niños, una maestra elige 2 estudiantes al azar. ¿Cuál es la probabilidad de que al menos uno sea niña?

## Hint

¿Qué es lo contrario de "al menos una niña"? ¿Cuántas parejas hay en total?

## Hint 2

Hay $\binom{6}{2} = 15$ parejas. Las parejas de solo niños son $\binom{4}{2} = 6$.

## Solution

Hay 15 parejas en total, y 6 son solo de niños. Así que la probabilidad de que los dos sean niños es $\frac{6}{15} = \frac{2}{5}$. La probabilidad de al menos una niña es $1 - \frac{2}{5} = \frac{3}{5}$.

**Respuesta: (E) $\frac{3}{5}$**
