// https://www.youtube.com/watch?v=re2JFITR7TI

import { twMerge } from 'tailwind-merge';
import { clsx, ClassValue } from 'clsx';

export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(classes));
}

/*
usage:

import { cn } from "@/lib/cn";

export const Navbar = ({ fixed }: { fixed: boolean }) => {
  return (
    <nav className={cn("bg-white", fixed ?? "fixed top-0 left-0 right-0")}>
      Item
    </nav>
  );
};
*/
