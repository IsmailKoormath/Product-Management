import { ADDSUBCATEGORY_FAIL, ADDSUBCATEGORY_REQUEST, ADDSUBCATEGORY_SUCCESS, GETSUBCATEGORY_FAIL, GETSUBCATEGORY_REQUEST, GETSUBCATEGORY_SUCCESS } from "../ActionTypes";

const initiailState = {
  loding: false,
  error: "",
  subcategory: {},
  getsubcategory: [],
};
const subcategoryReducer = (state = initiailState, action) => {
  switch (action.type) {
    // add category

    case ADDSUBCATEGORY_REQUEST:
      return {
        ...state,
        loding: true,
      };

    case ADDSUBCATEGORY_SUCCESS:
      return {
        ...state,
        loding: false,
        subcategory: action.payload,
      };

    case ADDSUBCATEGORY_FAIL:
      return {
        ...state,
        loding: false,
        error: action.payload,
      };

    // get category

    case GETSUBCATEGORY_REQUEST:
      return {
        ...state,
        loding: true,
      };

    case GETSUBCATEGORY_SUCCESS:
      return {
        ...state,
        loding: false,
        getsubcategory: action.payload,
      };

    case GETSUBCATEGORY_FAIL:
      return {
        ...state,
        loding: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default subcategoryReducer;
