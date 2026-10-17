import { Button } from "./components/common/Button";
import { Card } from "./components/common/Card";
import { Input } from "./components/common/Input";

function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8">
      <Card>
        <h1 className="text-3xl font-bold text-white">
          VYNTRAX Login
        </h1>

        <p className="text-gray-400">
          Acesse sua conta
        </p>

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

        <Button className="w-full">
          Entrar
        </Button>
      </Card>
    </div>
  );
}

export default App;