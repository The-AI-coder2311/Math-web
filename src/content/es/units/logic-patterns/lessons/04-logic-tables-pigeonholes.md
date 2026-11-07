---
title: "Tablas de lógica y palomares"
summary: Organiza las pistas en una tabla, prueba todos los casos cuando alguien podría estar mintiendo, y usa el principio del palomar para demostrar que algo tiene que pasar.
minutes: 13
---

Tu cajón de calcetines tiene un revoltijo de calcetines negros, blancos y azules, y el cuarto está oscuro. ¿Cuántos calcetines tienes que sacar para estar **seguro** de tener un par del mismo color? No pueden ser 3, porque podrías sacar uno de cada color. Pero con 4, tienes una pareja garantizada. Eso es lógica de verdad: no necesitaste saber nada sobre qué calcetines sacaste.

> **La gran idea:** Los problemas de lógica premian la **organización**, no adivinar. Pon las pistas en una tabla, prueba todos los casos posibles, y piensa en el **peor caso** cuando algo tiene que estar garantizado.

## Por qué funcionan las tablas

Tu cerebro solo puede sostener unos cuantos datos a la vez. Una tabla los sostiene por ti. Cada "no" en una tabla también es un avance, porque descartar cosas muchas veces obliga a que salga la respuesta.

## Ejemplo 1: Una cuadrícula de pistas

Maya, Ned y Ola tienen cada uno una mascota diferente: un gato, un perro o un pez. Maya es alérgica al pelo. La mascota de Ned no sabe nadar. Ned no tiene el gato. ¿Quién tiene qué?

**¿Qué sabemos?** Pon un **no** en la tabla por cada pista.

- Los gatos y los perros tienen pelo, así que Maya no tiene gato ni perro.
- La mascota de Ned no sabe nadar, así que Ned no tiene el pez.
- Ned no tiene el gato.

| | Gato | Perro | Pez |
|---|---|---|---|
| Maya | no | no | **sí** |
| Ned | no | **sí** | no |
| Ola | **sí** | no | no |

Cada fila y cada columna solo puede tener un "sí". A Maya solo le queda una opción, el pez. A Ned solo le queda una opción, el perro. Así que Ola tiene el gato.

## Ejemplo 2: ¿Quién dice la verdad?

Uno de tres estudiantes rompió una ventana. Exactamente una de estas afirmaciones es verdadera:

- Ana dice: "Ben lo hizo".
- Ben dice: "Yo no lo hice".
- Cy dice: "Ana no lo hizo".

**¿Cuál es el plan?** Solo hay 3 posibilidades. Para cada una, cuenta las afirmaciones verdaderas.

| Si fue... | Lo que dice Ana | Lo que dice Ben | Lo que dice Cy | Afirmaciones verdaderas |
|---|---|---|---|---|
| Ana | falso | verdadero | falso | 1 |
| Ben | verdadero | falso | verdadero | 2 |
| Cy | falso | verdadero | verdadero | 2 |

Solo la primera fila tiene exactamente 1 afirmación verdadera, así que fue **Ana**. Probar todos los casos parece lento, pero es rápido cuando hay pocos casos, y no puede salir mal si tienes cuidado.

Ahora intenta uno. Al, Bea y Cal tocan cada uno un instrumento diferente: flauta, tambor o piano. Al no toca el piano ni el tambor. Bea no toca el tambor. ¿Quién toca el tambor?

<details class="check"><summary>Ver la respuesta</summary>

Al tiene que tocar la flauta, porque es lo único que le queda. Bea no toca el tambor, y la flauta ya está ocupada, así que toca el piano. Eso deja el tambor para Cal.

</details>

## Ejemplo 3: El principio del palomar

Si 5 palomas entran en 4 agujeros, por lo menos un agujero tiene que tener 2 palomas o más. ¿Por qué? Si cada agujero tuviera a lo más 1 paloma, los agujeros tendrían a lo más 4 palomas, y tenemos 5. Este es el **principio del palomar**.

**Cómo usarlo:** Un grupo tiene 30 estudiantes. ¿Tiene que haber 3 que cumplan años en el mismo mes?

**¿Cuál es el peor caso?** Reparte a los estudiantes lo más parejo posible. Con 12 meses y 2 estudiantes en cada uno, eso solo cubre 24 estudiantes. Quedan 6 más, así que algún mes recibe un 3.er estudiante. Así que **sí**, está garantizado. De hecho, funciona desde 25 estudiantes.

**De vuelta a los calcetines:** Los "agujeros" son los 3 colores, y las "palomas" son los calcetines. Con 4 calcetines y 3 colores, dos tienen que coincidir.

## Ejemplo 4: Pares e impares

Aquí hay otro tipo de lógica: fijarse si los números son pares o impares. A esto se le llama **paridad**.

Tienes los números del 1 al 5 en un pizarrón. Puedes borrar dos números cualesquiera y escribir su suma. Sigues así hasta que queda un solo número. ¿Ese número puede ser par?

