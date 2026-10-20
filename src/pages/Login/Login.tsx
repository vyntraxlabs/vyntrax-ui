import "./Login.css";
import { LogIn } from "lucide-react";

import {
  AppLayout,
  Button,
  Card,
  Container,
  Flex,
  Heading,
  Icon,
  Input,
  Logo,
} from "../../components";

export function Login() {
  return (
    <AppLayout>
      <Container>
        <Flex fullWidth fullHeight justify="center" align="center">
          <Card>
            <Flex direction="column" gap="6">
              <Flex direction="column" align="center" gap="2">
                <Logo size="lg" />

                <Heading level={2}>Home AI</Heading>
              </Flex>

              <p className="login-subtitle">Access your account</p>

              <Input label="Email" placeholder="Enter your email" fullWidth />

              <Input
                label="Password"
                type="password"
                placeholder="Enter your password"
                fullWidth
              />

              <Button fullWidth>
                <Flex align="center" justify="center" gap="2">
                  <Icon icon={LogIn} size={18} />
                  Sign In
                </Flex>
              </Button>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </AppLayout>
  );
}
