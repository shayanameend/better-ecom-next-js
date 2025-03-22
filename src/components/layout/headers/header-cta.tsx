"use client";

import Link from "next/link";
import { useState } from "react";

import { toast } from "sonner";

import { Button, LoadingButton, buttonVariants } from "~/components/ui/button";
import { auth } from "~/lib/auth";
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
          onClick={async () => {
            await auth.signOut({
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

            setIsLoading(false);
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
