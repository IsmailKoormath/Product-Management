import React from 'react'
import "./CustomColorButton.css"
const CustomColorBotton = ({ text, handleSubmit }) => {
  return (
    <div>
      <button onClick={handleSubmit} className='customcolorbutton'>{text}</button>
    </div>
  )
}

export default CustomColorBotton