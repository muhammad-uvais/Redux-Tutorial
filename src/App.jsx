import React from 'react'
import Navbar from './Components/Navbar'
import { addToCart } from './Redux/action'
import { decreaseFomCart } from './Redux/action'
import { useDispatch } from 'react-redux'
import { emptyCart } from './Redux/action'

const App = () => {
  const dispatch = useDispatch()
  const product = {
    id: 1,
    name: 'Product 1',
    price: 100,
    quantity: 1,
    color: 'blue'
  }
  return (
    <div>
      <Navbar />
      <button onClick={() => dispatch(addToCart(product))}>Add</button>
      <button onClick={() => dispatch(decreaseFomCart(product))}>decrease</button>
      <button onClick={() => dispatch(emptyCart(product))}>empty</button>

    </div>
  )
}

export default App