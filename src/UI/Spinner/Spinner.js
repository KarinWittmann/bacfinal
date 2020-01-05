import React from "react";
import { FaDog } from "react-icons/fa";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="Spinner">
      <FaDog className="pulsate-fwd" />
    </div>
  );
};

export default Spinner;
