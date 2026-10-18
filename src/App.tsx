import {
  Button,
  Card,
  Container,
  Heading,
  Input,
} from "./components";

function App() {
  return (
    <Container>
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <Heading level={1}>VYNTRAX Login</Heading>

          <Input
            label="Email"
            placeholder="Digite seu email"
            fullWidth
          />

          <Input
            label="Senha"
            type="password"
            placeholder="Digite sua senha"
            fullWidth
          />

          <Button>Entrar</Button>
        </Card>
      </div>
    </Container>
  );
}

export default App;