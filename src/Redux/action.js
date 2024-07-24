import { Add_To_Cart } from "./constant"
import { Decrease_From_Cart } from "./constant"

export const addToCart = (data) => {
    return {
        type : Add_To_Cart,
        data
    } 
}

export const decreaseFomCart = (data) => {
    return {
        type : Decrease_From_Cart,
        data
    }
}

export const emptyCart = (data) => {
    return {
        type : "EMPTY_CART",
        data
    }
}

