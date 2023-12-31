import { axiosApi } from "../AxiosMethod";
import {
  AddCategoryFail,
  AddCategoryRequest,
  AddCategorySuccess,
  getCategoryFail,
  getCategoryRequest,
  getCategorySuccess,
} from "../actions/categoryActions";

// add new category

export const addCategory = (input) => {
  return async (dispatch) => {
    dispatch(AddCategoryRequest(input));

    try {
      const category = await axiosApi.post(`/category/new`, input);
      console.log(category);
      if (category?.data?.messagge === "successfully added category") {
        dispatch(AddCategorySuccess(category.data));
      }
    } catch (error) {
      console.log(error);
      dispatch(AddCategoryFail(error?.response));
    }
  };
};

// get all categories


export const getallCategory = () => {
  return async (dispatch) => {
    dispatch(getCategoryRequest());

    try {
      const category = await axiosApi.get(`/category/all`,);
      console.log(category);
        dispatch(getCategorySuccess(category.data));
      
    } catch (error) {
      console.log(error);
      dispatch(getCategoryFail(error?.response));
    }
  };
};