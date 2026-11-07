---
title: "Valor posicional: lo que de verdad significan los dígitos"
summary: Descubre que un número es la suma de sus valores posicionales. Esa idea resuelve acertijos de dígitos y explica por qué funcionan muchos atajos.
minutes: 12
---

Toma cualquier número de 2 dígitos con dos dígitos diferentes, como 73. Invierte los dígitos para obtener 37, y resta el menor del mayor: $73 - 37 = 36$. Ahora prueba con 82 y 28: $82 - 28 = 54$. Prueba con 91 y 19: $91 - 19 = 72$. ¿Notas algo? Todas las respuestas, 36, 54 y 72, son múltiplos de 9. Prueba algunos más por tu cuenta. Siempre pasa, y al final de esta lección vas a saber por qué.

> **La gran idea:** El valor de un dígito depende de **dónde está**. El número 352 en realidad significa 3 centenas, 5 decenas y 2 unidades. Cuando un problema habla de dígitos, escribe el número como una suma de sus posiciones.

## Por qué funciona

Nuestro sistema de numeración agrupa de diez en diez. Diez unidades forman una decena, diez decenas forman una centena, y así sucesivamente. Así que el 3 de 352 en realidad no vale 3. Vale 300.

$$352 = 3 \times 100 + 5 \times 10 + 2$$

A esto se le llama **forma desarrollada**. Las letras nos dejan hablar de todos los números de 2 dígitos a la vez. Si un número tiene el dígito $a$ en las decenas y el dígito $b$ en las unidades, entonces su valor es $10a + b$, **no** $a + b$ ni $a \times b$. Por ejemplo, con $a = 7$ y $b = 3$, obtenemos $10 \times 7 + 3 = 73$.

Ahora podemos resolver el misterio del principio. El número con dígitos $a$ y $b$ es $10a + b$, y el número invertido es $10b + a$. Al restarlos, obtienes $9a - 9b$, que es 9 veces la diferencia de los dígitos. Así que la respuesta siempre es múltiplo de 9. Compruébalo con 73 y 37: los dígitos se diferencian en 4, y $9 \times 4 = 36$.

## Ejemplo 1: El mayor y el menor

Usando cada uno de los dígitos 4, 0, 7 y 2 exactamente una vez, ¿cuál es la diferencia entre el mayor y el menor número de 4 dígitos que puedes formar?

**¿Qué sabemos?** Un dígito vale más mientras más a la izquierda esté.

**¿Cuál es el plan?** Para el número mayor, pon los dígitos más grandes a la izquierda: 7420. Para el menor, pon los dígitos más pequeños a la izquierda. Pero un número de 4 dígitos no puede empezar con 0, así que el primer dígito tiene que ser 2. Luego va el 0, lo que da 2047.

$$7420 - 2047 = 5373$$

Intenta este antes de seguir. ¿Cuál es el mayor número de 3 dígitos que puedes formar usando los dígitos 5, 1 y 8 una vez cada uno? ¿Cuál es el menor?

<details class="check"><summary>Ver la respuesta</summary>

El mayor es 851, y el menor es 158. Para el número mayor, el dígito más grande va donde vale más, y para el menor, ahí va el dígito más pequeño.

</details>

## Ejemplo 2: Contar cuántas veces aparece un dígito

¿Cuántas veces escribes el dígito 7 al escribir los números del 1 al 100?

**¿Cómo lo dividimos?** Por posición. Revisar una posición a la vez nos mantiene en orden.

- **En las unidades:** 7, 17, 27, y así hasta 97. Son 10 veces.
- **En las decenas:** 70, 71, 72, y así hasta 79. Son otras 10 veces.

El número 77 se contó en los dos grupos, y está bien, porque usa el dígito 7 dos veces. Así que el total es $10 + 10 = 20$.

## Ejemplo 3: ¿Qué dígito falta?

Un número de 2 dígitos es 4 veces la suma de sus dígitos. ¿Cuál es un número así?

**¿Qué sabemos?** Con dígitos $a$ y $b$, el número es $10a + b$, y la suma de sus dígitos es $a + b$.

**¿Qué pregunta en realidad?** Necesitamos $10a + b = 4(a + b)$. Al multiplicar el lado derecho queda $10a + b = 4a + 4b$. Si quitamos $4a$ y $b$ de los dos lados, queda $6a = 3b$, así que $b = 2a$.

Entonces el dígito de las unidades tiene que ser el doble del de las decenas. Eso da 12, 24, 36 y 48. Comprueba uno: en 36 los dígitos suman 9, y $4 \times 9 = 36$. Funciona. (El siguiente necesitaría un 10 en las unidades, y 10 no es un dígito.)

