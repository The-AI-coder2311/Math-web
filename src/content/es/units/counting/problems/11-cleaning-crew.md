---
order: 6
difficulty: easy
lesson: 03-overcount-then-divide
choices: ["7","14","21","42","49"]
answer: C
mistakes:
  A: "Esa es la cantidad de estudiantes. Cada estudiante puede hacer pareja con varios otros."
  B: "Eso es $7 \\times 2$. Elige al primer estudiante (7 opciones) y al segundo (6 opciones), y luego divide entre 2."
  D: "Eso cuenta Ana-y-luego-Ben y Ben-y-luego-Ana por separado. Son la misma pareja, así que divide entre 2."
  E: "Eso es $7 \\times 7$, que deja que un estudiante haga pareja consigo mismo."
verify: "combos(range(1, 7), 2).length"
---

Una maestra elige a 2 de 7 estudiantes para limpiar el pizarrón juntos. ¿Cuántas parejas diferentes de estudiantes puede elegir?

## Hint

Si los dos estudiantes se intercambian, ¿es una pareja diferente?

## Hint 2

Elegir uno a la vez da $7 \times 6 = 42$. Cada pareja se contó dos veces.

## Solution

Elegir uno a la vez da $7 \times 6 = 42$. Cada pareja se cuenta dos veces, así que divide entre 2: $42 \div 2 = 21$.

**Respuesta: (C) 21**
