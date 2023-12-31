import {
  ADDCATEGORY_FAIL,
  ADDCATEGORY_REQUEST,
  ADDCATEGORY_SUCCESS,
  GETCATEGORY_FAIL,
  GETCATEGORY_REQUEST,
  GETCATEGORY_SUCCESS,
} from "../ActionTypes";

//ADD category
export const AddCategoryRequest = (input) => ({
  type: ADDCATEGORY_REQUEST,
  payload: input,
});

export const AddCategorySuccess = (category) => ({
  type: ADDCATEGORY_SUCCESS,
  payload: category,
});

export const AddCategoryFail = (error) => ({
  type: ADDCATEGORY_FAIL,
  payload: error,
});

// GET category

export const getCategoryRequest = (input) => ({
  type: GETCATEGORY_REQUEST,
  payload: input,
});

export const getCategorySuccess = (category) => ({
  type: GETCATEGORY_SUCCESS,
  payload: category,
});

export const getCategoryFail = (error) => ({
  type: GETCATEGORY_FAIL,
  payload: error,
});
