---
title: "Haz la lista de los resultados reales"
summary: Dos monedas pueden caer de tres formas, así que ¿por qué cada forma no es un tercio? Aprende a hacer listas de resultados que de verdad son igual de probables, con la tabla de los dos dados.
minutes: 12
---

¿Es más difícil sacar un total de 12 con dos dados, o un total de 7? Cada total parece un resultado entre 11 totales posibles. Así que podrías pensar que son igual de probables. Pero si has jugado un juego de mesa con dados, seguramente sientes que el 7 sale mucho más seguido. Esta lección te muestra exactamente cuánto más, y por qué.

> **La gran idea:** La fórmula solo funciona si los resultados son **igual de probables**. Para tener resultados así, haz como si los objetos fueran diferentes entre sí, como un dado rojo y un dado azul, y haz la lista de **todas** las combinaciones.

## Por qué importa: la trampa de las dos monedas

Lanzas dos monedas. ¿Cuál es la probabilidad de sacar una cara y una cruz?

Mucha gente dice $\frac{1}{3}$, porque parece que hay tres resultados: dos caras, dos cruces o una de cada una. Pongámoslo a prueba. Imagina que una moneda es de un peso y la otra de diez pesos, y haz la lista de lo que puede pasar.

| Moneda de 1 | Moneda de 10 | Resultado |
|---|---|---|
| Cara | Cara | dos caras |
| Cara | Cruz | una de cada una |
| Cruz | Cara | una de cada una |
| Cruz | Cruz | dos cruces |

Hay 4 resultados igual de probables, y 2 de ellos son "una de cada una". Así que la probabilidad es $\frac{2}{4}$, o $\frac{1}{2}$.

¿Por qué tenemos que distinguir las monedas? Son monedas diferentes aunque se vean iguales, y no saben nada una de la otra. Pruébalo tú con 40 lanzamientos de dos monedas. Vas a ver "una de cada una" cerca de la mitad de las veces, no un tercio.

## Ejemplo 1: La tabla de los dos dados

Piensa en un dado rojo y un dado azul. Cada uno de los 6 números del dado rojo puede ir con cada uno de los 6 del azul, así que hay $6 \times 6 = 36$ resultados. Este es cada total:

| Rojo \\ Azul | 1 | 2 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|
| **1** | 2 | 3 | 4 | 5 | 6 | 7 |
| **2** | 3 | 4 | 5 | 6 | 7 | 8 |
| **3** | 4 | 5 | 6 | 7 | 8 | 9 |
| **4** | 5 | 6 | 7 | 8 | 9 | 10 |
| **5** | 6 | 7 | 8 | 9 | 10 | 11 |
| **6** | 7 | 8 | 9 | 10 | 11 | 12 |

Cuenta los 7. Hay 6, así que la probabilidad de un total de 7 es $\frac{6}{36}$, o $\frac{1}{6}$. Solo hay un 12, así que su probabilidad es $\frac{1}{36}$. Sacar 7 es **6 veces** más probable que sacar 12.

La tabla tiene un patrón muy bonito: las cantidades van 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 para los totales del 2 al 12. Esas suman 36.

Usa la tabla para este. ¿Cuál es la probabilidad de sacar un total de 4?

<details class="check"><summary>Ver la respuesta</summary>

La tabla tiene tres 4, así que la probabilidad es $\frac{3}{36}$, o $\frac{1}{12}$. Vienen de que el rojo y el azul muestren 1 y 3, 2 y 2, o 3 y 1.

</details>

## Ejemplo 2: Dobles

¿Cuál es la probabilidad de que dos dados muestren el mismo número?

**¿Qué queremos?** Los resultados iguales van por la diagonal de la tabla: 1 y 1, 2 y 2, hasta 6 y 6. Son 6 de los 36 resultados, así que la probabilidad es $\frac{6}{36}$, o $\frac{1}{6}$.

**Una forma más corta:** Lanza primero el dado rojo. Muestre lo que muestre, el dado azul tiene una probabilidad de $\frac{1}{6}$ de coincidir. Notar eso es mucho más rápido que hacer la lista.

## Ejemplo 3: Tres monedas

Lanzas 3 monedas. ¿Cuál es la probabilidad de sacar exactamente 2 caras?

**¿Cuántos resultados hay?** Cada moneda tiene 2 opciones, así que hay $2 \times 2 \times 2 = 8$. Aquí están, con C para cara y X para cruz: CCC, CCX, CXC, CXX, XCC, XCX, XXC, XXX.

