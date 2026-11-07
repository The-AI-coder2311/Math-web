---
title: "Reglas de divisibilidad y por qué funcionan"
summary: Descubre si un número grande se divide exactamente sin hacer la división larga, y usa el valor posicional para ver por qué las reglas son ciertas.
minutes: 13
---

El maestro Lee tiene 4,572 calcomanías y quiere repartirlas en partes iguales entre 9 estudiantes, sin que sobre ninguna. ¿Puede hacerlo? Podrías hacer la división larga. O podrías sumar $4 + 5 + 7 + 2 = 18$, notar que 18 es múltiplo de 9 y decir "sí" en cinco segundos. Esta lección te enseña estos atajos, y también por qué no son magia.

> **La gran idea:** Para saber si un número se divide exactamente, solo necesitas mirar la parte que importa. El valor posicional te dice cuál es esa parte.

Un número es **divisible** entre otro si al dividir no sobra nada. Por ejemplo, 12 es divisible entre 3, porque $12 \div 3 = 4$.

## Las reglas

| Divisible entre | Prueba | Ejemplo |
|---|---|---|
| 2 | El último dígito es par | 3,578 |
| 3 | La suma de los dígitos es múltiplo de 3 | 1,521, porque sus dígitos suman 9 |
| 4 | Los dos últimos dígitos son múltiplo de 4 | 3,716, porque 16 funciona |
| 5 | El último dígito es 0 o 5 | 8,245 |
| 6 | Pasa las pruebas del 2 **y** del 3 | 1,524 |
| 8 | Los tres últimos dígitos son múltiplo de 8 | 7,120, porque 120 funciona |
| 9 | La suma de los dígitos es múltiplo de 9 | 4,572, porque sus dígitos suman 18 |
| 10 | El último dígito es 0 | 6,130 |

## Por qué funcionan las reglas

**La regla del 5.** Toma el número 8,245. Es igual a $8240 + 5$. Cualquier número que termina en 0 es múltiplo de 10, así que también es múltiplo de 5. Eso significa que 8,240 ya es múltiplo de 5, y lo único que importa es el último dígito.

**La regla del 4.** Escribe $3716 = 3700 + 16$. Como 100 es múltiplo de 4, cualquier cantidad de centenas también lo es. Así que solo importan los dos últimos dígitos.

**La regla del 9.** Esta es la más sorprendente. Fíjate que $10 = 9 + 1$, $100 = 99 + 1$ y $1000 = 999 + 1$. Entonces:

$$4572 = 4 \times 1000 + 5 \times 100 + 7 \times 10 + 2$$

Reemplaza cada potencia de 10 por "un múltiplo de 9, más 1". Los múltiplos de 9 suman algo que sigue siendo múltiplo de 9. Lo que sobra es $4 + 5 + 7 + 2$, ¡la suma de los dígitos! Por eso solo importa la suma de los dígitos. La regla del 3 funciona igual, porque 9, 99 y 999 también son múltiplos de 3.

## Ejemplo 1: Probar un número

¿2,718 es divisible entre 6?

**¿Qué sabemos?** El 6 es $2 \times 3$, así que el número tiene que pasar las dos pruebas.

- Su último dígito, 8, es par, así que pasa la del 2.
- La suma de sus dígitos es $2 + 7 + 1 + 8 = 18$, que es múltiplo de 3, así que pasa la del 3.

Así que sí es divisible entre 6. De hecho, $2718 = 6 \times 453$.

Ahora intenta uno. ¿5,034 es divisible entre 9? ¿Es divisible entre 3?

<details class="check"><summary>Ver la respuesta</summary>

La suma de los dígitos es $5 + 0 + 3 + 4 = 12$. Es múltiplo de 3, pero no de 9. Así que es divisible entre 3, y no entre 9.

</details>

## Ejemplo 2: Encontrar un dígito que falta

El número $47\square2$ es divisible entre 9. ¿Qué dígito va en el cuadro?

**¿Qué sabemos?** La suma de los dígitos tiene que ser múltiplo de 9. Sin el cuadro, los dígitos suman $4 + 7 + 2 = 13$.

**¿Qué pregunta en realidad?** ¿Qué dígito lleva el 13 hasta un múltiplo de 9? El siguiente múltiplo de 9 es 18, así que el cuadro es 5. El que sigue es 27, que necesitaría un 14, y eso no es un dígito. Así que la única respuesta es 5.

## Ejemplo 3: Usar dos reglas juntas

El número de 3 dígitos $5\square6$ es divisible entre 4 **y** entre 3. ¿Cuántos dígitos podrían ir en el cuadro?

**¿Cuál es el plan?** Haz primero la prueba más estricta y luego filtra.

