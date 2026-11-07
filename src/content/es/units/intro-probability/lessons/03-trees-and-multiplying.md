---
title: "Diagramas de árbol y multiplicar"
summary: Dibuja un árbol para probabilidades de varios pasos. Multiplica a lo largo de un camino, suma entre caminos, y toma en cuenta lo que cambia cuando no regresas una canica.
minutes: 13
---

Sacas 2 canicas de una bolsa con 3 rojas y 2 azules, y no regresas la primera. ¿Qué probabilidad hay de que las dos sean rojas? Parece que la probabilidad debería ser $\frac{3}{5}$ cada vez. Pero después de sacar la primera canica, la bolsa cambió. Un diagrama de árbol lleva la cuenta exacta de lo que pasa en cada paso.

> **La gran idea:** Para probabilidades de varios pasos, dibuja un **árbol**. **Multiplica** a lo largo de un camino para obtener la probabilidad de ese camino completo. **Suma** los caminos que quieres.

## Por qué funciona multiplicar

Supón que lanzas una moneda y luego un dado. ¿Qué probabilidad hay de sacar cara y luego un 6? Imagina que lo haces 120 veces. Más o menos la mitad de las veces, 60, vas a sacar cara. De esas 60, como una sexta parte, o 10 veces, también tendrán un 6. Así que pasa 10 veces de 120, que es:

$$\frac{1}{2} \times \frac{1}{6} = \frac{1}{12}$$

Multiplicar fracciones significa "una fracción de una fracción". Estamos encontrando $\frac{1}{6}$ **de** la $\frac{1}{2}$ de las veces en que sale cara. Es la misma razón por la que funciona el truco de multiplicar al contar.

Cuando un resultado no afecta a otro, como con una moneda y un dado, decimos que los dos eventos son **independientes**. Una moneda no tiene memoria, así que incluso después de 5 caras seguidas, el siguiente lanzamiento sigue siendo $\frac{1}{2}$. Mucha gente siente que ya "le toca" a la cruz, pero la moneda no sabe lo que pasó antes.

## Ejemplo 1: Las canicas, con un árbol

Aquí está cada camino para sacar 2 canicas de una bolsa con 3 rojas y 2 azules, sin regresar la primera.

![Un diagrama de árbol para sacar 2 canicas de una bolsa con 3 rojas y 2 azules. La primera es roja con probabilidad de 3 quintos, o azul con probabilidad de 2 quintos. Después de una roja, la segunda es roja 2 cuartos o azul 2 cuartos. Después de una azul, la segunda es roja 3 cuartos o azul 1 cuarto. Los cuatro caminos tienen probabilidades de 6, 6, 6 y 2 veinteavos.](/images/probability-tree.svg)

Mira el segundo paso. Después de sacar una canica roja, quedan 4 canicas, y solo 2 son rojas. Por eso la rama dice $\frac{2}{4}$. Para que las dos sean rojas, sigue el camino de arriba:

$$\frac{3}{5} \times \frac{2}{4} = \frac{6}{20} = \frac{3}{10}$$

Este es un buen hábito: todos los caminos deben sumar 1, y así es: $\frac{6}{20} + \frac{6}{20} + \frac{6}{20} + \frac{2}{20} = 1$. Si no suman 1, algo está mal.

## Ejemplo 2: Sumar caminos

Con el mismo árbol, ¿cuál es la probabilidad de sacar una canica de cada color?

**¿Qué caminos queremos?** Roja y luego azul, o azul y luego roja. Son dos caminos, cada uno con $\frac{6}{20}$.

$$\frac{6}{20} + \frac{6}{20} = \frac{12}{20} = \frac{3}{5}$$

Multiplica **a lo largo** de un camino, porque es un paso **y luego** otro. Suma **entre** caminos, porque es un camino **o** el otro.

Ahora intenta uno. Una bolsa tiene 2 canicas rojas y 2 azules. Sacas 2 sin regresar la primera. ¿Cuál es la probabilidad de que las dos sean azules?

<details class="check"><summary>Ver la respuesta</summary>

La primera es azul con probabilidad $\frac{2}{4}$. Luego quedan 3 canicas, con 1 azul, así que la segunda es azul con probabilidad $\frac{1}{3}$. Multiplica: $\frac{2}{4} \times \frac{1}{3} = \frac{2}{12} = \frac{1}{6}$.

</details>

## Ejemplo 3: Regresarla o no

Una caja tiene 4 pilas buenas y 1 pila descargada. ¿Cuál es la probabilidad de sacar 2 pilas buenas seguidas? Resuélvelo de las dos formas.

**Regresando la primera:** La caja es la misma en cada sacada, así que $\frac{4}{5} \times \frac{4}{5} = \frac{16}{25}$.

**Sin regresarla:** Después de sacar una buena, 3 de las 4 que quedan son buenas, así que $\frac{4}{5} \times \frac{3}{4} = \frac{3}{5}$.

