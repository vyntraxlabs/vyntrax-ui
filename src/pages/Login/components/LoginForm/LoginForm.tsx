import { useState } from "react";

import { Button, Input } from "../../../../components";
import { AuthService } from "../../../../services";

import "./LoginForm.css";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setLoading(true);

    const { error } = await AuthService.signIn(email, password);

    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
  }

  return (
    <form className="vyntrax-login-form" onSubmit={handleSubmit}>
      <div className="login-form-fields">
        <Input
          label="Email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          fullWidth
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          fullWidth
        />
      </div>

      {error && <p className="vyntrax-login-error">{error}</p>}

      <div className="login-form-actions">
        <Button type="submit" fullWidth loading={loading}>
          Sign In
        </Button>
      </div>
    </form>
  );
}
