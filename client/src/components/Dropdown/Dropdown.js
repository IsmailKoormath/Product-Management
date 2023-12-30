import React, { useState } from "react";
import "./Dropdown.css";
import arrow from "../../assets/Icons/arrow.svg";

const Dropdown = ({ labelText, options }) => {
  const [show, setShow] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleShowOptions = () => {
    setShow(!show);
  };

  const handleCheckboxChange = (option) => {
    const index = selectedOptions.indexOf(option);
    if (index === -1) {
      setSelectedOptions([...selectedOptions, option]);
    } else {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions.splice(index, 1);
      setSelectedOptions(newSelectedOptions);
    }
  };

  console.log(selectedOptions);

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
            <div key={option} className="checkbox-wrapper-13">
              <input
                type="checkbox"
                id={`checkbox-${option}`}
                checked={selectedOptions.includes(option)}
                onChange={() => handleCheckboxChange(option)}
              />
              <label htmlFor={`checkbox-${option}`}>{option}</label>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Dropdown;