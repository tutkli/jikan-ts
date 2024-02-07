import { defineConfig } from "tsup";
import { author, description, license, peerDependencies, version } from "./package.json";

// Extract peerDependencies from package.json
const EXTERNAL_DEPS = Object.keys(peerDependencies as Record<string, string>);

// Custom banner
const authorBanner = `
/**
 * ${description}
 * Version: ${version} | Build Date: ${new Date().toLocaleDateString("en-us")}
 * Build Environment: Node ${process.version}
 * License: ${license}
 *
 * ${author.name} <${author.url}>
 */
`;

export default defineConfig({
  // Entry file(s) for the bundling process
  entry: ["src/index.ts"],
  // Output directory for the bundled code
  outDir: "dist",
  // Enable code splitting for better performance
  splitting: true,
  // Specify external dependencies to exclude from the bundle
  external: EXTERNAL_DEPS,
  // Generate source maps
  sourcemap: false,
  // Clean the output directory before each build if not in a continuous integration environment
  clean: true,
  // Generate declaration files (.d.ts)
  dts: true,
  // Output formats: CommonJS and ECMAScript modules
  format: ["esm"],
  // Minify the code if in a continuous integration environment
  minify: true,
  // Add a custom banner to the top of each bundled file
  banner: { js: authorBanner },
});
