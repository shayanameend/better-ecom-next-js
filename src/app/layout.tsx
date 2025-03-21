import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import Link from "next/link";

import { buttonVariants } from "~/components/ui/button";
import { routes } from "~/lib/routes";
import { cn } from "~/lib/utils";

import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Next App",
  description: "Next App",
};

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={cn("relative")}>
        <header className={cn("absolute top-0 w-full p-4")}>
          <nav
            className={cn(
              "max-w-7xl mx-auto flex justify-between items-center",
            )}
          >
            <Link href={routes.app.public.home.url()}>Better Ecom</Link>
            <Link
              href={routes.app.auth.signIn.url()}
              className={cn(buttonVariants())}
            >
              {routes.app.auth.signIn.label()}
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
