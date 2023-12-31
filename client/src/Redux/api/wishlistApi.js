import { axiosApi } from "../AxiosMethod";
import {
  addwishlistFail,
  addwishlistRequest,
  addwishlistSuccess,
  getwihslistRequest,
  getwishlistFail,
  getwishlistSuccess,
} from "../actions/wishlistAction";

// add / remove  wishlist

export const managewishlistApi = (productId) => {
  return async (dispatch) => {
    dispatch(addwishlistRequest(productId));
    try {
      const wishList = await axiosApi.post(`/wishlist/new`, {
        productId: productId,
      });
      await dispatch(addwishlistSuccess(wishList.data));
      dispatch(getallwishlistApi());
    } catch (error) {
      console.log(error);
      dispatch(addwishlistFail(error?.response));
    }
  };
};

// get all subcategories

export const getallwishlistApi = () => {
  return async (dispatch) => {
    dispatch(getwihslistRequest());

    try {
      const wishList = await axiosApi.get(`/wishlist/all`);
      dispatch(getwishlistSuccess(wishList.data));
    } catch (error) {
      console.log(error);
      dispatch(getwishlistFail(error?.response));
    }
  };
};
