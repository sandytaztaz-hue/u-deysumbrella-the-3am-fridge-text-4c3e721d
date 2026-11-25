import { mkdirSync, writeFileSync } from "node:fs";

// The entry: one text message from a smart fridge to its owner at 3am.
// The fridge has counted six openings tonight and stages an intervention
// as an unwilling therapist — and the punch lands in the last few words,
// when the pickles turn out to be the ones worried about the human.
// Small voice, firm opinion, no shame about texting at 3am: that is the
// whole character of the line.
const line =
  "You have opened me 6 times tonight. I am a fridge, not a therapist, and the pickles are worried about you.";

mkdirSync("/output", { recursive: true });

// The sealed gate only judges entries of 1 to 140 characters. Fail loudly
// here instead of ever writing an invalid entry.
if (line.length < 1 || line.length > 140) {
  throw new Error(`entry is ${line.length} characters, outside the 1-140 gate`);
}

writeFileSync("/output/entry.txt", line, "utf8");
