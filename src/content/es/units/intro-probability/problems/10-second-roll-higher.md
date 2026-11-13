---
order: 11
difficulty: medium
lesson: 02-list-the-real-outcomes
choices: ["$\\frac{1}{6}$","$\\frac{5}{12}$","$\\frac{1}{2}$","$\\frac{7}{12}$","$\\frac{5}{6}$"]
answer: B
mistakes:
  A: "Esa es la probabilidad de que los dos lanzamientos coincidan."
  C: "Eso olvida que los lanzamientos pueden coincidir. Mayor y menor solo se reparten 30 de los resultados."
  D: "Esa es la probabilidad de que el segundo sea mayor **o** igual. La pregunta dice mayor."
  E: "Esa es la probabilidad de que los lanzamientos sean diferentes. Solo la mitad de esos tienen un segundo lanzamiento mayor."
verify: "fraction(product(range(1, 6), range(1, 6)).filter(([a, b]) => b > a).length, 36)"
---

Lanzas un dado dos veces. ¿Cuál es la probabilidad de que el segundo número sea mayor que el primero?

## Hint

El segundo lanzamiento es mayor, menor o igual que el primero. ¿Qué tan probable es "igual"? ¿Cómo se comparan "mayor" y "menor"?

## Hint 2

Seis de los 36 resultados coinciden. Mayor y menor se reparten los otros 30 en partes iguales.

## Solution

**Paso 1.** Hay 36 resultados. Los dos lanzamientos coinciden en 6 de ellos: (1, 1), (2, 2), y así hasta (6, 6).

**Paso 2.** Eso deja $36 - 6 = 30$ resultados en los que los lanzamientos son diferentes.

**Paso 3.** "El segundo es mayor" y "el segundo es menor" son igual de probables, porque podrías intercambiar los dos lanzamientos. Así que a cada uno le toca la mitad: $30 \div 2 = 15$ resultados.

**Paso 4.** La probabilidad es $\frac{15}{36}$, que se simplifica a $\frac{5}{12}$.

**Respuesta: (B) $\frac{5}{12}$**
