import "./Login.css";

import {
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Input,
} from "../../components";

export function Login() {
  return (
    <Container>
      <Flex
        fullWidth
        fullHeight
        justify="center"
        align="center"
      >
        <Card>
          <Flex direction="column" gap="6">
            <Heading level={1}>
              VYNTRAX Login
            </Heading>

            <p className="login-subtitle">
              Access your account
            </p>

            <Input
              label="Email"
              placeholder="Enter your email"
              fullWidth
            />

            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              fullWidth
            />

            <Button fullWidth>
              Sign In
            </Button>
          </Flex>
        </Card>
      </Flex>
    </Container>
  );
}