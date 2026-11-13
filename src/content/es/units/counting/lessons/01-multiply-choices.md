---
title: "El truco de multiplicar"
summary: Aprende la idea detrás de la mayoría de los problemas de conteo. Cuando haces elecciones una tras otra, multiplica.
minutes: 12
---

El casillero de una escuela usa un código de 3 dígitos, como 4-0-7. ¿Cuántos códigos diferentes hay?

"Contar" suena demasiado fácil para un concurso de matemáticas, porque aprendiste a contar cuando eras pequeño. Pero nadie quiere escribir todos los códigos posibles del casillero. En esta lección vas a aprender una idea que da la respuesta en segundos.

> **La gran idea:** Cuando haces una elección **y luego** otra, multiplica el número de opciones de cada elección.

## Por qué funciona multiplicar

Tienes 2 camisas (roja y azul) y 3 pantalones (de mezclilla, cortos y de vestir). ¿Cuántos conjuntos puedes formar? Vamos a dibujarlos todos.

![Un diagrama de árbol. La camisa roja se ramifica en pantalón de mezclilla, cortos y de vestir. La camisa azul también se ramifica en pantalón de mezclilla, cortos y de vestir. En total son 6 conjuntos.](/images/counting-outfit-tree.svg)

Mira la forma del árbol. Cada una de las 2 camisas tiene las mismas 3 ramas. Son 2 grupos de 3, y "grupos de" es exactamente lo que significa multiplicar:

$$2 \times 3 = 6$$

Esto funciona porque el número de pantalones no depende de la camisa que elegiste. Cada primera elección lleva al mismo número de segundas elecciones.

## Ejemplo 1: Tres elecciones seguidas

Una heladería tiene 4 sabores, 3 salsas y 2 coberturas. Eliges uno de cada uno. ¿Cuántas copas de helado puedes armar?

**¿Qué sabemos?** Hay tres elecciones separadas, y haces las tres.

**¿Qué pregunta en realidad?** Cuántas copas completas son posibles.

Imagina el árbol otra vez. Cada sabor tiene 3 ramas de salsa, lo que da $4 \times 3 = 12$ ramas. Cada una de esas tiene 2 ramas de cobertura. Entonces hay:

$$4 \times 3 \times 2 = 24$$

Intenta uno antes de seguir. Una tienda vende mochilas en 2 tamaños, 4 colores y 3 diseños. Eliges un tamaño, un color y un diseño. ¿Cuántas mochilas diferentes podrías elegir?

<details class="check"><summary>Ver la respuesta</summary>

Hay $2 \times 4 \times 3 = 24$ mochilas. Es la misma respuesta que la de las copas, porque se multiplican los mismos tres números. El orden en que los multipliques no importa.

</details>

## Ejemplo 2: El código del casillero

Volvamos al principio. Cada uno de los 3 dígitos puede ser cualquiera del 0 al 9, lo que da 10 opciones.

**¿Qué versión más pequeña podemos probar?** Con un código de 1 dígito, hay 10 códigos. Con un código de 2 dígitos, los códigos van del 00 al 99, que son 100. Eso coincide con $10 \times 10 = 100$, así que el truco funciona.

Para 3 dígitos:

$$10 \times 10 \times 10 = 1000$$

Esos códigos son del 000 al 999. Puedes comprobarlo contando: hay 999 números del 1 al 999, y con el código 000 son 1,000.

## Ejemplo 3: Cuando una posición tiene una regla

¿Cuántos números de 3 dígitos tienen solo dígitos pares? Recuerda que un número no puede empezar con 0, o no tendría realmente 3 dígitos.

**¿Qué sabemos?** Los dígitos pares son 0, 2, 4, 6 y 8.

**¿Qué elección tiene una regla?** El primer dígito no puede ser 0, así que lo resolvemos primero.

- El primer dígito tiene 4 opciones: 2, 4, 6 u 8.
- El segundo dígito tiene 5 opciones.
- El tercer dígito también tiene 5 opciones.

$$4 \times 5 \times 5 = 100$$

> **Consejo:** Empieza por la posición que tiene la regla más estricta. Después, las demás suelen ser fáciles de contar.

## Ejemplo 4: Una pregunta estilo concurso