Son respuestas diferentes. Lee el problema con cuidado para ver de cuál se trata.

## Ejemplo 4: Una pregunta estilo concurso

La ruleta A cae en 1, 2 o 3, cada uno igual de probable. La ruleta B cae en 1 o 2, cada uno igual de probable. Giras las dos y sumas. ¿Cuál es la probabilidad de que la suma sea par?

**¿Cómo podemos contar?** Un árbol tiene $3 \times 2 = 6$ caminos igual de probables, así que hagamos la lista de las sumas.

| A \\ B | 1 | 2 |
|---|---|---|
| **1** | 2 | 3 |
| **2** | 3 | 4 |
| **3** | 4 | 5 |

Las sumas pares son 2, 4 y 4, que son 3 de las 6. Así que la probabilidad es $\frac{1}{2}$.

**¿Por qué es exactamente la mitad?** Muestre lo que muestre la ruleta A, la ruleta B es impar la mitad de las veces y par la otra mitad, así que ella decide si la suma es par. Notar una razón así puede ahorrarte mucho tiempo.

<section data-box="deeper">

## Para ir más a fondo

Aquí hay un dato sorprendente que un árbol puede demostrar: cuando sacas sin regresar, la segunda sacada tiene la misma probabilidad que la primera, si no sabes cómo salió la primera.

**Uno más difícil:** Una bolsa tiene 3 canicas rojas y 2 azules. Sacas dos, sin regresar la primera. ¿Cuál es la probabilidad de que la **segunda** canica sea roja?

**Parece que depende de la primera sacada.** Así que usa un árbol con los dos caminos que terminan en rojo:

- Roja y luego roja: $\frac{3}{5} \times \frac{2}{4} = \frac{6}{20}$
- Azul y luego roja: $\frac{2}{5} \times \frac{3}{4} = \frac{6}{20}$

Suma los caminos: $\frac{6}{20} + \frac{6}{20} = \frac{12}{20} = \frac{3}{5}$.

¡Es la misma probabilidad de que la **primera** canica sea roja!

**¿Por qué?** Imagina que acomodas las 5 canicas en una fila al azar. Cualquier canica es igual de probable en el primer lugar y en el segundo. Así que cada lugar tiene una probabilidad de $\frac{3}{5}$ de ser rojo. La probabilidad solo cambia cuando **sabes** lo que salió en la primera sacada.

Intenta esto. Una bolsa tiene 4 canicas rojas y 1 azul. Sacas dos sin regresar. ¿Qué probabilidad hay de que la segunda sea azul?

<details class="check"><summary>Ver la respuesta</summary>

El único camino es roja y luego azul: $\frac{4}{5} \times \frac{1}{4} = \frac{1}{5}$. Coincide con la probabilidad de azul en la primera sacada.

</details>

</section>

<section data-box="traps">

## Trampas comunes

**Olvidar que la bolsa cambia.** Para que las dos sean rojas sin regresar la primera, la respuesta $\frac{3}{5} \times \frac{3}{5} = \frac{9}{25}$ está mal. Una vez que sale una roja, hay menos canicas y menos rojas. Actualiza los dos números.

**"Ya le toca a la cruz".** Después de varias caras seguidas, el siguiente lanzamiento sigue siendo $\frac{1}{2}$. Este error es tan común que tiene nombre: la **falacia del jugador**. Una moneda no se equilibra a corto plazo.

**Sumar a lo largo de un camino.** Para encontrar la probabilidad de roja y luego roja, algunos estudiantes suman $\frac{3}{5} + \frac{2}{4}$. Eso da más de 1, lo cual es imposible. Si una probabilidad sale mayor que 1, probablemente sumaste cuando debías multiplicar.

</section>

<section data-box="strategy">

## Estrategia de concurso

**Cómo reconocerlo:** Busca una secuencia de eventos: "luego", "sin regresar", "dos seguidas" o "la primera ... la segunda ...".

**No siempre dibujes el árbol completo.** Dibuja solo los caminos que quieres. Si solo hay un camino, puedes escribirlo como una sola línea de multiplicación.

**Descarta:** La probabilidad de que pasen dos cosas tiene que ser menor que la probabilidad de cualquiera de las dos sola.

**Tiempo:** Dos minutos, o menos si solo hay un camino.

</section>

<section data-box="connections">

## Conexiones

Esta es la versión de probabilidad del [truco de multiplicar](/es/pathway/counting/01-multiply-choices/). En el Nivel 2, [Averages, Data & Chance](/pathway/data-chance/) (en inglés) usa árboles más grandes.

</section>

<section data-box="summary">

## Recuerda esto

- Multiplica a lo largo de un camino y suma entre caminos.
- Todos los caminos de un árbol suman 1.
- Las monedas no tienen memoria. Las bolsas sí, si no regresas las cosas.
- Actualiza el número de arriba y el de abajo después de cada sacada.
- Una probabilidad mayor que 1 significa que hay un error.

</section>
