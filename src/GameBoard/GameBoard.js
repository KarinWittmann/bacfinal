//mouse on und mouse up (get time) statt Button

import React from "react";
import "./GameBoard.css";
import { IoIosCloseCircle } from "react-icons/io";

export default function GameBoard({ exitButtonClicked, boardClicked, style }) {
  return (
    <div onClick={boardClicked} className={style}>
      <IoIosCloseCircle
        onClick={e => {
          e.stopPropagation();
          exitButtonClicked();
        }}
        style={{ fontSize: "2rem" }}
      />
    </div>
  );
}
