---
order: 17
difficulty: hard
lesson: 01-pascal-and-binomials
choices: ["512","511","256","1023","1024"]
answer: A
mistakes:
  C: "That's $2^8$. You may have halved twice. Exactly half of the 1,024 subsets have an even size."
  B: "That leaves out the empty subset, which the problem says counts as even."
  D: "That's every subset except the empty one, whatever its size. Only half have an even size."
  E: "That counts all of the subsets, both even and odd sizes."
verify: "sum(range(0, 10).filter((k) => k % 2 === 0).map((k) => combos(range(1, 10), k).length))"
---

How many subsets of a set of 10 things have an even number of things in them? (Zero counts as even.)

## Hint

Try a smaller set. In row 4 of Pascal's triangle, 1, 4, 6, 4, 1, compare the even positions with the odd positions.

## Hint 2

Set one thing aside, and choose any subset of the other 9. Is the last thing then forced?

## Solution

**Step 1.** Set one thing aside. There are $2^9$ subsets of the other 9.

**Step 2.** For each one, there's exactly one way to decide about the last thing so that the size is even: include it if the size so far is odd, and leave it out otherwise.

**Step 3.** So there are $2^9 = 512$ even-sized subsets.

**Answer: (A) 512**
