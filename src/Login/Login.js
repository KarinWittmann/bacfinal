import React, { useState } from "react";
import LoginForm from "./LoginForm/LoginForm";
import RegisterForm from "./Registration/Registration";

export default function Login({ onLogin }) {
  const [register, setRegister] = useState(false);

  return register ? (
    <RegisterForm onLogin={onLogin} />
  ) : (
    <LoginForm onLogin={onLogin} onRegister={() => setRegister(true)} />
  );
}
