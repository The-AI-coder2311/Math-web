---
title: "Cuenta de más y luego divide"
summary: Cuando el orden no importa, cuenta como si importara y luego divide entre las repeticiones. De aquí sale la fórmula de "combinaciones".
minutes: 13
---

Cuatro amigos se dan la mano una vez cada pareja. ¿Cuántos apretones de manos hay? Podrías pensar: "Cada una de las 4 personas da 3 apretones, así que son $4 \times 3 = 12$". Ahora busca a 3 amigos y pruébalo. Solo te van a salir 6. ¿Qué pasó con los otros 6?

> **La gran idea:** A veces la forma más fácil de contar es contar **de más** a propósito, de modo que todo se cuente el mismo número de veces. Luego divides entre ese número.

## Por qué funciona dividir

Llamemos a los amigos A, B, C y D. Cuando dijimos "cada persona da 3 apretones", contamos dos veces el apretón entre A y B: una vez como apretón de A y otra como apretón de B. Esta es cada pareja ordenada que contamos:

| | | |
|---|---|---|
| AB | AC | AD |
| BA | BC | BD |
| CA | CB | CD |
| DA | DB | DC |

Hay 12 entradas, y cada apretón real aparece exactamente dos veces. Así que el número real es la mitad:

$$\frac{4 \times 3}{2} = 6$$

Aquí hay otra forma de imaginarlo. Supón que quieres contar los perros de un parque, pero solo puedes ver sus patas. Podrías contar las patas y dividir entre 4. Eso funciona porque cada perro tiene exactamente 4 patas. Si algunos perros tuvieran 3 patas, dividir daría una respuesta incorrecta.

La palabra "exactamente" importa de la misma forma. Dividir entre 2 funciona porque **cada** apretón se contó el mismo número de veces.

## Ejemplo 1: Elegir una pareja

Una pizzería ofrece 8 ingredientes, y quieres 2 diferentes. ¿Cuántas pizzas puedes armar?

**¿Importa el orden?** No. Champiñones y pimiento es la misma pizza que pimiento y champiñones.

Cuenta como si el orden importara: 8 opciones para el primer ingrediente y 7 para el segundo, lo que da $8 \times 7 = 56$. Cada pizza se contó dos veces, así que divide entre 2:

$$\frac{8 \times 7}{2} = 28$$

## Ejemplo 2: Elegir un grupo de 3

Un entrenador elige 3 jugadores de entre 7 para un equipo. ¿Cuántos equipos son posibles?

Haz como si el orden importara: $7 \times 6 \times 5 = 210$.

**¿Cuántas veces se contó cada equipo?** Toma un equipo, como Ana, Ben y Cy. En los 210, se contó una vez por cada orden en que pudieron elegirse esos 3. Ya sabes que 3 personas se pueden ordenar de $3! = 6$ formas. Así que divide entre 6:

$$\frac{7 \times 6 \times 5}{3 \times 2 \times 1} = 35$$

A esto se le llama **combinación**. Decimos "combinaciones de 7 en 3" y lo escribimos $\binom{7}{3}$. Este es el patrón para "$n$ en $k$":

- Arriba, multiplica $k$ números, contando hacia abajo desde $n$.
- Abajo, pon $k!$.

Así, $\binom{10}{2} = \frac{10 \times 9}{2 \times 1} = 45$, y $\binom{6}{4} = \frac{6 \times 5 \times 4 \times 3}{4 \times 3 \times 2 \times 1} = 15$.

¿Por qué abajo siempre va $k!$? Porque $k$ cosas elegidas se pueden ordenar de $k!$ formas, y esas son las veces que el número de arriba contó cada grupo. Arriba cuentas elecciones en orden, y abajo quitas el orden.

Intenta una: una maestra elige a 2 de 9 estudiantes para cargar material. ¿Cuántas parejas son posibles?

<details class="check"><summary>Ver la respuesta</summary>

El orden no importa, así que son "combinaciones de 9 en 2": $\frac{9 \times 8}{2} = 36$.

</details>

## Ejemplo 3: Ordenar letras que se repiten

¿De cuántas formas puedes ordenar las letras de NOON?

Si las 4 letras fueran diferentes, habría $4! = 24$ ordenamientos. Haz como si fueran diferentes escribiendo N1, O1, O2, N2. Ahora, ¿cuántas veces se cuenta cada palabra real? En cualquier palabra, las dos N se pueden intercambiar de 2 formas, y las dos O de 2 formas. Eso da $2 \times 2 = 4$ versiones de cada palabra. Entonces:

$$\frac{24}{4} = 6$$

