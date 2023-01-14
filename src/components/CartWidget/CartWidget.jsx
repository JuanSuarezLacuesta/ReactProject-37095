import { Cart } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';

import './CartWidget.css'



function CartWidget() {

  const { totalAmount } = useCartContext()
  
  


  return (
    <Link to='/cart' className='Cart'> 
    {totalAmount() > 0 && totalAmount()}
    <Cart/>
    </Link>)}

export default CartWidget