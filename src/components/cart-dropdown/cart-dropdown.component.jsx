import './cart-dropdown.styles.scss'
import Button from '../buttons/button.component'


const CartDropdown = () => {

    return(
        <div className='cart-dropdown-container'>
            <div className='cart-itmes'>

            </div>
            <Button>Got to checkout</Button>
        </div>
    )
}

export default CartDropdown