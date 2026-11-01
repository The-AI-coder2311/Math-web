---
order: 19
difficulty: hard
lesson: 03-sectors-and-probability
choices: ["$\\frac{1}{9}$","$\\frac{1}{3}$","$\\frac{25}{72}$","$\\frac{5}{12}$","$\\frac{1}{2}$"]
answer: C
mistakes:
  A: "That's only red twice. Blue twice and green twice also count."
  B: "That treats the 3 colors as equally likely. Use the angles."
  D: "That's only the chance of green once. You need the same color on both spins."
  E: "Square each color's chance, and add. That gives $\\frac{50}{144}$."
verify: "(() => { const a = [120, 90, 150]; return fraction(sum(a.map((x) => x * x)) / 900, 144); })()"
---

A spinner has a red slice of 120°, a blue slice of 90°, and a green slice that covers the rest. You spin it twice. What is the probability that it lands on the same color both times?

## Hint

Find the chance of each color. Then, for each color, find the chance of getting it twice.

## Hint 2

The chances are $\frac{1}{3}$, $\frac{1}{4}$, and $\frac{5}{12}$. Square each one, and add.

## Solution

**Step 1.** The green slice is 150°. So the chances are $\frac{4}{12}$, $\frac{3}{12}$, and $\frac{5}{12}$.

**Step 2.** The chance of the same color twice is $\frac{16 + 9 + 25}{144} = \frac{50}{144} = \frac{25}{72}$.

**Answer: (C) $\frac{25}{72}$**
