// add new subcategory

import { axiosApi } from "../AxiosMethod";
import { AddsubCategoryFail, AddsubCategoryRequest, AddsubCategorySuccess, getSubCategoryFail, getSubCategoryRequest, getSubCategorySuccess } from "../actions/subCategoryAction";

export const addSubCategoryApi = (input) => {
  return async (dispatch) => {
    dispatch(AddsubCategoryRequest(input));

    try {
      const subcategory = await axiosApi.post(`/subcategory/new`, input);
      console.log(subcategory);
      dispatch(AddsubCategorySuccess(subcategory.data));
    } catch (error) {
      console.log(error);
      dispatch(AddsubCategoryFail(error?.response));
    }
  };
};

// get subcategories

export const getallSubCategory = (categoryid) => {
  return async (dispatch) => {
    dispatch(getSubCategoryRequest(categoryid));

    try {
      const subcategory = await axiosApi.get(
        `/subcategory/all?categoryId=${categoryid}`
      );
      console.log(subcategory);
      dispatch(getSubCategorySuccess(subcategory.data));
    } catch (error) {
      console.log(error);
      dispatch(getSubCategoryFail(error?.response));
    }
  };
};
