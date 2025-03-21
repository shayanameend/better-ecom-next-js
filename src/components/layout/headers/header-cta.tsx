"use client";

import Link from "next/link";

import { auth } from "~/auth/client";
import { Button, buttonVariants } from "~/components/ui/button";
import { routes } from "~/lib/routes";
import { cn } from "~/lib/utils";

export function HeaderCTA() {
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
        <Button
          onClick={() => {
            auth.signOut();
          }}
        >
          Sign Out
        </Button>
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
