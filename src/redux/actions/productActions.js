import { SET_PRODUCTS, SELECTED_PRODUCT, REMOVE_SELECTED_PRODUCT } from "..constants/ActionTypes";
import { ActionTypes } from "../constants/action-types";

export const SET_PRODUCTS = (products) => {
    return{
        type: ActionTypes.SET_PRODUCTS,
        payload: products,
    };
};

export const SELECTED_PRODUCT = (product) => {
    return{
        type: ActionTypes.SELECTED_PRODUCT,
        payload: product
    };
};

export const REMOVE_SELECTED_PRODUCT = () => {
    return{
        type: ActionTypes.REMOVE_SELECTED_PRODUCT
    };
};