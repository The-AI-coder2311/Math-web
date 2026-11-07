---
title: "Uno menos la probabilidad de que no pase"
summary: Cuando veas "al menos uno", voltea la pregunta. Encuentra la probabilidad de "ninguno", réstala de 1 y conéctalo con contar lo contrario.
minutes: 12
---

Lanzas una moneda 5 veces. ¿Qué probabilidad hay de sacar al menos una cara? Para calcularlo directamente, necesitarías la probabilidad de exactamente 1 cara, 2 caras, 3 caras, 4 caras y 5 caras, y luego sumarlas. Es mucho trabajo. Pero solo hay **una** forma de no sacar ninguna cara. Esta lección te muestra cómo un problema de cinco casos se reduce a uno.

> **La gran idea:** La probabilidad de que algo pase es **1 menos la probabilidad de que no pase**. Cuando aparecen las palabras "al menos uno", lo contrario es "ninguno", y eso casi siempre es mucho más fácil.

## Por qué funciona

Cada resultado pertenece a lo que quieres o no pertenece. Así que las dos probabilidades tienen que sumar 1, que son todas las posibilidades. Es la misma idea que [contar lo contrario](/es/pathway/counting/04-count-the-opposite/), pero escrita en términos de probabilidad.

Pongámoslo a prueba con un caso pequeño que podemos listar. Lanza 2 monedas y encuentra la probabilidad de al menos una cara. Usa C para cara y X para cruz.

**Haciendo la lista:** Los resultados son CC, CX, XC y XX. Tres tienen al menos una cara, así que es $\frac{3}{4}$.

**Usando lo contrario:** La única forma de fallar es XX, que tiene probabilidad $\frac{1}{2} \times \frac{1}{2} = \frac{1}{4}$. Así que $1 - \frac{1}{4} = \frac{3}{4}$. Coincide.

## Ejemplo 1: Las cinco monedas

Volvamos al problema del principio. Lo contrario de "al menos una cara" es "ninguna cara", que significa que todas son cruz. Cada lanzamiento es independiente, así que multiplicamos:

$$\frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} = \frac{1}{32}$$

Así que la probabilidad de al menos una cara es $1 - \frac{1}{32} = \frac{31}{32}$.

## Ejemplo 2: Al menos un 6

Lanzas un dado 2 veces. ¿Qué probabilidad hay de sacar al menos un 6?

Una idea equivocada común es que la respuesta es $\frac{1}{6} + \frac{1}{6} = \frac{1}{3}$. Veamos por qué no puede ser. Si siguieras esa lógica, lanzar el dado 6 veces daría $\frac{6}{6} = 1$, algo seguro. ¡Pero podrías lanzar 6 veces y nunca sacar un 6!

**¿Qué es lo contrario?** Ningún 6 en ninguno de los dos lanzamientos. Cada lanzamiento falla con probabilidad $\frac{5}{6}$, así que:

$$\frac{5}{6} \times \frac{5}{6} = \frac{25}{36}$$

**Así que la respuesta es:** $1 - \frac{25}{36} = \frac{11}{36}$.

**Comprueba con la tabla:** En la tabla de los dos dados, los resultados que incluyen un 6 son la fila de abajo y la columna de la derecha. Son $6 + 6 - 1 = 11$ de 36. Coincide. Se resta 1 porque el resultado 6 y 6 está en las dos.

Ahora te toca. Lanzas 3 monedas. ¿Qué probabilidad hay de sacar al menos una cruz?

<details class="check"><summary>Ver la respuesta</summary>

Lo contrario es que todas sean cara, con probabilidad $\frac{1}{2} \times \frac{1}{2} \times \frac{1}{2} = \frac{1}{8}$. Así que la respuesta es $1 - \frac{1}{8} = \frac{7}{8}$.

</details>

## Ejemplo 3: Con una bolsa

Una bolsa tiene 3 canicas rojas y 4 azules. Sacas 2 canicas sin regresar la primera. ¿Qué probabilidad hay de que al menos una sea roja?

**¿Qué es lo contrario?** Ninguna roja, así que las dos son azules. Recuerda actualizar la bolsa:

$$\frac{4}{7} \times \frac{3}{6} = \frac{12}{42} = \frac{2}{7}$$

**Así que la respuesta es:** $1 - \frac{2}{7} = \frac{5}{7}$.

## Ejemplo 4: Conectar con el conteo

De un grupo de 4 niñas y 3 niños, una maestra elige 3 estudiantes al azar. ¿Qué probabilidad hay de que al menos uno sea niño?

**¿Podemos usar el conteo?** Sí. La probabilidad es lo que quieres dividido entre el total, y ya sabes contar grupos.

- Todos los grupos posibles: $\binom{7}{3} = 35$.
- Grupos solo de niñas, que es lo contrario: $\binom{4}{3} = 4$.

