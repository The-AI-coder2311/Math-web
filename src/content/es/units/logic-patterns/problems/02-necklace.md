---
order: 2
difficulty: easy
lesson: 01-repeating-and-growing
choices: ["rojo","azul","verde","amarillo"]
answer: C
mistakes:
  A: "Esa es la cuenta que sigue a un ciclo completo. Un residuo de 3 significa el 3.er color."
  B: "Ese es el 2.º color. El residuo de dividir 35 entre 4 es 3."
  D: "Ese es el último color, donde caerías si 35 fuera múltiplo de 4."
verify: "['rojo', 'azul', 'verde', 'amarillo'][(35 - 1) % 4]"
---

Un collar tiene cuentas que se repiten en el orden rojo, azul, verde, amarillo, rojo, azul, verde, amarillo, y así sucesivamente. ¿De qué color es la cuenta 35?

## Hint

Los colores se repiten cada 4 cuentas. ¿Cuál es el residuo al dividir 35 entre 4?

## Hint 2

Como $4 \times 8 = 32$, la cuenta 32 termina un ciclo completo. Cuenta 3 más desde ahí.

## Solution

**Paso 1.** Los colores se repiten cada 4 cuentas. Como $4 \times 8 = 32$, la cuenta 32 termina un grupo completo, así que es amarilla.

**Paso 2.** Ahora avanza 3 cuentas más: la 33 es roja, la 34 es azul y la 35 es verde.

**Respuesta: (C) verde**
