import { PRODUCT_LIST } from "./constant"

export const productList = async() => {
    let data = await fetch('https://jsonplaceholder.typicode.com/users')
    data = await data.json()
    console.log(data)
    return{
        type : PRODUCT_LIST,
        data
    }

}