**¿Cuáles queremos?** CCX, CXC y XCC tienen exactamente 2 caras, así que la probabilidad es $\frac{3}{8}$.

Fíjate que el número de caras es otro ejemplo de resultados desiguales: 0, 1, 2 o 3 caras tienen probabilidades de 1, 3, 3 y 1 de cada 8.

## Ejemplo 4: Una pregunta estilo concurso

Lanzas dos dados y multiplicas los números. ¿Cuál es la probabilidad de que el producto sea impar?

**¿Qué pregunta en realidad?** Un producto es impar solo si **los dos** números son impares. Si cualquiera de los dos es par, el producto es par.

**¿Cuántos resultados queremos?** El dado rojo tiene 3 números impares, y el azul tiene 3. Son $3 \times 3 = 9$ resultados.

La probabilidad es $\frac{9}{36}$, o $\frac{1}{4}$. Fíjate que no necesitamos escribir una tabla de 36 productos. Usamos el truco de multiplicar para contar los que queríamos.

<section data-box="deeper">

## Para ir más a fondo

Una vez que hiciste la lista de resultados en una tabla, busca un atajo que explique la respuesta.

**Uno más difícil:** Se lanzan dos dados. ¿Cuál es la probabilidad de que el producto de los números sea par?

**La forma larga:** Llena una tabla de 6 por 6 y cuenta los productos pares. Encontrarías 27 de los 36 resultados.

**Una forma más rápida:** Piensa en cuándo el producto es **impar**. Solo es impar cuando los dos números son impares. Cada dado es impar con probabilidad $\frac{1}{2}$, así que los dos son impares con probabilidad $\frac{1}{4}$.

Así que el producto es par con probabilidad $1 - \frac{1}{4} = \frac{3}{4}$, y eso coincide con $\frac{27}{36}$.

**¿Y la suma?** La suma se comporta diferente. Es par cuando los dos números son impares o los dos son pares, y eso tiene probabilidad $\frac{1}{4} + \frac{1}{4} = \frac{1}{2}$.

Así que los productos tienden a ser pares, y las sumas no. La tabla te muestra la respuesta, y el razonamiento de pares e impares te muestra por qué.

Intenta esto. Usa el mismo razonamiento para revisar la suma. ¿Cuántos de los 36 resultados tienen una suma par?

<details class="check"><summary>Ver la respuesta</summary>

La mitad, o sea 18. Los dos números son impares en 9 resultados, y los dos son pares en otros 9.

</details>

</section>

<section data-box="traps">

## Trampas comunes

**Suponer que los resultados son igual de probables.** En el problema de las dos monedas, la respuesta $\frac{1}{3}$ viene de tratar "una de cada una" como un solo resultado. Pero puede pasar de 2 formas. Cada vez que hagas una lista de resultados, pregunta: "¿Cada uno es igual de probable que los demás?"

**Usar 11 como total para dos dados.** Hay 11 totales posibles, pero ese no es el número de resultados igual de probables. La respuesta para un total de 7 no es $\frac{1}{11}$. El número de abajo es 36.

**Contar 1 y 3 una sola vez.** Un 1 rojo con un 3 azul es diferente de un 3 rojo con un 1 azul. Así que un total de 4 viene de 3 resultados, no de 2.

</section>

<section data-box="strategy">

## Estrategia de concurso

**Cómo reconocerlo:** Dos o más dados, monedas o ruletas. Son comunes las preguntas que mencionan una suma, un producto o "el mismo".

**Aprende el patrón:** Memoriza las cantidades 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1. Así no tendrás que dibujar la tabla en un concurso.

**Revisa el tamaño:** Con dos dados, el número de abajo empieza siendo 36. Con 3 monedas, empieza siendo 8. Si tu total no es lo que da multiplicar las opciones, revisa tu lista.

**Tiempo:** De uno a dos minutos.

</section>

<section data-box="connections">

## Conexiones

Multiplicar las opciones viene del [truco de multiplicar](/es/pathway/counting/01-multiply-choices/). Después vas a ver [árboles para varios pasos](/es/pathway/intro-probability/03-trees-and-multiplying/).

</section>

<section data-box="summary">

## Recuerda esto

- Los resultados tienen que ser igual de probables antes de dividir.
- Haz que los objetos sean diferentes: un dado rojo y un dado azul.
- Dos dados tienen 36 resultados, y dos monedas tienen 4.
- Los totales del 2 al 12 salen 1, 2, 3, 4, 5, 6, 5, 4, 3, 2, 1 veces.
- El 7 es el total más probable.

</section>
