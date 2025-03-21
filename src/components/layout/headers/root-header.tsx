import Link from "next/link";

import { routes } from "~/lib/routes";
import { cn } from "~/lib/utils";
import { HeaderCTA } from "./header-cta";

export function RootHeader() {
  return (
    <header className={cn("absolute top-0 w-full p-4")}>
      <nav
        className={cn("max-w-7xl mx-auto flex justify-between items-center")}
      >
        <Link href={routes.app.public.home.url()}>Better Ecom</Link>
        <HeaderCTA />
      </nav>
    </header>
  );
}
