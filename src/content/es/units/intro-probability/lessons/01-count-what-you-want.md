---
title: "Cuenta lo que quieres"
summary: La probabilidad es contar dos veces. Cuenta los resultados que quieres, cuenta todos los resultados y divide.
minutes: 11
---

Tienes una bolsa con 3 canicas rojas y 7 azules. Sin ver, sacas una canica. Todos están de acuerdo en que el azul es más probable. Pero ¿qué tan más probable? La probabilidad es la parte de las matemáticas que le pone un número exacto, y la buena noticia es que ya sabes casi todo lo que necesitas, porque se basa en contar.

> **La gran idea:** Cuando todos los resultados son igual de probables, la probabilidad de algo es el número de resultados que quieres dividido entre el número total de resultados.

$$\text{Probabilidad} = \frac{\text{resultados que quieres}}{\text{total de resultados}}$$

## Por qué tiene sentido dividir

Imagina que sacas una canica de esa bolsa y la regresas, una y otra vez, 1,000 veces. Como cada canica es igual de probable, cada una sale más o menos el mismo número de veces. Así que como 3 de cada 10 veces saldrá roja. Eso es lo que significa una probabilidad de $\frac{3}{10}$: la parte de las veces en que esperarías que pase, a la larga.

Una probabilidad siempre está entre 0 y 1:

| Probabilidad | Qué significa | Ejemplo con un dado de 6 caras |
|---|---|---|
| 0 | No puede pasar | Sacar un 7 |
| $\frac{1}{6}$ | Pasa 1 vez de cada 6, en promedio | Sacar un 3 |
| $\frac{1}{2}$ | Es igual de probable que pase o que no | Sacar un número par |
| 1 | Tiene que pasar | Sacar un número menor que 7 |

Si alguna vez te da una probabilidad mayor que 1, algo salió mal.

## Ejemplo 1: Un dado

Lanzas un dado de 6 caras. ¿Cuál es la probabilidad de sacar un número mayor que 2?

**¿Cuáles son todos los resultados?** 1, 2, 3, 4, 5 y 6. Son 6 resultados igual de probables.

**¿Cuáles queremos?** 3, 4, 5 y 6. Son 4 resultados.

La probabilidad es $\frac{4}{6}$, que se simplifica a $\frac{2}{3}$.

Ahora te toca. Una ruleta tiene 10 secciones iguales, numeradas del 1 al 10. ¿Cuál es la probabilidad de caer en un múltiplo de 4?

<details class="check"><summary>Ver la respuesta</summary>

Los múltiplos de 4 del 1 al 10 son 4 y 8. Son 2 resultados de 10, así que la probabilidad es $\frac{2}{10}$, o $\frac{1}{5}$.

</details>

## Ejemplo 2: Una bolsa con cantidades diferentes

Un frasco tiene 5 dulces rojos, 3 verdes y 2 amarillos. Sacas uno sin ver. ¿Cuál es la probabilidad de que sea verde?

**¿Cuáles son todos los resultados?** Este es el paso clave. Los resultados no son "rojo, verde o amarillo". ¡Esos tres no son igual de probables! Cada **dulce** es un resultado, y hay $5 + 3 + 2 = 10$ dulces.

**¿Cuáles queremos?** Los 3 verdes. Así que la probabilidad es $\frac{3}{10}$.

## Ejemplo 3: La probabilidad de que no pase

Si la probabilidad de lluvia es $\frac{3}{10}$, ¿cuál es la probabilidad de que no llueva?

Algo pasa o no pasa, y esas dos probabilidades suman 1, así que:

$$1 - \frac{3}{10} = \frac{7}{10}$$

Con el frasco: 3 de cada 10 dulces son verdes, así que 7 de cada 10 no lo son.

## Ejemplo 4: Usar más conteo

En un sombrero hay tarjetas numeradas del 1 al 30, y sacas una. ¿Cuál es la probabilidad de que el número sea un cuadrado perfecto?

**¿Cuáles son todos los resultados?** Hay 30 tarjetas.

**¿Cuáles queremos?** Los cuadrados perfectos hasta 30 son 1, 4, 9, 16 y 25. Son 5 tarjetas.

La probabilidad es $\frac{5}{30}$, o $\frac{1}{6}$.

## Ejemplo 5: Una pregunta estilo concurso

