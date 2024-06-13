import { Routes, Route } from 'react-router-dom'
import CategoriesPreview from "../../components/categories-preview/categories-preview.component"
import Category from '../authentication/category/category.component'
import './shops.styles.scss'



const Shop = () => {

    return (
        <Routes>
            <Route index element={<CategoriesPreview/>}/>
            <Route path=":category" element={<Category/>}/>
        </Routes>
    );
}

export default Shop;
