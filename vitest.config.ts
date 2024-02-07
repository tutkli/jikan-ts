import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    testTimeout: 10_000,
    fileParallelism: false,
    coverage: {
      enabled: true,
      provider: "v8",
      exclude: ["src/models/*", "/.*"],
    },
    logHeapUsage: true,
  }
})
