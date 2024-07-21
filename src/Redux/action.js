import { Add_To_Cart } from "./constant"
const addToCart = (data) => {
    // console.log("action Called" , data)
    return {
        type : Add_To_Cart,
        data
    } 
}

export default addToCart