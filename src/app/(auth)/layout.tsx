import type { PropsWithChildren } from "react";

import { cn } from "~/lib/utils";

export default function AuthLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <main>
      <section className={cn("h-screen flex justify-center items-center")}>
        {children}
      </section>
    </main>
  );
}
