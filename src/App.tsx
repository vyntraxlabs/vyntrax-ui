import { Button, Card, Container, Heading, Input, Stack } from "./components";

function App() {
  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <Stack gap="6">
            <Heading level={1}>VYNTRAX Login</Heading>

            <Input label="Email" placeholder="Digite seu email" fullWidth />

            <Input
              label="Senha"
              type="password"
              placeholder="Digite sua senha"
              fullWidth
            />

            <Button>Entrar</Button>
          </Stack>
        </Card>
      </div>
    </Container>
  );
}

export default App;
