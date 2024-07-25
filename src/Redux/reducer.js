import { ADD_TO_CART, DECREASE_FROM_CART, EMPTY_CART } from "./constant";

const cartData = (data = [], action) => {
    switch (action.type) {
        case ADD_TO_CART:
            return [action.data, ...data];
        case DECREASE_FROM_CART:
            // return data.length > 0 ? data.slice(0, -1) : data;
            data.length = data.length ? data.length - 1 : []
            return [...data]
        case EMPTY_CART:
            data = []
            return [...data];
        default:
            return data;
    }


    // if(action.type === Add_To_Cart){
    // console.log("reducer called" , action)
    // return action.data;
    // }else{
    //     return "no action type matched"
    // }
}
export default cartData