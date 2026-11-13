---
order: 13
difficulty: medium
lesson: 03-geometric-sequences
choices: ["1022","1023","1024","2047","2048"]
answer: B
mistakes:
  A: "You may have started the sum from 2. The list also includes the 1."
  C: "That's the next power of 2. The sum is one less than that."
  D: "That's the sum up to 1024. The list stops at 512."
  E: "That's $2^{11}$. The sum of the powers of 2 up to 512 is 1 less than the next power of 2, which is 1024."
verify: "sum(range(0, 9).map((n) => 2 ** n))"
---

What is the value of $1 + 2 + 4 + 8 + \cdots + 512$?

## Hint

Try small versions. What's $1 + 2$? What's $1 + 2 + 4$? What's $1 + 2 + 4 + 8$?

## Hint 2

Each sum is one less than the next power of 2. What power of 2 comes after 512?

## Solution

The sum of powers of 2 is always one less than the next power of 2. The next power after 512 is 1024, so the sum is $1024 - 1 = 1023$.

**Answer: (B) 1023**

## Another way

Call the sum $S$. Then $2S = 2 + 4 + \cdots + 1024$. Subtracting $S$ cancels everything except the 1024 and the 1, so $S = 1024 - 1 = 1023$.
