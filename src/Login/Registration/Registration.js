import React, { useState } from "react";
import styles from "./Registration.module.css";
import axios from "../../services/axios";
import { TextInput, PasswordInput } from '../../components/inputs';

export default function RegisterForm({onLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = event => {
    event.preventDefault();
    axios.post("profiles",
        {
          email,
          password
        },
      )
      .then(response => {
        console.log(response);
        onLogin(response.data);
      });
  }

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

  return (
    <div style={wrapper}>
      <div className={styles.container}>
        <h1>Registration </h1>
        <form onSubmit={submit}>
          <TextInput id="email" placeholder="Email" value={email} onChange={setEmail} required />
          <PasswordInput id="password" placeholder="Password" value={password} onChange={setPassword} required />
          <button type="submit" className={styles.Input} id="login-button">Save my Data</button>
        </form>
      </div>
    </div>
  );
}