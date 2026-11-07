---
title: "Patrones que se repiten y que crecen"
summary: Usa los residuos para adelantarte en un patrón que se repite, y aprende a llegar al término 100 de un patrón que crece sin equivocarte por uno.
minutes: 12
---

Hoy es miércoles. ¿Qué día de la semana será dentro de 1,000 días? Podrías contar en un calendario, pero tardarías mucho. Resulta que puedes contestarlo con una sola división, porque los días de la semana siguen un patrón, y los patrones te dejan adelantarte.

> **La gran idea:** En un patrón que **se repite**, puedes saltarte los ciclos completos, así que solo importa el residuo. En un patrón que **crece** sumando lo mismo cada vez, cuenta los **pasos** que das y multiplica.

## Por qué funcionan los residuos

Los días de la semana se repiten cada 7 días. Cada 7 días vuelve a ser miércoles, sin importar cuántas veces lo hagas. Así que cualquier número de semanas completas no cambia nada. Solo importan los días que sobran.

Probemos con un caso pequeño. ¿Qué día es 10 días después del miércoles? Contando con los dedos llegas al sábado. Con la división, $10 \div 7$ da 1 con residuo 3, y 3 días después del miércoles es sábado. Coincide.

Para 1,000 días, tenemos $1000 = 7 \times 142 + 6$. Así que el residuo es 6, y 6 días después del miércoles es **martes**.

## Ejemplo 1: Un patrón que se repite

Las cuentas de un collar se repiten en el orden rojo, azul, verde, y luego vuelve a empezar. ¿De qué color es la cuenta 50?

**¿Qué sabemos?** El ciclo tiene 3 cuentas.

**¿Cuál es el plan?** $50 = 3 \times 16 + 2$. Así que las primeras 48 cuentas forman 16 ciclos completos que terminan en verde. Luego avanzamos 2 cuentas más: rojo y luego azul. La cuenta 50 es **azul**.

**Una forma útil de comprobarlo:** ¿Qué cuentas son azules? Son la 2, la 5, la 8, la 11, y así, y cada una tiene residuo 2 al dividirla entre 3. El 50 también tiene residuo 2, así que encaja.

> **Cuidado:** Cuando el residuo es 0, caes en el **último** elemento del ciclo, no en el primero. La cuenta 48 es verde.

Intenta este antes de seguir. Las letras S, T, A, R se repiten en orden. ¿Cuál es la letra 42?

<details class="check"><summary>Ver la respuesta</summary>

El ciclo tiene 4 letras, y $42 = 4 \times 10 + 2$. El residuo es 2, así que es la 2.ª letra, que es la T.

</details>

## Ejemplo 2: Un patrón que crece

¿Cuál es el número 30 de la lista 5, 8, 11, 14, ...?

**¿Qué sabemos?** Empieza en 5, y cada paso suma 3.

**¿Cuántos pasos hay?** Es tentador decir 30. Pero prueba un caso pequeño: ir del 1.er número al 2.º toma **1** paso, e ir al 3.º toma **2** pasos. Así que ir al número 30 toma 29 pasos.

$$5 + 29 \times 3 = 92$$

Entonces la regla es: el número en la posición $n$ es igual al primer número más $(n - 1)$ pasos.

## Ejemplo 3: ¿Cuántos números hay en una lista?

¿Cuántos números hay en la lista 7, 11, 15, ..., 95?

**¿Qué sabemos?** Cada paso suma 4, y la lista va del 7 al 95.

**¿Cuál es el plan?** La subida total es $95 - 7 = 88$. Cada paso sube 4, así que hay $88 \div 4 = 22$ pasos.

**Ahora la parte engañosa:** 22 pasos conectan **23** números. Piensa en una cerca: 22 espacios necesitan 23 postes. Pruébalo con una lista pequeña. La lista 7, 11, 15 tiene 2 pasos y 3 números.

## Ejemplo 4: Patrones en dibujos

Unos palillos forman una fila de triángulos que comparten lados. Un triángulo usa 3 palillos, dos usan 5, y tres usan 7. ¿Cuántos palillos usan 25 triángulos?

**¿Cuál es el patrón?** Las cantidades son 3, 5, 7, así que cada triángulo nuevo agrega 2 palillos. **¿Por qué?** Un triángulo nuevo comparte un lado con su vecino, así que solo necesita 2 nuevos.

**¿Cuántos pasos hay?** De 1 triángulo a 25 hay 24 pasos.

