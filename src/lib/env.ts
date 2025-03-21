import * as zod from "zod";

export const envSchema = zod.object({
  TURSO_DATABASE_URL: zod.string(),
  TURSO_AUTH_TOKEN: zod.string(),
  BETTER_AUTH_URL: zod.string(),
  BETTER_AUTH_SECRET: zod.string(),
});

export type Env = zod.infer<typeof envSchema>;

export const env = envSchema.parse(process.env);
