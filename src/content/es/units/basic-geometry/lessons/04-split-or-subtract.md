---
title: "Divídelo o réstalo"
summary: Encuentra el área de una figura poco común de dos formas. Divídela en partes que conoces, o resta la parte que no quieres.
minutes: 12
---

Un piso tiene forma de letra L. ¿Cuánta alfombra necesitas para cubrirlo? No hay una fórmula para la "forma de L". Pero no la necesitas, porque puedes ver rectángulos escondidos en ella. De hecho, hay dos formas diferentes de encontrarlos, y obtener la misma respuesta de las dos formas es una excelente comprobación.

> **La gran idea:** Casi cualquier figura se puede descomponer. O la **divides** en partes que sabes medir y las sumas, o dibujas una figura más grande a su alrededor y **restas la parte que no quieres**.

## Por qué funcionan los dos métodos

El área es la cantidad de espacio de adentro, y el espacio no cambia cuando trazas una línea encima. Si cortas una figura en partes, las partes suman el total. De la misma forma, si una figura es un rectángulo más grande al que le falta una esquina, su área es el rectángulo menos la esquina.

Aquí está la misma figura en L medida de las dos formas.

![La misma figura en L mostrada de dos formas. A la izquierda, está dividida en un rectángulo de 5 por 2 y otro de 8 por 4. A la derecha, es un rectángulo de 8 por 6 al que le falta una esquina de 3 por 2.](/images/geometry-split-or-subtract.svg)

- **Dividir:** un rectángulo de 5 por 2 encima de uno de 8 por 4. Eso da $10 + 32 = 42$.
- **Restar:** un rectángulo de 8 por 6 al que le falta una esquina de 3 por 2. Eso da $48 - 6 = 42$.

Dan la misma respuesta, como tiene que ser.

## Ejemplo 1: Un marco

Una foto rectangular mide 8 pulgadas por 10 pulgadas. La rodea un marco de 2 pulgadas de ancho por todos lados. ¿Cuál es el área del marco?

**¿Cuál es el plan?** Dividir el marco en partes toma tiempo, pero restar es rápido. El marco es el total menos la foto.

**¡Dibújalo!** El marco agrega 2 pulgadas en **los dos** lados, así que el rectángulo de afuera mide 12 por 14.

$$12 \times 14 - 8 \times 10 = 168 - 80 = 88$$

Intenta una. A un cuadrado de 6 por 6 se le recorta un cuadrado de 2 por 2 en el centro. ¿Cuál es el área que queda?

<details class="check"><summary>Ver la respuesta</summary>

Resta la parte que no quieres: $6 \times 6 - 2 \times 2 = 36 - 4 = 32$.

</details>

## Ejemplo 2: El perímetro de una figura en L

¿Cuál es el perímetro de la figura en L de arriba? Podrías pensar que necesitas todas las partes, pero hay un truco muy útil.

**¿Qué sabemos?** Los lados del hueco miran hacia arriba y hacia la derecha. Imagina que los deslizas hacia afuera hasta que se alinean con las orillas del rectángulo grande. El lado horizontal del hueco se desliza hacia arriba, y el vertical hacia la derecha. Llenan exactamente los huecos.

Así que la figura en L tiene el mismo perímetro que el rectángulo de 8 por 6:

$$8 + 6 + 8 + 6 = 28$$

Recortar una esquina hizo más pequeña el área, pero el perímetro no cambió. Es otro recordatorio de que el área y el perímetro miden cosas diferentes.

## Ejemplo 3: Dividir una figura de cuatro lados

Un trapecio tiene lados paralelos arriba y abajo de 4 y 10, y una altura de 6. ¿Cuál es su área?

**¿Qué línea auxiliar sirve?** Traza una diagonal, de una esquina de arriba a la esquina opuesta de abajo. Divide la figura en dos triángulos, y los dos tienen altura 6.

- Un triángulo tiene base 4, así que su área es $\frac{1}{2} \times 4 \times 6 = 12$.
- El otro tiene base 10, así que su área es $\frac{1}{2} \times 10 \times 6 = 30$.

El total es $12 + 30 = 42$. No necesitaste una fórmula del trapecio, aunque sí existe: promedia los dos lados paralelos y multiplica por la altura. Comprobación: el promedio de 4 y 10 es 7, y $7 \times 6 = 42$.

## Ejemplo 4: Una figura en una cuadrícula

Una figura en una cuadrícula tiene esquinas en $(0, 0)$, $(6, 0)$, $(6, 4)$ y $(2, 4)$. ¿Cuál es su área?

**¿Cuál es el plan?** Dibuja un rectángulo a su alrededor, de $(0, 0)$ a $(6, 4)$. Su área es $6 \times 4 = 24$.

