import { axiosApi } from "../AxiosMethod";
import {
  addProductFail,
  addProductRequest,
  addProductSuccess,
  editProductFail,
  editProductRequest,
  editProductSuccess,
  getProductFail,
  getProductRequest,
  getProductSuccess,
  singleProductFail,
  singleProductRequest,
  singleProductSuccess,
} from "../actions/productAction";

// add new product

export const addProductApi = (productData) => {
  return async (dispatch) => {
    dispatch(addProductRequest());

    try {
      const product = await axiosApi.post(`/product/create`, productData);
      dispatch(addProductSuccess(product.data));
    } catch (error) {
      console.log(error);
      dispatch(addProductFail(error?.response));
    }
  };
};

// get all products

export const getAllProductsApi = ({ title, currentPage, limitPerPage }) => {
  return async (dispatch) => {
    dispatch(getProductRequest());

    try {
      const products = await axiosApi.get(
        `/product/all?search=${
          title ? title : ""
        }&&page=${currentPage}&&limit=${limitPerPage}`
      );
      dispatch(getProductSuccess(products.data));
    } catch (error) {
      console.log(error);
      dispatch(getProductFail(error?.response));
    }
  };
};
// get single product

export const getSingleProductApi = (productId) => {
  return async (dispatch) => {
    dispatch(singleProductRequest(productId));

    try {
      const product = await axiosApi.get(`/product/single/${productId}`);
      dispatch(singleProductSuccess(product.data));
    } catch (error) {
      console.log(error);
      dispatch(singleProductFail(error?.response));
    }
  };
};
// edit product

export const editProductApi = (productData, productId) => {
  return async (dispatch) => {
    dispatch(editProductRequest(productId));

    try {
      const product = await axiosApi.put(
        `/product/update/${productId}`,
        productData
      );
      dispatch(editProductSuccess(product.data));
    } catch (error) {
      console.log(error);
      dispatch(editProductFail(error?.response));
    }
  };
};
