---
title: "El área del triángulo y las líneas auxiliares"
summary: Descubre por qué un triángulo es la mitad de un rectángulo, qué significa en realidad la altura y cómo una línea extra puede resolver un problema.
minutes: 12
---

¿Por qué la fórmula del área de un triángulo tiene un medio? Muchos estudiantes memorizan la fórmula sin ver nunca la razón. Aquí hay un reto: corta un rectángulo de papel por una diagonal. Formaste dos triángulos que coinciden perfectamente. Pero ¿qué pasa con un triángulo que no parece la mitad de un rectángulo? Una sola línea auxiliar te va a mostrar que también funciona.

> **La gran idea:** El área de un triángulo es la mitad de la base por la altura: $\frac{1}{2} \times \text{base} \times \text{altura}$. La altura se mide **en línea recta hacia arriba** desde la base, formando un ángulo recto. Cuando una figura parece difícil, prueba **agregar una línea auxiliar**.

## Por qué está el medio

Dibuja un rectángulo alrededor de un triángulo, usando la base y la altura del triángulo.

![Un triángulo con base 8 y altura 5 dentro de un rectángulo de 8 por 5. El triángulo cubre exactamente la mitad del rectángulo.](/images/geometry-triangle-half-rectangle.svg)

Ahora traza una línea auxiliar recta hacia abajo desde la punta del triángulo. Es la línea punteada. Corta el rectángulo grande en dos rectángulos más pequeños. En cada rectángulo pequeño, el lado inclinado del triángulo es una diagonal, así que cubre exactamente la mitad de ese rectángulo. La mitad de una parte más la mitad de la otra es la mitad del total.

Para este triángulo, el área es $\frac{1}{2} \times 8 \times 5 = 20$.

## Lo que en realidad significa "altura"

La altura no siempre es un lado del triángulo. Es la distancia en línea recta desde la base hasta la esquina opuesta, igual que tu estatura se mide en línea recta hacia arriba, aunque estés inclinado. Hasta puede caer fuera del triángulo, como aquí:

![Un triángulo cuya punta está a la derecha de su base. La base mide 6. La altura de 4 es una línea punteada fuera del triángulo, que baja hasta donde seguiría la línea de la base.](/images/geometry-helper-height.svg)

El área de este triángulo sigue siendo $\frac{1}{2} \times 6 \times 4 = 12$. Cualquier lado puede funcionar como base, siempre que uses la altura que le corresponde. Esto lleva a un dato interesante: los triángulos con la misma base y la misma altura tienen la **misma área**, sin importar cuánto se inclinen.

## Ejemplo 1: Usar los números correctos

Un triángulo tiene lados de 5 y 8, y una altura de 3 trazada hacia el lado de longitud 8. ¿Cuál es su área?

**¿Qué sabemos?** La altura de 3 va con la base de 8, porque es el lado al que llega. El lado de 5 es un lado inclinado, así que es una distracción.

$$\frac{1}{2} \times 8 \times 3 = 12$$

Intenta este. Un triángulo rectángulo tiene catetos de 6 y 10. ¿Cuál es su área?

<details class="check"><summary>Ver la respuesta</summary>

En un triángulo rectángulo, los dos catetos se juntan en un ángulo recto, así que uno es la base y el otro es la altura. El área es $\frac{1}{2} \times 6 \times 10 = 30$.

</details>

## Ejemplo 2: Encontrar una altura

Un triángulo tiene un área de 24 y una base de 8. ¿Qué altura tiene?

**¿Qué sabemos?** La fórmula del área, con una pieza faltante: la mitad de 8 por la altura es 24. Así que 4 por la altura es 24, y la altura es 6.

**Una comprobación:** Un rectángulo con la misma base y altura tiene un área de $8 \times 6 = 48$, y la mitad de 48 es 24.

## Ejemplo 3: Líneas auxiliares en un cuadrado

Un cuadrado tiene lados de 10. El punto $P$ está a la mitad del lado de arriba. Se trazan líneas de $P$ a las dos esquinas de abajo. ¿Cuál es el área del triángulo que se forma?

**Dibújalo y piensa.** La base del triángulo es el lado de abajo del cuadrado, que mide 10. La punta $P$ está en el lado de arriba, así que la altura es toda la altura del cuadrado, 10.

$$\frac{1}{2} \times 10 \times 10 = 50$$

Es la mitad del área del cuadrado, que es 100. De hecho, $P$ podría estar en cualquier parte del lado de arriba, y el área seguiría siendo 50. La base y la altura no cambiarían.

