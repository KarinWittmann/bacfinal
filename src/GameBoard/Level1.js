import React, { useState } from "react";
import GameBoard from "./GameBoard";
import { Redirect } from "react-router-dom";
import "./level.css";

//// TODO - exit Button

const element = {
  target: "gameboard-target",
  board: "gameboard-board",
  default: "gameboard"
};

export default function Level1({ onSave }) {
  const [clicked, setClicked] = useState(element.default);
  const [points, setPoints] = useState(0);
  const [clickEnabled, setClickEnabled] = useState(true);
  const [exit, setExit] = useState(false);

  // TODO schnell hintereinander aufs gameboard klicken bugged noch
  const clickedhandler = selectedElement => {
    if (clickEnabled === true) {
      setClickEnabled(false);
      setPoints(points + 1);
      console.log(selectedElement);
      setClicked(selectedElement);
      if (points === 5) {
        alert("Attention your dog is getting fat!");
      }
      setTimeout(() => {
        setClickEnabled(true);
        setClicked(element.default);
      }, 1000);
    }
  };

  const onExit = () => {
    onSave(points);
    setExit(true);
  }

  return exit ? (
    <Redirect to="/" />
  ) : (
    <GameBoard
      style={clicked}
      boardClicked={() => clickedhandler(element.target)}
      onExit={onExit}
    />
  );
}
