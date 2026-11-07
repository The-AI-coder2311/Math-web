---
title: "Perímetro y área"
summary: Entiende la diferencia entre la distancia alrededor de una figura y el espacio de adentro, y por qué conocer uno no te dice el otro.
minutes: 12
---

Sam tiene 12 metros de cerca para un jardín rectangular. ¿Importa la forma del rectángulo? Después de todo, es la misma cantidad de cerca, así que tal vez el jardín queda del mismo tamaño de cualquier forma. Adivina, y luego lo averiguamos.

Quienes resuelven bien los problemas de geometría no son quienes memorizaron más fórmulas. Son quienes **hacen primero un dibujo**, y ese es el hábito que vas a construir en esta unidad.

> **La gran idea:** El **perímetro** es la distancia alrededor de una figura, como una cerca. El **área** es el espacio de adentro, como el pasto que rodea la cerca. Miden cosas diferentes, así que conocer uno no te dice el otro.

## Por qué funcionan las fórmulas

Toma un rectángulo de 5 metros de largo y 3 metros de ancho.

Para encontrar su **perímetro**, recórrelo todo y suma los lados: $5 + 3 + 5 + 3 = 16$ metros. Cada lado aparece dos veces, así que un atajo es sumar el largo y el ancho, y duplicar el resultado.

Para encontrar su **área**, cuenta cuántos cuadrados de 1 metro caben adentro. Hay 3 filas, y cada fila tiene 5 cuadrados. Por eso multiplicamos: $3 \times 5 = 15$ metros cuadrados. Multiplicar no es solo una regla que memorizar. Es una forma rápida de contar cuadrados en filas.

Fíjate en las unidades. El perímetro es una longitud, así que se mide en metros. El área cuenta cuadrados, así que se mide en metros **cuadrados**. Si un problema pide un área, la respuesta no puede estar en metros a secas.

## Ejemplo 1: La sorpresa de los rectángulos

Volvamos a los 12 metros de cerca de Sam. La mitad de la cerca cubre un largo y un ancho, así que el largo y el ancho tienen que sumar 6. Hagamos la lista de todas las posibilidades con números enteros.

![Tres rectángulos que tienen perímetro 12. El rectángulo de 1 por 5 tiene área 5, el de 2 por 4 tiene área 8 y el cuadrado de 3 por 3 tiene área 9.](/images/geometry-same-perimeter.svg)

Usan la misma cerca, pero las áreas son 5, 8 y 9. ¡Así que la forma importa mucho! Mientras más se parece el rectángulo a un cuadrado, más crece el área. Con un perímetro fijo, el cuadrado da la mayor área.

La sorpresa al revés también es cierta. Dos rectángulos con la misma área pueden tener perímetros diferentes. Un rectángulo de 1 por 12 y uno de 3 por 4 tienen área 12, pero sus perímetros son 26 y 14.

Ahora intenta este. Un rectángulo mide 7 por 4. ¿Cuáles son su perímetro y su área?

<details class="check"><summary>Ver la respuesta</summary>

El perímetro es $7 + 4 + 7 + 4 = 22$. El área es $7 \times 4 = 28$. Son números diferentes que miden cosas diferentes, en unidades diferentes.

</details>

## Ejemplo 2: Al revés

Un cuadrado tiene un área de 49 centímetros cuadrados. ¿Cuál es su perímetro?

**¿Qué sabemos?** El área de un cuadrado es su lado multiplicado por sí mismo. ¿Qué número multiplicado por sí mismo da 49? Es 7, así que cada lado mide 7 centímetros.

**¿Qué pregunta?** Hay 4 lados iguales, así que el perímetro es $4 \times 7 = 28$ centímetros.

Pasar del área a la longitud del lado es una jugada que vas a usar seguido. Ayuda conocer los cuadrados perfectos hasta como $15 \times 15 = 225$.

## Ejemplo 3: Encontrar un lado que falta

Un rectángulo tiene un perímetro de 30 y un largo de 9. ¿Cuál es su área?

**¿Qué sabemos?** Dibuja el rectángulo, marca el largo con 9 y marca el ancho desconocido con $w$.

**¿Cuál es un paso más pequeño?** La mitad del perímetro es un largo más un ancho. Así que $9 + w = 15$, y el ancho es 6.

**¿Qué pregunta?** El área es $9 \times 6 = 54$.

## Ejemplo 4: Una pregunta estilo concurso

