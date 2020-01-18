import React, { useState } from "react";
import { TextInput, PasswordInput } from '../../components/inputs';
import { SubmitButton, Button } from '../../components/buttons';
import Form from '../../components/form';
import { profilesAPI } from '../../services';
import { Link, Redirect } from "react-router-dom";
import { REGISTER, HOME } from "../../config/routes";
import { OutputError } from "../../components/output/output";
import "./Login.css";

export default function Login({onLogin}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [redirect, setRedirect] = useState();

  const submit = () => profilesAPI
      .getProfile({email, password})
      .then(user => user ? login(user) : setError("Wrong email or password!"))
      .catch(error => console.log(error));
  const login = user => {
    setRedirect(true);
    onLogin(user);
  };
  const removeErrorAnd = (setValue, value) => {
    setError();
    setValue(value);
  }
  const redirectToHome = () => <Redirect to={HOME} />;
  const render = () => (
    <div className="login">
      <Form onSubmit={submit} title="Login">
        <OutputError error={error} />
        <TextInput id="email" placeholder="Email" value={email} onChange={value => removeErrorAnd(setEmail, value)} required />
        <PasswordInput id="password" placeholder="Password" value={password} onChange={value => removeErrorAnd(setPassword, value)} required />
        <SubmitButton label="Login" />
        <Link to={REGISTER}><Button label="Register"/></Link>
      </Form>
    </div>
  );
  return redirect ? redirectToHome() : render();
};