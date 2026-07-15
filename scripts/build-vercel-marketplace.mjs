import { cpSync, existsSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const combinedOutput = path.join(root, "dist");
const deploymentOutput = path.join(root, "marketplace", "deploy");

rmSync(deploymentOutput, { recursive: true, force: true });

const result = spawnSync(
  process.platform === "win32" ? "npm.cmd" : "npm",
  ["run", "build"],
  {
    cwd: root,
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
    stdio: "inherit",
  },
);

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

if (!existsSync(path.join(combinedOutput, "index.html"))) {
  throw new Error("The combined marketplace output was not generated.");
}

cpSync(combinedOutput, deploymentOutput, { recursive: true });

console.log(`\nPrepared the complete Vercel deployment in ${deploymentOutput}`);
