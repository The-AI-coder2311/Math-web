---
title: "Cuenta lo contrario"
summary: Cuando lo que quieres es complicado pero lo que no quieres es sencillo, cuenta todo y resta.
minutes: 12
---

Una pizzería tiene 6 ingredientes, y puedes ponerle a una pizza cualquier cantidad de ellos, incluso ninguno. ¿Cuántas pizzas tienen al menos un ingrediente? Podrías contar las pizzas con exactamente 1 ingrediente, luego con exactamente 2, y así sucesivamente, pero son seis cuentas separadas. Hay una jugada que lo resuelve en dos líneas.

> **La gran idea:** Si lo que quieres es difícil de contar, cuenta **lo contrario**. Luego réstalo del total.

$$\text{lo que quieres} = \text{total} - \text{lo que no quieres}$$

## Por qué funciona restar

Cada posibilidad es una que quieres o una que no quieres, y nunca las dos. Así que los dos grupos suman el total.

Aquí hay una comprobación pequeña. ¿Cuántos números de 2 dígitos tienen al menos un dígito que sea 9? Hagámoslo de las dos formas.

**Haciendo la lista:** 19, 29, 39, 49, 59, 69, 79, 89, y luego 90, 91, 92, 93, 94, 95, 96, 97, 98, 99. Son 18 números.

**Usando lo contrario:** Hay 90 números de dos dígitos. Los números **sin** ningún 9 tienen 8 opciones para el primer dígito (ni 0 ni 9) y 9 opciones para el segundo (no 9), lo que da $8 \times 9 = 72$. Al restar:

$$90 - 72 = 18$$

Las dos formas coinciden, y la segunda seguiría siendo rápida con números mucho más grandes. Supón que la pregunta fuera sobre números de 5 dígitos. Una lista sería imposible, pero lo contrario solo toma dos multiplicaciones cortas.

Puedes pensarlo como pasar lista. Para saber cuántos estudiantes vinieron, podrías contar a todos en el salón. Pero si solo faltan unos pocos, es más rápido contar los asientos vacíos y restarlos del total del grupo. La misma respuesta, con menos trabajo. El truco está en notar cuál grupo es el pequeño y ordenado.

## Ejemplo 1: La pizza

Volvamos al principio. Para cada uno de los 6 ingredientes, haces una elección: lo pones o no lo pones. Son 2 opciones, 6 veces:

$$2 \times 2 \times 2 \times 2 \times 2 \times 2 = 64$$

Así que hay 64 pizzas en total. Exactamente 1 de ellas no tiene ningún ingrediente. Lo contrario de "al menos un ingrediente" es "ningún ingrediente", así que la respuesta es $64 - 1 = 63$.

## Ejemplo 2: Las palabras "al menos uno"

El código de un candado usa 3 letras, y solo se permiten las letras A, B, C y D. Las letras se pueden repetir. ¿Cuántos códigos tienen al menos una A?

**¿Qué sabemos?** Contarlo directamente significa revisar códigos con una A, con dos A y con tres A.

**¿Qué es lo contrario?** Lo contrario de "al menos una A" es "ninguna A".

- Total de códigos: $4 \times 4 \times 4 = 64$
- Códigos sin A, que solo usan B, C y D: $3 \times 3 \times 3 = 27$

$$64 - 27 = 37$$

Ahora intenta uno. ¿Cuántos números de 3 dígitos tienen al menos un dígito par?

<details class="check"><summary>Ver la respuesta</summary>

Hay 900 números de tres dígitos. Lo contrario es "todos los dígitos impares", y cada dígito tiene 5 opciones, lo que da $5 \times 5 \times 5 = 125$. Así que $900 - 125 = 775$.

</details>

## Ejemplo 3: Mantener separadas a dos personas

Cuatro amigos se forman en fila, pero Ana y Ben no quieren estar uno al lado del otro. ¿Cuántas filas hay?

**¿Qué es lo contrario?** Que Ana y Ben **sí** estén juntos.

- Total de filas: $4! = 24$.
- Para contar las filas donde están juntos, imagina que Ana y Ben están amarrados en un solo bloque. Ahora hay 3 cosas que acomodar: el bloque y los otros 2 amigos. Eso da $3! = 6$ formas. Dentro del bloque, pueden estar en 2 órdenes. Así que hay $6 \times 2 = 12$ filas.

$$24 - 12 = 12$$

