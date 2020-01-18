import React, { useState } from "react";
import { TextInput, PasswordInput } from '../../components/inputs';
import { SubmitButton, Button } from '../../components/buttons';
import Form from '../../components/form';
import { OutputError } from '../../components/output';
import { profilesAPI } from '../../services';
import { LOGIN, HOME } from "../../config/routes";
import { Link, Redirect } from "react-router-dom";
import "./Register.css";

export default function Register({onRegister}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState();
  const [redirect, setRedirect] = useState();

  const submit = () => profilesAPI
    .postProfile({email, password})
    .then(user => {
      setRedirect(true);
      onRegister(user);
    })
    .catch(error => error.request.status === 400 ? 
        setError("email already exists!") : 
        setError("request failed, please try again or contact your administrator!")
    );
  const removeErrorAnd = (setValue, value) => {
    setError();
    setValue(value);
  }
  const redirectToHome = () => <Redirect to={HOME} />;
  const render = () => (
    <div className="register">
      <Form title="Registration" onSubmit={submit}>
        <OutputError error={error} />
        <TextInput id="email" placeholder="Email" value={email} onChange={value => removeErrorAnd(setEmail, value)} required />
        <PasswordInput id="password" placeholder="Password" value={password} onChange={value => removeErrorAnd(setPassword, value)} required />
        <SubmitButton label="Register" />
        <Link to={LOGIN}><Button label="Login"/></Link>
      </Form>
    </div>
  );
  return redirect ? redirectToHome() : render();
}