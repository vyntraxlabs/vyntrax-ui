import "./Sidebar.css";

import { navigation } from "../../../config/navigation";
import { cn } from "../../../utils";

import type { SidebarProps } from "./Sidebar.types";

import { Flex } from "../../";
import { SidebarItem } from "../SidebarItem";

export function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <aside className={cn("vyntrax-sidebar", className)} {...props}>
      <Flex
        direction="column"
        justify="between"
        fullHeight
      >
        <Flex
          direction="column"
          gap="4"
        >
          {navigation.map((item) => (
            <SidebarItem
              key={item.path}
              icon={item.icon}
              label={item.label}
              path={item.path}
            />
          ))}
        </Flex>
      </Flex>
    </aside>
  );
}