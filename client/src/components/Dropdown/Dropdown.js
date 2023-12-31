import React, { useState } from "react";
import "./Dropdown.css";
import arrow from "../../assets/Icons/arrow.svg";
import { getSubCategoryApi } from "../../Redux/api/subCategoryApi";
import { useDispatch, useSelector } from "react-redux";
import { map } from "lodash";
import { getAllProductsApi } from "../../Redux/api/productApi";

const Dropdown = ({ labelText, id }) => {
  const [show, setShow] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const { getsubcategory } = useSelector((state) => state.subcategoryReducer)

  const dispatch = useDispatch();

  const handleShowOptions = (id) => {
    dispatch(getSubCategoryApi(id));
    setShow(!show);
  };

  const handleCheckboxChange = (option,subid) => {
    const index = selectedOptions.indexOf(option);
    if (index === -1) {
      setSelectedOptions([...selectedOptions, option]);
       dispatch(getAllProductsApi({ subid }));
    }
     else {
      const newSelectedOptions = [...selectedOptions];
      newSelectedOptions.splice(index, 1);
      setSelectedOptions(newSelectedOptions);
       dispatch(getAllProductsApi({ subid }));
    }
  };

  return (
    <>
      <div className="dropdown_main" onClick={()=>handleShowOptions(id)}>
        {labelText}
        <img
          src={arrow}
          alt="Arrow"
          className={show ? "rotated_arrow" : "dropdown_arrow"}
        />
      </div>
      {show && (
        <div className="options_container">
          {map(getsubcategory?.subcategory,(sub) => (
            <div key={sub._id} className="checkbox-wrapper-13">
              <input
                type="checkbox"
                id={`checkbox-${sub._id}`}
                checked={selectedOptions.includes(sub.subcategoryName)}
                onChange={() => handleCheckboxChange(sub.subcategoryName,sub._id)}
              />
              <label htmlFor={`checkbox-${sub.subcategoryName}`}>
                {sub.subcategoryName}
              </label>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Dropdown;