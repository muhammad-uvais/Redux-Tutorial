import { combineReducers } from "redux";
import cartData  from "./reducer";
import { productReducer } from "./productReducer";

export default combineReducers({ cartData, productReducer})


