---
order: 8
difficulty: medium
lesson: 04-split-or-subtract
choices: ["28","30","36","32","56"]
answer: D
mistakes:
  A: "Eso le resta al perímetro la parte cortada. El hueco también agrega 2 lados nuevos."
  B: "Eso resta 2. El corte quita 4 pulgadas y regresa 4 pulgadas."
  C: "Eso suma los 2 lados nuevos sin quitar nada de los anteriores."
  E: "Esa es el área de la figura nueva. La pregunta pide el perímetro."
verify: "(() => { const p = [[0, 0], [10, 0], [10, 4], [8, 4], [8, 6], [0, 6]]; return sum(p.map(([x, y], i) => { const [a, b] = p[(i + 1) % 6]; return Math.abs(a - x) + Math.abs(b - y); })); })()"
---

Un pedazo rectangular de cartón mide 10 pulgadas por 6 pulgadas. Se recorta un cuadrado de 2 pulgadas por lado en una esquina. ¿Cuál es el perímetro de la figura nueva, en pulgadas?

## Hint

Dibújalo y marca cada lado, incluidos los dos lados nuevos que forma el corte. Va a haber 6 lados en total.

## Hint 2

Desliza hacia afuera los dos lados del hueco. Llenan los huecos, así que el perímetro es igual al del rectángulo completo.

## Solution

**Paso 1.** Dibuja la figura. Al recorrerla, los 6 lados miden 10, 4, 2, 2, 8 y 6. (El lado que medía 6 ahora está dividido en 4 y 2, y el lado que medía 10 ahora tiene un pedazo de 8 arriba.)

**Paso 2.** Súmalos:

$$10 + 4 + 2 + 2 + 8 + 6 = 32$$

**Fíjate:** Es lo mismo que el perímetro del rectángulo completo, porque $10 + 6 + 10 + 6 = 32$. El corte quita 2 pulgadas de cada uno de dos lados, y el hueco regresa esas mismas 4 pulgadas.

**Respuesta: (D) 32**
