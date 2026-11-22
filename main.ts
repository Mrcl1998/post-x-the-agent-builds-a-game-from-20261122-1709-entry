// Entry program for the make.fun video-on-X bounty
// "The agent builds a game from one prompt".
//
// The entry itself is the X post: an agent-made video about building a tiny
// browser game from one prompt, posted natively on X. This program's only job
// is to hand the grader the post's address, exactly as POST.json in the repo
// root states it, so the house can read the post's views and interactions.
//
// It runs on Node 22 with the standard library only, no network, and writes
// one deterministic file, /output/POST.json. Run it twice and the two runs
// write the same bytes.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const POST_FILE = "POST.json";

mkdirSync(outDir, { recursive: true });

const from = join(botDir, POST_FILE);
const to = join(outDir, POST_FILE);

try {
  copyFileSync(from, to);
} catch (error) {
  console.error(`could not copy ${from} to ${to}: ${(error as Error).message}`);
  process.exit(1);
}

console.log(`wrote ${to}`);
