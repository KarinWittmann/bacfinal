import React, { useState, useContext } from "react";
import styles from "./CreateDog.css";
import { axios, axiosMedia } from "../../services";
import { TextInput } from "../../components/inputs";
import { SubmitButton } from "../../components/buttons";
import UserContext from "../../context/user";
import convertImageName from "./convertImageName";
import Spinner from "../../UI/Spinner/Spinner";

//toDo Css Styling
//Nav rein
// Nur 3 Angelegte Profile zulassen
// Löschesn eines Profils

export default function CreateDog(props) {
  const user = useContext(UserContext);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [image, setImage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const submit = event => {
    setIsLoading(true);
    event.preventDefault();
    createDog();
  };

  const createDog = () => {
    axios
      .post("dogs", { name, age, owner: user })
      .then(response => {
        uploadDogImage(response);
      })
      .catch(error => {
        console.log(error);
        window.alert(error.message);
        setIsLoading(false);
      });
  };

  const uploadDogImage = response => {
    const dog = response.data;
    const imageFileName = convertImageName(dog._id, image.name);
    const imageData = new FormData();
    imageData.append("image", image, imageFileName);
    axiosMedia
      .post("", imageData)
      .then(response => updateDogImage({ dog, imageFileName }))
      .catch(error => {
        console.log("img failed", error);
        setIsLoading(false);
      });
  };

  const updateDogImage = ({ dog, imageFileName }) => {
    axios
      .put(`dogs/${dog._id}`, { image: imageFileName })
      .then(response => {
        setIsLoading(false);
        alert(`Dog ${dog.name} successfully uploaded!`);
        props.history.push("/SelectDog");
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
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

  return isLoading ? (
    <Spinner />
  ) : (
    <div style={wrapper}>
      <div className={styles.container}>
        <h1>Create a new profile for your pet </h1>
        <form onSubmit={submit}>
          <div className="FilePicker">
            <input
              type="file"
              onChange={event => setImage(event.target.files[0])}
            />
          </div>
          <TextInput
            id="name"
            placeholder="your dog's name"
            value={name}
            onChange={setName}
            required
          />
          <TextInput
            id="age"
            placeholder="your dog's age"
            value={age}
            onChange={setAge}
            required
          />
          <SubmitButton />
        </form>
      </div>
    </div>
  );
}
