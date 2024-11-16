import React, { useState } from 'react';
import ProductList from './ProductList';
import Cart from './Cart';
import Checkout from './Checkout';

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter((item) => item.id !== productId));
  };

  return (
    <div>
      <h1>Simple E-commerce Store</h1>
      <ProductList addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <Checkout cartItems={cartItems} />
    </div>
  );
};

export default App;
