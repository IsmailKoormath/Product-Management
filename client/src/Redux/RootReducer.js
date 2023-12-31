import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import categoryReducer from "./reducers/categoryReducer";
import subcategoryReducer from "./reducers/subCategoryReducer";

const RootReducer = combineReducers({
  userReducer,
  categoryReducer,
  subcategoryReducer,
});

export default RootReducer;