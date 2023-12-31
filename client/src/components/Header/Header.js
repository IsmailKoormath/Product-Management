import React, { useEffect, useState } from "react";
import "./Header.css";
import heart from "../../assets/Icons/heart-white.svg";
import cart from "../../assets/Icons/shopping-cart.svg";
import { Link } from "react-router-dom";
import WishList from "../WishList/WishList";
import { useDispatch, useSelector } from "react-redux";
import { getAllProductsApi } from "../../Redux/api/productApi";
import { getallwishlistApi } from "../../Redux/api/wishlistApi";

const Header = () => {
  const [showWishlist, setShowWishlist] = useState(false);
  const [title, setTitle] = useState("");

  const { AllWishlist } = useSelector((state) => state.wishlistReducer);
 let length = AllWishlist?.wishList?.length;
console.log(length);

  const dispatch = useDispatch();

  const handleShowwishlist = () => {
    setShowWishlist(!showWishlist);
  };
  const handleSearchProduct = (e) => {
    e.preventDefault()
    dispatch(getAllProductsApi({title}));
  };

  return (
    <>
      <header className="header_main">
        <form action="" className="search_form">
          <input
            onChange={(e) => setTitle(e.target.value)}
            type="search"
            className="search_input"
            placeholder="Serach any things"
          />
          <button onClick={handleSearchProduct} className="search_btn">
            Search
          </button>
        </form>
        <div className="second_section">
          <div className="icon_container" onClick={handleShowwishlist}>
            <img className="icon_image" src={heart} alt="Heart" />
            <div className="count">{length}</div>
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
      {showWishlist && <WishList handleCancel={handleShowwishlist} />}
    </>
  );
};

export default Header;
