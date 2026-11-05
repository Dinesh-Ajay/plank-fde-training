export type DeploymentEnvironment = "development" | "preview" | "production";

export type AppConfig = {
  environment: DeploymentEnvironment;
  commit: string;
};

type ConfigEnvironment = {
  VERCEL_ENV?: string;
  VERCEL_GIT_COMMIT_SHA?: string;
};

const LOCAL_COMMIT = "0000000";

export function getAppConfig(env: ConfigEnvironment = {}): AppConfig {
  const vercelEnvironment = env.VERCEL_ENV;
  const environment: DeploymentEnvironment =
    vercelEnvironment === "preview" || vercelEnvironment === "production"
      ? vercelEnvironment
      : "development";
  const commitSha = env.VERCEL_GIT_COMMIT_SHA || LOCAL_COMMIT;

  return {
    environment,
    commit: commitSha.slice(0, 7),
  };
}

export const appConfig = getAppConfig({
  VERCEL_ENV: process.env.VERCEL_ENV,
  VERCEL_GIT_COMMIT_SHA: process.env.VERCEL_GIT_COMMIT_SHA,
});
