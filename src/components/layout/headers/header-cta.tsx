"use client";

import Link from "next/link";
import { useState } from "react";

import { toast } from "sonner";

import { auth } from "~/auth/client";
import { Button, buttonVariants, LoadingButton } from "~/components/ui/button";
import { routes } from "~/lib/routes";
import { cn } from "~/lib/utils";

export function HeaderCTA() {
  const [isLoading, setIsLoading] = useState(false);

  const { data, isPending, error } = auth.useSession();

  if (isPending) {
    return <Button disabled>Loading</Button>;
  }

  if (error) {
    return <Button disabled>Disabled</Button>;
  }

  return (
    <>
      {data ? (
        <LoadingButton
          isLoading={isLoading}
          onClick={() => {
            auth.signOut({
              fetchOptions: {
                onRequest: (ctx) => {
                  setIsLoading(true);
                },
                onSuccess: (ctx) => {
                  toast.success("Signed out successfully");
                },
                onError: (ctx) => {
                  toast.error(ctx.error.message);
                },
              },
            });
          }}
        >
          Sign Out
        </LoadingButton>
      ) : (
        <Link
          href={routes.app.auth.signIn.url()}
          className={cn(buttonVariants())}
        >
          {routes.app.auth.signIn.label()}
        </Link>
      )}
    </>
  );
}
