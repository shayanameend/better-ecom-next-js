import { createAuthClient } from "better-auth/react";
import { adminClient } from "better-auth/client/plugins";

export const auth = createAuthClient({
  baseURL: "http://localhost:8080",
  plugins: [adminClient()],
});
