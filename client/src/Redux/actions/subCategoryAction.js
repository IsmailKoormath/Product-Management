import {
  ADDSUBCATEGORY_FAIL,
  ADDSUBCATEGORY_REQUEST,
  ADDSUBCATEGORY_SUCCESS,
  GETSUBCATEGORY_FAIL,
  GETSUBCATEGORY_REQUEST,
  GETSUBCATEGORY_SUCCESS,
} from "../ActionTypes";

//ADD subcategory
export const AddsubCategoryRequest = (input) => ({
  type: ADDSUBCATEGORY_REQUEST,
  payload: input,
});

export const AddsubCategorySuccess = (subcategory) => ({
  type: ADDSUBCATEGORY_SUCCESS,
  payload: subcategory,
});

export const AddsubCategoryFail = (error) => ({
  type: ADDSUBCATEGORY_FAIL,
  payload: error,
});

// get subcategories

export const getSubCategoryRequest = (input) => ({
  type: GETSUBCATEGORY_REQUEST,
  payload: input,
});

export const getSubCategorySuccess = (subcategory) => ({
  type: GETSUBCATEGORY_SUCCESS,
  payload: subcategory,
});

export const getSubCategoryFail = (error) => ({
  type: GETSUBCATEGORY_FAIL,
  payload: error,
});
