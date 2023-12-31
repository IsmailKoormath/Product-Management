import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import categoryReducer from "./reducers/categoryReducer";
import subcategoryReducer from "./reducers/subCategoryReducer";
import productReducer from "./reducers/productReducer";
import wishlistReducer from "./reducers/wishListReducer";

const RootReducer = combineReducers({
  userReducer,
  categoryReducer,
  subcategoryReducer,
  productReducer,
  wishlistReducer,
});

export default RootReducer;