import React, { useEffect, useState } from "react";
import { map } from "lodash";
import "./Sidebar.css";
import arrow from "../../assets/Icons/arrow.svg";
import Dropdown from "../Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getallCategory } from "../../Redux/api/categoryApi";
import { getAllProductsApi } from "../../Redux/api/productApi";

const Sidebar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const { getcategory } = useSelector((state) => ({
    getcategory: state.categoryReducer.getcategory,
  }));


  const handleDropdownToggle = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  const dispatch = useDispatch();

const handleAllCategorie=()=>{
  dispatch(getAllProductsApi({title:'',limit:10}))
}
  useEffect(() => {
    dispatch(getallCategory());
  }, [dispatch]);

  return (
    <div className="sidebar_main">
      <div className="home_container">
        Home <img className="arrow_icon" src={arrow} alt="Arrow" />
      </div>

      <div>
        <p className="categories_text">Categories</p>
        <p onClick={handleAllCategorie} className="allCategories_text">
          All categories
        </p>
        {map(getcategory.category, (category) => (
          <Dropdown
            key={category._id}
            labelText={category.categoryName}
            id={category._id}
            isOpen={openDropdown === category._id}
            onToggle={() => handleDropdownToggle(category._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
