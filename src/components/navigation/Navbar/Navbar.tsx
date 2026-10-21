import "./Navbar.css";

import {
  Bell,
  Settings,
  User,
} from "lucide-react";

import { cn } from "../../../utils";

import {
  Container,
  Flex,
  Icon,
  Logo,
} from "../../";

import type { NavbarProps } from "./Navbar.types";

export function Navbar({
  children,
  className,
  ...props
}: NavbarProps) {
  return (
    <header
      className={cn("vyntrax-navbar", className)}
      {...props}
    >
      <Container>
        <Flex
          justify="between"
          align="center"
          fullWidth
        >
          <Logo />

          <Flex
            align="center"
            gap="4"
          >
            {children}

            <Icon icon={Bell} />

            <Icon icon={Settings} />

            <Icon icon={User} />
          </Flex>
        </Flex>
      </Container>
    </header>
  );
}