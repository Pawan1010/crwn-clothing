import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import  { CartIconContainer, ItemCount } from './cart-icon.styles.jsx'
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';

const CartIcon = ()  =>{
    const {isCartOpen, setIsCartOpen, cartCount} = useContext(CartContext);
    const toggleisCartOpen = () => setIsCartOpen(!isCartOpen );
    return (
        <CartIconContainer onClick={toggleisCartOpen}>
            <ShoppingIcon className='shopping-icon' />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;