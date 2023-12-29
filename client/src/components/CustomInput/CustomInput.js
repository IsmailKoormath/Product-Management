import React from 'react'
import "./CustomInput.css"
const CustomInput = ({image,type,placeholder}) => {
  return (
    <div className='customInput'>
      <img src={image} alt="icons" />
      <input type={type} placeholder={placeholder} />
    </div>
  );
}

export default CustomInput