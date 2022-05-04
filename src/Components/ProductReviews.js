import React from 'react'
import ProductReviewCard from "./ProductReviewCard.js"
import "../styles/ProductReviews.css"

const ProductReviews = ({productReviews}) => {
    return (
        <div className="productReviews"> 
            {productReviews.map((item, index)=> (
                <ProductReviewCard
                    key = {item.image}
                    image = {item.image}
                    name = {item.name}
                    review = {item.review}
                    price = {item.price}
                    index = {index}
                />
            ))}
        </div>
    )
}

export default ProductReviews
