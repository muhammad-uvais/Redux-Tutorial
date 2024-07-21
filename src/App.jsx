import React from 'react'
import addToCart from './Redux/action'
import { useDispatch } from 'react-redux'
import Navbar from './Components/Navbar'

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
    </div>
     )
}

export default App