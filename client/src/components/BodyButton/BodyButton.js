import React from "react";
import "./BodyButton.css";

const BodyButton = ({text,borderRadius,fontSize,onClick}) => {
  return (
    <div
      className="bodyButton_main"
      style={{ borderRadius: borderRadius, fontSize: fontSize }}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

export default BodyButton;
