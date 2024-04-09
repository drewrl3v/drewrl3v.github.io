---
layout: default
title: 
permalink: teaching/some_algs/chp1/
---

---
# Inductive Reasoning
---

[Home](../../index.html)

[Previous Section: Some Algorithms](../chp0/) | Next Section: TBD

---

Some (but not all) algorithms can be intuitively reasoned via induction. I've noticed this connection is usually not directly addressed.

So let's review it before proceeding with the standard Data Structures and Algorithms.

## Warning:

If you're new to this, the induction section will feel like being blasted with a firehose. This might be unpleasant, so here are my suggestions:

1. Just understand the high-level concepts. The `Recursion`, section that proceeds this one has much simpler examples and will ease you into the following sections.

2. Don't get bogged down in the notation, just try to understand the overall concept:

For example, if I asked you what is the integer between 1 and 100? Just say 50.

If I ask whats $423/1658$? Just say it's about $400/1600 = 4/16 = 1/4$.

If I ask how many times can you divide $100$ by $2$. Just say $100/2 = 50$, then $50/2 = 25$, $25/2$ is about $24/2 = 12$, then $12/2 = 6$, $6/2 = 3$ and $3/2$ is about $1$.

So you can divide $100$ by $2$ about $7$ times.

3. Again, don't get caught in the details, try your best to absorb the general idea.

4. Mathematically, induction is typically setup recursively and naturally this leads to recursive implementation of an inductive algorithm. However we will also provide iterative versions of the recursive algorithm, when possible.