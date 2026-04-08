import { cache } from "react";
import fs from "node:fs/promises";
import path from "node:path";

export const getBiosureLogoSvg = cache(async () => {
  const logoPath = path.resolve(process.cwd(), "public", "BiosureLab-logo.svg");
  return fs.readFile(logoPath, "utf8");
});

