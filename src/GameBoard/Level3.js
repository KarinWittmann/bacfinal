import React, { useState } from "react";
import GameBoard from "./GameBoard";
import Target from "./Target/Target";
import "./level.css";
import { kMaxLength } from "buffer";

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
  const targetSize = calculateSize();
  const [clicked, setClicked] = useState(element.default);
  const [targetPosition, setTargetPosition] = useState(
    randomizePosition(targetSize)
  );

  const clickedhandler = selectedElement => {
    setTargetPosition(randomizePosition(targetSize));
    setClicked(selectedElement);
    setTimeout(() => setClicked(element.default), 1000);
  };

  // const animate = () => {
  //   setTimeout(() => animate(), 1000);
  //   setTargetPosition(randomizePosition(targetSize));
  // }
  return (
    <div>
      <GameBoard
        style={clicked}
        boardClicked={() => clickedhandler(element.board)}
      />
      <Target
        position={targetPosition}
        size={targetSize}
        clicked={() => clickedhandler(element.target)}
      />
    </div>
  );
}
