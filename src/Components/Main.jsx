import React , {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addToCart, decreaseFomCart, emptyCart } from '../Redux/action';
import { useSelector } from 'react-redux';
import Cart from './Cart';
import { productList } from '../Redux/productAction';

const Main = () => {
    const dispatch = useDispatch();
    const data = useSelector((state) => state.productReducer);
    console.log(data)
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
      <button onClick={() => dispatch(productList())}>Product List</button>
      <Cart />
    </div>
  )
}

export default Main