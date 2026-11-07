---
order: 27
difficulty: medium
lesson: 03-working-backwards
choices: ["10","18","22","24"]
answer: C
mistakes:
  A: "Esa es la cantidad al inicio del día 2. Deshaz también el día 1."
  B: "Eso duplica primero y luego suma 1. Suma 1 primero y luego duplica."
  D: "Revísalo hacia adelante. La mitad de 24 más 1 es 13, lo que deja 11, no 10."
verify: "range(1, 100).find((n) => { const a = n - (n / 2 + 1); return a - (a / 2 + 1) === 4; })"
---

Cada día, Mo regala la mitad de las canicas que tiene, más 1. Después de 2 días, a Mo le quedan 4 canicas. ¿Con cuántas canicas empezó Mo?

## Hint

Deshaz un día a la vez. Para deshacer un día, suma 1 y luego duplica.

## Hint 2

Empieza desde 4: $(4 + 1) \times 2 = 10$.

## Solution

Deshaz el día 2: $(4 + 1) \times 2 = 10$. Deshaz el día 1: $(10 + 1) \times 2 = 22$. Comprobación: la mitad de 22 más 1 es 12, lo que deja 10. La mitad de 10 más 1 es 6, lo que deja 4.

**Respuesta: (C) 22**
