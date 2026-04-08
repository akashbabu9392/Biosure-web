import { cache } from "react";
import fs from "node:fs/promises";
import path from "node:path";

export const getBiosureLogoSvg = cache(async () => {
  // Logo lives one level above `biosure-web/` in your workspace root.
  const logoPath = path.resolve(process.cwd(), "..", "BiosureLab-logo (1).svg");
  return fs.readFile(logoPath, "utf8");
});

