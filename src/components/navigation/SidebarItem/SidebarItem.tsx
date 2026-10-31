import "./SidebarItem.css";

import { NavLink } from "react-router-dom";

import { Icon } from "../../";

import { cn } from "../../../utils";

import type { SidebarItemProps } from "./SidebarItem.types";

export function SidebarItem({
  icon,
  label,
  path,
  className,
  ...props
}: SidebarItemProps) {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        cn(
          "vyntrax-sidebar-item",
          isActive && "vyntrax-sidebar-item--active",
          className,
        )
      }
      aria-label={label}
      title={label}
      {...props}
    >
      <Icon icon={icon} />
    </NavLink>
  );
}
