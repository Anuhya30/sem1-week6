import React from "react";
import "./ProductCard.css";

const ProductCard = ({ name, price, description }) => {
  return (
    <div className="product-card">
      <h2 className="product-name">{name}</h2>
      <p className="product-price">${price}</p>
      <p className="product-description">{description}</p>
    </div>
  );
};

export default ProductCard;
