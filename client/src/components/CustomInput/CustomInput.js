import React from 'react'
import "./CustomInput.css"
const CustomInput = ({
  image,
  type,
  placeholder,
  handleChange,
  name
}) => {
  return (
    <div className="customInput">
      <img src={image} alt="icons" />
      <input
        type={type}
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        name={name}
      />
    </div>
  );
};

export default CustomInput