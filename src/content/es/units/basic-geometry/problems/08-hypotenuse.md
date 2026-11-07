---
order: 9
difficulty: medium
lesson: 05-right-triangles
choices: ["15","13","17","18","21"]
answer: A
mistakes:
  B: "Eso viene de un triángulo 5-12-13. Aquí, los catetos son 9 y 12."
  C: "Eso viene de un triángulo 8-15-17. Aquí, los catetos son 9 y 12."
  D: "Revísalo: $18 \\times 18 = 324$, que es demasiado grande."
  E: "Eso es $9 + 12$. La hipotenusa es más corta que los dos catetos juntos."
verify: "range(1, 50).find((c) => c * c === 9 * 9 + 12 * 12)"
---

Un triángulo rectángulo tiene catetos de longitud 9 y 12. ¿Cuánto mide su hipotenusa?

## Hint

Usa $a^2 + b^2 = c^2$. Luego pregúntate qué número, multiplicado por sí mismo, da tu total.

## Hint 2

$9^2 + 12^2 = 225$. ¿Qué número multiplicado por sí mismo da 225?

## Solution

**Paso 1.** Eleva los catetos al cuadrado y súmalos:

$$9^2 + 12^2 = 81 + 144 = 225$$

**Paso 2.** Como $15 \times 15 = 225$, la hipotenusa mide 15.

**Fíjate:** Es el triángulo 3-4-5 con cada lado multiplicado por 3.

**Respuesta: (A) 15**
