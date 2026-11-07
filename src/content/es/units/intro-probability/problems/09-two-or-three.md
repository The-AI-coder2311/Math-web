---
order: 10
difficulty: medium
lesson: 01-count-what-you-want
choices: ["$\\frac{1}{3}$","$\\frac{2}{3}$","$\\frac{1}{2}$","$\\frac{5}{6}$","$\\frac{4}{5}$"]
answer: B
mistakes:
  A: "Eso cuenta solo los múltiplos de 3."
  C: "Eso cuenta solo los múltiplos de 2."
  D: "Eso es 25 de 30, que cuenta dos veces los múltiplos de 6. Réstalos una vez."
  E: "Eso es 24 de 30. Revisa tu cuenta: $15 + 10 - 5 = 20$."
verify: "fraction(range(1, 30).filter((n) => n % 2 === 0 || n % 3 === 0).length, 30)"
---

Se elige al azar un número entero del 1 al 30. ¿Cuál es la probabilidad de que sea divisible entre 2 o entre 3 (o entre los dos)?

## Hint

Cuenta los múltiplos de 2 y los múltiplos de 3. Algunos números se cuentan dos veces. ¿Cuáles?

## Hint 2

Hay 15 múltiplos de 2 y 10 múltiplos de 3. Los múltiplos de 6 se contaron dos veces.

## Solution

**Paso 1.** Hay 15 múltiplos de 2 y 10 múltiplos de 3.

**Paso 2.** Los múltiplos de 6 son divisibles entre los dos, así que se contaron dos veces. Hay 5, porque $6 \times 5 = 30$.

**Paso 3.** Resta los que se contaron dos veces: $15 + 10 - 5 = 20$.

**Paso 4.** La probabilidad es $\frac{20}{30}$, que se simplifica a $\frac{2}{3}$.

**Respuesta: (B) $\frac{2}{3}$**
