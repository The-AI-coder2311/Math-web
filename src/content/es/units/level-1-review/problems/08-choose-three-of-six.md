---
order: 8
difficulty: medium
from: counting/03-overcount-then-divide
choices: ["18","20","30","60","120"]
answer: B
mistakes:
  A: "Eso es $6 \\times 3$. Elige uno a la vez y luego divide."
  C: "Eso es $6 \\times 5$, que se detiene después de 2 elecciones."
  D: "Eso divide entre 2. Tres personas se pueden ordenar de 6 formas."
  E: "Eso cuenta cada orden del mismo grupo. Divide entre 6."
verify: "combos(range(1, 6), 3).length"
---

Seis estudiantes se ofrecen como voluntarios, y una maestra elige a 3 de ellos para acomodar las sillas. ¿Cuántos grupos diferentes de 3 son posibles?

## Hint

Si se eligen los mismos 3 estudiantes en otro orden, ¿es un grupo diferente?

## Hint 2

$6 \times 5 \times 4 = 120$ cuenta cada grupo $3 \times 2 \times 1$ veces.

## Solution

Elegir en orden da $6 \times 5 \times 4 = 120$. Cada grupo se cuenta 6 veces, así que $120 \div 6 = 20$.

**Respuesta: (B) 20**
