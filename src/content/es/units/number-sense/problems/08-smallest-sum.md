---
order: 9
difficulty: medium
lesson: 04-factors-primes-leftovers
choices: ["16","17","19","23","32"]
answer: A
mistakes:
  B: "Eso es $5 + 12$. Una pareja más cercana, $6 + 10$, da menos."
  C: "Eso es $4 + 15$. Sigue avanzando hacia la mitad de la lista."
  D: "Eso es $3 + 20$. Sigue avanzando hacia la mitad de la lista."
  E: "Eso es $2 + 30$. Mientras más cerca estén los dos números, menor es su suma."
verify: "Math.min(...factors(60).map((a) => a + 60 / a))"
---

Dos números enteros positivos tienen un producto de 60. ¿Cuál es el menor valor posible de su suma?

## Hint

Haz la lista de todas las parejas de factores de 60 y suma cada pareja. ¿Notas qué pasa con la suma cuando los dos números se acercan?

## Hint 2

Las parejas de 60 son 1 y 60, 2 y 30, 3 y 20, 4 y 15, 5 y 12, y 6 y 10. ¿Cuál suma menos?

## Solution

**Paso 1.** Haz la lista de todas las parejas de factores de 60 y suma cada pareja:

| Pareja | Suma |
|---|---|
| 1 y 60 | 61 |
| 2 y 30 | 32 |
| 3 y 20 | 23 |
| 4 y 15 | 19 |
| 5 y 12 | 17 |
| 6 y 10 | 16 |

**Paso 2.** La suma más pequeña viene de la pareja más cercana:

$$6 + 10 = 16$$

**Respuesta: (A) 16**
