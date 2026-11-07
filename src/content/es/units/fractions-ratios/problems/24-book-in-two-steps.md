---
order: 24
difficulty: medium
lesson: 01-equal-groups
choices: ["80","120","160","240"]
answer: B
mistakes:
  A: "Eso suma un cuarto y un tercio como si fueran de la misma cantidad. El tercio es de lo que queda."
  C: "Revísalo: un cuarto de 160 es 40, y un tercio de 120 es 40, lo que deja 80, no 60."
  D: "Eso es el doble de la respuesta correcta. Queda la mitad del libro, así que 60 páginas son la mitad."
verify: "range(1, 400).find((n) => (n * 3) / 4 * (2 / 3) === 60)"
---

Sam lee $\frac{1}{4}$ de un libro el lunes, y $\frac{1}{3}$ de las páginas que quedan el martes. Le quedan 60 páginas. ¿Cuántas páginas tiene el libro?

## Hint

Lleva la cuenta de la parte que queda después de cada día.

## Hint 2

Después del lunes queda $\frac{3}{4}$. Después del martes queda $\frac{2}{3}$ de eso.

## Solution

La parte que queda es $\frac{3}{4} \times \frac{2}{3} = \frac{1}{2}$. Así que la mitad del libro son 60 páginas, y el libro tiene 120 páginas.

**Respuesta: (B) 120**
