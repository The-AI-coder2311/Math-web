---
order: 14
difficulty: medium
lesson: 01-repeating-and-growing
choices: ["14","13","15","16","91"]
answer: A
mistakes:
  B: "Ese es el número de pasos. 13 espacios conectan 14 números."
  C: "Eso suma 2 a los pasos. El número de términos es 1 más que el número de pasos."
  D: "Revisa los pasos: $91 \\div 7 = 13$, y luego suma 1."
  E: "Esa es la subida total. Divide entre el tamaño del paso."
verify: "range(6, 97).filter((n) => (n - 6) % 7 === 0).length"
---

¿Cuántos números hay en la lista 6, 13, 20, ..., 97?

## Hint

¿Cuál es la subida total, y de cuánto es cada paso?

## Hint 2

La subida es 91, y cada paso es 7, así que hay 13 pasos.

## Solution

La subida es $97 - 6 = 91$, en pasos de 7, así que hay 13 pasos. Esos conectan 14 números.

**Respuesta: (A) 14**
