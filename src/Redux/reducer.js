import { ADD_TO_CART, DECREASE_FROM_CART, EMPTY_CART } from "./constant";

const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [action.data, ...data];
        case DECREASE_FROM_CART:
            data.length = data.length ? data.length - 1 : []
            return [...data]
        case EMPTY_CART:
            data = []
            return [...data];
        default:
            return data;
    }
}
export default cartData