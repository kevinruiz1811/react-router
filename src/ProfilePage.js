import React from "react";
import { useAuth } from "./auth";

function ProfilePage() {
  const auth = useAuth();

  return (
    <>
      <h1>¡Bienvenido!</h1>
      <p>Usuario {auth.user?.username}</p>
    </>
  );
}

export { ProfilePage };
