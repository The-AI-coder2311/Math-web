---
title: "Factores, primos y sobrantes"
summary: Los factores vienen en parejas, así que puedes encontrarlos todos sin que se te escape ninguno. Luego ve cómo los primos y los sobrantes encajan en la misma idea.
minutes: 13
---

Supón que tienes 12 mosaicos cuadrados y quieres acomodarlos todos en un rectángulo. ¿Cuántos rectángulos diferentes puedes formar? Intenta dibujarlos. ¿Cómo sabes cuándo ya los encontraste todos?

En realidad, esta es una pregunta sobre **factores**. Un factor de un número es un número entero que lo divide sin que sobre nada. Por ejemplo, 3 es factor de 12, porque $12 \div 3 = 4$.

> **La gran idea:** Los factores vienen en **parejas**. Cada vez que encuentras un factor, también encuentras automáticamente a su pareja. Así que solo tienes que buscar hasta la mitad.

## Por qué los factores vienen en parejas

Estos son los rectángulos que puedes formar con 12 mosaicos:

![Tres rectángulos hechos con 12 mosaicos cuadrados. Uno tiene 1 fila de 12 mosaicos, otro tiene 2 filas de 6 mosaicos y otro tiene 3 filas de 4 mosaicos.](/images/number-sense-tile-rectangles.svg)

Cada rectángulo tiene dos medidas de lado, y esos dos números multiplicados dan 12. Girar el rectángulo los intercambia. Así que cada rectángulo da una **pareja** de factores:

$$1 \times 12 = 12 \qquad 2 \times 6 = 12 \qquad 3 \times 4 = 12$$

Los factores de 12 son 1, 2, 3, 4, 6 y 12. Son 3 parejas, o sea 6 factores.

## Ejemplo 1: Encontrar todos los factores de 24

Para asegurarte de no perder ninguno, empieza en 1 y ve subiendo, anotando cada pareja:

- 1 funciona, y su pareja es 24.
- 2 funciona, y su pareja es 12.
- 3 funciona, y su pareja es 8.
- 4 funciona, y su pareja es 6.
- 5 no funciona.
- 6 ya está en nuestra lista, así que podemos **parar**.

¿Por qué es seguro parar? Una vez que pasas la mitad, el número menor de cualquier pareja ya habría aparecido en tu lista. Así que 24 tiene 4 parejas, o sea 8 factores.

Inténtalo tú. Haz la lista de todos los factores de 30.

<details class="check"><summary>Ver la respuesta</summary>

Las parejas son 1 y 30, 2 y 15, 3 y 10, y 5 y 6. Así que los factores son 1, 2, 3, 5, 6, 10, 15 y 30, que son 8 factores.

</details>

## Ejemplo 2: Cuando un número hace pareja consigo mismo

Ahora prueba con 36. Las parejas son 1 y 36, 2 y 18, 3 y 12, 4 y 9, y luego $6 \times 6 = 36$.

El 6 es su propia pareja, así que solo cuenta una vez. Eso le da a 36 un total de 9 factores, que es un número impar.

Este es un dato que vale la pena recordar: **solo los cuadrados perfectos tienen un número impar de factores**, porque son los únicos números con un factor que hace pareja consigo mismo. Los cuadrados perfectos son 1, 4, 9, 16, 25, 36, y así sucesivamente. En cualquier otro número, todos los factores vienen en parejas, así que el total es par.

## Ejemplo 3: Números con una sola pareja

Algunos números tienen una sola pareja de factores: 1 y el número mismo. Por ejemplo, la única pareja del 7 es 1 y 7. A estos se les llama **números primos**. Los primeros primos son 2, 3, 5, 7, 11, 13, 17, 19, 23 y 29.

¿Cómo puedes saber si un número es primo? Usa la idea de las parejas. ¿91 es primo? Si tiene una pareja de factores, el número menor de la pareja no puede ser mayor que 9, porque $10 \times 10 = 100$ ya es demasiado. Así que solo necesitamos probar dividir entre los primos 2, 3, 5 y 7. Pruébalos y vas a encontrar que $91 = 7 \times 13$. Así que 91 no es primo, aunque parezca que sí.

## Ejemplo 4: Los sobrantes son factores disfrazados

Omar reparte 23 calcomanías en partes iguales entre algunos amigos, y le sobran 3. ¿Cuántos amigos podría haber?

**¿Qué sabemos?** Después de apartar las 3 que sobran, el resto se repartió exactamente. Son $23 - 3 = 20$ calcomanías.

**¿Qué pregunta en realidad?** El número de amigos tiene que ser factor de 20: 1, 2, 4, 5, 10 o 20.

