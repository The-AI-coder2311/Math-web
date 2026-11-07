---
order: 17
difficulty: hard
lesson: 01-place-value
choices: ["4","2","3","1","9"]
answer: A
mistakes:
  D: "Probar un solo número no es suficiente. Encuentra la regla, $a = 2b$, y haz la lista de todos los números que cumplen."
  B: "Te faltan algunos. Con $a = 2b$, el dígito de las unidades puede ser 1, 2, 3 o 4."
  C: "Te falta uno. Con $a = 2b$, el dígito de las unidades puede ser 1, 2, 3 o 4."
  E: "Esa es la cantidad de dígitos de las decenas. La regla $a = 2b$ solo permite algunos."
verify: "range(10, 99).filter((n) => n === 7 * sum(digits(n))).length"
---

¿Cuántos números de 2 dígitos son iguales a 7 veces la suma de sus dígitos?

## Hint

Escribe el número como $10a + b$. ¿Qué dice la oración en símbolos?

## Hint 2

$10a + b = 7(a + b)$ se simplifica a $3a = 6b$, así que $a = 2b$. ¿Qué dígitos cumplen?

## Solution

**Paso 1.** Escribe $10a + b = 7(a + b)$. Eso da $3a = 6b$, así que $a = 2b$.

**Paso 2.** El dígito de las decenas es el doble del de las unidades: 21, 42, 63 y 84. Son 4 números. (20, 40, 60 y 80 no funcionan, porque $b = 0$ haría que $a = 0$.)

**Comprobación:** $7 \times (6 + 3) = 63$.

**Respuesta: (A) 4**
