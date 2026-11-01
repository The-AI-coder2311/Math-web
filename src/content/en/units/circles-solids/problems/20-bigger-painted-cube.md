---
order: 20
difficulty: hard
lesson: 04-boxes-and-3d
choices: ["6","54","36","27","125"]
answer: B
mistakes:
  A: "That's the answer for a 3 by 3 by 3 cube, or one per face. Here, each face has 9."
  D: "That's the unpainted middle, a 3 by 3 by 3 block. The question asks about one painted face."
  C: "That's the cubes with 2 painted faces: 3 on each of 12 edges."
  E: "That's every small cube."
verify: "product(range(1, 5), range(1, 5), range(1, 5)).filter((c) => c.filter((x) => x === 1 || x === 5).length === 1).length"
---

A cube with sides of 5 is painted on the outside and then cut into 125 small cubes. How many small cubes have paint on exactly 1 face?

## Hint

Where are those small cubes? Look at one face of the big cube.

## Hint 2

Each face has a 3 by 3 inner part, which is 9 small cubes.

## Solution

The cubes with one painted face are in the inner part of each face, not touching an edge. Each face has a 3 by 3 inner part, so that's 9 cubes per face. With 6 faces, the total is $6 \times 9 = 54$.

**Answer: (B) 54**
