import {
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  SIGNUP_FAIL,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
} from "../ActionTypes";

const initiailState = {
  loding: false,
  error: "",
  loginerror: "",
  userDetails: [],
};
const userReducer = (state = initiailState, action) => {
  switch (action.type) {
    // signup

    case SIGNUP_REQUEST:
      return {
        ...state,
        loding: true,
      };

    case SIGNUP_SUCCESS:
      return {
        ...state,
        loding: false,
        userDetails: action.payload,
      };

    case SIGNUP_FAIL:
      return {
        ...state,
        loding: false,
        error: action.payload,
      };

    // login

    case LOGIN_REQUEST:
      return {
        ...state,
        loding: true,
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        loding: false,
        userDetails: action.payload,
      };

    case LOGIN_FAIL:
      return {
        ...state,
        loding: false,
        loginerror: action.payload,
      };

    default:
      return state;
  }
};
export default userReducer;
