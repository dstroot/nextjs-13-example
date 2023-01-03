"use client";

/*
NavLink: The "active" class is added when the href matches the start of the URL pathname, use the "exact" property to change it to an exact match with the whole URL pathname.
*/

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import { RefAttributes, HTMLProps, FC } from "react";

type NavLinkProps = {
  exact?: boolean;
  children?: React.ReactNode;
} & LinkProps &
  HTMLProps<HTMLAnchorElement> &
  RefAttributes<HTMLAnchorElement>;

export const NavLink: FC<NavLinkProps> = ({ exact, children, ...props }) => {
  const pathname = usePathname();
  const active = " text-active"; // class to add when active
  const isActive = exact
    ? pathname === props.href
    : pathname?.startsWith(props.href);

  if (isActive) {
    props.className += active;
  }

  return <Link {...props}>{children}</Link>;
};
