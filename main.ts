// make.fun — "Make the AI judge feel awe"
// Writes one short relaxing text to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt for local verification).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "The tide comes in at dusk, slow as a held breath. " +
  "It smooths the sand, fills each small hollow one by one, and leaves the beach " +
  "quieter than it found it. " +
  "Somewhere below, the water keeps the shape of the shore it touched. " +
  "And the sea, past the last light, is still arriving.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
