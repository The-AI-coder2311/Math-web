---
order: 20
difficulty: hard
lesson: 03-divisibility-rules
choices: ["0","2","12","8","6"]
answer: E
mistakes:
  A: "That's one of the digits that works, but there's another. Test 6."
  B: "That's how many digits work. The question asks for their sum."
  D: "Test 8: the digit sum of 884 is 20, which isn't a multiple of 3."
  C: "That's the divisor. Find the digits that pass both tests, and add them."
verify: "sum(range(0, 9).filter((d) => (800 + 10 * d + 4) % 12 === 0))"
---

The number $8\square4$ is divisible by 12. What is the sum of all of the digits that could go in the box?

## Hint

Use two tests that share no factors: 3 and 4.

## Hint 2

For 4, the last two digits have to be a multiple of 4, so the box is 0, 2, 4, 6, or 8. For 3, the digit sum has to be a multiple of 3.

## Solution

**Step 1.** For 4, the last two digits have to be a multiple of 4. So the box is 0, 2, 4, 6, or 8.

**Step 2.** For 3, the digit sum $8 + 4 + \square$ has to be a multiple of 3. So the box is 0, 3, 6, or 9.

**Step 3.** Only 0 and 6 pass both tests. Their sum is 6.

**Check:** $804 = 12 \times 67$, and $864 = 12 \times 72$.

**Answer: (E) 6**
