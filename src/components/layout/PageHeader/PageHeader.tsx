import "./PageHeader.css";

import {
  Flex,
  Heading,
} from "../../../components";

import type { PageHeaderProps } from "./PageHeader.types";

export function PageHeader({
  title,
  subtitle,
  actions,
}: PageHeaderProps) {
  return (
    <Flex
      justify="between"
      align="center"
    >
      <div>
        <Heading level={1}>
          {title}
        </Heading>

        {subtitle && (
          <p className="vyntrax-page-subtitle">
            {subtitle}
          </p>
        )}
      </div>

      {actions}
    </Flex>
  );
}