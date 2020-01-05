import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "../../services/axios";
import Spinner from "../../UI/Spinner/Spinner";
import Navigation from "../../Navigation/Navigation";
import UserContext from "../../context/user";
import DogProfile from "./DogProfile";
import "./SelectDog.css";

//ToDo
// CSS Styling responsiv

export default function SelectDog({selectedDog, setSelectedDog}) {
  const [dogs, setDogs] = useState();
  const user = useContext(UserContext);

  useEffect(() => {
    axios
      .get("/dogs", {
        params: {
          q: {
            owner: user
          }
        }
      })
      .then(response => setDogs(response.data))
      .catch(error => console.log(error));
  }, [user]);

  const confirmDelete = dog => {
    if (window.confirm(`Are you sure you wish to delete ${dog.name}?`)) {
      axios
        .delete(`/dogs/${dog._id}`)
        .then(() => {
          setDogs(dogs.filter(dogg => dogg !== dog));
          alert("Successfully deleted!");
        })
        .catch(error => console.log(error));
    }
  };

  const isSelected = dog => selectedDog && dog._id === selectedDog._id;

  return dogs ? (
    <div className="dog-selection">
      <Navigation />
      <div className="ProfileHeading">
        <h1>Pick a Dog</h1>
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
