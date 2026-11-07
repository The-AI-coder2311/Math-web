---
order: 29
difficulty: hard
lesson: 05-split-into-cases
choices: ["6","9","12","13"]
answer: C
mistakes:
  A: "Ese es solo el caso sin monedas de 10. Prueba también con 1 y con 2 monedas de 10."
  B: "Vuelve a contar cada caso. Con 1 moneda de 10 faltan 15 centavos, así que puede haber de 0 a 3 monedas de 5."
  D: "Puede que hayas agregado un caso con una moneda de 25. Este problema solo usa monedas de 1, de 5 y de 10 centavos."
verify: "product(range(0, 25), range(0, 5), range(0, 2)).filter(([p, n, d]) => p + 5 * n + 10 * d === 25).length"
---

¿De cuántas formas puedes juntar 25 centavos usando solo monedas de 1, de 5 y de 10 centavos?

## Hint

Divide en casos según el número de monedas de 10. Puede haber 0, 1 o 2.

## Hint 2

Una vez que decides las monedas de 10 y de 5, las de 1 ya están decididas. Así que cuenta las opciones de monedas de 5 en cada caso.

## Solution

Con 0 monedas de 10, puede haber de 0 a 5 monedas de 5, que son 6 formas. Con 1 moneda de 10 faltan 15 centavos, así que de 0 a 3 monedas de 5 dan 4 formas. Con 2 monedas de 10 faltan 5 centavos, así que 0 o 1 moneda de 5 dan 2 formas. En total, $6 + 4 + 2 = 12$ formas.

**Respuesta: (C) 12**
