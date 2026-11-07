---
order: 17
difficulty: hard
lesson: 02-ratios-as-boxes
choices: ["125","75","100","50","150"]
answer: A
mistakes:
  D: "Esas son las cuentas rojas del principio. La pregunta pide todas las cuentas."
  B: "Esas son las cuentas azules del principio. La pregunta pide todas las cuentas."
  C: "Revísalo: 40 rojas y 60 azules. Al agregar 10 rojas queda 50 a 60, que no es 4 a 5."
  E: "Revísalo: 60 rojas y 90 azules. Al agregar 10 rojas queda 70 a 90, que no es 4 a 5."
verify: "range(1, 100).map((x) => [x, 2 * x, 3 * x]).find(([, a, b]) => (a + 10) * 5 === b * 4)[0] * 5"
---

Un frasco tiene cuentas rojas y azules en una razón de 2 a 3. Después de agregar 10 cuentas rojas, la razón de rojas a azules es 4 a 5. ¿Cuántas cuentas había en el frasco al principio?

## Hint

Di que cada caja tiene $x$ cuentas, así que hay $2x$ rojas y $3x$ azules. ¿Qué dice la razón nueva?

## Hint 2

$\frac{2x + 10}{3x} = \frac{4}{5}$. Multiplica en cruz: $5(2x + 10) = 4 \times 3x$.

## Solution

**Paso 1.** Empieza con $2x$ cuentas rojas y $3x$ azules. Después de agregar, $\frac{2x + 10}{3x} = \frac{4}{5}$.

**Paso 2.** Multiplicar en cruz da $10x + 50 = 12x$, así que $x = 25$.

**Paso 3.** Al principio había $5x = 125$ cuentas.

**Comprobación:** 50 rojas y 75 azules. Luego 60 a 75 se simplifica a 4 a 5.

**Respuesta: (A) 125**
