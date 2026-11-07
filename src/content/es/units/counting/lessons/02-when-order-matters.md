---
title: "Cuando el orden importa"
summary: Cuenta filas y ordenamientos, donde cada elección gasta una opción, y descubre por qué funciona n factorial.
minutes: 12
---

Cinco amigos quieren una foto en fila. Quieren una foto de cada fila posible. Si cada foto tarda 10 segundos, ¿cuánto tiempo les tomará? Antes de seguir leyendo, adivina. ¿Será como un minuto? ¿Como una hora?

> **La gran idea:** Cuando acomodas cosas en orden y no puedes repetirlas, las opciones **bajan de una en una** en cada paso. Todavía multiplicas, porque sigue siendo una elección y luego otra.

## Por qué se reducen las opciones

Hagamos la lista completa de un caso pequeño. ¿De cuántas formas pueden formarse en fila 3 amigos, Ana, Ben y Cy?

| Primero | Segundo | Tercero |
|---|---|---|
| Ana | Ben | Cy |
| Ana | Cy | Ben |
| Ben | Ana | Cy |
| Ben | Cy | Ana |
| Cy | Ana | Ben |
| Cy | Ben | Ana |

Hay 6 filas. Mira cómo está hecha la tabla. Hay 3 opciones para el primer lugar. Una vez que esa persona está ahí, solo quedan 2 personas para el segundo lugar, y luego solo 1 para el último. Entonces:

$$3 \times 2 \times 1 = 6$$

Este tipo de producto aparece tan seguido que tiene su propio nombre y símbolo. El número $n!$ se lee "$n$ factorial", y significa multiplicar todos los números enteros desde $n$ hasta 1.

| Factorial | Producto | Valor |
|---|---|---|
| $3!$ | $3 \times 2 \times 1$ | 6 |
| $4!$ | $4 \times 3 \times 2 \times 1$ | 24 |
| $5!$ | $5 \times 4 \times 3 \times 2 \times 1$ | 120 |
| $6!$ | $6 \times 5 \times 4 \times 3 \times 2 \times 1$ | 720 |

Así que $n!$ cuenta las formas de poner en orden $n$ cosas diferentes.

## Ejemplo 1: Las fotos en fila

Volvamos a los 5 amigos. Hay $5! = 120$ filas. A 10 segundos por foto, son $120 \times 10 = 1200$ segundos, que son 20 minutos. ¿Adivinaste tanto? Los factoriales crecen muy rápido. Con 10 amigos habría 3,628,800 filas, y tomar las fotos tardaría más de un año.

## Ejemplo 2: Llenar solo algunos lugares

Un club tiene 8 miembros. Necesita un presidente, un vicepresidente y un tesorero, y nadie puede tener dos puestos. ¿De cuántas formas puede llenar los puestos?

**¿Qué sabemos?** Hay 3 puestos diferentes y 8 personas.

**¿Importa el orden?** Sí. Ana como presidenta y Ben como tesorero es un resultado diferente a Ben como presidente y Ana como tesorera.

No usamos a las 8 personas, así que paramos después de 3 elecciones:

$$8 \times 7 \times 6 = 336$$

Intenta este. En una carrera con 10 corredores, ¿de cuántas formas se pueden repartir las medallas de oro, plata y bronce?

<details class="check"><summary>Ver la respuesta</summary>

Hay 10 opciones para el oro, luego 9 para la plata y luego 8 para el bronce: $10 \times 9 \times 8 = 720$.

</details>

## Ejemplo 3: Sin repetir, con una regla

¿Cuántos números de 3 dígitos tienen todos sus dígitos diferentes?

**¿Qué posición tiene una regla?** El primer dígito no puede ser 0, así que empezamos ahí.

- El primer dígito tiene 9 opciones: del 1 al 9.
- El segundo dígito puede ser cualquiera excepto el primero. Son 10 dígitos menos 1, así que tiene 9 opciones. Fíjate que aquí el 0 vuelve a estar permitido.
- El tercer dígito tiene que ser diferente de los dos primeros, así que tiene 8 opciones.

$$9 \times 9 \times 8 = 648$$

## Ejemplo 4: Una pregunta estilo concurso

Seis estudiantes se sientan en una fila de 6 sillas. Dos de ellos, Dee y Eli, tienen que sentarse en las dos sillas de las orillas. ¿Cuántas formas de sentarse son posibles?

