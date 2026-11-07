---
title: "Trabajar hacia atrás"
summary: Cuando un problema te dice cómo terminó algo, empieza por el final y deshaz cada paso en orden inverso.
minutes: 11
---

Leo gasta la mitad de su dinero en el almuerzo. Luego gasta \$3 en un refrigerio. Le quedan \$5. ¿Con cuánto empezó? Podrías adivinar y comprobar. Podrías escribir una ecuación. O podrías empezar por el final, donde sabes exactamente cuánto tiene, y caminar hacia atrás en el tiempo.

> **La gran idea:** Cuando un problema te dice cómo **terminó** algo, empieza por el final. Deshaz cada paso, en orden **inverso**, usando la operación contraria.

## Por qué funciona

Piensa en vestirte. Te pones los calcetines y luego los zapatos. Para deshacerlo, te quitas primero los zapatos y luego los calcetines. Deshacer pasa en el orden contrario, y cada paso se reemplaza por su contrario.

| Paso hacia adelante | Cómo deshacerlo |
|---|---|
| Sumar 3 | Restar 3 |
| Restar 3 | Sumar 3 |
| Multiplicar por 2 | Dividir entre 2 |
| Sacar la mitad | Duplicar |

Probémoslo con el dinero de Leo:

- Terminó con \$5.
- Deshaz el refrigerio sumando 3: $5 + 3 = 8$ dólares.
- Tenía \$8 después de gastar la mitad en el almuerzo. Así que deshazlo duplicando: $8 \times 2 = 16$ dólares.

**Compruébalo hacia adelante:** La mitad de \$16 es \$8, y $8 - 3 = 5$. Funciona. Comprobar toma unos segundos, porque recorres la historia en el orden normal.

## Ejemplo 1: Un acertijo de números

Ty piensa en un número, lo multiplica por 3 y le resta 4. El resultado es 20. ¿Cuál era el número?

**¿Qué sabemos?** El valor final es 20, y hay dos pasos.

**Deshazlos en orden inverso.**

- Deshaz "restar 4" sumando 4: $20 + 4 = 24$.
- Deshaz "multiplicar por 3" dividiendo entre 3: $24 \div 3 = 8$.

**Comprobación:** $8 \times 3 - 4 = 20$.

Intenta este por tu cuenta. Nia le suma 7 a un número y luego duplica el resultado. Obtiene 30. ¿Con qué número empezó?

<details class="check"><summary>Ver la respuesta</summary>

Deshaz primero el duplicar: $30 \div 2 = 15$. Luego deshaz sumar 7: $15 - 7 = 8$. Comprobación: $8 + 7 = 15$, y $15 \times 2 = 30$.

</details>

## Ejemplo 2: Una fracción de lo que queda

Una panadería vende $\frac{1}{3}$ de sus panquecitos en la mañana, y luego $\frac{1}{2}$ de los que quedan en la tarde. Le quedan 10 panquecitos. ¿Con cuántos empezó?

**¿Qué sabemos?** Las fracciones complican pensar hacia adelante, porque no sabemos el inicio. Trabajar hacia atrás mantiene todo en números enteros.

- Al final hay 10. Vender $\frac{1}{2}$ dejó la otra mitad, así que antes de la tarde había $10 \times 2 = 20$.
- Esos 20 eran lo que quedaba después de vender $\frac{1}{3}$. Eso significa que 20 son $\frac{2}{3}$ del inicio. Si 2 grupos son 20, entonces un grupo es 10, y los 3 grupos dan 30.

Así que la panadería empezó con 30 panquecitos.

**Comprobación:** En la mañana vende 10 de los 30, y quedan 20. Vende la mitad de esos, y quedan 10.

> **Consejo:** "Vendió $\frac{1}{3}$" significa que quedan $\frac{2}{3}$. Para deshacerlo, divide entre la fracción que queda, no entre la que se fue.

## Ejemplo 3: Intercambios entre personas

Ann y Bo tienen unas tarjetas. Primero, Ann le da 5 tarjetas a Bo. Luego, Bo le da 2 tarjetas a Ann. Ahora cada uno tiene 20 tarjetas. ¿Con cuántas empezó Ann?

**¿Cuál es el plan?** Lleva la cuenta de las dos personas en una tabla, y recórrela hacia atrás desde abajo.

| Momento | Ann | Bo |
|---|---|---|
| Al final | 20 | 20 |
| Antes de que Bo le diera 2 a Ann | 18 | 22 |
| Antes de que Ann le diera 5 a Bo | 23 | 17 |

Así que Ann empezó con 23 tarjetas. Fíjate que el total se mantiene en 40 en cada línea. Esa es una comprobación útil siempre que las cosas solo se pasan entre personas.

