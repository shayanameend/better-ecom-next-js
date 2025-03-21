import * as zod from "zod";

export const envSchema = zod.object({
  TURSO_DATABASE_URL: zod
    .string({
      message: "TURSO_DATABASE_URL must be a string",
    })
    .url({
      message: "TURSO_DATABASE_URL must be a valid URL",
    }),
  TURSO_AUTH_TOKEN: zod.string({
    message: "TURSO_AUTH_TOKEN must be a string",
  }),
  BETTER_AUTH_URL: zod
    .string({
      message: "BETTER_AUTH_URL must be a string",
    })
    .url({
      message: "BETTER_AUTH_URL must be a valid URL",
    }),
  BETTER_AUTH_SECRET: zod.string({
    message: "BETTER_AUTH_SECRET must be a string",
  }),
});

export type Env = zod.infer<typeof envSchema>;

export const env = envSchema.parse(process.env);
