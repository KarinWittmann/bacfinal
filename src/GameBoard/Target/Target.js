import React from "react";
import "./target.css";

export default function Target({
  clicked,
  position,
  size = { width: "100px", height: "100px" }
}) {
  return (
    <div
      className="target"
      onTouchStart={clicked}
      style={{
        top: position.y,
        left: position.x,
        width: size.width,
        height: size.height,
        cursor: 'pointer'
      }}
    >
      <img
        src={process.env.PUBLIC_URL + "/targe.png"}
        className="target_image"
        alt=""
      />
    </div>
  );
}
