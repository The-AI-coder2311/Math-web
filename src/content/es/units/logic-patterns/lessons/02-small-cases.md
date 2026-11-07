---
title: "Prueba en pequeño y luego pregunta por qué"
summary: Cuando un problema parece enorme, resuelve versiones diminutas y busca un patrón. Luego encuentra la razón, porque los patrones pueden engañarte.
minutes: 13
---

En una fiesta, diez personas se dan la mano entre sí una vez cada pareja. ¿Cuántos apretones de manos son? Tratar de imaginar a las 10 personas a la vez es abrumador. Así que no lo hagas. Empieza con una fiesta de 2, luego de 3, luego de 4, y mira qué pasa.

> **La gran idea:** Cuando un problema parece demasiado grande, prueba **versiones diminutas** y busca un patrón. Luego pregunta **por qué** pasa ese patrón, porque un patrón sin razón es solo una suposición.

## Probarlo con los apretones de manos

Haz una tabla, empezando lo más pequeño posible:

| Personas | Apretones | Cómo creció |
|---|---|---|
| 2 | 1 | |
| 3 | 3 | sumó 2 |
| 4 | 6 | sumó 3 |
| 5 | 10 | sumó 4 |

**¿Por qué crece así?** Cuando llega una persona nueva, le da la mano a todos los que ya están. Así que la 5.ª persona agrega 4 apretones, y la 10.ª persona agrega 9. Eso significa:

$$1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45$$

Aquí hay una segunda forma de verlo. Cada una de las 10 personas da 9 apretones, y $10 \times 9 = 90$. Pero eso cuenta cada apretón dos veces, una por cada persona, así que hay $90 \div 2 = 45$ apretones. Dos métodos diferentes dieron la misma respuesta, lo que es una excelente prueba de que está bien.

## Por qué no puedes confiar solo en un patrón

Pon puntos en un círculo, une cada pareja con líneas rectas y cuenta las regiones de adentro. (Coloca los puntos de modo que nunca se crucen tres líneas en el mismo punto.) Esto es lo que pasa:

| Puntos | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| Regiones | 1 | 2 | 4 | 8 | 16 | 31 |

Parece que se duplica, pero ¡el siguiente número es 31, no 32! Así que un patrón es una pista, no una prueba. En un concurso con tiempo, está bien elegir una respuesta basada en un patrón fuerte. Pero cuando tengas tiempo, busca la razón.

## Ejemplo 1: Sumar rápido los primeros números

¿Cuánto es $1 + 2 + 3 + \cdots + 100$?

**¿Qué versión más pequeña podemos probar?** Prueba con $1 + 2 + 3 + 4$. Escríbelo hacia adelante y hacia atrás, y suma cada columna:

| | | | | |
|---|---|---|---|---|
| Adelante | 1 | 2 | 3 | 4 |
| Atrás | 4 | 3 | 2 | 1 |
| Suma | 5 | 5 | 5 | 5 |

Hay 4 columnas de 5, lo que da 20. Pero escribimos la lista dos veces, así que la respuesta es la mitad: 10.

**En grande:** Con los números del 1 al 100, hay 100 columnas de 101. Así que:

$$\frac{100 \times 101}{2} = 5050$$

Esto también explica los apretones de manos: $\frac{9 \times 10}{2} = 45$.

## Ejemplo 2: Por qué los impares forman cuadrados

¿Cuánto es $1 + 3 + 5 + 7$? Mira lo que pasa al acomodar puntos en cuadrados:

![Cuadrados de puntos que crecen con una forma de L. Un punto, luego al agregar 3 puntos se forman 4, al agregar 5 puntos se forman 9, y al agregar 7 puntos se forman 16.](/images/logic-odd-squares.svg)

Cada nueva L de puntos agrega el siguiente número impar y forma un cuadrado más grande. Así que la suma de los primeros 4 impares es $4 \times 4 = 16$, y los primeros 10 impares suman $10 \times 10 = 100$. El dibujo muestra **por qué**, así que puedes confiar en esto para cualquier longitud.

Ahora intenta uno. ¿Cuál es la suma de los primeros 7 números impares?

<details class="check"><summary>Ver la respuesta</summary>

Los primeros 7 impares forman un cuadrado de 7 por 7 puntos: $7 \times 7 = 49$. Puedes comprobarlo: $1 + 3 + 5 + 7 + 9 + 11 + 13 = 49$.

</details>

## Ejemplo 3: Un acertijo del último dígito

¿Cuál es el último dígito de $2^{100}$? Es 2 multiplicado por sí mismo 100 veces, demasiado grande para escribirlo.

**¿Qué versión más pequeña podemos probar?** Encuentra las primeras potencias y fíjate solo en el último dígito: 2, 4, 8, 16, 32, 64, 128, 256. Los últimos dígitos van 2, 4, 8, 6, 2, 4, 8, 6.

**¿Por qué se repite?** El último dígito de un producto solo depende de los últimos dígitos que multiplicas, así que cuando un último dígito regresa, todo lo que sigue se repite.

