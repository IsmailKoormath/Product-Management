import { ADDCATEGORY_FAIL, ADDCATEGORY_REQUEST, ADDCATEGORY_SUCCESS, CATEGORY_FAIL, CATEGORY_REQUEST, CATEGORY_SUCCESS } from "../ActionTypes";

const initiailState = {
  loding: false,
  error: "",
  category: {},
};
const categoryReducer = (state = initiailState, action) => {
  switch (action.type) {
    // signup

    case ADDCATEGORY_REQUEST:
      return {
        ...state,
        loding: true,
      };

    case ADDCATEGORY_SUCCESS:
      return {
        ...state,
        loding: false,
        category: action.payload,
      };

    case ADDCATEGORY_FAIL:
      return {
        ...state,
        loding: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
export default categoryReducer