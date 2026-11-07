---
order: 5
difficulty: easy
lesson: 02-when-order-matters
choices: ["4","24","16","10","256"]
answer: B
mistakes:
  A: "Esa es la cantidad de libros. Cada libro puede ir en varias posiciones."
  D: "Eso es $4 + 3 + 2 + 1$. Haces una elección y luego otra, así que multiplica."
  C: "Eso es $4 \\times 4$. Una vez que acomodas un libro, quedan menos."
  E: "Eso es $4 \\times 4 \\times 4 \\times 4$, que reutiliza libros. Cada libro solo puede ir en un lugar."
verify: "perms(['a', 'b', 'c', 'd']).length"
---

Lin tiene 4 libros diferentes para poner en un estante. ¿En cuántos órdenes diferentes se pueden acomodar de izquierda a derecha?

## Hint

Llena el estante un lugar a la vez. ¿Cuántos libros podrían ir en el primer lugar? Después de eso, ¿cuántos quedan para el segundo?

## Hint 2

El primer lugar tiene 4 opciones, el siguiente 3, y así sucesivamente. Eso es $4!$.

## Solution

**Paso 1.** Llena el estante de izquierda a derecha, un lugar a la vez.

- Primer lugar: cualquiera de los 4 libros, así que 4 opciones.
- Segundo lugar: quedan 3 libros, así que 3 opciones.
- Tercer lugar: quedan 2 libros, así que 2 opciones.
- Cuarto lugar: solo queda 1 libro, así que 1 opción.

**Paso 2.** Multiplica:

$$4 \times 3 \times 2 \times 1 = 24$$

**Un error común:** contestar $4 \times 4 \times 4 \times 4 = 256$. ¡Eso dejaría que el mismo libro estuviera en dos lugares a la vez!

**Respuesta: (B) 24**
