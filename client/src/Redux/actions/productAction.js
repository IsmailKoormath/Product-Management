import { ADD_PRODUCT_FAIL, ADD_PRODUCT_REQUEST, ADD_PRODUCT_SUCCESS, EDIT_PRODUCTS_REQUEST, EDIT_PRODUCT_FAIL, EDIT_PRODUCT_SUCCESS, GET_ALLPRODUCTS_REQUEST, GET_ALLPRODUCTS_WITH_SUBCATEGORY_REQUEST, GET_ALLPRODUCT_FAIL, GET_ALLPRODUCT_SUCCESS, GET_ALLPRODUCT_WITH_SUBCATEGORY_FAIL, GET_ALLPRODUCT_WITH_SUBCATEGORY_SUCCESS, GET_PRODUCTS_REQUEST, GET_PRODUCT_FAIL, GET_PRODUCT_SUCCESS } from "../ActionTypes";

//ADD product
export const addProductRequest = (input) => ({
  type: ADD_PRODUCT_REQUEST,
  payload: input,
});

export const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

export const addProductFail = (error) => ({
  type: ADD_PRODUCT_FAIL,
  payload: error,
});

// GET all products

export const getProductRequest = (input) => ({
  type: GET_ALLPRODUCTS_REQUEST,
  payload: input,
});

export const getProductSuccess = (products) => ({
  type: GET_ALLPRODUCT_SUCCESS,
  payload: products,
});

export const getProductFail = (error) => ({
  type: GET_ALLPRODUCT_FAIL,
  payload: error,
});
// GET all products with subcategory

export const getProductwishSubCategoryRequest = (input) => ({
  type: GET_ALLPRODUCTS_WITH_SUBCATEGORY_REQUEST,
  payload: input,
});

export const getProductwishSubCategorySuccess = (products) => ({
  type: GET_ALLPRODUCT_WITH_SUBCATEGORY_SUCCESS,
  payload: products,
});

export const getProdgetProductwishSubCategoryFailuctFail = (error) => ({
  type: GET_ALLPRODUCT_WITH_SUBCATEGORY_FAIL,
  payload: error,
});

// GET sigle product

export const singleProductRequest = (input) => ({
  type: GET_PRODUCTS_REQUEST,
  payload: input,
});

export const singleProductSuccess = (product) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: product,
});

export const singleProductFail = (error) => ({
  type: GET_PRODUCT_FAIL,
  payload: error,
});

// Edit product

export const editProductRequest = (input) => ({
  type: EDIT_PRODUCTS_REQUEST,
  payload: input,
});

export const editProductSuccess = (product) => ({
  type: EDIT_PRODUCT_SUCCESS,
  payload: product,
});

export const editProductFail = (error) => ({
  type: EDIT_PRODUCT_FAIL,
  payload: error,
});