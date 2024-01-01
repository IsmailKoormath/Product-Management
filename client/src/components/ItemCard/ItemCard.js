import React, { useState } from "react";
import "./ItemCard.css";
import heart from "../../assets/Icons/heart-dark.svg";
import { Rating } from "react-simple-star-rating";
import { useDispatch } from "react-redux";
import {
  managewishlistApi,
} from "../../Redux/api/wishlistApi";
import { Link } from "react-router-dom";

const ItemCard = ({ product }) => {
  const [favourite, setFavourite] = useState(false);
  const [rating, setRating] = useState(0);

    const dispatch = useDispatch();

  const handleRating = (rate) => {
    setRating(rate);
  };
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  // handle wishlist
  const handleFavourite = (productId) => {
    dispatch(managewishlistApi(productId));
    setFavourite(!favourite);
  };

  return (
    <div className="itemCard_main">
      <div
        className={favourite ? "heart_container favourited" : "heart_container"}
        onClick={(e) => handleFavourite(product._id)}
      >
        <img src={heart} alt="Heart" />
      </div>
      <div className="card_image_section">
        <img src={product?.productImages?.[0]?.url} alt="Product_Image" />
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
          />
        </div>
      </Link>
    </div>
  );
};

export default ItemCard;
