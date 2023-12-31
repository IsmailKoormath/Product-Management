import {
  ADD_WISHLIST_FAIL,
  ADD_WISHLIST_REQUEST,
  ADD_WISHLIST_SUCCESS,
  GET_WISHLIST_FAIL,
  GET_WISHLIST_REQUEST,
  GET_WISHLIST_SUCCESS,
} from "../ActionTypes";

const initiailState = {
  loding: false,
  error: "",
  wishlist: {},
  AllWishlist: [],
};
const wishlistReducer = (state = initiailState, action) => {
  switch (action.type) {

    // add wishlist

    case ADD_WISHLIST_REQUEST:
      return {
        ...state,
        loding: true,
      };

    case ADD_WISHLIST_SUCCESS:
      return {
        ...state,
        loding: false,
        wishlist: action.payload,
      };

    case ADD_WISHLIST_FAIL:
      return {
        ...state,
        loding: false,
        error: action.payload,
      };

    // get all wishlist

    case GET_WISHLIST_REQUEST:
      return {
        ...state,
        loding: true,
      };

    case GET_WISHLIST_SUCCESS:
      return {
        ...state,
        loding: false,
        AllWishlist: action.payload,
      };

    case GET_WISHLIST_FAIL:
      return {
        ...state,
        loding: false,
        error: action.payload,
      };

    

    default:
      return state;
  }
};
export default wishlistReducer;
