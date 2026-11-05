import { describe, expect, it } from "vitest";
import { getAppConfig } from "./config";

describe("getAppConfig", () => {
  it("uses local development defaults when Vercel values are absent", () => {
    expect(getAppConfig({})).toEqual({
      environment: "development",
      commit: "0000000",
    });
  });

  it.each(["development", "preview", "production"] as const)(
    "reads the %s deployment environment and shortens the commit SHA",
    (environment) => {
      expect(
        getAppConfig({
          VERCEL_ENV: environment,
          VERCEL_GIT_COMMIT_SHA: "abcdef0123456789",
        }),
      ).toEqual({ environment, commit: "abcdef0" });
    },
  );

  it("falls back to development for an unknown deployment environment", () => {
    expect(getAppConfig({ VERCEL_ENV: "unknown" }).environment).toBe("development");
  });
});
