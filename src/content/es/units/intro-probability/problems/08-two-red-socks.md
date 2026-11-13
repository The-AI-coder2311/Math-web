---
order: 9
difficulty: medium
lesson: 03-trees-and-multiplying
choices: ["$\\frac{2}{7}$","$\\frac{16}{49}$","$\\frac{1}{3}$","$\\frac{1}{2}$","$\\frac{4}{7}$"]
answer: A
mistakes:
  B: "Eso es $\\frac{4}{7} \\times \\frac{4}{7}$, como si regresaras el primer calcetín. El cajón cambia."
  C: "Actualiza el cajón después del primer calcetín y multiplica: $\\frac{4}{7} \\times \\frac{3}{6}$."
  D: "Eso es solo el segundo calcetín, después de que sale uno rojo. Multiplícalo por la probabilidad del primero."
  E: "Eso es solo el primer calcetín. El segundo también tiene que ser rojo."
verify: "fraction(combos(range(1, 7), 2).filter((pair) => pair.every((sock) => sock <= 4)).length, combos(range(1, 7), 2).length)"
---

Un cajón tiene 4 calcetines rojos y 3 azules. Sacas 2 calcetines sin ver y sin regresar el primero. ¿Cuál es la probabilidad de que los dos sean rojos?

## Hint

Después de sacar un calcetín rojo, ¿cuántos calcetines quedan, y cuántos de ellos son rojos?

## Hint 2

El primero es rojo con probabilidad $\frac{4}{7}$. Luego 3 de los 6 que quedan son rojos.

## Solution

**Paso 1.** El primer calcetín es rojo con probabilidad $\frac{4}{7}$.

**Paso 2.** Ahora quedan 6 calcetines, y 3 son rojos. Así que el segundo es rojo con probabilidad $\frac{3}{6}$.

**Paso 3.** Multiplica:

$$\frac{4}{7} \times \frac{3}{6} = \frac{12}{42} = \frac{2}{7}$$

**Respuesta: (A) $\frac{2}{7}$**