- **Entre 4:** Los dos últimos dígitos, $\square6$, tienen que ser múltiplo de 4. Las opciones son 16, 36, 56, 76 y 96. Así que el cuadro puede ser 1, 3, 5, 7 o 9.
- **Entre 3:** La suma de los dígitos, $5 + \square + 6$, es 11 más el cuadro. Prueba cada opción: 12 funciona, 14 no, 16 no, 18 funciona y 20 no.

Así que el cuadro puede ser 1 o 7, lo que da 516 y 576. Hay 2 dígitos posibles.

## Ejemplo 4: Una pregunta estilo concurso

¿Cuántos números enteros del 1 al 100 son divisibles entre 6 pero no entre 4?

**¿Por dónde empezamos?** Contemos primero los múltiplos de 6. Como $6 \times 16 = 96$, hay 16.

**¿Qué pregunta en realidad?** Quita los que también son múltiplos de 4. Un número divisible entre 6 y entre 4 es múltiplo de 12. Como $12 \times 8 = 96$, hay 8 de esos.

$$16 - 8 = 8$$

¿Por qué 12 y no 24? Los múltiplos de 12, como 12 y 36, son divisibles entre 6 y entre 4, y con 24 se quedarían fuera. Vas a aprender más sobre esta idea en el Nivel 2.

<section data-box="deeper">

## Para ir más a fondo

Aquí hay una regla más que aparece en los concursos. Para probar el 11, **alterna** restando y sumando los dígitos. Si el resultado es múltiplo de 11, incluido el 0, el número es divisible entre 11.

**¿Por qué funciona?** Mira cada valor posicional. Fíjate que $10 = 11 - 1$, $100 = 99 + 1$ y $1000 = 1001 - 1$. Cada uno es un múltiplo de 11, más o menos 1:

| Valor posicional | Escrito con un múltiplo de 11 | Queda |
|---|---|---|
| 1 | $0 + 1$ | $+1$ |
| 10 | $11 - 1$ | $-1$ |
| 100 | $99 + 1$ | $+1$ |
| 1000 | $1001 - 1$ | $-1$ |

Así que los dígitos cuentan con signos alternados.

**Uno más difícil:** ¿Qué dígito $d$ hace que el número $7d42$ sea divisible entre 11?

Alterna los signos desde la izquierda: $7 - d + 4 - 2 = 9 - d$. Necesitamos que sea múltiplo de 11, y $d$ va del 0 al 9. Solo $d = 9$ da un múltiplo, que es 0.

**Comprobación:** $7942 = 11 \times 722$.

Intenta esto. ¿Qué dígito $d$ hace que $3d16$ sea divisible entre 11?

<details class="check"><summary>Ver la respuesta</summary>

La suma alternada es $3 - d + 1 - 6 = -2 - d$. Para que sea múltiplo de 11, $d$ tiene que ser 9, lo que da $-11$. Comprobación: $3916 = 11 \times 356$.

</details>

</section>

<section data-box="traps">

## Trampas comunes

**Usar la suma de dígitos para el número equivocado.** La regla de la suma de los dígitos solo funciona para el 3 y el 9. El número 28 tiene una suma de dígitos de 10, pero eso no te dice nada sobre la divisibilidad entre 2, 4, 5 o 10.

**Pensar que "divisible entre 4" significa "el último dígito es 4".** El 24 es divisible entre 4, pero el 14 no, y el 16 sí, aunque termina en 6. Tienes que revisar los dos **últimos** dígitos.

**Combinar las reglas equivocadas para un divisor más grande.** Para probar el 12 puedes usar el 3 y el 4, porque no tienen factores en común. Usar el 2 y el 6 no funciona: 18 es divisible entre 2 y entre 6, pero no entre 12.

</section>

<section data-box="strategy">

## Estrategia de concurso

**Cómo reconocerlo:** Busca "divisible entre", "múltiplo de", un dígito que falta o una pregunta sobre repartir cosas en partes iguales.

**Descarta rápido:** Supón que la respuesta de un problema tiene que ser múltiplo de 9. Haz la prueba de la suma de dígitos con cada opción. Muchas veces solo queda una, y toma segundos.

**Cuánto debe tardar:** Menos de un minuto para una sola prueba, y dos minutos para un problema con un dígito que falta.

</section>

<section data-box="connections">

## Conexiones

Estas reglas usan el [valor posicional](/es/pathway/number-sense/01-place-value/). Te ayudan a encontrar [factorizaciones en primos](/pathway/primes-remainders/) (en inglés) en el Nivel 2, y [Remainder Math](/pathway/modular-arithmetic/) (en inglés), en el Nivel 3, las explica de otra forma.

</section>

<section data-box="summary">

## Recuerda esto

- 2, 5 y 10: mira el último dígito.
- 4: mira los dos últimos dígitos. 8: mira los tres últimos.
- 3 y 9: mira la suma de los dígitos.
- 6: tiene que pasar las pruebas del 2 y del 3.
- Para un divisor más grande, usa dos pruebas sin factores en común.

</section>
