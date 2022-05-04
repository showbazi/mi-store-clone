import React from 'react'
import "../styles/ProductReviewCard.css"

const ProductReviewCard = ({image, name, review, price, index}) => {
    return (
        <div className="cardContainer">
            <img src={image} alt={`${index} review`} />
            <h5>{review}</h5>
            <span>{name}</span>
            <b>{price}</b>
        </div>
    )
}

export default ProductReviewCard
