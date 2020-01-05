import React, { useState, useContext } from "react";
import GameBoard from "./GameBoard";
import "./level.css";
import ApiHelper from "../ApiHelper";
import axios from "axios";

//// TODO - exit Button

const element = {
  target: "gameboard-target",
  board: "gameboard-board",
  default: "gameboard"
};

function Level1(props) {
  const [clicked, setClicked] = useState(element.default);
  const [points, setPoints] = useState(0);
  const [clickEnabled, setClickEnabled] = useState(true);

  const exitLevel = () => {
    const level = "Level 1";
    const dog = "pet profilename TODO";
    // TODO statt axios hier aufzurufen, den ApiHelper verwenden. allerdings irgendwie auf das then() vom ApiHelper warten
    axios
      .post(
        "https://targetpractise-3737.restdb.io/rest/scores",
        {
          dog,
          level,
          points
        },
        {
          headers: {
            "content-type": "application/json",
            "x-apikey": "5dc456d464e7774913b6ea11"
          }
        }
      )
      .then(response => {
        // TODO abfrage ob funktioniert hat
        //ApiHelper.addScore("Level 1", "Fixer Name: TODO", points);
        // TODO spinner abdrehen
        props.history.push("/");
      })
      .catch(error => {
        console.log(error);
        props.history.push("/");
      });
  };

  // TODO schnell hintereinander aufs gameboard klicken bugged noch
  const clickedhandler = selectedElement => {
    if (clickEnabled === true) {
      setClickEnabled(false);
      setPoints(points + 1);

      if (points === 3) {
        alert("level abgeschlossen");
        // TODO spinner andrehen
        exitLevel();
      } else {
        console.log(selectedElement);
        setClicked(selectedElement);
        setTimeout(() => {
          setClickEnabled(true);
          setClicked(element.default);
        }, 1000);
      }
    }
  };

  const exitButtonHandler = () => {};
  return (
    <GameBoard
      style={clicked}
      boardClicked={() => clickedhandler(element.target)}
      exitButtonClicked={exitButtonHandler}
    />
  );
}

export default Level1;
