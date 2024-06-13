import './category-menu.style.scss'
import CategoryItem from '../directory/directory-item.components'

const CategoryMenu = ({categories}) => {
    return (
        <div className="categories-container">
        {categories.map((category) => (
        <CategoryItem key={category.id} category={category}/>
        ))}
      </div>
    )
}

export default CategoryMenu 