Cada letra de la palabra PROBABILIDAD se escribe en su propia tarjeta, y las tarjetas se ponen en una caja. Sacas una. ¿Cuál es la probabilidad de que sea una vocal?

**¿Cuáles son todos los resultados?** La palabra tiene 12 letras, así que hay 12 tarjetas. Las letras repetidas cuentan como tarjetas separadas, porque cada tarjeta es su propio resultado.

**¿Cuáles queremos?** Las vocales son O, A, I, I y A. Son 5 tarjetas.

La probabilidad es $\frac{5}{12}$.

**¿Y si cambias la pregunta?** Si preguntara la probabilidad de sacar una B, tendrías que notar que la B aparece dos veces. Eso es $\frac{2}{12}$, o $\frac{1}{6}$, y contar solo una de ellas es un error común.

<section data-box="deeper">

## Para ir más a fondo

Contar los resultados que quieres puede incluir un traslape, así que cuidado con lo que se cuenta dos veces.

**Uno más difícil:** Se elige al azar un número entero del 1 al 100. ¿Cuál es la probabilidad de que sea múltiplo de 3 o múltiplo de 5?

**Cuenta cada grupo:**

- Múltiplos de 3: hay 33, porque $3 \times 33 = 99$.
- Múltiplos de 5: hay 20, porque $5 \times 20 = 100$.

**¿Qué se contó dos veces?** Los números que son múltiplos de los dos, como 15 y 30. Son los múltiplos de 15, y hay 6, porque $15 \times 6 = 90$.

**Corrige la cuenta:** $33 + 20 - 6 = 47$ números cumplen.

Así que la probabilidad es $\frac{47}{100}$.

**¿Por qué restar y no ignorarlo?** Los 6 números que se traslapan están en las dos listas, así que al sumar las listas cada uno se cuenta dos veces. Queremos contar cada uno una vez, así que quitamos una copia de ellos. Vas a ver más sobre esto en [Overlaps](/pathway/smart-counting/01-overlaps/) (en inglés).

Intenta esto. Se elige al azar un número del 1 al 30. ¿Cuál es la probabilidad de que sea múltiplo de 2 o de 3?

<details class="check"><summary>Ver la respuesta</summary>

Hay 15 múltiplos de 2, 10 múltiplos de 3 y 5 múltiplos de 6. Así que $15 + 10 - 5 = 20$ cumplen, y la probabilidad es $\frac{20}{30} = \frac{2}{3}$.

</details>

</section>

<section data-box="traps">

## Trampas comunes

**Usar categorías como resultados.** Con el frasco del Ejemplo 2, decir "hay 3 colores, así que el verde tiene probabilidad $\frac{1}{3}$" está mal. Los colores no son igual de probables, porque el frasco tiene cantidades diferentes de cada uno. Cuenta dulces, no colores.

**Olvidar incluir en el total lo que quieres.** Con 3 canicas rojas y 7 azules, la probabilidad de roja es $\frac{3}{10}$, no $\frac{3}{7}$. El número de abajo son **todos** los resultados, incluidos los que quieres.

**No simplificar cuando las opciones están simplificadas.** Si te da $\frac{4}{6}$ y no lo ves entre las opciones, busca $\frac{2}{3}$. Es el mismo número.

</section>

<section data-box="strategy">

## Estrategia de concurso

**Cómo reconocerlo:** Busca "probabilidad", "posibilidad", "al azar" o "sin ver".

**Revisa primero el de abajo:** Antes de contar lo que quieres, encuentra el total. A veces todas las opciones tienen números de abajo diferentes, y puedes descartar algunas de inmediato.

**Revisa que tenga sentido:** ¿Va a pasar más o menos de la mitad de las veces? Si es raro, tacha las opciones mayores que $\frac{1}{2}$.

**Tiempo:** Menos de un minuto para problemas directos como estos.

</section>

<section data-box="connections">

## Conexiones

La probabilidad se basa en el [Conteo](/es/pathway/counting/). Después vas a ver cómo [hacer la lista de los resultados reales](/es/pathway/intro-probability/02-list-the-real-outcomes/), porque ahí se esconden las trampas.

</section>

<section data-box="summary">

## Recuerda esto

- Probabilidad = lo que quieres ÷ total, si los resultados son igual de probables.
- Siempre está entre 0 y 1.
- Cuenta cada objeto, no cada categoría.
- El total incluye lo que quieres.
- Probabilidad de "no" = 1 menos la probabilidad.

</section>
