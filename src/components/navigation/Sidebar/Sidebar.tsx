import "./Sidebar.css";

import { navigation } from "../../../config/navigation";

import { cn } from "../../../utils";

import { Flex, Icon, Logo } from "../../";

import type { SidebarProps } from "./Sidebar.types";

export function Sidebar({ className, ...props }: SidebarProps) {
  return (
    <aside className={cn("vyntrax-sidebar", className)} {...props}>
      <Flex direction="column" justify="between" fullHeight>
        <Flex direction="column" gap="8">
          <Logo />

          <Flex direction="column" gap="4">
            {navigation.map((item) => (
              <Icon key={item.path} icon={item.icon} />
            ))}
          </Flex>
        </Flex>
      </Flex>
    </aside>
  );
}
