import React, { useState } from "react";
import Slider from "../Slider/Slider";
import Description from "../Description/Description";
import "./Panel.css";
import WithNavbar from "../HOC/withNavbar";

const Panel = props => {
  const [descriptions, setDescriptions] = useState([
    {
      heading: "Beginner",
      text:
        "In this Level the main Display ist gray. As soon as your dog touches the Screen the display turnes green. Please reward your dog with a treat in that case. Have fun"
    },
    {
      heading: "Advanced",
      text:
        "Advanced - In this Level the main Display ist gray with a white target square. As soon as your dog touches the target the display turnes green. Please reward your dog with a treat in that case. Have fun"
    },
    {
      heading: "Expert",
      text:
        "Pro - In this Level the main Display ist gray with a white target square that changes place after each attempt. As soon as your dog touches the target the display turnes green and the target moves to another place. Please reward your dog with a treat. Have fun"
    }
  ]);
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
    if (currentIndex > 2) {
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

export default WithNavbar(Panel);
