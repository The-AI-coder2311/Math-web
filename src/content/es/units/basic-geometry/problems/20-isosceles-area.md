---
order: 20
difficulty: hard
lesson: 05-right-triangles
choices: ["10","12","20","24","40"]
answer: B
mistakes:
  A: "Eso es la mitad de 5 por 4, usando un lado inclinado como altura. Primero traza la altura real."
  C: "Eso es $\\frac{1}{2} \\times 8 \\times 5$, usando un lado inclinado como altura. La altura llega a la base formando un ángulo recto."
  D: "Ese es el rectángulo que rodea al triángulo. El triángulo es la mitad."
  E: "Eso es $8 \\times 5$. El lado inclinado no es la altura, y además necesitas el medio."
verify: "(() => { const h = range(1, 10).find((x) => x * x + 4 * 4 === 5 * 5); return (8 * h) / 2; })()"
---

Un triángulo isósceles tiene lados de longitud 5, 5 y 8. ¿Cuál es su área?

## Hint

Traza la altura desde la esquina de arriba hasta el lado de longitud 8. ¿Dónde cae?

## Hint 2

Corta el 8 a la mitad. Ahora hay un triángulo rectángulo con hipotenusa 5 y un cateto de 4.

## Solution

**Paso 1.** La altura corta la base en 4 y 4. El triángulo rectángulo tiene un cateto de 4 y una hipotenusa de 5, así que la altura es 3.

**Paso 2.** El área es $\frac{1}{2} \times 8 \times 3 = 12$.

**Respuesta: (B) 12**
