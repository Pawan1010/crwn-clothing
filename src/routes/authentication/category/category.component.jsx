import { Fragment, useContext, useEffect, useState } from 'react'
import './category.styles.scss'
import { useParams } from 'react-router'
import { CategoriesContext } from '../../../context/categories.context';
import ProductCard from '../../../components/products/product-card.component';

const Category = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext)
    const [products, setProducts] = useState(categoriesMap[category]);

    useEffect (()=> {
        setProducts(categoriesMap[category])
    }, [category, categoriesMap])

    return (
        <Fragment>
            <h2 className='category-title'>{category.toUpperCase()}</h2>
        <div className='category-container'>
            
            {
            products && products.map((product) => <ProductCard key ={products.id} product={product}/>)
            }
        </div>
        </Fragment>
        
    )

}

export default Category;