## Ejemplo 4: Una pregunta estilo concurso

En una cuadrícula, un triángulo tiene esquinas en $(0, 0)$, $(6, 0)$ y $(2, 5)$. Un segundo triángulo tiene esquinas en $(6, 0)$, $(10, 0)$ y $(2, 5)$. ¿Cuál es el área total de los dos triángulos?

**¿Qué sabemos?** Los dos triángulos tienen su base en la línea de abajo. La primera base va de 0 a 6, que mide 6. La segunda va de 6 a 10, que mide 4. Los dos tienen la misma punta, a una altura de 5.

**¿Cuál es el atajo?** Los dos triángulos juntos forman un triángulo grande con base 10 y altura 5.

$$\frac{1}{2} \times 10 \times 5 = 25$$

**Comprobación:** El primero tiene un área de 15, y el segundo de 10. Suman 25.

<section data-box="deeper">

## Para ir más a fondo

Dos triángulos que comparten una altura tienen áreas en la misma razón que sus bases. Esto te deja encontrar un área sin conocer ninguna longitud.

**Uno más difícil:** En el triángulo $ABC$, el punto $D$ está en el lado $BC$, y $BD$ y $DC$ están en una razón de 1 a 3. El área del triángulo $ABC$ es 40. ¿Cuál es el área del triángulo $ABD$?

**¿Qué comparten los dos triángulos pequeños?** La esquina $A$. La altura desde $A$ hasta la línea $BC$ es la misma para los dos triángulos.

**Entonces, ¿qué decide sus áreas?** Solo sus bases. Como las bases están en razón de 1 a 3, las áreas también. Son 4 cajas en un total de 40, así que cada caja tiene 10.

Así que el triángulo $ABD$ tiene un área de 10, y el triángulo $ADC$ tiene un área de 30.

¡Fíjate que nunca supimos la altura ni la base! La razón fue suficiente. Este es uno de los datos más útiles de la geometría de concurso, y regresa en [The Angle Bisector Theorem](/pathway/triangles/05-angle-bisector/) (en inglés).

Intenta esto. El punto $D$ está en el lado $BC$, y $BD$ y $DC$ están en una razón de 2 a 5. El área del triángulo $ABC$ es 35. ¿Cuál es el área del triángulo $ABD$?

<details class="check"><summary>Ver la respuesta</summary>

Son 7 cajas en un total de 35, así que cada caja tiene 5. El triángulo $ABD$ llena 2 cajas, así que su área es 10.

</details>

</section>

<section data-box="traps">

## Trampas comunes

**Usar un lado inclinado como altura.** En un triángulo con lados 5, 5 y 6, la altura no es 5. Los lados de 5 están inclinados. Tendrías que trazar la altura para encontrarla, lo que vas a aprender en la lección 5.

**Olvidar el medio.** Un triángulo con base 8 y altura 5 tiene un área de 20, no de 40. El 40 es el rectángulo que lo rodea. Imagina ese rectángulo para recordar por qué tienes que partirlo a la mitad.

**Emparejar la base y la altura equivocadas.** La altura tiene que llegar al lado que usas como base formando un ángulo recto. Si usas otro lado como base, necesitas otra altura.

</section>

<section data-box="strategy">

## Estrategia de concurso

**Cómo reconocerlo:** Busca triángulos dentro de rectángulos o cuadrados, o esquinas dadas en una cuadrícula.

**Las líneas auxiliares más útiles:** una altura trazada en línea recta hacia abajo, una diagonal de un rectángulo, o una línea que divide una figura en partes conocidas.

**Compara en lugar de calcular:** Si dos triángulos comparten una altura, sus áreas se comparan igual que sus bases. Si las bases son 6 y 4, las áreas están en razón de 6 a 4.

**Tiempo:** Como un minuto. Las figuras de los concursos no siempre están dibujadas a escala, así que guíate por los números.

</section>

<section data-box="connections">

## Conexiones

Esto se basa en [el área como contar cuadrados](/es/pathway/basic-geometry/01-perimeter-and-area/). En el Nivel 2, [Triangles](/pathway/triangles/) (en inglés) encuentra alturas con el teorema de Pitágoras.

</section>

<section data-box="summary">

## Recuerda esto

- Área de un triángulo: $\frac{1}{2} \times$ base $\times$ altura.
- La altura va en línea recta hacia arriba desde la base, formando un ángulo recto.
- La altura puede caer fuera del triángulo.
- La misma base y la misma altura dan la misma área.
- ¿Atorado? Prueba agregar una línea auxiliar.

</section>