Si nunca has usado letras así, no te preocupes. También podrías probar números uno por uno de una lista corta. La unidad de ecuaciones del Nivel 2 practica esta habilidad.

## Ejemplo 4: Una pregunta estilo concurso

¿Cuántos números de 3 dígitos tienen un dígito de las centenas que es 3 más que el de las unidades? Por ejemplo, 502 es uno, porque 5 es 3 más que 2.

**¿Qué sabemos?** Los dígitos de las centenas y de las unidades están conectados. El de las decenas está libre.

**¿Cuál es el plan?** Cuenta las elecciones. El dígito de las centenas puede ser del 3 al 9. (No puede ser 0, 1 ni 2, porque el de las unidades tendría que ser negativo.) Son 7 opciones, y cada una decide el dígito de las unidades. El de las decenas puede ser cualquiera de los 10 dígitos.

$$7 \times 10 = 70$$

<section data-box="deeper">

## Para ir más a fondo

Agrupar los números según cuántos dígitos tienen convierte una cuenta larga en tres cortas.

**Uno más difícil:** Escribes los números enteros del 1 al 100 en fila. ¿Cuántos dígitos escribes?

**Agrupa por tamaño:**

| Números | Cuántos números | Dígitos cada uno | Total de dígitos |
|---|---|---|---|
| del 1 al 9 | 9 | 1 | 9 |
| del 10 al 99 | 90 | 2 | 180 |
| 100 | 1 | 3 | 3 |

Eso da $9 + 180 + 3 = 192$ dígitos.

**Cuidado con la cuenta de la fila del medio.** Del 10 al 99 hay $99 - 10 + 1 = 90$ números, no 89. Los dos extremos cuentan.

Esta idea también funciona al revés. Si un libro usa 192 dígitos para numerar sus páginas, tiene 100 páginas. ¡Las imprentas de verdad piensan en esto!

Intenta esto. ¿Cuántos dígitos escribes para los números del 1 al 150?

<details class="check"><summary>Ver la respuesta</summary>

Los números hasta el 99 usan $9 + 180 = 189$ dígitos. Del 100 al 150 hay 51 números de 3 dígitos cada uno, que dan 153. En total son $189 + 153 = 342$.

</details>

</section>

<section data-box="traps">

## Trampas comunes

**Tomar los dígitos por su valor aparente.** Si un número tiene los dígitos 4 y 6, el número no es $4 + 6$ ni $4 \times 6$. Es 46, que es $10 \times 4 + 6$. Cada vez que un problema diga "un número con dígitos", escribe la forma desarrollada.

**Empezar un número con 0.** En el Ejemplo 1, algunos estudiantes dicen que el número menor es 0247, lo que da la diferencia incorrecta de 7173. Pero 0247 no es un número de 4 dígitos. El primer dígito tiene que ser por lo menos 1.

**Contar de menos un dígito repetido.** En el Ejemplo 2, algunos estudiantes piensan que el 77 solo se cuenta una vez y contestan 19. La pregunta dice cuántas veces **escribes** el dígito, así que el 77 cuenta dos veces. Si la pregunta fuera "cuántos números contienen un 7", la respuesta sería 19. Lee la redacción con cuidado.

</section>

<section data-box="strategy">

## Estrategia de concurso

**Cómo reconocerlo:** Busca las palabras "dígito", "dígito de las decenas", "suma de los dígitos" o "invertido".

**Cuánto debe tardar:** De uno a dos minutos. Si no ves el álgebra, haz una lista. Con solo 90 números de dos dígitos, una regla muchas veces deja pocos que puedes probar.

**Usar las opciones de respuesta:** En un acertijo de dígitos, muchas veces puedes probar directamente las opciones, porque cada una es un número real con dígitos reales. Suele ser más rápido que resolverlo.

</section>

<section data-box="connections">

## Conexiones

El valor posicional explica las [reglas de divisibilidad](/es/pathway/number-sense/03-divisibility-rules/) de esta unidad. También lleva a [otras bases numéricas](/pathway/modular-arithmetic/) (en inglés) en el Nivel 3.

</section>

<section data-box="summary">

## Recuerda esto

- El valor de un dígito depende de dónde está.
- Un número de 2 dígitos con dígitos $a$ y $b$ es igual a $10a + b$.
- Los números no pueden empezar con 0.
- Cuenta los dígitos una posición a la vez.
- Un número menos su invertido siempre es múltiplo de 9.

</section>
