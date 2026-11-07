---
order: 16
difficulty: hard
lesson: 01-equal-groups
choices: ["40","72","60","90","120"]
answer: B
mistakes:
  A: "Eso toma 30 como $\\frac{3}{4}$ del tanque. Los 30 litros son la diferencia entre las dos fracciones."
  C: "Eso toma 30 como la mitad del tanque. La diferencia entre las fracciones es $\\frac{5}{12}$."
  D: "Eso toma 30 como $\\frac{1}{3}$ del tanque. Resta las fracciones para encontrar su parte."
  E: "Eso toma 30 como $\\frac{1}{4}$ del tanque, el nivel inicial. Los 30 litros se agregaron encima."
verify: "range(1, 300).filter((n) => n % 12 === 0).find((n) => (n * 2) / 3 - n / 4 === 30)"
---

Un tanque está lleno a $\frac{1}{4}$. Después de agregar 30 litros, queda lleno a $\frac{2}{3}$. ¿Cuántos litros le caben al tanque lleno?

## Hint

Los 30 litros son la diferencia entre las dos fracciones. ¿Cuál es esa diferencia?

## Hint 2

$\frac{2}{3} - \frac{1}{4} = \frac{5}{12}$. Así que 5 grupos tienen 30 litros.

## Solution

**Paso 1.** Los 30 litros llenan $\frac{2}{3} - \frac{1}{4} = \frac{8}{12} - \frac{3}{12} = \frac{5}{12}$ del tanque.

**Paso 2.** Así que $\frac{1}{12}$ del tanque son $30 \div 5 = 6$ litros, y al tanque lleno le caben $12 \times 6 = 72$ litros.

**Respuesta: (B) 72**