Un patio rectangular está hecho de losetas cuadradas de 1 pie por lado. Mide 6 losetas de ancho y 10 de largo. Se agrega un borde de losetas, de una loseta de grosor, alrededor de todo el patio. ¿Cuántas losetas tiene el borde?

**¡Dibújalo!** El patio con su borde forma un rectángulo más grande. Como el borde agrega una loseta en **los dos** extremos, el rectángulo grande mide 8 por 12.

**¿Cuál es el plan?** Encuentra el borde restando lo de adentro al total:

$$8 \times 12 - 6 \times 10 = 96 - 60 = 36$$

Aquí hay una respuesta incorrecta común. El perímetro del patio es 32, así que algunos estudiantes dicen 32 losetas. Pero el borde también necesita losetas en las 4 esquinas, que no tocan ningún lado del patio. Y $32 + 4 = 36$. Coincide.

<section data-box="deeper">

## Para ir más a fondo

Los problemas de concurso muchas veces te piden contar todas las figuras posibles, en lugar de comparar unas cuantas.

**Uno más difícil:** Un rectángulo tiene lados enteros y un perímetro de 24. ¿Cuántos rectángulos diferentes son posibles, y cuál tiene la mayor área?

**¿Qué sabemos?** El perímetro es el doble de la suma de dos lados, así que esos dos lados suman 12. Un rectángulo de 3 por 9 y uno de 9 por 3 tienen la misma forma, así que pongamos primero el lado más corto.

| Lados | 1, 11 | 2, 10 | 3, 9 | 4, 8 | 5, 7 | 6, 6 |
|---|---|---|---|---|---|---|
| Área | 11 | 20 | 27 | 32 | 35 | 36 |

Hay **6** rectángulos, y la mayor área es 36.

**¿Cuál es el patrón?** Mientras más cerca estén los dos lados, mayor es el área. Vas a ver por qué siempre se cumple en [AM-GM](/pathway/algebra-toolkit/05-am-gm-inequality/) (en inglés), en el Nivel 3.

Intenta esto. ¿Cuántos rectángulos diferentes con lados enteros tienen un perímetro de 30? ¿Cuál es la mayor área?

<details class="check"><summary>Ver la respuesta</summary>

Los dos lados suman 15, así que las parejas son 1 y 14, 2 y 13, hasta 7 y 8. Son 7 rectángulos. La pareja más cercana es 7 y 8, con un área de 56.

</details>

</section>

<section data-box="traps">

## Trampas comunes

**Confundir las fórmulas.** Si sumas para el área o multiplicas para el perímetro, vas a obtener un número que se ve bien pero no significa nada. Pregúntate: "¿Lo estoy recorriendo o lo estoy llenando de cuadrados?"

**Olvidar la mitad de los lados.** Para un rectángulo de 5 por 3, la respuesta $5 + 3 = 8$ es solo la mitad del perímetro. Cada lado aparece dos veces. El perímetro es 16.

**Suponer que la misma área significa el mismo perímetro.** Ninguno decide al otro, como muestran los rectángulos de 1 por 12 y de 3 por 4.

</section>

<section data-box="strategy">

## Estrategia de concurso

**Cómo reconocerlo:** Busca las palabras "cerca", "borde", "losetas", "alrededor" o "cubre".

**Siempre dibuja y anota.** Hasta un dibujo rápido evita la mayoría de los errores. Toma 10 segundos, y muchas veces te muestra el siguiente paso.

**Tiempo:** Como un minuto para las preguntas básicas. Para una pregunta de bordes, dibuja primero una versión pequeña.

**Usar las opciones de respuesta:** La mayor área para un perímetro dado viene de la figura más parecida a un cuadrado, así que muchas veces puedes ir directo a ese caso.

</section>

<section data-box="connections">

## Conexiones

Después vas a encontrar [el área de un triángulo](/es/pathway/basic-geometry/02-triangle-area/). En el Nivel 2, [Circles & Solids](/pathway/circles-solids/) (en inglés) extiende esta idea a círculos y cajas.

</section>

<section data-box="summary">

## Recuerda esto

- El perímetro es alrededor. El área es adentro.
- El área cuenta cuadrados, así que sus unidades son unidades cuadradas.
- El largo más el ancho de un rectángulo es la mitad de su perímetro.
- El mismo perímetro no significa la misma área.
- Con un perímetro fijo, el cuadrado tiene la mayor área.

</section>
