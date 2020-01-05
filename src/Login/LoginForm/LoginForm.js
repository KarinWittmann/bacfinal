import React, { useState } from "react";
import { TextInput, PasswordInput } from '../../components/inputs';
import axios from "../../services/axios";
import styles from "./LoginForm.module.css";

export default function Login({onLogin, onRegister}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = event => {
    event.preventDefault();
    axios.get("/profiles", {
        params: {
          q: {
            "email": email,
            "password": password
          }
        }
      })
      .then(response => {
        console.log(response.data);
        if (response.data.length > 0) {
          onLogin(response.data);
        } else {
          alert("benutzername oder passwort falsch");
        }
      })
      .catch(error => console.log(error));
  };

  const wrapper = {
    position: "absolute",
    width: "100%",
    height: "100%",
    marginTop: "0",
    overflow: "hidden",
    textAlign: "center",
    backgroundColor: "rosybrown",
    display: "flex",
    flexFlow: "column",
    alignItems: "center",
    justifyContent: "center"
  };
  const button = {
    appearance: "none",
    outline: "0",
    backgroundColor: "white",
    border: "0",
    padding: "10px 15px",
    marginTop: "15px",
    color: "#50a3a2",
    borderRadius: "3px",
    width: "250px",
    cursor: "pointer",
    fontSize: "18px",
    transitionDuration: "0.25s",
    boxShadow: "6px 6px 10px hsla(300,15%,25%,0.3) inset"
  };

  return (
    <div style={wrapper}>
      <div className={styles.container}>
        <h1>Welcome</h1>
        <form onSubmit={submit}>
          <TextInput id="email" placeholder="Email" value={email} onChange={setEmail} required />
          <PasswordInput id="password" placeholder="Password" value={password} onChange={setPassword} required />
          <button type="submit" className={styles.Input} id="login-button">Login</button>
        </form>
      </div>
      <button style={button} className="register-button" id="register-button" onClick={onRegister}>
        Register
      </button>
    </div>
  );
};