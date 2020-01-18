import React from "react";
import { FaDog } from "react-icons/fa";
import "./Spinner.css";

export default function Spinner() {
  return (
    <div className="Spinner">
      <FaDog className="pulsate-fwd" />
    </div>
  );
};
