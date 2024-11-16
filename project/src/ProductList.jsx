import React from 'react';
import ProductItem from './ProductItem';

const products = [
  { id: 1, name: 'Laptop', price: 1000 },
  { id: 2, name: 'Smartphone', price: 800 },
  { id: 3, name: 'Headphones', price: 200 },
];

const ProductList = ({ addToCart }) => {
  return (
    <div>
      <h1>Product Catalog</h1>
      <div className="product-list">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