$$3 + 24 \times 2 = 51$$

Saber **por qué** funciona el patrón significa que puedes confiar en él para 25 triángulos, sin construirlos.

## Ejemplo 5: Una pregunta estilo concurso

Los dígitos 1, 4, 2, 8, 5, 7 se repiten para siempre y forman el decimal 0.142857142857... ¿Cuál es la suma de los primeros 100 dígitos después del punto decimal?

**¿Qué sabemos?** El ciclo tiene 6 dígitos, y suman $1 + 4 + 2 + 8 + 5 + 7 = 27$.

**¿Cuántos ciclos completos hay?** $100 = 6 \times 16 + 4$. Así que hay 16 ciclos completos y 4 dígitos extra.

- Los ciclos completos suman $16 \times 27 = 432$.
- Los 4 dígitos extra son 1, 4, 2 y 8, que suman 15.

$$432 + 15 = 447$$

<section data-box="deeper">

## Para ir más a fondo

Un patrón que se repite puede contestar dos tipos de preguntas: qué hay en una posición, y cuánto suma todo hasta ahí.

**Uno más difícil:** Como decimal, $\frac{1}{7}$ es 0.142857142857..., con los seis dígitos 142857 repitiéndose. ¿Cuál es el dígito 100 después del punto decimal? ¿Y cuál es la suma de los primeros 20 dígitos?

**El dígito 100:** El ciclo tiene 6 dígitos. Como $100 = 6 \times 16 + 4$, pasamos 16 ciclos completos y luego avanzamos 4 dígitos en el siguiente. El 4.º dígito de 142857 es **8**.

**La suma de los primeros 20:** Un ciclo completo suma $1 + 4 + 2 + 8 + 5 + 7 = 27$. Como $20 = 6 \times 3 + 2$, hay 3 ciclos completos y 2 dígitos extra. Así que la suma es $3 \times 27 + 1 + 4 = 86$.

**Una comprobación del residuo:** Un residuo de 0 significa el **último** dígito de un ciclo, no el primero. Por ejemplo, el 6.º dígito es 7, y $6 = 6 \times 1 + 0$.

Intenta esto. ¿Cuál es el dígito 50 después del punto decimal en $\frac{1}{7}$?

<details class="check"><summary>Ver la respuesta</summary>

Como $50 = 6 \times 8 + 2$, es el 2.º dígito del ciclo, que es 4.

</details>

</section>

<section data-box="traps">

## Trampas comunes

**Equivocarse por uno.** Para el número 30 de la lista, usar $30 \times 3$ en lugar de $29 \times 3$ da 95, que está mal. Llegar al número $n$ toma $n - 1$ pasos. Si alguna vez dudas, prueba con el 2.º o el 3.er número.

**Contar los espacios y no los números.** En el Ejemplo 3, la respuesta 22 es el número de pasos. Hay 23 números. Las cercas, las listas y los números de página tienen este mismo problema. Por ejemplo, de la página 5 a la 9 son 5 páginas, no 4.

**Confundirse con el residuo 0.** Algunos estudiantes piensan que un residuo de 0 significa el primer elemento del ciclo. En realidad significa que terminaste un ciclo completo, así que estás en el último elemento.

</section>

<section data-box="strategy">

## Estrategia de concurso

**Cómo reconocerlo:** Busca una posición enorme, como "el número 100" o "el 2,000", o frases como "sigue este patrón" o "se repite".

**Escribe el principio:** Escribe los primeros términos para encontrar el ciclo. Cuesta 20 segundos y te muestra el patrón. Si encuentras el ciclo, ya casi terminaste.

**Tiempo:** Como un minuto. Si estás haciendo una lista larga, detente y busca lo que se repite.

</section>

<section data-box="connections">

## Conexiones

Los residuos vienen de [Sentido numérico](/es/pathway/number-sense/). Regresan como [patrones del dígito de las unidades](/pathway/primes-remainders/) (en inglés) en el Nivel 2. [Sequences & Series](/pathway/sequences-series/) (en inglés), en el Nivel 3, se basa en los patrones que crecen.

</section>

<section data-box="summary">

## Recuerda esto

- Patrón que se repite: divide entre la longitud del ciclo y usa el residuo.
- Residuo 0 significa el último elemento del ciclo.
- Patrón que crece: número en la posición $n$ = primero + $(n - 1)$ pasos.
- Los pasos conectan números: 22 pasos significan 23 números.
- Prueba un caso pequeño cada vez que dudes.

</section>
