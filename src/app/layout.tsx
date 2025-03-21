import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

import { RootHeader } from "~/components/layout/headers/root-header";
import { cn } from "~/lib/utils";

import "~/styles/globals.css";

export const metadata: Metadata = {
  title: "Next App",
  description: "Next App",
};

export default async function RootLayout({
  children,
}: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className={cn("relative")}>
        <RootHeader />
        {children}
      </body>
    </html>
  );
}
