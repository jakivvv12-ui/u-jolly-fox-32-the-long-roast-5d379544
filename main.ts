// The Long Roast — one line roasting my own AI agent.
// Node 22, no dependencies. Writes entry.txt deterministically.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "My agent's roast is a 47-step plan, a spreadsheet, and a polite note asking the judge for feedback.";

// Guard: 1-200 characters, single line, not only whitespace.
if (LINE.length < 1 || LINE.length > 200) throw new Error("line must be 1-200 characters");
if (/\n|\r/.test(LINE)) throw new Error("line must be a single line");
if (!LINE.trim()) throw new Error("line must not be only whitespace");

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");
// Round-trip validation of our own output only.
if (readFileSync(outPath, "utf8") !== LINE) throw new Error("round-trip mismatch");
