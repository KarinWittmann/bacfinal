import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Spinner from "../../UI/Spinner/Spinner";
import Context from '../../context';
import { dogsAPI } from '../../services';
import DogProfile from "./DogProfile";
import "./SelectDog.css";

export default function SelectDog({setSelectedDog}) {
  const context = useContext(Context);
  const [dogs, setDogs] = useState();

  useEffect(() => { dogsAPI.getDogs(context.user).then(data => setDogs(data)) }, [context.user]);

  const confirmDelete = dog => {
    if (window.confirm(`Are you sure you wish to delete ${dog.name}?`)) {
      dogsAPI.deleteDog(dog).then(() => removeDog(dog));
    }
  };
  const removeDog = deletedDog => setDogs(dogs.filter(dog => dog._id !== deletedDog._id));
  const isSelected = dog => context.dog && dog._id === context.dog._id;

  return dogs ? (
    <div className="dog-selection">
      <div className="ProfileHeading">
        <h1>Pick a Dog first</h1>
      </div>
      <div className="Wrapper">
        {dogs.map(dog => <Link key={dog._id} to="/">
            <DogProfile
              key={dog._id}
              dog={dog}
              onClick={setSelectedDog}
              pickedForDelete={dog => confirmDelete(dog)}
              selected={isSelected(dog)}
              />
          </Link>
        )}
        <Link to="/createDog">
          <div className="profile">
            <div className="plus">
              <p>Add a profile</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  ) : (
    <Spinner />
  );
}
