---
order: 22
difficulty: easy
lesson: 02-truth-tellers-and-liars
choices: ["Lia is a truth-teller.","Lia is a liar.","It can't be determined."]
answer: C
mistakes:
  A: "A liar would say the same thing, so the statement doesn't prove this."
  B: "A truth-teller would say the same thing, so the statement doesn't prove this."
verify: "[true, false].filter((t) => t === t).length === 2 ? 'It can\\'t be determined.' : 'Determined'"
---

On an island, truth-tellers always tell the truth, and liars always lie. Lia says, "I am a truth-teller." What can you conclude?

## Hint

Would a truth-teller say this? Would a liar?

## Hint 2

Both types would say it.

## Solution

A truth-teller says it, since it's true. A liar also says it, since it's false for a liar. So the statement tells you nothing about Lia.

**Answer: (C) It can't be determined.**
