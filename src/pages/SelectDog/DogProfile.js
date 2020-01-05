import React from "react";
import "./DogProfile.css";
import { AiFillCloseSquare } from "react-icons/ai";

const baseURL =
  process.env.MEDIA_URL || "https://targetpractise-3737.restdb.io/media/";

export default function DogProfile({
  pickedForDelete,
  dog,
  onClick,
  selected
}) {
  return (
    <div className={ selected ? "dog-profile dog-profile--selected" : "dog-profile " }>
      <img
        id={dog._id}
        onClick={() => onClick(dog)}
        src={baseURL + dog.image}
        alt={dog.name}
      />
      <AiFillCloseSquare
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          color: "red",
          fontSize: "2rem"
        }}
        onClick={() => pickedForDelete(dog)}
      />
    </div>
  );
}
