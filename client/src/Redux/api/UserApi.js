

import axios from "axios";
import { BASICURL } from "../AxiosMethod";
import { loginFail, loginRequest, loginSuccess, signUPFail, signUPRequest, signUPSuccess } from "../actions/UserActions";


// ------sign up api-----------------//
export const signUpApi = (input, navigate) => {
  return async (dispatch) => {
    dispatch(signUPRequest(input));

    try {
      const user = await axios.post(`${BASICURL}/api/user/signup`, input);
      console.log(user);
      if (user?.status === 201) {
        dispatch(signUPSuccess(user.data));
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      dispatch(signUPFail(error?.response?.data));
    }
  };
};

//-----------------------------------//

//---- sign in api------------------//

export const loginApi = (input, navigate) => {
  return async (dispatch) => {
    dispatch(loginRequest(input));

    try {
      const user = await axios.post(`${BASICURL}/api/user/login`, input);
      if (user?.data?.token) {
        sessionStorage.setItem("token", user?.data?.token);
        dispatch(loginSuccess(user.data));
        navigate("/home");
      }
    } catch (error) {
      dispatch(loginFail(error?.response?.data));
    }
  };
};
//------------------------------------------