## Ejemplo 4: Una pregunta estilo concurso

Una rana está al pie de una escalera. Cada vez que salta, hace esto: **duplica** el número del escalón en el que está y luego le suma 1. Así, desde el escalón 0 salta al escalón 1, y luego al 3. Después de algunos saltos, cae en el escalón 63. Si empezó en el escalón 0, ¿cuántos saltos dio?

**¿Cuál es el plan?** Trabaja hacia atrás. Para deshacer "duplicar y sumar 1", resta 1 y luego divide entre 2.

- Desde 63: $62 \div 2 = 31$.
- Desde 31: $30 \div 2 = 15$.
- Desde 15: $14 \div 2 = 7$.
- Desde 7: $6 \div 2 = 3$.
- Desde 3: $2 \div 2 = 1$.
- Desde 1: $0 \div 2 = 0$.

Son 6 pasos hasta regresar a 0, así que dio **6 saltos**. Hubiera sido difícil ir hacia adelante sin saber cuándo parar, pero hacia atrás no hay que elegir nada.

<section data-box="deeper">

## Para ir más a fondo

Cuando un problema tiene pasos de "la mitad más uno", tienes que deshacer las operaciones en el **orden contrario**.

**Uno más difícil:** Cada día, un panadero regala la mitad de los panes que le quedan, más 1. Después de 3 días, le quedan 2 panes. ¿Cuántos había al principio?

**¿Qué hace un día?** Quita la mitad, y luego quita 1 más. Para deshacerlo, suma primero el 1 y luego duplica.

| Día | Panes al final del día | Suma 1 | Duplica: panes al inicio del día |
|---|---|---|---|
| 3 | 2 | 3 | 6 |
| 2 | 6 | 7 | 14 |
| 1 | 14 | 15 | 30 |

Así que el panadero empezó con **30** panes.

**Compruébalo hacia adelante:** De 30, la mitad es 15, más 1 son 16 regalados, y quedan 14. De 14 regala 8, y quedan 6. De 6 regala 4, y quedan 2. Funciona.

**El error común** es duplicar primero y luego sumar 1. Desde 2, eso da 5, que ni siquiera es un número que se pueda partir a la mitad al ir hacia adelante.

Intenta esto. Cada día, Ria gasta la mitad de su dinero, más \$2. Después de 2 días, tiene \$3. ¿Con cuánto empezó?

<details class="check"><summary>Ver la respuesta</summary>

Deshaz el día 2: $3 + 2 = 5$, y al duplicar da 10. Deshaz el día 1: $10 + 2 = 12$, y al duplicar da 24. Empezó con \$24.

</details>

</section>

<section data-box="traps">

## Trampas comunes

**Deshacer en el orden equivocado.** En el Ejemplo 1, algunos estudiantes dividen primero entre 3: $20 \div 3$ ni siquiera da un número entero. Lo último que pasó se deshace **primero**.

**Usar la misma operación en lugar de la contraria.** Para deshacer "sumar 4", restas 4. Es fácil equivocarse cuando vas rápido, y una comprobación hacia adelante lo detecta.

**Tratar "la mitad de lo que queda" como la mitad del original.** En el Ejemplo 2, el $\frac{1}{2}$ se sacó de lo que quedaba después de la mañana. Trabajar hacia atrás un paso a la vez lo resuelve por ti.

</section>

<section data-box="strategy">

## Estrategia de concurso

**Cómo reconocerlo:** Te dan el valor final y te preguntan por el inicio. Frases como "empezó con", "originalmente" y "al principio" son buenas pistas.

**Siempre comprueba hacia adelante.** Toma 15 segundos, y detecta casi todos los errores.

**Prueba las opciones:** Como la pregunta tiene un valor inicial, puedes recorrer la historia con una opción. Prueba primero la del medio. Si da demasiado grande o demasiado pequeño, te dice hacia dónde ir.

**Tiempo:** Como un minuto.

</section>

<section data-box="connections">

## Conexiones

Trabajar hacia atrás es lo que hace resolver [ecuaciones](/pathway/equations-word-problems/) (en inglés) en el Nivel 2. Pensar en grupos iguales para las fracciones viene de [Fracciones y razones](/es/pathway/fractions-ratios/).

</section>

<section data-box="summary">

## Recuerda esto

- ¿Conoces el final? Empieza ahí.
- Deshaz los pasos en orden inverso, usando contrarios.
- "Vendió $\frac{1}{3}$" significa que quedan $\frac{2}{3}$.
- Una tabla ayuda cuando hay varias personas.
- Comprueba hacia adelante con la historia.

</section>
