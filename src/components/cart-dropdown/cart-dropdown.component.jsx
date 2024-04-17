import { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { CartContext } from '../../context/cart.context'
import './cart-dropdown.styles.scss'
import Button from '../buttons/button.component'
import CartItem from '../cart-item/cart-item.component'



const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return(
        <div className='cart-dropdown-container' >
            <div className='cart-itmes' >
                {cartItems.length ? (
                cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item}/>
                ))):(
                    <span className='empty-message'>Your Cart is Empty</span>)}
            </div>
            
            <Button onClick={goToCheckoutHandler}>Got to checkout</Button>
            
            
        </div>
    )
}

export default CartDropdown