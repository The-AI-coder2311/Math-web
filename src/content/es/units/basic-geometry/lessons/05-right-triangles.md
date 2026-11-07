---
title: "Un primer vistazo a los triángulos rectángulos"
summary: Usa el teorema de Pitágoras para encontrar un lado que falta en un triángulo rectángulo, y aprende los triángulos de números enteros que tanto les gustan a los concursos.
minutes: 12
---

Caminas 6 cuadras hacia el este y luego 8 cuadras hacia el norte. Un amigo cruza el parque en línea recta desde tu punto de partida hasta el mismo lugar. ¿Cuánto caminó tu amigo? No puedes sumar 6 y 8, porque tu amigo tomó un atajo. Pero hace más de 2,500 años la gente ya conocía una regla que da la respuesta exacta.

> **La gran idea:** En un triángulo rectángulo, los cuadrados de los dos lados más cortos suman el cuadrado del lado más largo: $a^2 + b^2 = c^2$. Esto te deja encontrar cualquier lado si conoces los otros dos.

## Las palabras que necesitas

Un **triángulo rectángulo** tiene un ángulo de 90°, normalmente marcado con un cuadradito. El lado opuesto a ese ángulo es el más largo, y se llama **hipotenusa**. Los otros dos lados son los **catetos**. En la fórmula, $a$ y $b$ son los catetos, y $c$ es la hipotenusa.

**Elevar al cuadrado** un número significa multiplicarlo por sí mismo, así que $5^2 = 5 \times 5 = 25$. Para regresar, sacamos la **raíz cuadrada**. La raíz cuadrada de 25 es 5, porque $5 \times 5 = 25$. Se escribe $\sqrt{25} = 5$.

## Comprobar que funciona

Pongamos a prueba la regla con el triángulo rectángulo más famoso, con lados de 3, 4 y 5:

$$3^2 + 4^2 = 9 + 16 = 25$$

Y $5^2$ también es 25. Puedes probarlo con objetos reales: dibuja una línea de 3 pulgadas y otra de 4 pulgadas formando una esquina cuadrada, y mide de punta a punta. Van a ser 5 pulgadas. La fórmula se puede leer como una afirmación sobre **áreas**. Construye un cuadrado sobre cada lado del triángulo, y los dos cuadrados pequeños tienen la misma área total que el grande. Vas a ver un dibujo que muestra por qué en la unidad [Triangles](/pathway/triangles/) (en inglés) del Nivel 2.

La regla **solo** funciona en triángulos rectángulos. Por ejemplo, con lados de 3, 4 y 6, $3^2 + 4^2$ es 25, mientras que $6^2$ es 36. No coinciden, así que ese triángulo no tiene un ángulo recto.

## Ejemplo 1: Encontrar la hipotenusa

Volvamos a la caminata. Tu camino forma un ángulo recto, así que dibuja el triángulo. Los catetos son 6 y 8.

$$6^2 + 8^2 = 36 + 64 = 100$$

**¿Qué número al cuadrado da 100?** Es 10. Así que tu amigo caminó 10 cuadras, mientras que tú caminaste 14.

Ahora te toca. Un triángulo rectángulo tiene catetos de 5 y 12. ¿Cuánto mide su hipotenusa?

<details class="check"><summary>Ver la respuesta</summary>

$5^2 + 12^2 = 25 + 144 = 169$, y $13 \times 13 = 169$. Así que la hipotenusa mide 13.

</details>

## Ejemplo 2: Encontrar un cateto

Una escalera de 10 pies está recargada en una pared, con su base a 6 pies de la pared. ¿Hasta qué altura llega?

**Dibújalo.** La pared y el piso forman el ángulo recto. La escalera es opuesta a ese ángulo recto, así que es la **hipotenusa**.

**¿Cuál es el plan?** Ahora lo desconocido es un cateto, así que el cuadrado más grande va solo:

$$h^2 + 6^2 = 10^2$$

Eso significa que $h^2 = 100 - 36 = 64$, así que $h = 8$. La escalera llega a 8 pies de altura.

## Ejemplo 3: Triángulos que vale la pena recordar

Algunos triángulos rectángulos tienen lados enteros. Se llaman **ternas pitagóricas**, y a los concursos les encantan, porque dan números amigables:

| Terna | Comprobación |
|---|---|
| 3, 4, 5 | $9 + 16 = 25$ |
| 5, 12, 13 | $25 + 144 = 169$ |
| 8, 15, 17 | $64 + 225 = 289$ |
| 7, 24, 25 | $49 + 576 = 625$ |

Los múltiplos también funcionan. Si duplicas todos los lados de un triángulo 3-4-5, obtienes 6-8-10, que tiene la misma forma, solo que más grande. Así que cuando veas catetos de 9 y 12, fíjate que son $3 \times 3$ y $3 \times 4$. La hipotenusa tiene que ser $3 \times 5 = 15$. ¡No hace falta elevar al cuadrado!

