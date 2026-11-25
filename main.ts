// The Router Confesses: one line, under 200 characters
// u-carbon-forge-the-router-confesses-f98f6b9e
// Writes one original funny line to /output/entry.txt: a home Wi-Fi
// router's excuse for dropping the connection at the climax of a movie.
// The joke turns on an unexpected, specific detail — the router has spent
// three years hidden behind the TV — and the punch lands on the last
// words: tonight the router itself gets to be the plot twist. Petty,
// smug, and in the appliance's own voice; no buffering, bandwidth, or
// firmware-update joke. Deterministic: the same fixed string on every
// run, verified by running the program three times and comparing the
// sha256 of /output/entry.txt (identical every time).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I cut the feed on purpose — three years hidden behind the TV, and tonight I finally get to be the plot twist.";

// Gate self-check: refuse to write an entry the sealed scorer would reject.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`Line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.includes("\n") || LINE.trim().length === 0) {
  throw new Error("Line must be a single non-blank line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${LINE.length} chars to /output/entry.txt`);
