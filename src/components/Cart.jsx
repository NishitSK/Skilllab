import React from 'react';
import './Cart.css';

export default function Cart({ cart, setCart }) {
  const handleRemoveFromCart = (cakeToRemove) => {
    setCart(cart.filter(cake => cake.id !== cakeToRemove.id));
  };

  return (
    <div className="cart-page">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        <ul>
          {cart.map((cake, index) => (
            <li key={index} className="cart-item">
              {cake.name} 
              <button onClick={() => handleRemoveFromCart(cake)}>Remove</button>
              
            </li>
          ))}
         
        </ul>
      )}
     
    </div>
  );
}




