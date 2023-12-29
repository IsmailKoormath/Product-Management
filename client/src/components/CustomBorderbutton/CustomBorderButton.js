import React from 'react'
import "./CustomBorderButton.css"
const CustomBorderButton = ({text}) => {
  return (
    <div>
      <button className="borderLineButton">{text}</button>
    </div>
  )
}

export default CustomBorderButton;