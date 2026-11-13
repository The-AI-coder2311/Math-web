---
order: 1
difficulty: easy
lesson: 04-factors-primes-leftovers
choices: ["4","6","8","9","18"]
answer: B
mistakes:
  A: "Eso deja fuera el 1 y el 18, que también son factores."
  C: "Vuelve a hacer la lista de parejas. Hay 3 parejas, o sea 6 factores."
  D: "Eso es la mitad de 18. Los factores tienen que dividir 18 exactamente, así que cuéntalos usando parejas."
  E: "Ese es el número mismo. No todos los números hasta 18 son factores."
verify: "factors(18).length"
---

¿Cuántos números enteros positivos son factores de 18?

## Hint

Busca parejas de factores, empezando por 1 y 18. ¿Qué hace pareja con 2? Sigue hasta que un número se repita.

## Hint 2

Las parejas son 1 y 18, 2 y 9, y 3 y 6. Cuenta cada número de esas parejas.

## Solution

**Paso 1.** Escribe las parejas de factores de 18:

$$1 \times 18 = 18$$

$$2 \times 9 = 18$$

$$3 \times 6 = 18$$

**Paso 2.** Revisa los números siguientes: 4 y 5 no dividen 18 exactamente, y 6 ya está en la lista. Así que terminamos.

**Paso 3.** Hay 3 parejas, así que hay 6 factores: 1, 2, 3, 6, 9 y 18.

**Un error común:** contestar 18. ¡No todos los números hasta 18 son factores de 18!

**Respuesta: (B) 6**
