---
order: 10
difficulty: medium
lesson: 02-truth-tellers-and-liars
choices: ["Both are truth-tellers.","Both are liars.","Rae is a truth-teller, and Sol is a liar.","Rae is a liar, and Sol is a truth-teller."]
answer: D
mistakes:
  A: "Then Rae's statement would be false, but truth-tellers don't say false things."
  B: "Then Rae's statement would be true, but liars don't say true things."
  C: "If Rae tells the truth, then Rae is a liar. That's a contradiction."
verify: "product([true, false], [true, false]).filter(([r, s]) => r === (!r && !s)).map(([r, s]) => 'Rae is a ' + (r ? 'truth-teller' : 'liar') + ', and Sol is a ' + (s ? 'truth-teller.' : 'liar.')).join()"
---

Each of Rae and Sol is either a truth-teller, who always tells the truth, or a liar, who always lies. Rae says, "Sol and I are both liars." What are they?

## Hint

Assume that Rae is a truth-teller. What does the statement then say about Rae?

## Hint 2

Rae must be a liar. So the statement is false. What does "not both liars" tell you about Sol?

## Solution

If Rae were a truth-teller, the statement would make Rae a liar, which is a contradiction. So Rae is a liar, and the statement is false. They aren't both liars, so Sol must be a truth-teller.

**Answer: (D) Rae is a liar, and Sol is a truth-teller.**
