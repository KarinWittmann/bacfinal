import React, { useState, useEffect, useContext } from "react";
import GameBoard from "./GameBoard";
import Target from "./Target/Target";
import { Redirect } from "react-router-dom";
import { scoresAPI } from "../services";
import Context from "../context";
import "./level.css";

const element = {
  target: "gameboard-target",
  board: "gameboard-board",
  default: "gameboard"
};

export default function Level2() {
  const dog = useContext(Context).dog;
  const [clicked, setClicked] = useState(element.default);
  const [hits, setHits] = useState(0);
  const [fails, setFails] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [pictureSize, setPictureSize] = useState({ width: 200, height: 200 });
  const [redirect, setRedirect] = useState();

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
    console.log(selectedElement)
    setClicked(selectedElement);
    setTimeout(() => setClicked(element.default), 1000);
    selectedElement === element.target ? setHits(hits + 1) : setFails(fails + 1);
  };

  const onExit = () => {
    scoresAPI.save({ dog, hits, fails, "level": 2 });
    setRedirect(true);
  }

  return redirect ? <Redirect to="/" /> : (
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
