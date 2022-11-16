import { combineReducers } from "redux";
import { productReducer } from "./productReducer";

const rootReducers = combineReducers({
    allproducts: productReducer
});

export default rootReducers;