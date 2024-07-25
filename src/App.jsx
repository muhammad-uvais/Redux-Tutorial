import React, { useState } from 'react';
import Navbar from './Components/Navbar';
import Cart from './Components/Cart';
import { addToCart, decreaseFomCart , emptyCart } from './Redux/action';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 100,
      quantity: 1,
      color: 'blue'
    },
    {
      id: 2,
      name: 'Product 2',
      price: 200,
      quantity: 1,
      color: 'red'
    },
    {
      id: 3,
      name: 'Product 3',
      price: 300,
      quantity: 1,
      color: 'green'
    }
  ];

  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  const handleAddToCart = () => {
    dispatch(addToCart(products[selectedProductIndex]));
  };

  return (
    <div>
      <Navbar />
      <select onChange={(e) => setSelectedProductIndex(e.target.value)}>
        {products.map((product, index) => (
          <option key={product.id} value={index}>
            {product.name}
          </option>
        ))}
      </select>
      <button onClick={handleAddToCart}>Add</button>
      <button onClick={() => dispatch(decreaseFomCart(products[selectedProductIndex]))}>Decrease</button>
      <button onClick={() => dispatch(emptyCart())}>Empty Cart</button>
      <Cart />
    </div>
  );
};

export default App;
