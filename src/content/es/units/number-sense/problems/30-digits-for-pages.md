---
order: 30
difficulty: hard
lesson: 01-place-value
choices: ["30","39","45","69"]
answer: B
mistakes:
  A: "Esa es la cantidad de páginas de dos dígitos. Suma las 9 páginas de un dígito."
  C: "Eso cuenta todas las páginas como si tuvieran como 1.5 dígitos. Sepáralas por tamaño."
  D: "Esa es la cantidad de dígitos, no de páginas."
verify: "range(1, 99).find((n) => sum(range(1, n).map((k) => String(k).length)) === 69)"
---

Las páginas de un libro están numeradas empezando por el 1, y los números de página usan 69 dígitos en total. ¿Cuántas páginas tiene el libro?

## Hint

¿Cuántos dígitos usan las páginas del 1 al 9?

## Hint 2

Usan 9 dígitos, lo que deja 60 dígitos para las páginas de dos dígitos.

## Solution

Las páginas del 1 al 9 usan 9 dígitos, lo que deja $69 - 9 = 60$ dígitos. Cada página de dos dígitos usa 2 dígitos, así que son 30 páginas más. El libro tiene $9 + 30 = 39$ páginas.

**Respuesta: (B) 39**
