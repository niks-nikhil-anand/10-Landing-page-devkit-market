import { cpSync, existsSync, mkdirSync, rmSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(root, "dist");
const apps = [
  "ai-multi-agent-orchestration-platform",
  "b2b-sales-funnel-lead-generation",
  "cybersecurity-compliance",
  "developer-api-infrastructure-tools",
  "fractional-cfo-financial-advisory",
  "intellectual-property-patent-law-firms",
  "longevity-biohacking-dtc-brands",
  "medical-spa-and-aesthetics-clinics",
  "saas-waitlist-product-launch",
  "telehealth-concierge-medicin",
];

rmSync(outputDirectory, { recursive: true, force: true });
mkdirSync(outputDirectory, { recursive: true });

console.log("\nBuilding marketplace homepage...");

const marketplaceResult = spawnSync(
  process.platform === "win32" ? "npm.cmd" : "npm",
  ["run", "build", "--workspace", "marketplace"],
  {
    cwd: root,
    env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
    stdio: "inherit",
  },
);

if (marketplaceResult.status !== 0) {
  process.exit(marketplaceResult.status ?? 1);
}

const marketplaceOutput = path.join(root, "marketplace", "out");
if (!existsSync(marketplaceOutput)) {
  throw new Error("Static output was not generated for the marketplace homepage.");
}

cpSync(marketplaceOutput, outputDirectory, { recursive: true });

for (const app of apps) {
  console.log(`\nBuilding ${app}...`);

  const result = spawnSync(
    process.platform === "win32" ? "npm.cmd" : "npm",
    ["run", "build", "--workspace", app],
    {
      cwd: root,
      env: { ...process.env, NEXT_TELEMETRY_DISABLED: "1" },
      stdio: "inherit",
    },
  );

  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }

  const appOutput = path.join(root, app, "out");
  if (!existsSync(appOutput)) {
    throw new Error(`Static output was not generated for ${app}.`);
  }

  cpSync(appOutput, path.join(outputDirectory, app), { recursive: true });
}

console.log(`\nBuilt the marketplace and ${apps.length} landing pages into ${outputDirectory}`);
