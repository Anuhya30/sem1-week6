import React from "react";
import ProductCard from "./ProductCard";

const App = () => {
  return (
    <div>
      <h1>Product List</h1>
      <ProductCard
        name="Wireless Headphones"
        price={99.99}
        description="High-quality wireless headphones with noise cancellation."
      />
      <ProductCard
        name="Smartphone"
        price={699.99}
        description="Latest generation smartphone with advanced features."
      />
      <ProductCard
        name="Laptop"
        price={1299.99}
        description="Powerful laptop with a sleek design and long battery life."
      />
    </div>
  );
};

export default App;
