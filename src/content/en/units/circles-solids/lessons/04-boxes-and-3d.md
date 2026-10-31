---
title: "Boxes, Cylinders and Picturing 3D"
summary: Find volume by stacking layers and surface area by unfolding. Then learn to reason about shapes you can't see all of.
minutes: 10
---

A cube is painted red on the outside, and then cut into 27 small cubes. How many of the small cubes have paint on exactly two faces? You can't see all of the small cubes from any one position, which is what makes this hard. But with a little organization, you can reason it out without ever picking up a paintbrush.

> **The big idea:** **Volume** is how much fits inside, and you find it by stacking layers. **Surface area** is the total area of the outside, and you find it by imagining the shape unfolded flat.

## Why volume multiplies

A rectangular box measures 2 by 3 by 4. Fill it with 1-inch cubes. The bottom layer has $2 \times 3 = 6$ cubes, and there are 4 layers, so the volume is:

$$2 \times 3 \times 4 = 24$$

Volume is measured in **cubic** units, since it counts cubes. So any solid with straight sides going up has a volume equal to the area of its base times its height. That includes a **cylinder**, like a soup can. Its base is a circle, so its volume is $\pi r^2 h$, where $h$ is the height.

## Why surface area adds

Imagine cutting a cardboard box along its edges and laying it flat. You get 6 rectangles, in 3 matching pairs. For the 2 by 3 by 4 box:

| Faces | Size | Area of the pair |
|---|---|---|
| Top and bottom | 2 by 3 | $2 \times 6 = 12$ |
| Front and back | 2 by 4 | $2 \times 8 = 16$ |
| Left and right | 3 by 4 | $2 \times 12 = 24$ |

The total surface area is $12 + 16 + 24 = 52$. A cube has 6 identical square faces, so if its side is $s$, then its surface area is $6s^2$.

## Example 1: From volume to surface area

A cube has a volume of 64. What's its surface area?

**What do we know?** The side $s$ has to satisfy $s \times s \times s = 64$. Since $4 \times 4 \times 4 = 64$, the side is 4.

**What's the question asking?** Each face has an area of 16, and there are 6 faces, so the surface area is $6 \times 16 = 96$.

Try one. A box is 5 by 2 by 3. What's its volume, and what's its surface area?

<details class="check"><summary>Show the answer</summary>

The volume is $5 \times 2 \times 3 = 30$. The surface area is $2 \times 10 + 2 \times 15 + 2 \times 6 = 20 + 30 + 12 = 62$.

</details>

## Example 2: A soup can

A can has a radius of 3 and a height of 10. What's its volume?

**What's the plan?** The base is a circle with an area of $9\pi$, and there are 10 layers of it.

$$9\pi \times 10 = 90\pi$$

If you double the radius, the base becomes 4 times as big, so the volume is 4 times as big. If you double the height, the volume only doubles.

## Example 3: The painted cube

A cube with sides of 3 is painted and then cut into 27 small cubes. Let's organize the small cubes by **where they are**.

![A cube cut into 27 small cubes. Corner cubes have 3 painted faces and there are 8. Edge cubes have 2 painted faces and there are 12. Face center cubes have 1 painted face and there are 6. The 1 cube in the very middle has no paint.](/images/solids-painted-cube.svg)

- **Corners** have 3 painted faces. Every cube has 8 corners.
- **Edge cubes**, not including corners, have 2 painted faces. A cube has 12 edges, and each has 1 of these.
- **Face centers** have 1 painted face. There are 6 faces, and each has 1.
- **The very middle** has no paint, and there's 1 of these.

**Check:** $8 + 12 + 6 + 1 = 27$. That's every small cube.

So 12 small cubes have exactly two painted faces.

## Example 4: A bigger painted cube

What if the cube has sides of 5, cut into 125 small cubes?

**What changes?** The corners don't change, so there are still 8. Each edge now has 5 small cubes, and 2 of those are corners, so it has 3 edge cubes. That's $12 \times 3 = 36$. Each face has 25 small cubes in a 5 by 5 grid, and its inner part is 3 by 3, so there are 9. That's $6 \times 9 = 54$. The middle is a 3 by 3 by 3 cube with no paint, so that's 27.

**Check:** $8 + 36 + 54 + 27 = 125$. It works.

## Example 5: A contest-style question

A fish tank has a rectangular base that's 8 by 10 inches, and it's partly filled with water. A solid metal cube with sides of 4 inches is lowered in, and it's completely underwater, with no water spilling out. How many inches does the water level rise?

**What's the question really asking?** The cube pushes aside water equal to its own volume, so it's $4 \times 4 \times 4 = 64$ cubic inches.

**What shape does that water make?** It's a flat layer on top, with the tank's base as its base: $8 \times 10 = 80$ square inches.

**What's the plan?** Volume is base times height, so the rise is $64 \div 80 = 0.8$ inches.

<section data-box="traps">

## Common traps

**Mixing up volume and surface area.** Volume counts cubes that fill the inside, and surface area counts squares on the outside. A cube with sides of 6 is a coincidence: both numbers are 216. But the units differ.

**Counting only 3 faces.** Surface area includes all 6 faces. If you can only see 3 in a drawing, remember that each one has a partner.

**Counting edges wrongly.** A cube has 12 edges, not 4 or 6. Count 4 around the top, 4 around the bottom, and 4 going up.

</section>

<section data-box="strategy">

## Contest strategy

**How to spot it:** Look for "volume," "surface area," "painted," "water," or "unfold."

**Check with a total:** With a painted cube, the categories must add up to all of the small cubes. This is a quick and reliable test.

**Scaling:** If lengths are multiplied by $k$, then surface area is multiplied by $k^2$ and volume is multiplied by $k^3$.

**Time:** Two minutes.

</section>

<section data-box="connections">

## Connections

Layers use the same idea as [area as rows of squares](/pathway/basic-geometry/01-perimeter-and-area/). Scaling comes from [similar triangles](/pathway/triangles/04-similar-triangles/) and [circles](/pathway/circles-solids/01-circle-formulas/).

</section>

<section data-box="summary">

## Remember this

- Volume = base area × height, in cubic units.
- Surface area = the total of all faces, in square units.
- A box has 6 faces, 12 edges, and 8 corners.
- Painted cube: count corners, edges, and face centers.
- A submerged object pushes aside its own volume of water.

</section>
