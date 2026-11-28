---
title: Filters That Slide Over Images
summary: Learn how convolution layers scan images with small shared filters, how to work out output sizes and parameter counts, and how pooling, receptive fields, and image tasks like segmentation fit together.
minutes: 14
---

A small color photo of 224 by 224 pixels holds about 150,000 numbers. Connect that to a layer of only 1,000 neurons and you already have 150 million weights. Worse, a fully connected layer that learns to spot a cat in the top-left corner has to learn it all over again for the bottom-right. **Convolutional neural networks (CNNs)** fix both problems with one idea: use a small filter, and slide it everywhere.

> **The big idea:** A **convolution** slides a small grid of weights, called a **filter** or **kernel**, across the input. At each position it takes a dot product. The same weights are reused at every position, which is called **weight sharing**, so a pattern learned in one place is found everywhere, with very few parameters.

## Convolution in one dimension

Slide the kernel $(1, 0, -1)$ along the input $(1, 2, 3, 4)$:

- Position 1: $1 \times 1 + 2 \times 0 + 3 \times (-1) = -2$
- Position 2: $2 \times 1 + 3 \times 0 + 4 \times (-1) = -2$

This kernel measures how the input changes from left to right, a simple edge detector. In 2D, a $3 \times 3$ kernel slides across an image the same way. The output is a **feature map** that shows where the pattern appears.

## Output size

Three settings control the output size:

- **Kernel size** $k$: how wide the filter is.
- **Stride** $s$: how far it moves each step.
- **Padding** $p$: extra zeros added around the border.

For an input $n$ pixels wide, the output is $\left\lfloor \frac{n + 2p - k}{s} \right\rfloor + 1$ wide, where the brackets mean "round down." A $32 \times 32$ image with a $5 \times 5$ kernel, stride 1, and no padding gives

$$\frac{32 + 0 - 5}{1} + 1 = 28$$

so the output is $28 \times 28$. With padding 1 and a $3 \times 3$ kernel, stride 1 keeps the size the same. That's called "same" padding.

## Channels and parameters

A color image has 3 **channels**: red, green, and blue. A filter covers all the input channels at once, so a $3 \times 3$ filter on a color image has $3 \times 3 \times 3 = 27$ weights plus one bias. A layer usually has many filters, and each one makes its own output channel. A layer with 16 filters has

$$16 \times (27 + 1) = 448$$

parameters, however large the image is. A fully connected layer between images of the same size would need millions.

What size is the output of a $3 \times 3$ kernel with stride 1 and no padding on a $10 \times 10$ input?

<details class="check"><summary>Show the answer</summary>

$\frac{10 - 3}{1} + 1 = 8$, so the output is $8 \times 8$.

</details>

## Pooling and the receptive field

**Max pooling** splits a feature map into small patches, often $2 \times 2$, and keeps the largest value in each. It halves the width and height and makes the network less sensitive to small shifts. **Average pooling** keeps the mean instead.

A neuron's **receptive field** is the patch of the original image it can "see." One $3 \times 3$ layer sees $3 \times 3$. Stack a second one and each neuron sees $5 \times 5$ of the original, then $7 \times 7$ after a third. Pooling and stride grow the receptive field faster, so deep layers can respond to whole objects.

*Understanding Deep Learning* explains the key property this way: convolution is **equivariant** to shifts. Shift the input, and the feature map shifts the same way. Pooling and the final layers then make the network's answer **invariant**: a cat is a cat wherever it sits in the photo.

## What CNNs are used for

- **Image classification:** one label for the whole image. LeNet, AlexNet, VGG, and ResNet are famous examples.
- **Object detection:** find each object and draw a **bounding box** around it. A box is judged by **IoU**, intersection over union, which is the overlap area divided by the combined area.
- **Semantic segmentation:** label every pixel with a class, such as road, car, or sky. The **U-Net** is a classic design for it.
- **Instance segmentation:** like semantic segmentation, but it also separates individual objects, such as car 1 and car 2.

<section data-box="traps">

## Common traps

**Forgetting the input channels.** A $3 \times 3$ filter on a 64-channel input has $3 \times 3 \times 64$ weights, not 9.

**Forgetting to round down.** When the stride doesn't divide evenly, the leftover pixels at the edge are dropped.

**Confusing detection with segmentation.** Detection draws boxes. Segmentation labels pixels.

</section>

<section data-box="summary">

## Remember this

- A convolution slides one small set of shared weights everywhere.
- Output size $= \left\lfloor \frac{n + 2p - k}{s} \right\rfloor + 1$.
- Conv layer parameters $= (k \times k \times C_{\text{in}} + 1) \times C_{\text{out}}$.
- Max pooling keeps the largest value in each patch and shrinks the map.
- Stacked $3 \times 3$ layers see $3 \times 3$, then $5 \times 5$, then $7 \times 7$.

</section>
