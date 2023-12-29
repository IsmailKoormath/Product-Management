import React, { useState } from "react";
import "./Dropdown.css";
import arrow from "../../assets/Icons/arrow.svg";

const Dropdown = ({labelText,options}) => {
  const [show, setShow] = useState(false);

  const handleShowOptions = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="dropdown_main" onClick={handleShowOptions}>
        {labelText}
        <img
          src={arrow}
          alt="Arrow"
          className={show ? "rotated_arrow" : "dropdown_arrow"}
        />
      </div>
      {show && (
        <div className="options_container">
          {options?.map((option) => (
            <div class="checkbox-wrapper-13">
              <input id="c1-13" type="checkbox" />
              <label for="c1-13">{option}</label>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Dropdown;
