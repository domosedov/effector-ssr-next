import type { FC } from "react";
import Link from "next/link";

export const Navbar: FC = () => {
  return (
    <nav>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/todos">
        <a>Todos</a>
      </Link>
    </nav>
  );
};
