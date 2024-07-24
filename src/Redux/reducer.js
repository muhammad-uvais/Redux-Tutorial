import {Add_To_Cart , Decrease_From_Cart , EMPTY_CART } from "./constant";

 const cartData = (data = [], action) => {
    switch (action.type) {
        case Add_To_Cart:
            return [action.data, ...data];
        case Decrease_From_Cart:
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