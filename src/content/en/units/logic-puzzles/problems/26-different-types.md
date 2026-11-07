---
order: 26
difficulty: medium
lesson: 02-truth-tellers-and-liars
choices: ["Both are truth-tellers.","Both are liars.","Ida is a truth-teller, and Jay is a liar.","Ida is a liar, and Jay is a truth-teller."]
answer: D
mistakes:
  A: "Then Ida's statement that Jay is a liar would be false."
  B: "Then Ida's statement that Jay is a liar would be true, but liars can't say true things."
  C: "Then Jay's statement that they're different would be true, but liars can't say true things."
verify: "product([true, false], [true, false]).filter(([i, j]) => i === !j && j === (i !== j)).map(([i, j]) => 'Ida is a ' + (i ? 'truth-teller' : 'liar') + ', and Jay is a ' + (j ? 'truth-teller.' : 'liar.')).join()"
---

Each of Ida and Jay is a truth-teller, who always tells the truth, or a liar, who always lies. Ida says, "Jay is a liar." Jay says, "Ida and I are different types." What are they?

## Hint

Test each of the four cases against both statements.

## Hint 2

Ida's statement means that they're different types, whichever one she is.

## Solution

If Ida is telling the truth, Jay is a liar. Then Jay's statement, that they're different types, is true, and liars can't say true things. So Ida is a liar, and her statement is false, which makes Jay a truth-teller. Jay's statement is then true, as it should be.

**Answer: (D) Ida is a liar, and Jay is a truth-teller.**
