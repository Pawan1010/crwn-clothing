import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import './cart-dropdown.styles.scss'
import Button from '../buttons/button.component'
import CartItem from '../cart-item/cart-item.component'

const CartDropdown = () => {
    const {cartItems} = useContext(CartContext)
    return(
        <div className='cart-dropdown-container'>
            <div className='cart-itmes'>
                {cartItems.length ? (
                cartItems.map((item) => (
                <CartItem key={item.id} cartItem={item}/>
                ))):(
                    <span className='empty-message'>Your Cart is Empty</span>)}
            </div>
            <Button>Got to checkout</Button>
        </div>
    )
}

export default CartDropdown