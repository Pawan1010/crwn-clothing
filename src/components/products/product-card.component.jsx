import './product-card.styles.scss'
import Button from '../buttons/button.component';



const ProductCard = ({product}) => {
    const {name, price, imageUrl} = product;

    return (
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}/>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted'>Click to Add</Button>
        </div>
    )
}

export default ProductCard;