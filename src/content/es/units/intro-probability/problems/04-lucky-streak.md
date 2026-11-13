---
order: 4
difficulty: easy
lesson: 03-trees-and-multiplying
choices: ["$\\frac{1}{128}$","$\\frac{1}{64}$","$\\frac{1}{7}$","$\\frac{1}{2}$","$\\frac{6}{7}$"]
answer: D
mistakes:
  A: "Esa es la probabilidad de 7 caras seguidas, contando desde el primer lanzamiento. Los primeros 6 lanzamientos ya pasaron, así que solo importa el siguiente."
  B: "Esa es la probabilidad de sacar 6 caras seguidas desde el principio. Esos lanzamientos ya pasaron."
  C: "Eso supone que ya \"le toca\" a la cruz. Una moneda no tiene memoria."
  E: "Eso supone que la racha va a seguir. Una moneda no tiene memoria."
verify: "(() => { const c = [0, 1]; const all = product(c, c, c, c, c, c, c).filter((f) => f.slice(0, 6).every((x) => x === 1)); return fraction(all.filter((f) => f[6] === 1).length, all.length); })()"
---

Una moneda justa cae en cara 6 veces seguidas. ¿Cuál es la probabilidad de que caiga en cara en el siguiente lanzamiento?

## Hint

¿La moneda sabe lo que hizo antes?

## Hint 2

Cada lanzamiento es independiente, así que los anteriores no pueden cambiar el siguiente.

## Solution

La moneda no tiene memoria, así que los lanzamientos anteriores no pueden cambiar el siguiente. En cualquier lanzamiento de una moneda justa, cara y cruz son igual de probables, así que la probabilidad es $\frac{1}{2}$.

**Respuesta: (D) $\frac{1}{2}$**
