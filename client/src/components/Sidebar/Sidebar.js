import React, { useEffect } from "react";
import { map } from "lodash";
import "./Sidebar.css";
import arrow from "../../assets/Icons/arrow.svg";
import Dropdown from "../Dropdown/Dropdown";
import { useDispatch, useSelector } from "react-redux";
import { getallCategory } from "../../Redux/api/categoryApi";

const Sidebar = () => {
  const { getcategory } = useSelector((state) => ({
    getcategory: state.categoryReducer.getcategory,
    getsubcategory: state.subcategoryReducer.getsubcategory,
  }));


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getallCategory());
  }, []);

  return (
    <div className="sidebar_main">
      <div className="home_container">
        Home <img className="arrow_icon" src={arrow} alt="Arrow" />
      </div>

      <div>
        <p className="categories_text">Categories</p>
        <p className="allCategories_text">All categories</p>
        {map(getcategory.category, (category) => (
          <Dropdown
            key={category._id}
            labelText={category.categoryName}
            id={category._id}
          />
        ))}

      </div>
    </div>
  );
};

export default Sidebar;
