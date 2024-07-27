import { PRODUCT_LIST } from "./constant";

export const productReducer = (data = [] , action) => {
    switch (action.type) {
        case PRODUCT_LIST :
            console.log("Product List" , data)
            return action.data;
            default:
                return data;
    }
}