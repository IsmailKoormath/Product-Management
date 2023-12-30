import { axiosApi } from "../AxiosMethod";
import {
  AddCategoryFail,
  AddCategoryRequest,
  AddCategorySuccess,
} from "../actions/categoryActions";

export const addCategory = (input, handleClose) => {
  return async (dispatch) => {
    dispatch(AddCategoryRequest(input));

    try {
      const category = await axiosApi.post(`/category/new`, input);
      console.log(category);
      if (category?.data?.messagge === "successfully added category") {
        dispatch(AddCategorySuccess(category.data));
        handleClose();
      }
    } catch (error) {
      console.log(error);
      dispatch(AddCategoryFail(error?.response));
    }
  };
};
