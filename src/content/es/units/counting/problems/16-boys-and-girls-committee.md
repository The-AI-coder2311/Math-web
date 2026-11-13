---
order: 16
difficulty: hard
lesson: 03-overcount-then-divide
choices: ["25","75","150","300","462"]
answer: C
mistakes:
  A: "Eso es $15 + 10$. Cada grupo de niños puede ir con cada grupo de niñas, así que multiplica."
  B: "Eso es la mitad de la respuesta correcta. Revisa las niñas: $\\binom{5}{3} = 10$."
  D: "Eso es $30 \\times 10$, que cuenta a los 2 niños en orden. Divide esa cuenta entre 2."
  E: "Eso es $\\binom{11}{5}$, cualesquiera 5 personas del grupo. El comité necesita exactamente 2 niños y 3 niñas."
verify: "combos(range(1, 6), 2).length * combos(range(1, 5), 3).length"
---

Un grupo tiene 6 niños y 5 niñas. Un comité tendrá 2 niños y 3 niñas. ¿Cuántos comités diferentes son posibles?

## Hint

Resuelve a los niños y a las niñas por separado. ¿Importa el orden dentro de cada grupo?

## Hint 2

Niños: $\binom{6}{2}$. Niñas: $\binom{5}{3}$. Eliges niños **y** niñas.

## Solution

**Paso 1.** Elige a los niños: $\binom{6}{2} = \frac{6 \times 5}{2} = 15$.

**Paso 2.** Elige a las niñas: $\binom{5}{3} = \frac{5 \times 4 \times 3}{3 \times 2 \times 1} = 10$.

**Paso 3.** Haces las dos cosas, así que multiplica: $15 \times 10 = 150$.

**Respuesta: (C) 150**
