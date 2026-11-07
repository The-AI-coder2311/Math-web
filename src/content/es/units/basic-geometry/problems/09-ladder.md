---
order: 10
difficulty: medium
lesson: 05-right-triangles
choices: ["18","24","20","26","32"]
answer: B
mistakes:
  A: "Eso es $25 - 7$. Los triángulos rectángulos usan cuadrados, no una simple resta."
  C: "Revísalo: $20^2 + 7^2$ da 449, no 625."
  D: "Eso trata la escalera como cateto. Es el lado más largo, opuesto al ángulo recto."
  E: "Eso es $25 + 7$. La altura tiene que ser menor que la escalera."
verify: "range(1, 25).find((h) => h * h + 7 * 7 === 25 * 25)"
---

Una escalera de 25 pies está recargada en una pared, y su base está a 7 pies de la pared. La pared forma un ángulo recto con el piso. ¿Hasta cuántos pies de altura llega la escalera en la pared?

## Hint

Dibújalo. ¿Qué lado del triángulo rectángulo es la escalera: un cateto o la hipotenusa?

## Hint 2

La escalera es la hipotenusa, así que $h^2 = 25^2 - 7^2 = 576$.

## Solution

**Paso 1.** La escalera es opuesta al ángulo recto, así que es la hipotenusa. Sea $h$ la altura a la que llega. Entonces:

$$7^2 + h^2 = 25^2$$

**Paso 2.** Como $7^2 = 49$ y $25^2 = 625$, el valor de $h^2$ es $625 - 49 = 576$.

**Paso 3.** Como $24 \times 24 = 576$, la escalera llega a 24 pies de altura.

**Respuesta: (B) 24**
