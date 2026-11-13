---
order: 6
difficulty: medium
lesson: 01-similarity-tools
choices: ["8","9","10","11","15"]
answer: C
mistakes:
  A: "That adds 2 to the 6. Similar shapes multiply, and they don't add."
  B: "That uses a scale factor of $\\frac{3}{2}$, which compares $AD$ with $DB$. Compare $AD$ with the whole side $AB$."
  D: "That adds the 5 to the 6. Use the scale factor, $\\frac{5}{3}$."
  E: "That uses a scale factor of $\\frac{5}{2}$. The small triangle's side is $AD = 3$, so compare 5 with 3."
verify: "range(1, 50).find((bc) => bc * 3 === 6 * (3 + 2))"
---

In triangle $ABC$, a line parallel to $BC$ crosses $AB$ at $D$ and $AC$ at $E$. If $AD = 3$, $DB = 2$, and $DE = 6$, what is $BC$?

## Hint

Triangles $ADE$ and $ABC$ are similar. Which side of the big triangle matches $AD$?

## Hint 2

$AD$ matches the whole side $AB$, which is 5. So the scale factor from small to big is $\frac{5}{3}$.

## Solution

**Step 1.** The triangles are similar, and $AB = 3 + 2 = 5$. So the scale factor is $\frac{5}{3}$.

**Step 2.** $BC = 6 \times \frac{5}{3} = 10$.

**Answer: (C) 10**
