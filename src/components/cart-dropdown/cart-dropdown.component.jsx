import {useContext} from 'react'

import Button from '../button/button.component'
import './cart-dropdown.styles.scss'
import CartItem from '../cart-item/cart-item.component'

import { CartContext } from '../../contexts/cart.context'
import { Link, useNavigate } from 'react-router-dom'


const CartDropdown = () => {

    const navigate = useNavigate();

    const goToCheckoutHanndler = () => {
        navigate('/checkout')
    }
    const {cartItems} = useContext(CartContext)
    return(
<div className='cart-dropdown-container'>
<div className='cart-items'>
{cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
</div>


<Button onClick={goToCheckoutHanndler} >GO TO CHECKOUT</Button>


</div>
    )
}

export default CartDropdown