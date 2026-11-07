---
title: "Divide en casos"
summary: Cuando una regla complica un problema, divídelo en casos separados, cuenta cada uno y suma.
minutes: 12
---

¿Cuántos números de 3 dígitos tienen dígitos que suman 3? No hay una sola multiplicación que dé la respuesta, porque las opciones de cada dígito dependen de los demás. Pero si eliges una forma ordenada de dividir el problema, cada pedazo es pequeño.

> **La gran idea:** Cuando las elecciones se afectan entre sí, divide el problema en **casos** que no se traslapen y que cubran todas las posibilidades. Cuenta cada caso y luego **suma**.

## Por qué funciona sumar

Multiplicar era para una elección **y luego** otra. Los casos son diferentes: cada posibilidad pertenece a un caso **o** a otro. Si tienes 3 libros en un estante y 4 en otro, tienes $3 + 4 = 7$ libros. Sumar funciona siempre que ningún libro esté en los dos estantes y que no falte ninguno.

Así que los casos tienen que pasar dos pruebas:

1. **Sin traslapes.** Nada se cuenta dos veces.
2. **Sin faltantes.** Todo cae en algún caso.

## Ejemplo 1: Dígitos que suman 3

**¿Cuál es una buena forma de dividir?** El primer dígito no puede ser 0, así que puede ser 1, 2 o 3. Esos serán nuestros casos.

| Primer dígito | Los otros dos dígitos deben sumar | Números | Cantidad |
|---|---|---|---|
| 1 | 2 | 102, 111, 120 | 3 |
| 2 | 1 | 201, 210 | 2 |
| 3 | 0 | 300 | 1 |

Súmalos: $3 + 2 + 1 = 6$. Cada número tiene exactamente un primer dígito, así que los casos no se traslapan y no falta nada.

## Ejemplo 2: Dar cambio

¿De cuántas formas puedes juntar 30 centavos usando solo monedas de 10 y de 5 centavos?

**¿Cuál es una buena forma de dividir?** Una vez que sabes cuántas monedas de 10 hay, las de 5 ya están decididas. Así que usa el número de monedas de 10 como casos.

| Monedas de 10 | Centavos que faltan | Monedas de 5 |
|---|---|---|
| 0 | 30 | 6 |
| 1 | 20 | 4 |
| 2 | 10 | 2 |
| 3 | 0 | 0 |

Hay 4 formas. Cada fila es una sola forma, porque las monedas de 5 quedan decididas.

Ahora intenta este por tu cuenta. ¿De cuántas formas puedes juntar 25 centavos usando solo monedas de 10 y de 5 centavos?

<details class="check"><summary>Ver la respuesta</summary>

Con 0, 1 o 2 monedas de 10, los 25, 15 o 5 centavos que faltan se forman con monedas de 5. Tres monedas de 10 serían demasiado. Así que hay 3 formas.

</details>

## Ejemplo 3: Multiplicar dentro de un caso

Los casos y la multiplicación muchas veces trabajan juntos. Un combo te deja elegir **o bien** un sándwich y una bebida, **o bien** una sopa y un postre. Hay 4 sándwiches, 3 bebidas, 2 sopas y 5 postres. ¿Cuántas comidas son posibles?

- Caso 1, sándwich y bebida: $4 \times 3 = 12$
- Caso 2, sopa y postre: $2 \times 5 = 10$

$$12 + 10 = 22$$

Dentro de un caso, haces una cosa y luego otra, así que multiplicas. Entre los casos, es una cosa o la otra, así que sumas.

## Ejemplo 4: Una pregunta estilo concurso

¿Cuántos números de 2 dígitos tienen un dígito de las decenas mayor que el de las unidades?

**¿Cuál es una buena forma de dividir?** Usa el dígito de las decenas.

- Si el dígito de las decenas es 1, el de las unidades solo puede ser 0. Es 1 número.
- Si el dígito de las decenas es 2, el de las unidades puede ser 0 o 1. Son 2 números.
- El patrón sigue: un dígito de las decenas $d$ da $d$ números.
- Si el dígito de las decenas es 9, el de las unidades puede ser del 0 al 8. Son 9 números.

$$1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 = 45$$

