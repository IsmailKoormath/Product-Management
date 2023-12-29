import React from "react";
import "./AddButton.css";

const AddButton = ({onClick}) => {
  return <button className="AddButton" onClick={onClick}>add</button>;
};

export default AddButton;