## Ejemplo 4: Encontrar un triángulo rectángulo escondido

Un triángulo isósceles tiene lados de 5, 5 y 6. ¿Cuál es su área?

**¿Qué falta?** Para encontrar el área, necesitamos la altura, que no nos dan.

**¿Qué línea auxiliar sirve?** Traza la altura desde la esquina de arriba hasta la base de 6. Como el triángulo es isósceles, se dobla parejo, y la altura corta la base exactamente a la mitad. Ahora hay dos triángulos rectángulos, cada uno con un cateto de 3 y una hipotenusa de 5.

**¿Lo reconoces?** ¡Es un triángulo 3-4-5! Así que la altura es 4.

$$\frac{1}{2} \times 6 \times 4 = 12$$

## Ejemplo 5: Una pregunta estilo concurso

Un rectángulo tiene un largo de 8 y una diagonal de 10. ¿Cuál es su área?

**Dibújalo.** La diagonal corta el rectángulo en dos triángulos rectángulos. Cada uno tiene un cateto de 8 (el largo), otro cateto igual al ancho desconocido, y una hipotenusa de 10.

**¿Es una terna?** Es 6-8-10, así que el ancho es 6.

**¿Qué pregunta?** El área es $8 \times 6 = 48$.

<section data-box="deeper">

## Para ir más a fondo

Cuando un camino tiene varios tramos, muchas veces puedes juntarlos en un solo triángulo rectángulo grande.

**Uno más difícil:** Una excursionista camina 2 millas al norte, 5 millas al este y luego 10 millas más al norte. ¿A qué distancia en línea recta está del punto de partida?

**¿Cuál es el plan?** Un camino de tres partes no parece un triángulo rectángulo. Pero solo importan los **totales**:

- Total hacia el norte: $2 + 10 = 12$ millas
- Total hacia el este: 5 millas

Esos dos totales son los catetos de un triángulo rectángulo, y la distancia en línea recta es la hipotenusa:

$\sqrt{5^2 + 12^2} = \sqrt{169} = 13$

Así que está a 13 millas del punto de partida, aunque caminó 17 millas.

**¿Y si camina hacia atrás?** Si también hubiera caminado 3 millas al sur, el total hacia el norte bajaría a 9. Las direcciones opuestas se restan antes de usar el teorema de Pitágoras.

Intenta esto. Un robot avanza 3 unidades al este, 5 al norte, 5 al este y 1 al norte. ¿A qué distancia está del punto de partida?

<details class="check"><summary>Ver la respuesta</summary>

El total hacia el este es 8, y hacia el norte es 6. Así que la distancia es $\sqrt{8^2 + 6^2} = \sqrt{100} = 10$.

</details>

</section>

<section data-box="traps">

## Trampas comunes

**Olvidar sacar la raíz cuadrada.** Con catetos de 6 y 8, la respuesta no es 100. Eso es $c^2$. Como $c^2 = 100$, la hipotenusa es $c = 10$.

**Tratar un cateto como hipotenusa.** Con la escalera del Ejemplo 2, sumar $10^2 + 6^2$ da 136, que no lleva a una respuesta entera. La escalera es el lado más largo. La hipotenusa siempre es el lado opuesto al ángulo recto.

**Sumar los lados directamente.** Algunos estudiantes escriben que la hipotenusa es $6 + 8 = 14$. Pero dos lados de un triángulo siempre suman **más** que el tercero. El atajo siempre es más corto que caminar por los catetos.

</section>

<section data-box="strategy">

## Estrategia de concurso

**Cómo reconocerlo:** Busca ángulos rectos, cuadrados y rectángulos con diagonales, escaleras, o caminar al este y luego al norte.

**Busca primero una terna.** Divide los lados entre cualquier factor común y fíjate si reconoces 3-4-5, 5-12-13 u 8-15-17. Muchas veces toma segundos.

**Descartar respuestas:** La hipotenusa tiene que ser más larga que cada cateto, y más corta que los dos catetos sumados. Con catetos de 9 y 12, la respuesta tiene que estar entre 12 y 21.

**Tiempo:** Como un minuto. Si necesitas elevar al cuadrado números grandes, busca otra vez una terna.

</section>

<section data-box="connections">

## Conexiones

Las líneas auxiliares vienen del [área del triángulo](/es/pathway/basic-geometry/02-triangle-area/). En el Nivel 2, [Triangles](/pathway/triangles/) (en inglés) va más lejos, y la unidad [Coordinate Geometry](/pathway/coordinate-geometry/) (en inglés) del Nivel 3 usa esto para encontrar distancias.

</section>

<section data-box="summary">

## Recuerda esto

- $a^2 + b^2 = c^2$ solo funciona en triángulos rectángulos.
- $c$ es la hipotenusa, opuesta al ángulo recto.
- No olvides la raíz cuadrada al final.
- Conoce 3-4-5, 5-12-13, 8-15-17 y sus múltiplos.
- Traza una altura para formar un triángulo rectángulo.

</section>
