---
order: 18
difficulty: easy
lesson: 03-change-of-base
choices: ["6","31","32","62","64"]
answer: A
mistakes:
  B: "That counts the factors in the product. Write each as a fraction of base-10 logs."
  C: "That's half of 64. The product collapses to $\\log_2 64$."
  D: "That's the number of factors plus one, doubled. Write each factor using base 10."
  E: "That's the final input. Take its log in base 2."
verify: "Math.round(range(2, 63).map((k) => Math.log(k + 1) / Math.log(k)).reduce((a, b) => a * b, 1))"
---

What is $\log_2 3 \cdot \log_3 4 \cdot \log_4 5 \cdots \log_{63} 64$?

## Hint

Write each factor as a fraction of base-10 logs.

## Hint 2

Each top cancels the next bottom, leaving $\frac{\log 64}{\log 2}$.

## Solution

Writing $\log_k (k + 1) = \frac{\log (k + 1)}{\log k}$, the product telescopes to $\frac{\log 64}{\log 2} = \log_2 64 = 6$.

**Answer: (A) 6**
