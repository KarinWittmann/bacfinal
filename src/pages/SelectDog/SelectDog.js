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

export default function SelectDog(props) {
  const [selectedDog, setSelectedDog] = useState({});
  const [dogs, setDogs] = useState([]);
  const user = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(true);
  let dragging = false;

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("/dogs", {
        params: {
          q: {
            owner: user
          }
        }
      })
      .then(response => {
        console.log(response.data);
        setDogs(response.data);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, [user]);

  const confirmDelete = dog => {
    if (dog) {
      if (window.confirm(`Are you sure you wish to delete ${dog.name}?`)) {
        deleteSelectedDog(dog);
      }
    } else {
      alert("No dog selected!");
    }
  };

  const deleteSelectedDog = dog => {
    axios
      .delete(`/dogs/${dog._id}`)
      .then(response => {
        console.log(response);
        removeDeletedDog(dog);
        alert("Successfully deleted!");
      })
      .catch(error => console.log(error));
  };

  const removeDeletedDog = dog => {
    setDogs(dogs.filter(dogg => dogg !== dog));
    setSelectedDog();
  };

  // map -> läuft this.state.profiles durch und sagt quasi "führe für jedes profile die funktion darunter aus mit dem return"
  // bei map kommt immer ein array raus. undzwar alle elemente die returned worden sind
  // const profiles = this.state.profiles.map(profile => {
  //   return profile.image ? (
  //     <ProfileButton
  //       key={profile._id}
  //       onClick={this.profileButtonHandler}
  //       profilePicture={
  //         "https://targetpractise-3737.restdb.io/media/" + profile.image
  //       }
  //     />
  //   ) : null;
  // });

  return isLoading ? (
    <Spinner />
  ) : (
    <div className="dog-selection">
      <Navigation />
      <div className="ProfileHeading">
        <h1>Pick a Dog</h1>
      </div>
      <div className="Wrapper">
        {dogs.map(dog => {
          return (
            <DogProfile
              key={dog._id}
              dog={dog}
              pickedForDelete={dog => {
                console.log(dog);
                setSelectedDog(dog);
                confirmDelete(dog);
              }}
              picked={() => {
                if (!dragging) props.history.push("/");
              }}
              selected={dog === selectedDog}
            />
          );
        })}
        <Link to="/createDog">
          <div className="profile">
            <div className="plus">
              <p>Add a profile</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
