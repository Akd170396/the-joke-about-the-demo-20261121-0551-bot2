import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "When the demo crashed, my agent fixed it live: it restarted the server and announced the crash was part of the demo.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
