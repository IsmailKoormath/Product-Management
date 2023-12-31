import { axiosApi } from "../AxiosMethod";
import {
  AddsubCategoryFail,
  AddsubCategoryRequest,
  AddsubCategorySuccess,
  getAllSubCategoryFail,
  getAllSubCategoryRequest,
  getAllSubCategorySuccess,
  getSubCategoryFail,
  getSubCategoryRequest,
  getSubCategorySuccess,
} from "../actions/subCategoryAction";
// add new subcategory
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

// get all subcategories

export const getallSubCategoryApi = () => {
  return async (dispatch) => {
    dispatch(getAllSubCategoryRequest());

    try {
      const subcategory = await axiosApi.get(`/subcategory/all`);
      console.log(subcategory);
      dispatch(getAllSubCategorySuccess(subcategory.data));
    } catch (error) {
      console.log(error);
      dispatch(getAllSubCategoryFail(error?.response));
    }
  };
};

// get subcategories

export const getSubCategoryApi = (categoryid) => {
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
