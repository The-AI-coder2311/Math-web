---
order: 28
difficulty: easy
lesson: 04-harder-probability
choices: ["$\\frac{1}{5}$","$\\frac{2}{5}$","$\\frac{1}{2}$","$\\frac{3}{5}$"]
answer: B
mistakes:
  A: "That's the chance from spot 1. The token starts at spot 2."
  C: "The token starts closer to 0 than to 5, so its chance is less than one half."
  D: "That's the chance of reaching 0 first."
verify: "fraction(2, 5)"
---

A token sits on spot 2 of a line with spots 0 through 5. Each turn, a coin flip moves it 1 spot left or right. The game ends when it reaches 0 or 5. What is the probability that it reaches 5?

## Hint

On a line up to $n$, starting at spot $k$, the chance of reaching $n$ first is $\frac{k}{n}$.

## Hint 2

Here, $k = 2$ and $n = 5$.

## Solution

Using the pattern, the chance is $\frac{k}{n} = \frac{2}{5}$.

**Answer: (B) $\frac{2}{5}$**
