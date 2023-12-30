import React from "react";
import "./Header.css";
import heart from "../../assets/Icons/heart-white.svg";
import cart from "../../assets/Icons/shopping-cart.svg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header_main">
      <form action="" className="search_form">
        <input
          type="search"
          className="search_input"
          placeholder="Serach any things"
        />
        <button className="search_btn">Search</button>
      </form>
      <div className="second_section">
        <div className="icon_container">
          <img className="icon_image" src={heart} alt="Heart" />
          <div className="count">0</div>
        </div>
        <Link to="/">
          {" "}
          <p className="header_text">Sign in</p>
        </Link>
        <div className="icon_container">
          <img className="icon_image" src={cart} alt="Cart" />
          <div className="count">0</div>
        </div>
        <p className="header_text">Cart</p>
      </div>
    </header>
  );
};

export default Header;
