import React from 'react';
import './Cart.css';

const Cart = (props) => {
    return (
      <div>
        <h4>Order Summary</h4>
        <p>Selected Items: {props.cart.length}</p>
      </div>
    );
};

export default Cart;