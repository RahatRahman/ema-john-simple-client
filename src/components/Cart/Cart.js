import React from "react";

const Cart = (props) => {
  const cart = props.cart;
  // const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);
  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    const product = cart[i];
    totalPrice = totalPrice + product.price * product.quantity || 1;
  }

  let shipping = 0;
  if (totalPrice > 35) {
    shipping = 0;
  } else if (totalPrice > 15) {
    shipping = 4.99;
  } else if (totalPrice > 0) {
    shipping = 12.99;
  }

  const tax = (totalPrice / 10).toFixed(2);
  const grandTotal = (totalPrice + shipping + Number(tax)).toFixed(2);
  return (
    <div>
      <h4>Order Summary</h4>
      <p>Items ordered: {cart.length}</p>
      <p>Product Price: ${totalPrice.toFixed(2)}</p>
      <p>
        <small>Shipping Cost: ${shipping}</small>
      </p>
      <p>
        <small>Tax + VAT: ${tax}</small>
      </p>
      <p>Total Price: ${grandTotal}</p>
      <br />
      {props.children}
    </div>
  );
};

export default Cart;
