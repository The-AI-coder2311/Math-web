---
order: 26
difficulty: medium
lesson: 03-angle-facts
choices: ["0","15","30","45"]
answer: B
mistakes:
  A: "Parece que las dos manecillas apuntan al 6. Pero a las 6:30, la manecilla de las horas ya pasó del 6."
  C: "Esa es la separación entre dos marcas de hora. La manecilla de las horas solo avanzó la mitad."
  D: "Revisa cuánto avanza la manecilla de las horas en 30 minutos. Avanza medio grado por minuto."
verify: "Math.abs(30 * 6 + 0.5 * 30 - 6 * 30)"
---

¿Cuántos grados hay entre las manecillas de un reloj a las 6:30?

## Hint

El minutero apunta al 6. ¿Dónde está la manecilla de las horas?

## Hint 2

La manecilla de las horas está a la mitad entre el 6 y el 7.

## Solution

El minutero apunta directo al 6. La manecilla de las horas está a la mitad entre el 6 y el 7. Esas marcas están a $30^\circ$ de distancia, así que el ángulo mide 15 grados.

**Respuesta: (B) 15**
