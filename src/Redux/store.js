import { createStore } from "redux";
import cartData from "./rootReducer";


const store = createStore(cartData)

export default store