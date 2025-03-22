import { createAuthClient } from "better-auth/react";
import { adminClient } from "better-auth/client/plugins";

import { ac, adminRole, userRole, vendorRole } from "~/lib/permissions";

export const auth = createAuthClient({
  baseURL: "http://localhost:8080",
  plugins: [
    adminClient({
      ac,
      roles: {
        adminRole,
        vendorRole,
        userRole,
      },
    }),
  ],
});
