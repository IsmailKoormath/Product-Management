import { ADDCATEGORY_FAIL, ADDCATEGORY_REQUEST, ADDCATEGORY_SUCCESS, CATEGORY_FAIL, CATEGORY_REQUEST, CATEGORY_SUCCESS } from "../ActionTypes";

// category
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
