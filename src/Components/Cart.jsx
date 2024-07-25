import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
    const result = useSelector((state) => state.cartData)
    // console.log("cartdata" , result)
    return (
        <div className='cart'>
            <h1>CART</h1>
            <p> Price : <span>{result.reduce((total, product) => {
                return total + (product.price * product.quantity)
            }, 0)}</span></p>
        </div>
    )
}

export default Cart