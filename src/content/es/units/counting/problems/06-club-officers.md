---
order: 7
difficulty: medium
lesson: 02-when-order-matters
choices: ["42","21","14","49","56"]
answer: A
mistakes:
  C: "Eso es $7 \\times 2$. Elige a las personas un puesto a la vez: 7 opciones y luego 6."
  B: "Eso es \"combinaciones de 7 en 2\", que trata los puestos como iguales. Ana como presidenta es diferente de Ben como presidente, así que no dividas."
  D: "Eso es $7 \\times 7$, que deja que una persona tenga los dos puestos."
  E: "Eso es $8 \\times 7$. El club tiene 7 miembros."
verify: "product(range(1, 7), range(1, 7)).filter(([president, vice]) => president !== vice).length"
---

Un club de ajedrez tiene 7 miembros. El club elige a un presidente y a un vicepresidente, y tienen que ser dos personas diferentes. ¿De cuántas formas se puede hacer?

## Hint

Elige primero al presidente. ¿Cuántas personas podrían ser vicepresidente después?

## Hint 2

Hay 7 opciones para presidente y luego 6 para vicepresidente. ¿Los dos puestos son diferentes?

## Solution

**Paso 1.** Cualquiera de los 7 miembros puede ser presidente, así que hay 7 opciones.

**Paso 2.** El vicepresidente tiene que ser otra persona, así que quedan 6 opciones.

**Paso 3.** Multiplica:

$$7 \times 6 = 42$$

**Por qué importa el orden:** supón que Ana es presidenta y Ben es vicepresidente. Eso es diferente a que Ben sea presidente y Ana vicepresidenta, así que contamos los dos.

**Respuesta: (A) 42**
