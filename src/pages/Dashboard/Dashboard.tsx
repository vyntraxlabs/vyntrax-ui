import "./Dashboard.css";

import {
  AppLayout,
  Container,
  Flex,
  Heading,
} from "../../components";

export function Dashboard() {
  return (
    <AppLayout>
      <Container>
        <Flex
          direction="column"
          gap="6"
        >
          <Heading level={1}>
            Dashboard
          </Heading>

          <p>
            Welcome to VYNTRAX Home AI
          </p>
        </Flex>
      </Container>
    </AppLayout>
  );
}