Así que 12 filas los mantienen separados. Puedes comprobarlo de otra forma: exactamente la mitad de las filas los tienen juntos, lo cual suena razonable para 4 personas en una fila corta. Con más personas en la fila, estarían separados más seguido que juntos.

## Ejemplo 4: Una pregunta estilo concurso

¿Cuántos números enteros del 100 al 999 tienen al menos dos dígitos iguales?

**¿Qué sabemos?** Los números podrían tener exactamente dos dígitos iguales, como 220 o 303, o tres dígitos iguales, como 777. Contarlos así requiere varios casos.

**¿Qué es lo contrario?** Lo contrario de "al menos dos iguales" es "los tres diferentes".

Ya los contaste en la lección anterior: $9 \times 9 \times 8 = 648$.

Hay 900 números de tres dígitos en total, así que:

$$900 - 648 = 252$$

<section data-box="deeper">

## Para ir más a fondo

Contar lo contrario funciona mejor cuando lo que quieres puede pasar de muchas formas que se traslapan.

**Uno más difícil:** Un código tiene 4 dígitos, cada uno del 1 al 6. ¿Cuántos códigos tienen al menos un par de dígitos vecinos iguales?

**¿Por qué no contar directamente?** Podrían coincidir los primeros dos dígitos, o los dos del medio, o los dos últimos, o varios a la vez. Esos casos se traslapan, y se vuelve un desorden.

**¿Qué es lo contrario?** Que ningún par de vecinos coincida. Eso es fácil de contar, un dígito a la vez:

- Primer dígito: 6 opciones
- Cada dígito siguiente: 5 opciones, porque no puede ser igual al anterior

Así que $6 \times 5 \times 5 \times 5 = 750$ códigos no tienen vecinos iguales. Hay $6^4 = 1296$ códigos en total, así que la respuesta es $1296 - 750 = 546$.

Fíjate que lo contrario de "al menos un par coincide" es "ningún par coincide". No es "exactamente un par no coincide".

Intenta esto. Un código tiene 3 dígitos, cada uno del 1 al 4. ¿Cuántos códigos tienen al menos un par de vecinos iguales?

<details class="check"><summary>Ver la respuesta</summary>

Hay $4^3 = 64$ códigos. Sin vecinos iguales hay $4 \times 3 \times 3 = 36$. Así que $64 - 36 = 28$ tienen vecinos iguales.

</details>

</section>

<section data-box="traps">

## Trampas comunes

**Equivocarse con lo contrario.** Lo contrario de "al menos una A" es "ninguna A". No es "exactamente una A", porque eso deja fuera los códigos con dos o tres A. Pon a prueba tu contrario: ¿cada posibilidad cae exactamente en uno de los dos grupos?

**Usar el total equivocado.** En el problema de 3 dígitos, algunos estudiantes usan 1000 como total. Eso cuenta del 000 al 099, que no son números de 3 dígitos. El total correcto es 900. Usa para tu total las mismas reglas que para tu contrario.

**Contestar lo contrario.** Después de encontrar que 648 números tienen todos sus dígitos diferentes, es fácil marcar 648, sobre todo porque quien escribe el examen seguramente lo pondrá como opción. Siempre regresa y resta.

</section>

<section data-box="strategy">

## Estrategia de concurso

**Cómo reconocerlo:** Busca "al menos uno", "al menos dos", "no todos", "no juntos" o "contiene".

**Una prueba rápida:** Si la forma directa necesita más de dos casos, toma 10 segundos para preguntarte si lo contrario es más corto.

**Cuánto debe tardar:** Unos dos minutos, porque en realidad son dos cuentas cortas.

**Cuidado con las opciones:** Muchas veces aparecen como opciones tanto lo contrario como la respuesta final. Si obtienes un número que está entre las opciones, asegúrate de que ya hiciste la resta.

</section>

<section data-box="connections">

## Conexiones

Esta es la versión de conteo de "1 menos la probabilidad de que no pase", de [Introducción a la probabilidad](/es/pathway/intro-probability/). La vas a usar otra vez en [Smart Counting](/pathway/smart-counting/) (en inglés).

</section>

<section data-box="summary">

## Recuerda esto

- Lo que quieres = el total menos lo que no quieres.
- Lo contrario de "al menos uno" es "ninguno".
- Tu total y tu contrario tienen que seguir las mismas reglas.
- No olvides la resta final.

</section>
