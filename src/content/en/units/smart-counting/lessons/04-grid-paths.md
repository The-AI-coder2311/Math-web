---
title: "Grid Paths and Choosing With Conditions"
summary: Count routes on a street grid, then combine several choices at once when groups must follow rules.
minutes: 10
---

Kai walks from home to school on a grid of streets. The school is 4 blocks east and 3 blocks north, and Kai only walks east or north. How many different routes are there? You could trace them with your finger, but you'd quickly lose track. There's a beautiful way to turn this picture into something you already know how to count.

> **The big idea:** Turn a picture problem into a **list of letters**. Every route is a list of E's and N's. Counting routes is the same as counting arrangements of those letters, which is the same as **choosing spots**.

## Why routes are like arrangements

Each route is a series of moves, and you can write it down. E E N E N N E means east, east, north, east, north, north, east. Every route has exactly 4 Es and 3 Ns, since that's the distance it must cover. And any arrangement of 4 Es and 3 Ns is a valid route. So there's a perfect match between routes and arrangements.

To check it with a tiny case, consider 1 block east and 1 block north. The routes are E N and N E, which is 2 routes. And "2 choose 1" equals 2. It works.

So for Kai, there are 7 moves, and we choose which 3 are north:

$$\binom{7}{3} = \frac{7 \times 6 \times 5}{3 \times 2 \times 1} = 35$$

## Example 1: A route that must pass through a point

Using the same grid, Kai wants to stop at a bakery that's 2 blocks east and 1 block north of home. How many routes go through the bakery?

**What's the plan?** Break the trip into two parts, and multiply, since Kai does one and then the other.

- Home to bakery: 2 E and 1 N, which is $\binom{3}{1} = 3$ routes.
- Bakery to school: 2 E and 2 N are left, which is $\binom{4}{2} = 6$ routes.

$$3 \times 6 = 18$$

Your turn. How many routes go from a corner to a spot 3 blocks east and 2 blocks north?

<details class="check"><summary>Show the answer</summary>

There are 5 moves, and we choose which 2 are north: $\binom{5}{2} = \frac{5 \times 4}{2} = 10$.

</details>

## Example 2: Avoiding a point

The street at that bakery is closed for a parade, so Kai has to avoid that corner. How many routes are there now?

**What's the plan?** Use the opposite. All routes minus the routes through the bakery:

$$35 - 18 = 17$$

## Example 3: Adding numbers on the grid

Here's another way to count routes, which also works when grids have missing streets. To reach a corner, you must arrive from the left or from below. So:

> **The number of routes to a corner equals the routes to the corner on its left, plus the routes to the corner below it.**

Start with 1 along the bottom and left edges, since there's only one way to go straight. Then fill in, adding as you go:

| | | | |
|---|---|---|---|
| 1 | 3 | 6 | 10 |
| 1 | 2 | 3 | 4 |
| 1 | 1 | 1 | 1 |

The top right corner here is 3 blocks east and 2 blocks north, and it shows 10. It matches $\binom{5}{2}$, the answer you found earlier. If a corner is blocked, you write 0 there, and the adding still works.

## Example 4: Teams with conditions

Now we'll use "choose" with rules. A team of 4 is picked from 5 seniors and 4 juniors. There must be at least 3 seniors. How many teams are possible?

**What are the cases?** "At least 3 seniors" means exactly 3 or exactly 4.

- **3 seniors and 1 junior:** $\binom{5}{3} \times \binom{4}{1} = 10 \times 4 = 40$
- **4 seniors and 0 juniors:** $\binom{5}{4} = 5$

The total is $40 + 5 = 45$. Inside a case, we multiply, since we choose seniors **and** juniors. Between the cases, we add.

## Example 5: A contest-style question

Six points are marked around a circle. How many triangles can be drawn using these points as corners? And how many four-sided shapes?

**What's a triangle?** Any 3 of the points form a triangle, since no three points on a circle lie in a line. Order doesn't matter, so it's a choosing problem:

$$\binom{6}{3} = 20$$

Similarly, four-sided shapes number $\binom{6}{4} = \binom{6}{2} = 15$.

**How about if 3 of the 6 points were in a line?** Then that one group of 3 wouldn't make a triangle, so we'd subtract 1 from 20, which leaves 19. Looking for that kind of exception is good contest thinking.

<section data-box="traps">

## Common traps

**Adding the distances.** For 4 east and 3 north, some students answer $4 \times 3 = 12$ or $4 + 3 = 7$. The 7 is the number of moves, not the number of routes.

**Adding when you should multiply.** Going through a stop, some students add the two parts. But for each way to reach the stop, there are many ways to continue. It's one **and then** another, so multiply.

**Double-counting with "at least."** Suppose you choose 3 seniors first, and then choose any 1 of the remaining 6 people. That gives $10 \times 6 = 60$, which is too many, since a team of 4 seniors got counted 4 times. Use cases instead.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "shortest path," "only moving right or up," "at least," or "committee."

**Blocked streets:** With one blocked spot, use the opposite. With an unusual grid, add numbers corner by corner.

**Time:** One minute for a basic grid, and two or three minutes with conditions.

**Using the answer choices:** Check answers using a tiny version of the same grid. Also, grid answers often are a "choose" number, like 35, 56, or 70.

</section>

<section data-box="connections">

## Connections

Choosing spots came from [arrangements with repeats](/pathway/smart-counting/03-repeats/). The adding table is a form of Pascal's triangle, which you'll explore in Level 3's [Advanced Counting](/pathway/advanced-counting/) unit.

</section>

<section data-box="summary">

## Remember this

- Routes are lists of letters. Count them with "choose."
- Passing through a point: multiply the two parts.
- Avoiding a point: use the opposite.
- You can also add numbers corner by corner.
- "At least" with teams: use cases, and add.

</section>
