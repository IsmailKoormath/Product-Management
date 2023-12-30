import { combineReducers } from "redux";
import userReducer from "./reducers/userReducer";

const RootReducer = combineReducers({
  userReducer,
});

export default RootReducer;