import React from "react";
import "./Sidebar.css";
import arrow from "../../assets/Icons/arrow.svg";
import Dropdown from "../Dropdown/Dropdown";

const Sidebar = () => {
  return (
    <div className="sidebar_main">
      <div className="home_container">
        Home <img className="arrow_icon" src={arrow} alt="Arrow" />
      </div>

      <div>
        <p className="categories_text">Categories</p>
        <p className="allCategories_text">All categories</p>

        <Dropdown labelText={"Laptop"} options={["HP", "Dell"]} />
        <Dropdown labelText={"Tablet"} options={["HP", "Dell"]} />
        <Dropdown labelText={"Headphones"} options={["HP", "Dell"]} />

      </div>
    </div>
  );
};

export default Sidebar;
