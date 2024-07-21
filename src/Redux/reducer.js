import { Add_To_Cart } from "./constant";

const cartData = (data = [], action) => {
    switch (action.type) {
        case Add_To_Cart:
            return [action.data, ...data];
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