El ciclo tiene 4 dígitos, y 100 es múltiplo de 4. Un residuo de 0 significa el último elemento del ciclo, así que el último dígito es **6**.

## Ejemplo 4: Una pregunta estilo concurso

Una cuadrícula cuadrada tiene 3 filas y 3 columnas de cuadritos. ¿Cuántos cuadrados de todos los tamaños puedes encontrar? ¿Y en una cuadrícula de 10 filas y 10 columnas?

**¿Qué versión más pequeña podemos probar?** Contemos en algunas cuadrículas.

- Una cuadrícula de 1 por 1 tiene 1 cuadrado.
- Una de 2 por 2 tiene 4 cuadritos y 1 grande, en total 5.
- Una de 3 por 3 tiene 9 cuadritos, 4 cuadrados de tamaño 2 y 1 de tamaño 3, en total 14.

**¿Lo ves?** Los totales son 1, luego $1 + 4$, luego $1 + 4 + 9$. Estamos sumando cuadrados perfectos.

**¿Por qué?** Un cuadrado de tamaño 2 en una cuadrícula de 3 por 3 se puede mover a 2 posiciones a lo ancho y 2 hacia abajo, lo que da $2 \times 2 = 4$ lugares. Esa razón sirve para cualquier tamaño. Así que una cuadrícula de 10 por 10 tiene:

$$1 + 4 + 9 + 16 + 25 + 36 + 49 + 64 + 81 + 100 = 385$$

<section data-box="deeper">

## Para ir más a fondo

Los casos pequeños te ayudan a encontrar un patrón, pero un patrón no es una prueba. Aquí hay uno que funciona y uno que falla.

**Uno más difícil:** Traza líneas rectas que crucen un círculo de modo que cada pareja de líneas se cruce adentro, y nunca se crucen tres en un mismo punto. ¿Cuántas regiones forman 5 líneas?

| Líneas | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| Regiones | 2 | 4 | 7 | 11 |

**¿Cuál es el patrón?** Los saltos son 2, 3 y 4. Así que 5 líneas agregan 5 regiones más: $11 + 5 = 16$.

**¿Por qué se cumple?** La 5.ª línea cruza las 4 líneas anteriores, así que pasa por 5 regiones y parte cada una en dos. Así que el patrón tiene una razón detrás.

**Ahora una advertencia.** Pon puntos en un círculo, une cada pareja con una línea y cuenta las regiones. Con 1, 2, 3, 4 y 5 puntos obtienes 1, 2, 4, 8 y 16. Seguro que con 6 puntos son 32, ¿verdad? En realidad son **31**. Un patrón sin una razón detrás puede fallar.

Así que cuando encuentres un patrón, pregunta por qué debería continuar.

Intenta esto. ¿Cuántas regiones forman 6 líneas?

<details class="check"><summary>Ver la respuesta</summary>

La 6.ª línea agrega 6 regiones más, así que $16 + 6 = 22$.

</details>

</section>

<section data-box="traps">

## Trampas comunes

**Confiar en muy pocos casos.** La lista 2, 4, ... podría seguir con 6 o con 8. Necesitarías más términos para saberlo. Prueba por lo menos 4 casos pequeños antes de buscar un patrón.

**Quedarte en la tabla.** Muchas veces los estudiantes encuentran un patrón y lo extienden mal porque no saben la razón. Si sabes por qué la 10.ª persona agrega 9 apretones, no vas a sumar 10 por error.

**Contar los apretones dos veces.** La respuesta 90 en el problema de los apretones cuenta cada apretón una vez por cada persona. Un apretón necesita 2 personas, así que tienes que dividir entre 2.

</section>

<section data-box="strategy">

## Estrategia de concurso

**Cómo reconocerlo:** Busca números enormes, como $2^{100}$, o un tamaño que parece imposible de dibujar, como una cuadrícula de 10 por 10.

**Elige casos diminutos:** Usa 1, 2, 3 y 4. Acomódalos en una tabla para ver cómo cambia cada fila.

**Tiempo:** De dos a tres minutos. Los casos pequeños toman menos tiempo del que crees, y también son una gran forma de comprobar una respuesta que ya encontraste.

**Usar las opciones de respuesta:** Si tienes una fórmula en mente, pruébala en un caso diminuto que puedas contar a mano antes de usarla.

</section>

<section data-box="connections">

## Conexiones

La suma del Ejemplo 1 cuenta [parejas, con combinaciones de 2](/es/pathway/counting/03-overcount-then-divide/). La idea del último dígito regresa en [Primes & Remainders](/pathway/primes-remainders/) (en inglés).

</section>

<section data-box="summary">

## Recuerda esto

- ¿Demasiado grande? Prueba versiones diminutas, en una tabla.
- Pregunta por qué pasa el patrón.
- $1 + 2 + \cdots + n$ es igual a $n \times (n + 1)$ dividido entre 2.
- Los primeros $n$ números impares suman $n \times n$.
- Un patrón es una pista, no una prueba.

</section>
