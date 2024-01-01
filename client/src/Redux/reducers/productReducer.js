import {
  ADD_PRODUCT_FAIL,
  ADD_PRODUCT_REQUEST,
  ADD_PRODUCT_SUCCESS,
  EDIT_PRODUCTS_REQUEST,
  EDIT_PRODUCT_FAIL,
  EDIT_PRODUCT_SUCCESS,
  GET_ALLPRODUCTS_REQUEST,
  GET_ALLPRODUCT_FAIL,
  GET_ALLPRODUCT_SUCCESS,
  GET_PRODUCTS_REQUEST,
  GET_PRODUCT_FAIL,
  GET_PRODUCT_SUCCESS,
} from "../ActionTypes";

const initiailState = {
  loding: false,
  error: "",
  product: {},
  AllProducts: [],
  singleProduct: {},
};
const productReducer = (state = initiailState, action) => {
  switch (action.type) {
    // add product

    case ADD_PRODUCT_REQUEST:
      return {
        ...state,
        loding: true,
      };

    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loding: false,
        product: action.payload,
      };

    case ADD_PRODUCT_FAIL:
      return {
        ...state,
        loding: false,
        error: action.payload,
      };

    // get all products

    case GET_ALLPRODUCTS_REQUEST:
      return {
        ...state,
        loding: true,
      };

    case GET_ALLPRODUCT_SUCCESS:
      return {
        ...state,
        loding: false,
        AllProducts: action.payload,
      };

    case GET_ALLPRODUCT_FAIL:
      return {
        ...state,
        loding: false,
        error: action.payload,
      };

    // get single products

    case GET_PRODUCTS_REQUEST:
      return {
        ...state,
        loding: true,
      };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        loding: false,
        singleProduct: action.payload,
      };

    case GET_PRODUCT_FAIL:
      return {
        ...state,
        loding: false,
        error: action.payload,
      };

    // edit product

    case EDIT_PRODUCTS_REQUEST:
      return {
        ...state,
        loding: true,
      };

    case EDIT_PRODUCT_SUCCESS:
      return {
        ...state,
        loding: false,
        singleProduct: action.payload,
      };

    case EDIT_PRODUCT_FAIL:
      return {
        ...state,
        loding: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default productReducer;
