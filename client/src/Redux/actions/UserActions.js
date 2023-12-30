// ------------------sign in--------------//

import { LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCCESS, SIGNUP_FAIL, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "../ActionTypes";

// login actions

export const loginRequest = (input) => ({
  type: LOGIN_REQUEST,
  payload: input,
});

export const loginSuccess = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginFail = (error) => ({
  type: LOGIN_FAIL,
  payload: error.message,
});

// Sign up actions

export const signUPRequest = (input) => ({
  type: SIGNUP_REQUEST,
  payload: input,
});

export const signUPSuccess = (user) => ({
  type: SIGNUP_SUCCESS,
  payload: user,
});

export const signUPFail = (error) => ({
  type: SIGNUP_FAIL,
  payload: error?.message,
});