Una placa tiene una letra de la A a la Z, seguida de dos dígitos. Los dos dígitos no pueden ser iguales, y el primer dígito no puede ser 0. ¿Cuántas placas son posibles? (Usa las 26 letras del alfabeto inglés.)

**¿Qué sabemos?** Hay tres elecciones: una letra, un primer dígito y un segundo dígito.

**¿Qué elecciones tienen reglas?** El primer dígito no puede ser 0, así que tiene 9 opciones. El segundo dígito puede ser cualquiera excepto el primero. Eso quita 1 de los 10 dígitos, y quedan 9 opciones. Esta vez el 0 sí se permite, porque solo el primer dígito lo prohíbe.

$$26 \times 9 \times 9 = 2106$$

Fíjate en algo importante. No sabemos **cuál** fue el primer dígito, pero sí sabemos que se descarta **exactamente un** dígito. El número de opciones no cambia, y eso es todo lo que necesita el truco.

<section data-box="deeper">

## Para ir más a fondo

A veces una elección decide por ti un lugar posterior. Cuando eso pasa, ese lugar no tiene opciones propias, así que no entra en la multiplicación.

**Uno más difícil:** Un palíndromo se lee igual de izquierda a derecha y de derecha a izquierda, como 3773. ¿Cuántos palíndromos de cuatro dígitos hay?

**¿Qué se elige realmente?** Una vez que eliges los primeros dos dígitos, los últimos dos ya están decididos, porque tienen que reflejar a los primeros. Así que solo hay dos elecciones:

- Primer dígito: 9 opciones, porque no puede ser 0
- Segundo dígito: 10 opciones
- Tercer y cuarto dígitos: ya decididos

Eso da $9 \times 10 = 90$ palíndromos. Un error común es multiplicar por cuatro lugares. Antes de multiplicar, siempre pregunta: "¿De verdad este lugar es una elección libre?"

Intenta esto. ¿Cuántos palíndromos de cinco dígitos hay?

<details class="check"><summary>Ver la respuesta</summary>

Los primeros tres dígitos deciden el resto, así que hay $9 \times 10 \times 10 = 900$. El dígito del medio es libre, porque se refleja a sí mismo.

</details>

</section>

<section data-box="traps">

## Trampas comunes

**Sumar en lugar de multiplicar.** Con 2 camisas y 3 pantalones, algunos estudiantes contestan $2 + 3 = 5$. Eso cuenta las prendas, no los conjuntos. Suma solo cuando haces una cosa **o** la otra, como elegir una camisa o una gorra. Multiplica cuando haces una cosa **y** la otra.

**Olvidar que un número no puede empezar con 0.** ¿Cuántos números de 2 dígitos hay? Decir $10 \times 10 = 100$ está mal, porque incluye del 00 al 09. La cuenta correcta es $9 \times 10 = 90$, y coincide con la lista del 10 al 99.

**Dejar la regla para el final.** Supón que quieres números impares de 3 dígitos. Si empiezas por el primer dígito e ignoras la regla, es fácil perderse. Elige primero el último dígito, porque tiene que ser impar. Eso da 5 opciones, y luego hay 9 opciones para el primer dígito y 10 para el del medio.

</section>

<section data-box="strategy">

## Estrategia de concurso

**Cómo reconocerlo:** La pregunta dice "cuántos" y describe códigos, conjuntos, números o rutas formados por varias elecciones.

**Cuánto debe tardar:** Las primeras preguntas como esta toman como un minuto. Si te ves escribiendo una lista larga, detente y busca las elecciones.

**Usar las opciones de respuesta:** Multiplicar a menudo deja pistas. Puedes revisar los últimos dígitos: el último dígito de $26 \times 9 \times 9$ viene de $6 \times 1$, así que termina en 6. Si solo una opción termina en 6, ya terminaste.

</section>

<section data-box="connections">

## Conexiones

Después vas a usar este truco para [ordenamientos, cuando el orden importa](/es/pathway/counting/02-when-order-matters/). También es la base de la [probabilidad](/es/pathway/intro-probability/) y, más adelante, de [contar factores](/pathway/primes-remainders/) (en inglés).

</section>

<section data-box="summary">

## Recuerda esto

- Una elección **y luego** otra significa multiplicar.
- Funciona porque cada primera elección lleva al mismo número de segundas elecciones.
- Un número no puede empezar con 0.
- Empieza por la posición que tiene la regla más estricta.

</section>
