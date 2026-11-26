---
order: 30
difficulty: hard
lesson: 04-logs-in-contests
choices: ["1","2","3","4","5"]
answer: B
mistakes:
  A: "The decimal part 0.314 is above $\\log 2 \\approx 0.301$, so the first digit is at least 2."
  C: "The decimal part 0.314 is below $\\log 3 \\approx 0.477$, so the first digit is less than 3."
  D: "Compare the decimal part 0.314 with $\\log 2$ and $\\log 3$."
  E: "That's about $10^{0.7}$. The decimal part is 0.314."
verify: "Number(String(3n ** 30n)[0])"
---

Using $\log 2 \approx 0.30103$ and $\log 3 \approx 0.47712$, what is the first digit of $3^{30}$?

## Hint

Find $\log (3^{30})$, and look at the part after the decimal point.

## Hint 2

$\log (3^{30}) \approx 14.314$. Which landmark logs is 0.314 between?

## Solution

$\log (3^{30}) = 30 \log 3 \approx 14.314$. So $3^{30} \approx 10^{14} \times 10^{0.314}$. Since $\log 2 \approx 0.301$ and $\log 3 \approx 0.477$, the number $10^{0.314}$ is between 2 and 3. The first digit is 2.

**Answer: (B) 2**
