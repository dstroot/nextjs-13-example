export function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

/*
usage:

import { cn } from "./cn";

export const Navbar = ({ fixed }: { fixed: boolean }) => {
  return (
    <nav className={cn("bg-white", fixed ? "fixed top-0 left-0 right-0" : "")}>
      Item
    </nav>
  );
};
*/
