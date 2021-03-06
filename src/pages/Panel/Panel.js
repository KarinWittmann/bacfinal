import React, { useState } from "react";
import Slider from "../../Slider/Slider";
import Description from "../../Description/Description";
import descriptions from "./descriptions";
import "./Panel.css";

export default function Panel() {
  const [current, setCurrent] = useState(0);

  /**
   * check if index exceeds > 0 --> reset to 2 else index--
   */
  const leftClickedHandler = () => {
    let currentIndex = current - 1;
    if (currentIndex < 0) {
      setCurrent(2);
    } else {
      setCurrent(currentIndex);
    }
  };
  /**
   * check if index exceeds > 2 --> reset to 0 else index++
   */
  const rightClickedHandler = () => {
    let currentIndex = current + 1;
    if (currentIndex > 3) {
      setCurrent(0);
    } else {
      setCurrent(currentIndex);
    }
  };

  return (
    <div className="Panel">
      <Description description={descriptions[current]} />
      <div className="Unten">
        <Slider
          leftClicked={leftClickedHandler}
          rightClicked={rightClickedHandler}
        />
      </div>
    </div>
  );
};