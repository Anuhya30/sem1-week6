import React from 'react';

const Checkout = ({ cartItems }) => {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. Please add some items to checkout.</p>
      ) : (
        <div>
          <h3>Total: ${total}</h3>
          <button>Complete Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