**¿Hay alguna trampa?** Sí. Con 1, 2 o 3 amigos, las 3 calcomanías que sobran todavía se podrían repartir, así que no serían sobrantes. Tiene que haber más de 3 amigos, lo que deja 4, 5, 10 o 20.

## Ejemplo 5: Una pregunta estilo concurso

¿Cuántos números enteros del 1 al 50 tienen un número impar de factores?

**¿Por dónde empezamos?** Revisa algunos. El 1 tiene 1 factor, el 2 tiene 2 factores, el 3 tiene 2 factores y el 4 tiene 3 factores (1, 2 y 4). Los que tienen una cantidad impar son 1, 4, 9, y así sucesivamente.

**¿Cuál es el dato clave?** Solo los cuadrados perfectos tienen un número impar de factores. Así que hay que contar los cuadrados perfectos hasta 50: 1, 4, 9, 16, 25, 36 y 49. Son 7 números.

Fíjate cómo una pregunta que parecía de 50 revisiones separadas se convirtió en una cuenta corta, porque entendimos **por qué** se cumple el patrón.

<section data-box="deeper">

## Para ir más a fondo

Las parejas de factores pueden resolver un acertijo que parece no tener nada que ver con factores.

**Uno más difícil:** Un pasillo tiene 100 casilleros cerrados, numerados del 1 al 100. El estudiante 1 abre todos los casilleros. El estudiante 2 cambia cada 2.º casillero: lo abre si está cerrado y lo cierra si está abierto. El estudiante 3 cambia cada 3.er casillero, y así hasta el estudiante 100. ¿Cuántos casilleros quedan abiertos al final?

**¿Quién toca el casillero 12?** Los estudiantes 1, 2, 3, 4, 6 y 12. Esos son los factores de 12. Así que cada casillero se toca una vez por cada factor.

**¿Cuándo queda abierto un casillero?** Empieza cerrado, así que necesita un número **impar** de toques.

**¿Qué números tienen un número impar de factores?** Los factores vienen en parejas, como 3 y 4 para el 12. Una pareja solo falla cuando un número hace pareja consigo mismo, como en $6 \times 6 = 36$. Así que solo los cuadrados perfectos tienen un número impar de factores.

Los casilleros abiertos son 1, 4, 9, 16, 25, 36, 49, 64, 81 y 100. Son **10** casilleros.

Intenta esto. ¿Cuántos casilleros quedan abiertos si hay 200?

<details class="check"><summary>Ver la respuesta</summary>

Necesitamos los cuadrados perfectos hasta 200. Como $14 \times 14 = 196$ y $15 \times 15 = 225$, hay 14.

</details>

</section>

<section data-box="traps">

## Trampas comunes

**Decir que el 1 es primo.** Un primo tiene exactamente 2 factores diferentes, y el 1 solo tiene uno. Así que el 1 no es primo. Y el 2 sí es primo, aunque sea par. Es el único primo par.

**Confiar en cómo se ve un número.** Números como 51, 57 y 91 parecen primos, pero no lo son: $51 = 3 \times 17$, $57 = 3 \times 19$ y $91 = 7 \times 13$. Usa la prueba de la suma de dígitos para el 3, y prueba con el 7.

**Olvidar el 1 y el número mismo.** Cuando les piden los factores de 12, algunos estudiantes escriben 2, 3, 4 y 6, y contestan 4. Pero 1 y 12 también son factores, así que son 6.

</section>

<section data-box="strategy">

## Estrategia de concurso

**Cómo reconocerlo:** Busca "factor", "divisor", "primo", "rectángulo con área", "filas" o "sobran".

**Cuánto debe tardar:** Como un minuto para hacer la lista de factores de un número menor que 100. Para números más grandes, hay una forma más rápida en el Nivel 2.

**Usar las opciones de respuesta:** Si un problema dice que la respuesta es un número primo, tacha las opciones que son pares o que pasan la prueba de la suma de dígitos para el 3.

</section>

<section data-box="connections">

## Conexiones

Las [reglas de divisibilidad](/es/pathway/number-sense/03-divisibility-rules/) aceleran la búsqueda de factores. [Primes & Remainders](/pathway/primes-remainders/) (en inglés) muestra cómo los primos te dejan contar factores sin hacer la lista.

</section>

<section data-box="summary">

## Recuerda esto

- Los factores vienen en parejas, así que para cuando las parejas empiecen a repetirse.
- Solo los cuadrados perfectos tienen un número impar de factores.
- Un primo tiene exactamente 2 factores, y el 1 no es primo.
- Para probar si un número es primo, solo necesitas probar los primos hasta la mitad.
- Sobrantes: réstalos y luego busca factores.

</section>
