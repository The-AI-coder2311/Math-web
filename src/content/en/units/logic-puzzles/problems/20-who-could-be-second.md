---
order: 20
difficulty: hard
lesson: 03-ordering-and-seating
choices: ["Al or Dan","Al only","Dan only","Al, Cid, or Dan","Cid only"]
answer: A
mistakes:
  B: "Dan could also be second. Try the order Bob, Dan, Al, Cid."
  C: "Al could also be second. Try the order Bob, Al, Dan, Cid."
  D: "Dan scored higher than Cid, and Bob scored higher than Dan. So Cid is at best third."
  E: "Cid has two people above for sure, Bob and Dan. So Cid is at best third."
verify: "[...new Set(perms(['Al', 'Bob', 'Cid', 'Dan']).filter((o) => o.indexOf('Bob') < o.indexOf('Al') && o.indexOf('Dan') < o.indexOf('Cid') && o.indexOf('Bob') < o.indexOf('Dan')).map((o) => o[1]))].sort().join(' or ')"
---

Four students, Al, Bob, Cid, and Dan, have different scores on a test. Bob scored higher than Al. Dan scored higher than Cid. Bob scored higher than Dan. Who could have the second-highest score?

## Hint

Who must have the highest score? Then list the possible orders of the other three.

## Hint 2

Bob is above everyone. Among the other three, the only clue is that Dan is above Cid.

## Solution

Bob is above Al and Dan, and Dan is above Cid, so Bob is first. The other three can go in the orders Al, Dan, Cid, or Dan, Al, Cid, or Dan, Cid, Al. So second place is Al or Dan. Cid can't be second, since Dan has to be above Cid.

**Answer: (A) Al or Dan**
