import React from "react";
import "./AddButton.css";

const AddButton = ({ onClick, text }) => {
  return (
    <button className="AddButton" onClick={onClick}>
      {text}
    </button>
  );
};

export default AddButton;
