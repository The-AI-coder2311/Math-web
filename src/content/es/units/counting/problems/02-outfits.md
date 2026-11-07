---
order: 2
difficulty: easy
lesson: 01-multiply-choices
choices: ["30","10","15","8","60"]
answer: A
mistakes:
  D: "Eso es $5 + 3$, sin contar los zapatos. Las elecciones que se hacen una tras otra se multiplican."
  B: "Eso es $5 + 3 + 2$. Sumar cuenta las prendas, no los conjuntos."
  C: "Eso es $5 \\times 3$, que deja fuera los zapatos."
  E: "Eso es el doble de la respuesta correcta. Vuelve a multiplicar $5 \\times 3 \\times 2$ y revisa."
verify: "product(range(1, 5), range(1, 3), range(1, 2)).length"
---

Andre está empacando para un viaje. Lleva 5 camisas, 3 pantalones y 2 pares de zapatos. Un conjunto es una camisa, un pantalón y un par de zapatos. ¿Cuántos conjuntos diferentes puede formar?

## Hint

Esta vez hay tres elecciones. El truco de multiplicar sigue funcionando, así que multiplica los tres números.

## Hint 2

Multiplica el número de camisas, de pantalones y de zapatos.

## Solution

**Paso 1.** Andre hace tres elecciones: una camisa (5 opciones), un pantalón (3 opciones) y zapatos (2 opciones).

**Paso 2.** Multiplica el número de opciones de cada elección:

$$5 \times 3 \times 2 = 30$$

**Respuesta: (A) 30**
