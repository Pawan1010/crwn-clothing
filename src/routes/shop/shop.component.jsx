import { useContext } from "react";

import { ProductContext } from "../../context/products.context";
import ProductCard from "../../components/products/product-card.component";

import './shops.styles.scss'

const Shop = () => {
    const {products} = useContext(ProductContext)
    return (
        <div className="products-container">
            {products.map((product) => (
                <ProductCard key ={product.id} product={product}/>
            ))}
        </div>
    )
}

export default Shop;
