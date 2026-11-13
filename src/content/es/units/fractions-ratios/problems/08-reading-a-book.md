---
order: 9
difficulty: medium
lesson: 01-equal-groups
choices: ["80","90","120","160","240"]
answer: C
mistakes:
  A: "Eso toma 60 como $\\frac{3}{4}$ del libro, sin contar el martes. Después de los dos días, queda la mitad del libro."
  B: "Esas son las páginas que quedaban después del lunes si el libro tiene 120 páginas."
  D: "Compruébalo hacia adelante. Con 160 páginas te quedarían 80, no 60."
  E: "Eso duplica demasiadas veces. Las 60 páginas son la mitad del libro, así que se duplica una vez."
verify: "range(1, 500).find((n) => n - n / 4 - (n - n / 4) / 3 === 60)"
---

Priya lee $\frac{1}{4}$ de un libro el lunes. El martes, lee $\frac{1}{3}$ de las páginas que le quedan. Ahora le faltan 60 páginas por leer. ¿Cuántas páginas tiene el libro?

## Hint

Cuidado: la fracción del martes es una fracción de lo que quedaba, no del libro completo. ¿Qué fracción del libro queda después del lunes?

## Hint 2

Después del lunes queda $\frac{3}{4}$. Después del martes queda $\frac{2}{3}$ de eso, que es la mitad del libro.

## Solution

**Paso 1.** Después del lunes queda $\frac{3}{4}$ del libro.

**Paso 2.** El martes lee $\frac{1}{3}$ de lo que queda, así que le queda $\frac{2}{3}$ de eso. Es $\frac{2}{3}$ de $\frac{3}{4}$ del libro:

$$\frac{2}{3} \times \frac{3}{4} = \frac{1}{2}$$

**Paso 3.** Así que las 60 páginas que faltan son la mitad del libro. El libro completo tiene $2 \times 60 = 120$ páginas.

**Comprobación:** El lunes lee 30 páginas y le quedan 90. El martes lee un tercio de 90, que es 30, y le quedan 60.

**Respuesta: (C) 120**
