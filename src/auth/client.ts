import { createAuthClient } from "better-auth/react";

import { env } from "~/lib/env";

export const auth = createAuthClient({
  baseURL: env.BETTER_AUTH_URL,
});
