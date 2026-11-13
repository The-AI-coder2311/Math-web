---
order: 18
difficulty: hard
from: logic-patterns/01-repeating-and-growing
choices: ["10","11","12","13","29"]
answer: C
mistakes:
  A: "Cuenta los ciclos: $5 \\times 11 = 55$, así que hay 11 ciclos completos."
  B: "Esos son los ciclos completos. Las 3 letras que sobran incluyen otra B."
  D: "Las letras que sobran son A, B y C, que incluyen una sola B."
  E: "Eso es la mitad de 58. El ciclo tiene 5 letras, no 2."
verify: "range(0, 57).filter((i) => [...'ABCDE'][i % 5] === 'B').length"
---

Las letras A, B, C, D, E se repiten en orden: ABCDEABCDE... ¿Cuántas B hay en las primeras 58 letras?

## Hint

¿Cuántos ciclos completos caben en 58 letras? ¿Cuántas letras sobran?

## Hint 2

$58 = 5 \times 11 + 3$. ¿Las letras que sobran incluyen una B?

## Solution

Como $58 = 5 \times 11 + 3$, hay 11 ciclos completos, con 1 B cada uno. Las 3 letras que sobran son A, B y C, que incluyen una B más. Así que hay 12.

**Respuesta: (C) 12**