**¿Hay forma de comprobarlo?** Sí. Los números que terminan en 0, como 30 o 70, siempre tienen un dígito de las decenas mayor, y hay 9 de ellos. Ahora toma los números sin ceros y con dos dígitos diferentes. Vienen en parejas invertidas, como 34 y 43, y hay $9 \times 8 = 72$ de ellos. Exactamente un número de cada pareja tiene el dígito de las decenas mayor, así que es la mitad de 72, o sea 36. Y $9 + 36 = 45$. Coincide.

<section data-box="deeper">

## Para ir más a fondo

Los casos son más útiles cuando cada caso es fácil, aunque el problema completo no lo sea. Busca una característica que, una vez que la fijas, hace sencillo el resto.

**Uno más difícil:** ¿Cuántos números de dos dígitos tienen un dígito de las decenas mayor que el de las unidades?

**¿Qué característica conviene fijar?** El dígito de las decenas. Una vez fijo, el dígito de las unidades tiene un conjunto claro de opciones:

| Dígito de las decenas | Opciones para las unidades | Cuántos |
|---|---|---|
| 1 | 0 | 1 |
| 2 | 0, 1 | 2 |
| 3 | 0, 1, 2 | 3 |
| 9 | del 0 al 8 | 9 |

Las cantidades siguen un patrón, así que no necesitamos escribir todas las filas. En total hay $1 + 2 + 3 + \cdots + 9 = 45$ números.

**¿Cómo sabemos que no faltó ni se repitió ninguno?** Cada número tiene exactamente un dígito de las decenas, así que cada número cae exactamente en un caso. Así se ven los buenos casos.

Intenta esto. ¿Cuántos números de dos dígitos tienen dígitos que suman 9 o 10?

<details class="check"><summary>Ver la respuesta</summary>

Una suma de 9 da 18, 27, 36, 45, 54, 63, 72, 81 y 90, que son 9 números. Una suma de 10 da 19, 28, 37, 46, 55, 64, 73, 82 y 91, que son 9 más. Ningún número tiene las dos sumas, así que se suman: $9 + 9 = 18$.

</details>

</section>

<section data-box="traps">

## Trampas comunes

**Casos que se traslapan.** Supón que cuentas los números del 1 al 20 con un caso para "pares" y otro para "múltiplos de 3". Entonces contaste 6, 12 y 18 dos veces, y al sumar te da 16 en lugar de 13. Elige casos donde cada posibilidad solo pueda estar en uno, o resta lo que se traslapa.

**Olvidar un caso.** En el Ejemplo 1 es fácil olvidar el 300, donde los otros dos dígitos suman 0. Ir en orden, del caso más pequeño al más grande, te ayuda a no perder ninguno.

**Multiplicar los casos.** En el Ejemplo 3, la respuesta $12 \times 10 = 120$ está mal. No eliges una comida de sándwich **y** una comida de sopa. Eliges una o la otra, así que sumas.

</section>

<section data-box="strategy">

## Estrategia de concurso

**Cómo reconocerlo:** Busca palabras como "o", "a lo más", o una regla que hace que las opciones dependan de elecciones anteriores.

**Elegir los casos:** Divide según lo que más decide. Muchas veces es lo más restringido, como el número de monedas más grandes o el primer dígito.

**Cuándo detenerte y repensar:** Si necesitas más de unos 5 casos, busca un patrón en los casos, como en el Ejemplo 4, o usa lo contrario.

**Tiempo:** De dos a tres minutos. Escribe cada caso en su propia línea, para que al revisar puedas ver lo que hiciste.

</section>

<section data-box="connections">

## Conexiones

Los casos regresan en [probabilidad](/es/pathway/intro-probability/) y en [Smart Counting](/pathway/smart-counting/) (en inglés). A veces [contar lo contrario](/es/pathway/counting/04-count-the-opposite/) es más corto, así que prueba las dos formas.

</section>

<section data-box="summary">

## Recuerda esto

- ¿Las elecciones se afectan entre sí? Divide en casos.
- Los casos no deben traslaparse y deben cubrirlo todo.
- Suma entre casos y multiplica dentro de un caso.
- Divide según lo más restringido.
- Ve en orden, para no olvidar ningún caso.

</section>
