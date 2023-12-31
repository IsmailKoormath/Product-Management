import React, { useEffect, useState } from "react";
import "./WishList.css";
import { map } from "lodash";
import heartIcon from "../../assets/Icons/heart-dark.svg";
import removeIcon from "../../assets/Icons/remove-icon.svg";
import { Rating } from "react-simple-star-rating";
import { useDispatch, useSelector } from "react-redux";
import { getallwishlistApi, managewishlistApi } from "../../Redux/api/wishlistApi";

const WishList = ({ handleCancel }) => {
  const [rating, setRating] = useState(0);
  const { AllWishlist } = useSelector((state) => state.wishlistReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getallwishlistApi());
  }, []);

  console.log("wish",AllWishlist.wishList);
  const removeFromWishlist=(productId)=>{
    dispatch(managewishlistApi(productId));
  }
  const handleRating = (rate) => {
    setRating(rate);

    // other logic
  };
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  const onPointerMove = (value, index) => console.log(value, index);

  return (
    <div className="wishList_main">
      <div className="wishList_body">
        <div className="wishList_header">
          <div className="wishList_heart">
            <img src={heartIcon} alt="Heart Icon" />
          </div>
          <h3 className="wishList_header_text">Items</h3>
          <svg
            onClick={handleCancel}
            className="wishList_header_arrow"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.95019 4.08L15.4702 10.6C16.2402 11.37 16.2402 12.63 15.4702 13.4L8.9502 19.92"
              stroke="#fff"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>

        <div className="wishList_card_container">
          {map(AllWishlist.wishList, (wish) => (
            <div className="wishList_card">
              <div className="wishList_card_image_container">
                <img
                  src={wish?.productId?.productImages?.[0]?.url}
                  alt="Product"
                />
              </div>
              <div>
                <h4 className="wishList_card_text">{wish?.productId?.title}</h4>
                <h5 className="wishList_card_amount_text">
                  ${wish?.productId?.price}
                </h5>
                <Rating
                  size={22}
                  onClick={handleRating}
                  onPointerEnter={onPointerEnter}
                  onPointerLeave={onPointerLeave}
                  onPointerMove={onPointerMove}
                  /* Available Props */
                />
              </div>
              <img
                onClick={() => removeFromWishlist()}
                src={removeIcon}
                alt="Remove Icon"
                className="whishlist_remove_icon"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="wishlistCloser" onClick={handleCancel}></div>
    </div>
  );
};

export default WishList;
