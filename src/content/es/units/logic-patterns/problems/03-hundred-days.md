---
order: 3
difficulty: easy
lesson: 01-repeating-and-growing
choices: ["lunes","miércoles","jueves","viernes","domingo"]
answer: D
mistakes:
  A: "Eso va hacia atrás. Cuenta hacia adelante desde el miércoles."
  B: "Eso sería correcto si 100 fuera múltiplo de 7. Sobran 2 días después de 14 semanas completas."
  C: "Eso es 1 día después del miércoles. El residuo de dividir 100 entre 7 es 2."
  E: "Eso es 4 días después del miércoles. Revisa tu residuo: $100 - 98 = 2$."
verify: "['miércoles', 'jueves', 'viernes', 'sábado', 'domingo', 'lunes', 'martes'][100 % 7]"
---

Hoy es miércoles. ¿Qué día de la semana será dentro de 100 días?

## Hint

Cada 7 días vuelve a ser miércoles. ¿Cuántos días sobran después de quitar las semanas completas?

## Hint 2

$7 \times 14 = 98$, así que dentro de 98 días vuelve a ser miércoles. Cuenta los últimos 2 días.

## Solution

**Paso 1.** Como $7 \times 14 = 98$, dentro de 98 días volverá a ser miércoles.

**Paso 2.** Faltan $100 - 98 = 2$ días más. Dos días después del miércoles es viernes.

**Respuesta: (D) viernes**
