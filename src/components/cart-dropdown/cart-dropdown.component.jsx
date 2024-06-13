import { useContext } from 'react'
import { useNavigate } from "react-router-dom"
import { CartContext } from '../../context/cart.context'
import { CartDropdownContainer, EmptyMessage } from './cart-dropdown.styles'
import Button from '../buttons/button.component'
import CartItem from '../cart-item/cart-item.component'



const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    const navigate = useNavigate()

    const goToCheckoutHandler = () => {
        navigate('/checkout')
    }

    return(
        <CartDropdownContainer>
            <CartDropdownContainer >
                {cartItems.length ? (
                cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item}/>
                ))):(
                    <EmptyMessage>Your Cart is Empty</EmptyMessage>)}
            </CartDropdownContainer>
            
            <Button onClick={goToCheckoutHandler}>Got to checkout</Button>
            
            
        </CartDropdownContainer>
    )
}

export default CartDropdown