---
order: 20
difficulty: hard
lesson: 04-count-the-opposite
choices: ["72","90","78","96","114"]
answer: C
mistakes:
  A: "That's $120 - 24 - 24$. Lineups with Ari first **and** Bo last got subtracted twice, so add those 6 back."
  B: "That's $120 - 24 - 6$. Both of the rules remove 24 lineups each."
  D: "That's $120 - 24$, which only uses one rule."
  E: "That's $120 - 6$, which removes only the lineups that break both rules. A lineup that breaks either rule has to go."
verify: "perms(['A', 'B', 'C', 'D', 'E']).filter((p) => p[0] !== 'A' && p[4] !== 'B').length"
---

Five friends, including Ari and Bo, line up for a photo. Ari refuses to stand first, and Bo refuses to stand last. How many lineups are possible?

## Hint

Start with all of the lineups, and subtract the ones you don't want. How many have Ari first? How many have Bo last?

## Hint 2

There are 24 of each. But some lineups have both Ari first and Bo last, and those got subtracted twice.

## Solution

**Step 1.** There are $5! = 120$ lineups.

**Step 2.** Ari first: $4! = 24$. Bo last: $4! = 24$.

**Step 3.** Both at once: $3! = 6$. Those were subtracted twice, so add them back.

**Step 4.** $120 - 24 - 24 + 6 = 78$.

**Answer: (C) 78**
