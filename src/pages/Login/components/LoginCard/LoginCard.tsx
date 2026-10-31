import "./LoginCard.css";

import { Card, Flex, Heading, Logo } from "../../../../components";

import { LoginForm } from "../LoginForm";

export function LoginCard() {
  return (
    <Card className="login-card">
      <Flex direction="column" gap="0">
        <div className="login-header">
          <Logo size="lg" />

          <Heading level={1}>VYNTRAX</Heading>

          <p className="login-product">Home AI Platform</p>

          <p className="login-subtitle">Access your account</p>
        </div>

        <LoginForm />
      </Flex>
    </Card>
  );
}
