/* import React, { useState } from "react";
import GameBoard from "./GameBoard";
import Target from "./Target/Target";
import "./level.css";

//// TODO - exit Button
const element = targetSize => ({
  target: "gameboard-target",
  board: "gameboard-board",
  default: "gameboard"
});

const hasSmallScreen = () =>
  window.innerWidth <= 500 || window.innerHeight <= 500;
const calculateSize = () =>
  hasSmallScreen() ? { width: 100, height: 100 } : { width: 200, height: 200 };

export default function Level2() {
  const targetSize = calculateSize();
  const [clicked, setClicked] = useState(element.default);
  const [targetPosition, setTargetPosition] = useState(targetSize);

  const clickedhandler = selectedElement => {
    console.log(selectedElement);
    setTargetPosition(targetSize);
    setClicked(selectedElement);
    setTimeout(() => setClicked(element.default), 1000);
  };

  return (
    <div>
      <GameBoard
        style={clicked}
        boardClicked={element => clickedhandler(element.board)}
      />
      <Target
        position={targetPosition}
        clicked={element => clickedhandler(element.target)}
      />
    </div>
  );
} */

import React, { useState, useEffect } from "react";
import GameBoard from "./GameBoard";
import Target from "./Target/Target";
import "./level.css";

//// TODO - exit Button

const element = {
  target: "gameboard-target",
  board: "gameboard-board",
  default: "gameboard"
};

export default function Level2() {
  const [clicked, setClicked] = useState(element.default);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [pictureSize, setPictureSize] = useState({ width: 200, height: 200 });
  const handleResize = () => {
    console.log("Resized to: ", window.innerWidth, window.innerHeight);
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
    setPictureSize(calculateSize);
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const hasSmallScreen = () => windowWidth <= 500 || windowHeight <= 500;

  const calculateSize = () =>
    hasSmallScreen()
      ? { width: 100, height: 100 }
      : { width: 200, height: 200 };

  const clickedhandler = selectedElement => {
    console.log(selectedElement);
    setClicked(selectedElement);
    setTimeout(() => setClicked(element.default), 1000);
  };

  return (
    <div>
      <GameBoard
        style={clicked}
        boardClicked={() => clickedhandler(element.board)}
      />
      <Target
        position={{ x: "50%", y: "50%" }}
        clicked={() => clickedhandler(element.target)}
        size={pictureSize}
      />
    </div>
  );
}