**¿Qué sabemos?** Su total es $1 + 2 + 3 + 4 + 5 = 15$. Cuando reemplazas dos números por su suma, ¡el total no cambia en absoluto!

**Entonces, ¿qué queda?** El último número tiene que ser igual al total, 15. Siempre es 15, así que siempre es impar. Hagas lo que hagas, el resultado ya está decidido. Buscar algo que **nunca cambia** es un truco muy poderoso.

## Ejemplo 5: Una pregunta estilo concurso

Una bolsa tiene 6 canicas rojas, 5 azules y 3 verdes. Sacas canicas sin ver. ¿Cuántas tienes que sacar para estar seguro de tener 2 canicas del mismo color y por lo menos 1 canica azul?

**¿Cuál es el peor caso?** Tenemos que pensar como la persona con más mala suerte del mundo. Para evitar el azul lo más posible, sacas primero las 6 rojas y las 3 verdes. Son 9 canicas sin ninguna azul. La siguiente tiene que ser azul, lo que da 10.

**¿También tienes una pareja del mismo color?** Con tantas rojas, sí. Así que la respuesta es **10**.

<section data-box="deeper">

## Para ir más a fondo

Algunos acertijos de lógica piden un plan que funcione pase lo que pase. Piensa en cuánto puede decirte cada paso.

**Uno más difícil:** Tienes 9 monedas que se ven iguales, y una pesa más que las demás. Tienes una balanza de dos platillos. ¿Con cuántas pesadas, como mínimo, puedes estar seguro de encontrar la moneda pesada?

**¿Qué te puede decir una pesada?** Tiene 3 resultados posibles: pesa más el lado izquierdo, pesa más el derecho, o están equilibrados. Así que una pesada puede dividir las monedas en 3 grupos, no solo en 2.

**El plan:** Pon 3 monedas en cada lado y deja 3 fuera.

- Si un lado pesa más, la moneda pesada está en ese grupo de 3.
- Si se equilibra, la moneda pesada está en el grupo de 3 que dejaste fuera.

Ahora haz lo mismo con esas 3 monedas: pon 1 en cada lado y deja 1 fuera. Eso encuentra la moneda pesada. Así que **2** pesadas son suficientes.

**¿Por qué no dividir a la mitad?** Pesar 4 contra 4 puede dejar hasta 4 monedas, y eso necesita 2 pesadas más, o sea 3 en total.

Intenta esto. ¿Y si hay 27 monedas, con una más pesada que las demás? ¿Cuántas pesadas necesitas?

<details class="check"><summary>Ver la respuesta</summary>

Cada pesada reduce el grupo a un tercio: de 27 a 9, luego de 9 a 3, luego de 3 a 1. Así que necesitas 3 pesadas.

</details>

</section>

<section data-box="traps">

## Trampas comunes

**Pensar en el caso con suerte.** "¿Cuántos para estar seguro?" pregunta por el peor caso, no por el mejor. Decir "2 calcetines podrían coincidir" no garantiza una pareja. Imagina que tienes la peor suerte del mundo.

**Equivocarse por uno con los palomares.** El peor caso es uno menos que la respuesta. Con 3 colores, 3 calcetines **pueden** evitar una pareja, así que necesitas 4. No te detengas en el peor caso. Agrega el que obliga a que pase.

**Adivinar sin probar.** En un acertijo de quién dice la verdad, detenerte en cuanto un caso parece funcionar puede hacerte perder un segundo caso que también funciona. Revisa todas las filas.

</section>

<section data-box="strategy">

## Estrategia de concurso

**Cómo reconocerlo:** Busca "tiene que ser cierto", "garantizar", "estar seguro", "por lo menos cuántos", o una lista de pistas y nombres.

**Dibuja la tabla de inmediato.** Una cuadrícula de pistas toma 20 segundos de dibujar, y evita que des vueltas en círculos.

**Tiempo:** De dos a tres minutos para una cuadrícula de pistas. Si hay muchas pistas, puedes saltarla y regresar después.

**Usar las opciones de respuesta:** Para "¿qué tiene que ser cierto?", trata de encontrar un ejemplo que haga falsa una opción. Un solo ejemplo la descarta.

</section>

<section data-box="connections">

## Conexiones

Probar todos los casos es la [división en casos](/es/pathway/counting/05-split-into-cases/) de Conteo. La paridad y los residuos van mucho más a fondo en [Remainder Math](/pathway/modular-arithmetic/) (en inglés), en el Nivel 3.

</section>

<section data-box="summary">

## Recuerda esto

- Pon las pistas en una tabla. Cada "no" es un avance.
- Con pocos casos, pruébalos todos.
- "Estar seguro" significa pensar en el peor caso y sumar 1.
- Más palomas que agujeros significa que algún agujero tiene 2.
- Busca lo que nunca cambia.

</section>
