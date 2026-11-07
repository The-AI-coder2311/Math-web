---
order: 7
difficulty: medium
lesson: 04-factors-primes-leftovers
choices: ["44","45","46","48","49"]
answer: E
mistakes:
  A: "Tiene las parejas 1 y 44, 2 y 22, y 4 y 11, o sea 6 factores. Solo un cuadrado perfecto tiene una cantidad impar."
  B: "Tiene las parejas 1 y 45, 3 y 15, y 5 y 9, o sea 6 factores. Solo un cuadrado perfecto tiene una cantidad impar."
  C: "Tiene las parejas 1 y 46, y 2 y 23, o sea 4 factores. Solo un cuadrado perfecto tiene una cantidad impar."
  D: "Tiene 5 parejas de factores, o sea 10 factores. Solo un cuadrado perfecto tiene una cantidad impar."
verify: "[44, 45, 46, 48, 49].filter((n) => factors(n).length % 2 === 1).join()"
---

¿Cuál de estos números tiene un número impar de factores positivos?

## Hint

Los factores vienen en parejas, lo que normalmente da una cantidad par. ¿Qué tipo de número tiene un factor que hace pareja consigo mismo?

## Hint 2

Los factores forman parejas, a menos que un número haga pareja consigo mismo. Eso solo pasa con los cuadrados perfectos.

## Solution

**Paso 1.** Los factores vienen en parejas, así que la mayoría de los números tienen un número par de factores.

**Paso 2.** La cantidad es impar solo cuando un factor hace pareja consigo mismo. Eso solo pasa con los cuadrados perfectos.

**Paso 3.** Solo una opción es un cuadrado perfecto:

$$7 \times 7 = 49$$

**Una comprobación:** los factores de 49 son 1, 7 y 49. Son 3 factores, que es un número impar.

**Respuesta: (E) 49**
