import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const joke =
  "The demo crashed, so my agent fixed it on stage — it replaced the app with a screenshot of the app working.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), joke, "utf8");
