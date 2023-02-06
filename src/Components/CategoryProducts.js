import React from 'react'
import { CartState } from "../Context";
import SingleProduct from "./SingleProduct";

const CategoryProducts = ({ category, idx }) => {
    const { products, categoriesId } = CartState();

    return (
        <div className="product-category">
            <h1 className={idx - 1 === 0 ? 'first-category-header' : ''} id={categoriesId[idx - 1]}>{category} <i className="fa-solid fa-angle-right"></i></h1>
            <div className="product-container">
                {products
                    .filter((item, index) => index >= (idx - 1) * 10 && index < idx * 10)
                    .map((prod) => (
                        <SingleProduct prod={prod} key={prod.id} />
                    ))}
            </div>
        </div>
    )
}

export default CategoryProducts