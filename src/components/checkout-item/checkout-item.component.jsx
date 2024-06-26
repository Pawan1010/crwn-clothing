import { useContext } from 'react'
import {CheckOutItem} from './checkout-item.styles'
import { CartContext } from '../../context/cart.context';

const CheckoutItem =({cartItem}) =>{
    const {name, imageUrl, price, quantity} = cartItem;
    const {clearItemFromCart, addItemToCart, removeItemToCart,}  = useContext(CartContext)
    
    const removeItemHandler = () => removeItemToCart(cartItem)
    const clearItemHandler = () => clearItemFromCart(cartItem)
    const addItemHandler = () => addItemToCart(cartItem)

    return (
        <CheckOutItem>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div onClick={removeItemHandler}  className='arrow'>
                    &#10094;
                </div>
                 <span className='value'>{quantity}</span>
                 <div onClick={addItemHandler} className='arrow'>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div onClick={clearItemHandler} className='remove-button'> &#10005; </div>
        </CheckOutItem>
    )
}

export  default CheckoutItem