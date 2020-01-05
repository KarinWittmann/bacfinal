import React, { useState, useEffect } from "react";
import GameBoard from "./GameBoard";
import Target from "./Target/Target";
import { Redirect } from "react-router-dom";
import "./level.css";

const element = {
  target: "gameboard-target",
  board: "gameboard-board",
  default: "gameboard"
};

export default function Level2({ onSave }) {
  const [clicked, setClicked] = useState(element.default);
  const [points, setPoints] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [pictureSize, setPictureSize] = useState({ width: 200, height: 200 });
  const [exit, setExit] = useState();
  
  useEffect(() => {
    const handleResize = () => {
      console.log("Resized to: ", window.innerWidth, window.innerHeight);
      setWindowWidth(window.innerWidth);
      setWindowHeight(window.innerHeight);
      setPictureSize(calculateSize);
    };
    const calculateSize = () => hasSmallScreen() ? { width: 100, height: 100 } : { width: 200, height: 200 };
    const hasSmallScreen = () => windowWidth <= 500 || windowHeight <= 500;
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth, windowHeight]);


  const clickedhandler = selectedElement => {
    console.log(selectedElement);
    setClicked(selectedElement);
    setTimeout(() => setClicked(element.default), 1000);
    if (selectedElement === element.target) {
      setPoints(points +1);
    }
  };

  const onExit = () => {
    onSave(points);
    setExit(true);
  }

  return exit ? (
    <Redirect to="/" />
  ) : (
    <div>
      <GameBoard
        style={clicked}
        boardClicked={() => clickedhandler(element.board)}
        onExit={onExit}
      />
      <Target
        position={{ x: "50%", y: "50%" }}
        clicked={() => clickedhandler(element.target)}
        size={pictureSize}
      />
    </div>
  );
}
