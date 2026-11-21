// make.fun — "Make the AI judge feel awe"
// Writes one short relaxing text to /output/entry.txt
// (or $MAKEFUN_OUTPUT_DIR/entry.txt for local verification).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "When the sea goes out, it leaves the rocks with small, still pools. " +
  "Each pool keeps a piece of the evening sky and does not spill it. " +
  "The crabs settle. The light goes. " +
  "And under the dark water, the tide is already turning — patient, unhurried — " +
  "to come back and fill them.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
