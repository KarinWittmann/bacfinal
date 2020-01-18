import React, { useState, useContext } from "react";
import { Redirect} from 'react-router-dom';
import GameBoard from "./GameBoard";
import Target from "./Target/Target";
import "./level.css";
import { scoresAPI } from "../services/services";
import Context from "../context/context";

const element = {
  target: "gameboard-target",
  board: "gameboard-board",
  default: "gameboard"
};
const randomizePosition = targetSize => ({
  x: Math.random() * (window.innerWidth - targetSize.width),
  y: Math.random() * (window.innerHeight - targetSize.height)
});
const hasSmallScreen = () =>
  window.innerWidth <= 500 || window.innerHeight <= 500;
const calculateSize = () =>
  hasSmallScreen() ? { width: 100, height: 100 } : { width: 200, height: 200 };

export default function Level3() {
  const dog = useContext(Context).dog;
  const targetSize = calculateSize();
  const [clicked, setClicked] = useState(element.default);
  const [targetPosition, setTargetPosition] = useState(randomizePosition(targetSize));
  const [hits, setHits] = useState(0);
  const [fails, setFails] = useState(0);
  const [redirect, setRedirect] = useState();

  const clickedhandler = selectedElement => {
    setTargetPosition(randomizePosition(targetSize));
    setClicked(selectedElement);
    selectedElement === element.target ? setHits(hits +1) : setFails(fails +1);
    setTimeout(() => setClicked(element.default), 1000);
  };

  const onExit = () => {
    scoresAPI.save({dog, hits, fails, "level":3 });
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
        position={targetPosition}
        size={targetSize}
        clicked={() => clickedhandler(element.target)}
      />
    </div>
  );
}
