import React, { useState } from "react";
import "./ItemCard.css";
import heart from "../../assets/Icons/heart-dark.svg";
import laptop from "../../assets/Images/laptop.png";
import { Rating } from "react-simple-star-rating";
import { useDispatch } from "react-redux";
import {
  getallwishlistApi,
  managewishlistApi,
} from "../../Redux/api/wishlistApi";
import { Link } from "react-router-dom";

const ItemCard = ({ product }) => {
  const [favourite, setFavourite] = useState(false);
  const [rating, setRating] = useState(0);

  const handleRating = (rate) => {
    setRating(rate);
  };
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  const dispatch = useDispatch();

  const handleFavourite = (e, productId) => {
    e.preventDefault();
    dispatch(managewishlistApi(productId));
    setFavourite(!favourite);
  };

  return (
    <div className="itemCard_main">
      <div
        className={favourite ? "heart_container favourited" : "heart_container"}
        onClick={(e) => handleFavourite(e)}
      >
        <img src={heart} alt="Heart" />
      </div>
      <div className="card_image_section">
        <img src={product?.productImages[0]?.url} alt="Product_Image" />
      </div>
      <Link to={`/productdetails/${product._id}`}>
        <div className="card_content_section">
          <h4 className="item_name">{product.title}</h4>
          <h5 className="item_price">${product.price}</h5>
          <Rating
            size={25}
            onClick={handleRating}
            onPointerEnter={onPointerEnter}
            onPointerLeave={onPointerLeave}
            onPointerMove={onPointerMove}
            /* Available Props */
          />
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;