**¿Qué sabemos?** Dos personas tienen una regla, y las otras 4 no.

**¿Cuál es el plan?** Acomoda primero a las personas con regla, y deja que todos los demás llenen el resto.

- Dee y Eli pueden ocupar las dos orillas de 2 formas: Dee a la izquierda o Eli a la izquierda.
- Los otros 4 estudiantes llenan las 4 sillas del medio de $4! = 24$ formas.

Cada forma de acomodar a Dee y Eli se combina con cada forma de acomodar al resto, así que multiplicamos:

$$2 \times 24 = 48$$

<section data-box="deeper">

## Para ir más a fondo

Muchas veces hay más de una buena forma de contar, y obtener la misma respuesta dos veces es la mejor comprobación que tienes.

**Uno más difícil:** Ocho corredores compiten, y los 3 primeros ganan oro, plata y bronce. ¿De cuántas formas se pueden repartir las medallas si Ana tiene que ganar una?

**Una forma:** Elige la medalla de Ana, que tiene 3 opciones. Luego llena las otras dos medallas con los 7 corredores restantes: $7 \times 6 = 42$. Eso da $3 \times 42 = 126$.

**Otra forma:** Cuenta todas las formas y quita las que no incluyen a Ana. Todas las formas: $8 \times 7 \times 6 = 336$. Sin Ana: $7 \times 6 \times 5 = 210$. Y $336 - 210 = 126$.

Los dos métodos coinciden, así que podemos confiar en la respuesta. Fíjate que el primer método empieza con la persona que tiene una regla. Resolver primero la regla hace que los pasos siguientes sean fáciles.

Intenta esto. Seis personas compiten por presidente, vicepresidente y tesorero. ¿De cuántas formas se pueden llenar los puestos si Bo tiene que quedarse con uno?

<details class="check"><summary>Ver la respuesta</summary>

Bo tiene 3 puestos posibles, y los otros dos puestos pueden ir a $5 \times 4 = 20$ parejas de personas en orden. Así que hay $3 \times 20 = 60$ formas.

</details>

</section>

<section data-box="traps">

## Trampas comunes

**No reducir las opciones.** Para 3 medallas entre 10 corredores, la respuesta $10 \times 10 \times 10 = 1000$ está mal. Eso permitiría que un corredor ganara las tres medallas. Pregunta: "¿Se puede usar lo mismo dos veces?". Si no, las opciones se reducen.

**Reducir cuando no se debe.** Un código de casillero de 3 dígitos puede repetir dígitos, así que es $10 \times 10 \times 10$, no $10 \times 9 \times 8$. Lee el problema para ver si se permiten repeticiones.

**Olvidar que el 0 puede regresar.** En el Ejemplo 3, algunos estudiantes escriben $9 \times 8 \times 7$. Pero el segundo dígito tiene 9 opciones, no 8, porque el 0 solo estaba prohibido en el primer lugar.

</section>

<section data-box="strategy">

## Estrategia de concurso

**Cómo reconocerlo:** Busca palabras como "acomodar", "formar en fila", "en una fila", o puestos y premios que son diferentes entre sí.

**La pregunta clave:** ¿Intercambiar a dos personas cambia el resultado? Si sí, el orden importa, y no debes dividir nada.

**Cuánto debe tardar:** Uno o dos minutos. Resuelve primero la regla y luego multiplica. Apréndete de memoria los factoriales hasta $6!$, porque los concursos los usan seguido.

**Descartar respuestas:** La respuesta para una fila de 5 tiene que ser múltiplo de 5, porque 5 es uno de los factores. Puedes tachar cualquier opción que no sea múltiplo de 5.

</section>

<section data-box="connections">

## Conexiones

Esto se basa en [el truco de multiplicar](/es/pathway/counting/01-multiply-choices/). Después vas a ver qué hacer [cuando el orden no importa](/es/pathway/counting/03-overcount-then-divide/). Más adelante, [Smart Counting](/pathway/smart-counting/) (en inglés) resuelve reglas más difíciles.

</section>

<section data-box="summary">

## Recuerda esto

- Sin repeticiones, las opciones bajan de una en una en cada paso.
- $n!$ cuenta las formas de poner en orden $n$ cosas diferentes.
- $3! = 6$, $4! = 24$, $5! = 120$ y $6! = 720$.
- Resuelve primero a las personas o posiciones que tienen reglas.

</section>
