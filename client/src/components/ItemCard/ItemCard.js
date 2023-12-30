import React, { useState } from "react";
import "./ItemCard.css";
import heart from "../../assets/Icons/heart-dark.svg";
import laptop from "../../assets/Images/laptop.png";
import { Rating } from "react-simple-star-rating";

const ItemCard = () => {
  const [favourite, setFavourite] = useState(false);
  const [rating, setRating] = useState(0);
  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  const handleFavourite = () => {
    setFavourite(!favourite);
  };

  return (
    <div className="itemCard_main">
      <div
        className={favourite ? "heart_container favourited" : "heart_container"}
        onClick={handleFavourite}
      >
        <img src={heart} alt="Heart" />
      </div>
      <div className="card_image_section">
        <img
          src={laptop}
          alt="Product_Image"
        />
      </div>
      <div className="card_content_section">
        <h4 className="item_name">Tablet as a laptop</h4>
        <h5 className="item_price">$11,70</h5>
        <Rating
          size={25}
          onClick={handleRating}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerMove={onPointerMove}
          /* Available Props */
        />
      </div>
    </div>
  );
};

export default ItemCard;
