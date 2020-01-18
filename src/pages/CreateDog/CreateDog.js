import React, { useState, useContext } from "react";
import { Redirect } from "react-router-dom";
import Form from '../../components/form/form';
import { TextInput, FileInput } from "../../components/inputs/inputs";
import { SubmitButton } from "../../components/buttons/buttons";
import Context from "../../context/context";
import { dogsAPI } from '../../services'
import { HOME } from "../../config/routes";
import "./CreateDog.css";

export default function CreateDog() {
  const user = useContext(Context).user;
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState();
  const [redirect, setRedirect] = useState();

  const submit = () => dogsAPI
    .postDog({name, age, user, image})
    .then(resp => setRedirect(true));
  const redirectToHome = () => <Redirect to={HOME} />;
  const renderCreateDog = () => (
    <div className="create-dog">
      <Form title="Create a new profile for your dog" onSubmit={submit}>
        <TextInput id="name" placeholder="your dog's name" value={name} onChange={setName} required />
        <TextInput id="age" placeholder="your dog's age" value={age} onChange={setAge} required />
        <FileInput file={image} onChange={setImage} />
        <SubmitButton />
      </Form>
    </div>
  );
  return redirect ? redirectToHome() : renderCreateDog();
}
