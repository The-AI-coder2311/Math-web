---
title: "Smart Counting: Five Power Moves"
summary: Go beyond the multiply trick with five moves for harder problems. Choose groups, split into cases, count the opposite, fix overlaps, and handle repeats.
minutes: 10
---

In Level 1, you learned to multiply when you make one choice after another. That idea still does most of the work, but harder problems need more tools. Here are five moves that strong problem solvers use.

> **The big idea:** Before you count, decide **how** to count. Does order matter? Would splitting into cases help? Is the opposite easier? Picking the right move is often the whole problem.

## Move 1: Divide when order doesn't matter

You need to pick 2 of 5 friends to help you carry something. How many pairs can you pick?

Start with the multiply trick: 5 choices for the first friend and 4 for the second, which makes $5 \times 4 = 20$. But that counts Ana-then-Ben and Ben-then-Ana as different. It's the same pair, so every pair was counted twice:

$$\frac{5 \times 4}{2} = 10$$

Now pick 3 of 7 for a committee. Multiplying gives $7 \times 6 \times 5 = 210$. How many times was each group counted? The same 3 people can be ordered in $3 \times 2 \times 1 = 6$ ways, so we divide by 6:

$$\frac{7 \times 6 \times 5}{3 \times 2 \times 1} = 35$$

This is called a **combination**, and it's often written $\binom{7}{3}$ and read "7 choose 3."

> **Ask yourself:** If I swap two of the things I picked, is it a different result? A president and a vice president are different jobs, so order matters and you don't divide. A two-person committee is the same either way, so you divide.

## Move 2: Split into cases

When one rule makes the problem awkward, split it into separate cases and then **add**.

How many ways can you make 20 cents using nickels, pennies, and at most 1 dime?

- **Case 1: no dimes.** You need 20 cents from nickels and pennies. You can use 0, 1, 2, 3, or 4 nickels, and the pennies fill in the rest. That's 5 ways.
- **Case 2: one dime.** You need 10 more cents. You can use 0, 1, or 2 nickels. That's 3 ways.

The total is $5 + 3 = 8$ ways.

> **Watch out:** Your cases must not overlap, and together they must cover everything. Choosing the number of dimes guarantees both.

So when do you add and when do you multiply? **Multiply** when you do one thing **and then** another. **Add** when you do one thing **or** another.

## Move 3: Count the opposite

How many 3-digit numbers have at least one digit that's a 5?

Counting these directly means many cases. It's much easier to count the numbers with **no** 5s at all, and then subtract:

- There are 900 three-digit numbers in all, from 100 to 999.
- With no 5s, the first digit has 8 choices (not 0 or 5), and the other two digits have 9 choices each. That makes $8 \times 9 \times 9 = 648$ numbers.
- So $900 - 648 = 252$ numbers have at least one 5.

This move is called **complementary counting**. The words "at least one" are your clue, as they were in probability.

## Move 4: Fix the overlap

In a class of 30 students, 18 play soccer, 15 are in band, and 8 do both. How many do neither?

If you add 18 and 15, the 8 students who do both get counted twice. So subtract them once:

$$18 + 15 - 8 = 25$$

That means 25 students do at least one activity, and $30 - 25 = 5$ do neither. A Venn diagram shows why:

![Two overlapping circles in a box of 30 students. Ten students are in soccer only, 8 are in both, and 7 are in band only. Five students are in neither.](/images/smart-counting-venn.svg)

Fill in a Venn diagram from the middle out. Start with the 8 in both. Then soccer-only is $18 - 8 = 10$, and band-only is $15 - 8 = 7$.

## Move 5: Divide out the repeats

How many ways can you arrange the letters in the word LEVEL?

If all 5 letters were different, there would be $5 \times 4 \times 3 \times 2 \times 1 = 120$ ways. We write that product as $5!$, which is read "5 factorial."

But swapping the two Ls doesn't make a new word, and neither does swapping the two Es. Each word was counted $2 \times 2 = 4$ times, so divide:

$$\frac{120}{4} = 30$$

## Bonus: Paths on a grid

You walk from one corner of a street grid to the opposite corner, going 2 blocks east and 3 blocks north in any order. How many routes are there?

Every route is a list of 5 moves, such as E N N E N. That's the same as asking which 2 of the 5 moves are east, so the answer is "5 choose 2," which is $\frac{5 \times 4}{2} = 10$. Turning a new problem into one you already know is the most powerful move of all.

## Your turn

Before you start the practice problems, try these two:

1. How many ways can you choose 2 toppings from 8?
2. How many 2-digit numbers don't contain the digit 3? Use the opposite if you like.

**Answers:** For the first, $\frac{8 \times 7}{2} = 28$. For the second, the first digit has 8 choices (not 0 or 3) and the second has 9 (not 3), so $8 \times 9 = 72$.

If you got those, you're ready. Remember that the hard problems are supposed to feel hard.