Así que la probabilidad de ningún niño es $\frac{4}{35}$, y la probabilidad de al menos un niño es $1 - \frac{4}{35} = \frac{31}{35}$.

## Ejemplo 5: Una pregunta estilo concurso

Una jugadora de basquetbol encesta un tiro libre con probabilidad $\frac{3}{4}$, sin importar lo que haya pasado en los tiros anteriores. Hace 3 tiros. ¿Cuál es la probabilidad de que enceste al menos 2?

**¿Qué es lo contrario?** Es "a lo más 1", o sea 0 o 1 tiros encestados. Aquí, las dos direcciones tienen un par de casos, así que contemos directamente. Usa E para encestado y F para fallado.

- Los 3 encestados, EEE: $\frac{3}{4} \times \frac{3}{4} \times \frac{3}{4} = \frac{27}{64}$.
- Exactamente 2 encestados: el fallo puede estar en cualquiera de 3 lugares (FEE, EFE, EEF). Cada uno tiene probabilidad $\frac{3}{4} \times \frac{3}{4} \times \frac{1}{4} = \frac{9}{64}$, así que juntos dan $\frac{27}{64}$.

$$\frac{27}{64} + \frac{27}{64} = \frac{54}{64} = \frac{27}{32}$$

La lección aquí es que lo contrario no siempre es más corto. Tómate un momento para comparar antes de elegir.

<section data-box="deeper">

## Para ir más a fondo

"Todos diferentes" es lo contrario de "al menos dos coinciden", y es fácil de contar, una persona a la vez.

**Uno más difícil:** Tres personas pueden haber nacido, con la misma probabilidad, en cualquier día de la semana. ¿Cuál es la probabilidad de que al menos dos compartan el día?

**¿Por qué no contar directamente?** Podrían coincidir exactamente dos, de varias formas, o las tres. Son muchos casos.

**¿Qué es lo contrario?** Que las tres tengan días diferentes.

- La primera persona puede tener cualquier día: $\frac{7}{7}$
- La segunda tiene que evitar ese día: $\frac{6}{7}$
- La tercera tiene que evitar los dos días: $\frac{5}{7}$

Así que las tres son diferentes con probabilidad $\frac{7 \times 6 \times 5}{7 \times 7 \times 7} = \frac{30}{49}$.

Así que al menos dos comparten el día con probabilidad $1 - \frac{30}{49} = \frac{19}{49}$.

**Un dato famoso:** Con los cumpleaños de un año, solo necesitas 23 personas para que la probabilidad de una coincidencia pase de la mitad. La mayoría de la gente adivina un número mucho más alto. Cada persona nueva tiene que evitar a todas las anteriores, y esas probabilidades se multiplican rápido.

Intenta esto. Se lanzan tres dados. ¿Cuál es la probabilidad de que al menos dos muestren el mismo número?

<details class="check"><summary>Ver la respuesta</summary>

Todos diferentes tiene probabilidad $\frac{6 \times 5 \times 4}{216} = \frac{5}{9}$. Así que la respuesta es $1 - \frac{5}{9} = \frac{4}{9}$.

</details>

</section>

<section data-box="traps">

## Trampas comunes

**Sumar las probabilidades.** Para al menos un 6 en 2 lanzamientos, la respuesta $\frac{1}{6} + \frac{1}{6}$ cuenta dos veces el resultado 6 y 6, y la misma lógica pronto pasa de 1. Usa lo contrario.

**Equivocarse con lo contrario.** Lo contrario de "al menos una cara" no es "exactamente una cara". Tampoco es "a lo más una cara". Es "ninguna cara". Revísalo preguntando: ¿cada resultado está exactamente en uno de los dos grupos?

**Olvidar restar.** Después de calcular la probabilidad de ninguna cara, es fácil marcarla como respuesta. Recuerda el último paso, porque el valor de "ninguno" muchas veces está entre las opciones.

</section>

<section data-box="strategy">

## Estrategia de concurso

**Cómo reconocerlo:** Busca "al menos uno", "al menos dos" o "no todos".

**Compara las dos direcciones:** Cuenta los casos de cada forma antes de empezar. Elige la más corta.

**Revisa el tamaño:** "Al menos uno" se vuelve más probable mientras más intentos haces. Si tu respuesta baja con más intentos, algo anda mal.

**Tiempo:** Como dos minutos.

</section>

<section data-box="connections">

## Conexiones

Esto es otra vez [contar lo contrario](/es/pathway/counting/04-count-the-opposite/), y usa [árboles](/es/pathway/intro-probability/03-trees-and-multiplying/). [Smart Counting](/pathway/smart-counting/) (en inglés) lo afina todavía más.

</section>

<section data-box="summary">

## Recuerda esto

- Probabilidad = 1 menos la probabilidad de que no pase.
- Lo contrario de "al menos uno" es "ninguno".
- No sumes probabilidades para "al menos uno".
- Actualiza la bolsa cuando no regresas nada.
- Compara las dos direcciones antes de empezar.

</section>