**¿Qué no queremos?** Solo falta una parte: el triángulo de la esquina de arriba a la izquierda, con esquinas en $(0, 0)$, $(2, 4)$ y $(0, 4)$. Tiene base 2 y altura 4, así que su área es $\frac{1}{2} \times 2 \times 4 = 4$.

$$24 - 4 = 20$$

Encerrar una figura inclinada en un rectángulo y restar las esquinas funciona con casi cualquier figura en una cuadrícula.

## Ejemplo 5: Una pregunta estilo concurso

A un cuadrado de lado 8 se le recorta un triángulo en cada una de sus 4 esquinas. Cada triángulo tiene dos catetos de longitud 2, sobre los lados del cuadrado. ¿Cuál es el área de la figura de ocho lados que queda?

**¿Cuál es el plan?** Resta la parte que no quieres.

- El área del cuadrado es $8 \times 8 = 64$.
- Cada triángulo de esquina tiene un área de $\frac{1}{2} \times 2 \times 2 = 2$.
- Hay 4 de ellos, que dan un total de $4 \times 2 = 8$.

$$64 - 8 = 56$$

Dividir un octágono directamente tomaría mucho trabajo. Restar toma tres líneas.

<section data-box="deeper">

## Para ir más a fondo

Con el perímetro, a veces puedes deslizar partes hasta formar una figura más sencilla sin cambiar la respuesta.

**Uno más difícil:** Una figura de escalera mide 10 unidades de ancho y 6 de alto. Tiene escalones de diferentes tamaños, y no te dicen el tamaño de ningún escalón. ¿Cuál es su perímetro?

**Parece imposible.** Pero mira los escalones. Desliza cada pedacito horizontal hacia arriba, para que juntos se alineen en la parte de arriba. Desliza cada pedacito vertical hacia un lado, para que se alineen en el costado.

**¿Qué obtenemos?** Los pedazos se deslizan hasta formar el contorno de un rectángulo de 10 por 6. Las longitudes no cambian al deslizar los pedazos, así que el perímetro es igual al del rectángulo:

$2 \times (10 + 6) = 32$

**¿Funciona con cualquier escalera?** Sí, siempre que los escalones solo vayan en una dirección, siempre hacia arriba y hacia un lado. Los pedazos horizontales tienen que sumar el ancho, y los verticales tienen que sumar la altura.

**¿Esto funciona con el área?** No. La escalera tiene menos área que el rectángulo. Deslizar las orillas conserva el perímetro, pero cambia lo de adentro.

Intenta esto. Una escalera mide 12 unidades de ancho y 5 de alto. ¿Cuál es su perímetro?

<details class="check"><summary>Ver la respuesta</summary>

Los pedazos se deslizan hasta formar un rectángulo de 12 por 5, así que el perímetro es $2 \times (12 + 5) = 34$.

</details>

</section>

<section data-box="traps">

## Trampas comunes

**Olvidar que un borde va en los dos lados.** Para un marco de 2 pulgadas en una foto de 8 por 10, la medida de afuera es 12 por 14, no 10 por 12. Hacer un dibujo lo deja claro.

**Contar dos veces al dividir.** Si tus dos rectángulos se traslapan, contaste el traslape dos veces. Para la figura en L, un rectángulo de 5 por 6 y uno de 8 por 4 se traslapan, así que su total de 62 es demasiado grande. Asegúrate de que tus partes no se traslapen.

**Calcular mal un lado que falta.** En una figura en L, algunos lados no tienen medida. Para encontrar uno, usa el lado opuesto: los dos pedazos cortos de un lado tienen que sumar el lado largo de enfrente.

</section>

<section data-box="strategy">

## Estrategia de concurso

**Cómo reconocerlo:** Busca regiones sombreadas, marcos, bordes o una figura poco común en una cuadrícula.

**Elige el camino más corto:** Cuenta las partes de cada método. Muchas veces restar requiere menos pasos, sobre todo cuando hay una figura grande y sencilla a la que le quitaron pedacitos.

**Haz los dos si tienes tiempo:** Es raro que dos métodos diferentes den la misma respuesta incorrecta, así que una coincidencia te da mucha confianza.

**Tiempo:** De uno a tres minutos.

</section>

<section data-box="connections">

## Conexiones

Esto se basa en el [área del triángulo](/es/pathway/basic-geometry/02-triangle-area/). En el Nivel 2, [Circles & Solids](/pathway/circles-solids/) (en inglés) usa la misma resta para regiones sombreadas en círculos.

</section>

<section data-box="summary">

## Recuerda esto

- Divide una figura en partes y súmalas.
- O dibuja una figura más grande a su alrededor y resta.
- Obtener la misma respuesta de las dos formas es una gran comprobación.
- Un marco agrega su ancho en los dos lados.
- Los huecos en una esquina no cambian el perímetro.

</section>
