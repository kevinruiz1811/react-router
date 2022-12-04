import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

function LoginPage() {
  const auth = useAuth();
  const [username, setUsername] = React.useState("");

  const login = (e) => {
    e.preventDefault();
    auth.login({ username });
  };

  if(auth.user){
    <Navigate to="/profile" />
  }

  return (
    <>
      <h1>Login</h1>

      <form onSubmit={login}>
        <label>Escribe tu nombre de usuario</label>
        <input value={username} onChange={(e) => setUsername(e.target.value)} />
        <button type="submit">Iniciar sesión</button>
      </form>
    </>
  );
}

export { LoginPage };
