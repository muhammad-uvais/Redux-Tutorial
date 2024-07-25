import { ADD_TO_CART , DECREASE_FROM_CART , EMPTY_CART } from "./constant"

export const addToCart = (data) => {
    return {
        type : ADD_TO_CART,
        data
    } 
}

export const decreaseFomCart = (data) => {
    return {
        type : DECREASE_FROM_CART,
        data
    }
}

export const emptyCart = (data) => {
    return {
        type : EMPTY_CART,
        data
    }
}

