import React, { useState } from "react";
import { Redirect} from 'react-router-dom';
import GameBoard from "./GameBoard";
import Target from "./Target/Target";
import "./level.css";

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

export default function Level3({ onSave }) {
  const targetSize = calculateSize();
  const [clicked, setClicked] = useState(element.default);
  const [targetPosition, setTargetPosition] = useState(randomizePosition(targetSize));
  const [exit, setExit] = useState();
  const [points, setPoints] = useState(0);

  const clickedhandler = selectedElement => {
    setTargetPosition(randomizePosition(targetSize));
    setClicked(selectedElement);
    if (selectedElement === element.target) {
      setPoints(points +1);
    }
    setTimeout(() => setClicked(element.default), 1000);
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
        position={targetPosition}
        size={targetSize}
        clicked={() => clickedhandler(element.target)}
      />
    </div>
  );
}
