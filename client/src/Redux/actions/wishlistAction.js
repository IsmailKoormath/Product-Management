import {
  ADD_WISHLIST_FAIL,
  ADD_WISHLIST_REQUEST,
  ADD_WISHLIST_SUCCESS,
  GET_WISHLIST_FAIL,
  GET_WISHLIST_REQUEST,
  GET_WISHLIST_SUCCESS,
} from "../ActionTypes";

//ADD wishlist

export const addwishlistRequest = (input) => ({
  type: ADD_WISHLIST_REQUEST,
  payload: input,
});

export const addwishlistSuccess = (wishlist) => ({
  type: ADD_WISHLIST_SUCCESS,
  payload: wishlist,
});

export const addwishlistFail = (error) => ({
  type: ADD_WISHLIST_FAIL,
  payload: error,
});

// GET all wishlist

export const getwihslistRequest = () => ({
  type: GET_WISHLIST_REQUEST,
  payload: "",
});

export const getwishlistSuccess = (wishlist) => ({
  type: GET_WISHLIST_SUCCESS,
  payload: wishlist,
});

export const getwishlistFail = (error) => ({
  type: GET_WISHLIST_FAIL,
  payload: error,
});


