import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.styles.scss'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartIcon = ()  =>{
    const {isCartOpen, setisCartOpen} = useContext(CartContext);
    const toggleisCartOpen = () => setisCartOpen(!isCartOpen );
    return (
        <div className='cart-icon-container' onClick = {toggleisCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>1</span>
        </div>
    )
}

export default CartIcon;