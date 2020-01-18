import React, { useState, useContext } from "react";
import GameBoard from "./GameBoard";
import { Redirect } from "react-router-dom";
import { scoresAPI } from "../services/services";
import { HOME } from "../config/routes";
import "./level.css";
import Context from "../context";

const element = {
  target: "gameboard-target",
  board: "gameboard-board",
  default: "gameboard"
};

export default function Level1() {
  const dog = useContext(Context).dog;
  const [clicked, setClicked] = useState(element.default);
  const [hits, setHits] = useState(0);
  const [clickEnabled, setClickEnabled] = useState(true);
  const [redirect, setRedirect] = useState();

  // TODO schnell hintereinander aufs gameboard klicken bugged noch
  const clickedhandler = selectedElement => {
    if (clickEnabled === true) {
      setClickEnabled(false);
      setHits(hits + 1);
      console.log(selectedElement);
      setClicked(selectedElement);
      if (hits === 5) {
        alert("Attention your dog is getting fat!");
      }
      setTimeout(() => {
        setClickEnabled(true);
        setClicked(element.default);
      }, 1000);
    }
  };

  const onExit = () => {
    scoresAPI.save({dog, hits, fails:0, level:1 });
    setRedirect(true);
  }

  return redirect ? <Redirect to={HOME} /> : (
    <GameBoard
      style={clicked}
      boardClicked={() => clickedhandler(element.target)}
      onExit={onExit}
    />
  );
}
