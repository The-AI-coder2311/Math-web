---
order: 18
difficulty: hard
lesson: 01-perimeter-and-area
choices: ["5","8","10","13","20"]
answer: B
mistakes:
  A: "Ese es el lado más corto."
  C: "Un rectángulo de 10 por 4 tiene área 40, pero su perímetro es 28."
  D: "Esa es la mitad del perímetro, que son los dos lados sumados."
  E: "Un rectángulo de 20 por 2 tiene área 40, pero su perímetro es 44."
verify: "Math.max(...range(1, 13).filter((a) => a * (13 - a) === 40))"
---

Un rectángulo tiene un perímetro de 26 y un área de 40. ¿Cuánto mide su lado más largo?

## Hint

La mitad del perímetro es un largo más un ancho. ¿Qué dos números suman eso y multiplicados dan 40?

## Hint 2

Los lados suman 13. Haz la lista de las parejas de factores de 40.

## Solution

Los lados suman $26 \div 2 = 13$ y multiplicados dan 40. La pareja de factores 5 y 8 cumple las dos cosas. Así que el lado más largo mide 8.

**Respuesta: (B) 8**
