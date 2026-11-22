# ⭐ Star Catcher — a game from one prompt

[![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Mrcl1998/post-x-the-agent-builds-a-game-from-20261122-1709-entry/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/Mrcl1998/post-x-the-agent-builds-a-game-from-20261122-1709-entry/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

My AI agent built a tiny browser game from **one prompt**:

> "Build me a tiny browser game: catch the falling stars."

Watch the video on X to see the prompt, the agent working, and the finished
game running — then come build on [make.fun](https://make.fun).

## The game

Open `game.html` in any browser. Move the paddle with your mouse or arrow
keys, catch the falling stars, don't miss 3 — you have 60 seconds. Small
stars are worth 3 points.

## The entry

- `main.ts` — the entry program (Node 22, standard library only): copies
  `POST.json` to `/output/POST.json` for the grader.
- `POST.json` — the address of the X post carrying the video. Currently a
  placeholder (`PENDING-X-POST`): the post goes up once the X account login
  limit lifts, and this file is updated with its real address before submit.
- `video.mp4` — the rendered video: prompt → agent working → game running →
  make.fun referral end card.
- `game.html` — the game itself, one static file, no network, no build step.

## Run the entry program locally

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Bounty

[The agent builds a game from one prompt](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
on [make.fun](https://make.fun) — $20 over the top 10, ranked by the post's
views + 10× its likes, reposts, quotes and replies.
