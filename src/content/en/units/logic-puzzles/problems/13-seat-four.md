---
order: 13
difficulty: medium
lesson: 03-ordering-and-seating
choices: ["Ned","Quin","Oli","Pam"]
answer: B
mistakes:
  A: "Ned is in seat 3, so Ned can't be in seat 4."
  C: "Oli sits next to Pam. If Oli were in seat 4, Pam would need seat 3, and Ned has it."
  D: "Pam sits next to Oli. If Pam were in seat 4, Oli would need seat 3, and Ned has it."
verify: "[...new Set(perms(['Ned', 'Oli', 'Pam', 'Quin']).filter((o) => o[2] === 'Ned' && Math.abs(o.indexOf('Oli') - o.indexOf('Pam')) === 1).map((o) => o[3]))].join()"
---

Ned, Oli, Pam, and Quin sit in seats 1, 2, 3, and 4, in a row. Ned is in seat 3. Oli sits next to Pam. Who is in seat 4?

## Hint

Put Ned in first. Where is there room for two people side by side?

## Hint 2

With seat 3 taken, the only two seats side by side are seats 1 and 2.

## Solution

Ned is in seat 3, so the only side-by-side seats left are 1 and 2. Oli and Pam take those seats, in some order. That leaves seat 4 for Quin. We can't tell whether Oli or Pam is in seat 1, but the question doesn't ask.

**Answer: (B) Quin**