Compruébalo haciendo la lista: NNOO, NONO, NOON, ONNO, ONON, OONN. Son 6, así que la idea funciona.

## Ejemplo 4: Una pregunta estilo concurso

Un grupo tiene 5 niñas y 4 niños. Un comité tendrá 2 niñas y 2 niños. ¿Cuántos comités son posibles?

**¿Qué sabemos?** Hay dos elecciones separadas: elegir a las niñas y luego elegir a los niños. Dentro de cada grupo, el orden no importa.

**¿Cuál es el plan?** Usa combinaciones para cada grupo. Luego usa el truco de multiplicar, porque eliges a las niñas **y luego** a los niños.

- Niñas: $\binom{5}{2} = \frac{5 \times 4}{2} = 10$
- Niños: $\binom{4}{2} = \frac{4 \times 3}{2} = 6$

$$10 \times 6 = 60$$

<section data-box="deeper">

## Para ir más a fondo

A veces tienes que dividir más de una vez, porque un problema puede contar de más de varias formas.

**Uno más difícil:** ¿De cuántas formas pueden dividirse 6 amigos en dos equipos de 3, si los equipos no tienen nombre?

**Primera cuenta:** Elige 3 amigos para un equipo: $\frac{6 \times 5 \times 4}{3 \times 2 \times 1} = 20$. Los otros 3 amigos forman automáticamente el segundo equipo.

**¿Qué se contó dos veces?** Elegir A, B y C deja a D, E y F. Elegir D, E y F deja a A, B y C. ¡Es la misma división! Así que cada división se contó 2 veces, y la respuesta es $20 \div 2 = 10$.

**¿Qué cambia si los equipos tienen nombre?** Si un equipo es Rojo y el otro es Azul, las dos elecciones sí son diferentes, así que la respuesta se queda en 20. Muchas veces, todo el problema está en notar si los grupos tienen nombres o puestos.

Intenta esto. ¿De cuántas formas pueden dividirse 8 amigos en dos equipos de 4, sin nombres de equipo?

<details class="check"><summary>Ver la respuesta</summary>

Hay $\frac{8 \times 7 \times 6 \times 5}{4 \times 3 \times 2 \times 1} = 70$ formas de elegir un equipo. Cada división se contó dos veces, así que hay 35 divisiones.

</details>

</section>

<section data-box="traps">

## Trampas comunes

**Dividir cuando el orden sí importa.** Para un presidente y un vicepresidente de entre 8 personas, la respuesta es $8 \times 7 = 56$, no 28. Los dos puestos son diferentes, así que intercambiar a las personas da otro resultado. Siempre pregunta: "Si intercambio a estos dos, ¿es un resultado nuevo?".

**Dividir entre el número equivocado.** Para un equipo de 3, algunos estudiantes dividen entre 3 y obtienen 70 en el Ejemplo 2. Pero 3 personas se pueden ordenar de $3! = 6$ formas. Divide entre el número de órdenes, no entre el número de personas.

**Sumar los grupos en el Ejemplo 4.** La respuesta $10 + 6 = 16$ está mal, porque cada pareja de niñas puede ir con cada pareja de niños. Eliges a las niñas **y** a los niños, así que multiplica.

</section>

<section data-box="strategy">

## Estrategia de concurso

**Cómo reconocerlo:** Busca palabras como "comité", "equipo", "pareja", "grupo" o "apretones de manos". Dentro del grupo, nada distingue a las personas.

**Un atajo útil:** Elegir 2 que se quedan es lo mismo que elegir a los que salen, así que $\binom{9}{7} = \binom{9}{2} = 36$. Usa la que sea más corta.

**Vale la pena memorizarlo:** $\binom{n}{2}$ aparece en todos lados: partidos en un torneo, apretones de manos y líneas entre puntos. Es $n \times (n - 1)$ dividido entre 2.

**Tiempo:** Menos de dos minutos. Las combinaciones siempre dan números enteros, así que si te sale una fracción, algo salió mal.

</section>

<section data-box="connections">

## Conexiones

Esto usa [filas y factoriales](/es/pathway/counting/02-when-order-matters/). Los caminos en una cuadrícula de [Smart Counting](/pathway/smart-counting/) (en inglés) y la probabilidad con grupos también usan combinaciones.

</section>

<section data-box="summary">

## Recuerda esto

- ¿El orden no importa? Cuenta como si importara y luego divide.
- $\binom{n}{k}$ son $k$ números contando hacia abajo desde $n$, divididos entre $k!$.
- Letras repetidas: divide entre los intercambios que no cambian la palabra.
- Solo divide si todo se contó el mismo número de veces.

</section>
