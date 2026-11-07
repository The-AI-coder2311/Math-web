---
order: 19
difficulty: hard
from: intro-probability/03-trees-and-multiplying
choices: ["$\\frac{1}{4}$","$\\frac{3}{7}$","$\\frac{25}{64}$","$\\frac{5}{14}$","$\\frac{5}{8}$"]
answer: D
mistakes:
  A: "Multiplica las dos probabilidades: $\\frac{5}{8} \\times \\frac{4}{7}$."
  C: "Eso es $\\frac{5}{8} \\times \\frac{5}{8}$, como si la primera estudiante siguiera en el grupo."
  B: "Esa es la probabilidad de que el segundo sea niño, después de elegir a una niña."
  E: "Eso es solo la primera elección. Las dos tienen que ser niñas."
verify: "(() => { const all = combos(['G', 'G', 'G', 'G', 'G', 'B', 'B', 'B'], 2); return fraction(all.filter((p) => p[0] === 'G' && p[1] === 'G').length, all.length); })()"
---

Un grupo tiene 5 niñas y 3 niños. Se eligen dos estudiantes al azar, uno después del otro. ¿Cuál es la probabilidad de que las dos sean niñas?

## Hint

Después de elegir a una niña, ¿cuántos estudiantes quedan? ¿Cuántas de ellas son niñas?

## Hint 2

Es $\frac{5}{8}$ para la primera, y luego $\frac{4}{7}$ para la segunda.

## Solution

La primera es niña con probabilidad $\frac{5}{8}$. Luego 4 de los 7 que quedan son niñas. Así que la probabilidad es $\frac{5}{8} \times \frac{4}{7} = \frac{20}{56} = \frac{5}{14}$.

**Respuesta: (D) $\frac{5}{14}$**
