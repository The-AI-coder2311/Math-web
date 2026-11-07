---
order: 8
difficulty: medium
lesson: 04-one-minus
choices: ["$\\frac{1}{16}$","$\\frac{1}{4}$","$\\frac{3}{4}$","$\\frac{15}{16}$","$\\frac{7}{8}$"]
answer: D
mistakes:
  A: "Esa es la probabilidad de ninguna cara. Réstala de 1."
  B: "Esa es la probabilidad de exactamente 1 cara. \"Al menos una\" incluye más que eso."
  C: "Esa es la respuesta para 2 monedas. Aquí hay 4."
  E: "Esa es la respuesta para 3 monedas. Aquí hay 4."
verify: "(() => { const c = [0, 1]; return fraction(product(c, c, c, c).filter((f) => sum(f) >= 1).length, 16); })()"
---

Lanzas 4 monedas justas. ¿Cuál es la probabilidad de sacar al menos una cara?

## Hint

Las palabras "al menos una" son una pista. ¿Qué es lo contrario de sacar al menos una cara?

## Hint 2

La probabilidad de que todas sean cruz es $\frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} \times \frac{1}{2}$.

## Solution

**Paso 1.** Lo contrario de "al menos una cara" es "ninguna cara", que significa que las 4 monedas caen en cruz.

**Paso 2.** La probabilidad de que todas sean cruz es:

$$\frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} = \frac{1}{16}$$

**Paso 3.** Así que la probabilidad de al menos una cara es $1 - \frac{1}{16} = \frac{15}{16}$.

**Respuesta: (D) $\frac{15}{16}$**
