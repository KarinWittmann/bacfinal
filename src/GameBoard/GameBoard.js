//mouse on und mouse up (get time) statt Button

import React from "react";
import { IoIosCloseCircle } from "react-icons/io";
import "./GameBoard.css";

export default function GameBoard({ onExit, boardClicked, style }) {
  return (
    <div onClick={boardClicked} className={style}>
      <IoIosCloseCircle
        onClick={onExit}
        style={{ fontSize: "2rem" }}
      />
    </div>
  );
}
