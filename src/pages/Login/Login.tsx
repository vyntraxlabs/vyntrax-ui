import "./Login.css";

import {
  AppLayout,
  Container,
  Flex,
} from "../../components";

import { LoginCard } from "./components/LoginCard";

export function Login() {
  return (
    <AppLayout showNavbar={false} showSidebar={false}>
      <Container>
        <Flex
          fullWidth
          fullHeight
          justify="center"
          align="center"
        >
          <LoginCard />
        </Flex>
      </Container>
    </AppLayout>
  );
}