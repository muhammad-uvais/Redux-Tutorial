import '../App.css'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const result = useSelector((state) => state.cartData)
  console.log("navbar data", result)
  return (
    <div className='navbar'>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Testimonials</li>
        <li> Cart <span> {result.length} </span></li>
      </ul>
    </div>
  )
}

export default Navbar