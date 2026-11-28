---
title: Learning from Rewards
summary: Learn how an agent learns by acting and getting rewards, how discounted returns and value functions work, how Q-learning updates its estimates, and how exploration and policy gradients fit in.
minutes: 15
---

Nobody gives a toddler a labeled dataset for walking. They try, fall, and try again, and slowly the moves that keep them upright win out. **Reinforcement learning (RL)** works the same way. There are no correct answers to copy, only rewards and penalties that arrive, sometimes much later, after the agent acts.

> **The big idea:** An **agent** acts in an **environment**. After each **action**, it sees a new **state** and gets a **reward**. Its goal is a **policy**, a rule for choosing actions, that earns the largest total reward over time. Future rewards count a little less than immediate ones, through a **discount factor** $\gamma$.

## Key words

| Word | Meaning | Video game example |
|---|---|---|
| Agent | The learner that acts | the player character |
| Environment | The world it acts in | the game level |
| State | The current situation | position, health, enemies nearby |
| Action | A choice the agent makes | jump, move left |
| Reward | The feedback signal | +10 for a coin, −100 for falling |
| Policy | The strategy: which action in each state | "jump when an enemy is close" |

These pieces are formalized as a **Markov decision process (MDP)**: the next state and reward depend only on the current state and action, not on the full history.

## Returns and discounting

The **return** adds up the rewards from now on, with each step further into the future multiplied by another factor of $\gamma$, a number between 0 and 1:

$$G = r_1 + \gamma r_2 + \gamma^2 r_3 + \cdots$$

With rewards 1, 1, 1 and $\gamma = 0.5$, the return is $1 + 0.5 + 0.25 = 1.75$. A $\gamma$ near 0 makes the agent short-sighted. A $\gamma$ near 1 makes it patient. If the reward is 1 on every step forever, the return is $\frac{1}{1 - \gamma}$, which is 10 for $\gamma = 0.9$.

## Value functions

- The **value** of a state, $V(s)$, is the expected return from that state if you follow the policy.
- The **Q-value**, $Q(s, a)$, is the expected return if you take action $a$ in state $s$ and then follow the policy.

If you knew the true Q-values, the best policy would be simple: in each state, pick the action with the highest $Q$.

## Q-learning

Q-learning improves its estimates from experience. After taking action $a$ in state $s$, getting reward $r$, and landing in state $s'$:

$$Q(s, a) \leftarrow Q(s, a) + \alpha \left[ r + \gamma \max_{a'} Q(s', a') - Q(s, a) \right]$$

The part in brackets is the surprise: what this step suggests the value should be, minus the old guess. The learning rate $\alpha$ controls how far to move.

**Worked example.** $Q(s, a) = 2$, $r = 1$, $\gamma = 0.9$, the best Q-value in the next state is 5, and $\alpha = 0.5$. The target is $1 + 0.9 \times 5 = 5.5$. The surprise is $5.5 - 2 = 3.5$, so the new estimate is $2 + 0.5 \times 3.5 = 3.75$.

When there are too many states for a table, as with the pixels of a video game, a neural network can estimate $Q$ instead. That's a **deep Q-network (DQN)**.

With $\gamma = 0.9$, what is the return of rewards 0, 0, 10?

<details class="check"><summary>Show the answer</summary>

$0 + 0.9 \times 0 + 0.81 \times 10 = 8.1$.

</details>

## Exploration versus exploitation

An agent that always picks the best-known action (**exploitation**) may never discover a better one. An agent that always tries random actions (**exploration**) never cashes in on what it learned. A simple balance is **epsilon-greedy**: with probability $\epsilon$, take a random action, and otherwise take the best-known one.

## Learning the policy directly

**Policy gradient** methods skip Q-values. They adjust the policy's probabilities directly, making actions that led to high returns more likely. **PPO** is a popular version that limits how much the policy changes per update, which keeps training stable. **Actor-critic** methods combine both ideas: an actor (the policy) chooses actions, and a critic (a value function) judges them. PPO-style training is also part of **RLHF**, which tunes language models toward answers people prefer.

<section data-box="traps">

## Common traps

**Chasing only immediate rewards.** With $\gamma = 0$, the agent ignores every consequence after the next step.

**Never exploring.** A greedy agent can get stuck repeating the first decent action it found.

**Confusing reward with return.** The reward is one step's signal. The return is the discounted total of all the rewards to come.

</section>

<section data-box="summary">

## Remember this

- Agent, environment, state, action, reward, policy.
- Return: $r_1 + \gamma r_2 + \gamma^2 r_3 + \cdots$.
- $Q(s, a)$: the expected return after taking action $a$ in state $s$.
- Q-learning moves $Q$ toward $r + \gamma \max Q(s', \cdot)$.
- Epsilon-greedy balances exploring and exploiting.

</section>
