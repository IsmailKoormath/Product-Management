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
      console.log(product);
      dispatch(addProductSuccess(product.data));
    } catch (error) {
      console.log(error);
      dispatch(addProductFail(error?.response));
    }
  };
};

// get all products

export const getAllProductsApi = (title) => {
  return async (dispatch) => {
    dispatch(getProductRequest());

    try {
      const products = await axiosApi.get(`/product/all?title=${title}`);
      console.log(products);
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
      console.log(product);
      dispatch(singleProductSuccess(product.data));
    } catch (error) {
      console.log(error);
      dispatch(singleProductFail(error?.response));
    }
  };
};
// edit product

export const editProductApi = (productId) => {
  return async (dispatch) => {
    dispatch(editProductRequest(productId));

    try {
      const product = await axiosApi.put(`/product/single/${productId}`);
      console.log(product);
      dispatch(editProductSuccess(product.data));
    } catch (error) {
      console.log(error);
      dispatch(editProductFail(error?.response));
    }
  };
};
