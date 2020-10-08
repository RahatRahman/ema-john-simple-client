import React, { useEffect } from "react";
import { useState } from "react";
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from "../../utilities/databaseManager";
import ReviewItem from "../ReviewItem/ReviewItem";
import Cart from "../Cart/Cart";
import Image from "../../images/giphy.gif";
import { useHistory } from "react-router-dom";

const Review = () => {
  const [cart, setCart] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const history = useHistory();

  const handleProceedCheckout = () => {
    history.push("/shipment");
    // setCart([]);
    // setOrderPlaced(true);
    // processOrder();
  };

  const removeProduct = (productKey) => {
    const newCart = cart.filter((pd) => pd.key !== productKey);
    setCart(newCart);
    removeFromDatabaseCart(productKey);
  };

  useEffect(() => {
    // cart
    const savedCart = getDatabaseCart();
    const productKeys = Object.keys(savedCart);

    fetch("https://infinite-beach-86171.herokuapp.com/productsByKeys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productKeys),
    })
      .then((res) => res.json())
      .then((data) => setCart(data));
  }, []);

  let thankYou;
  if (orderPlaced) {
    thankYou = <img src={Image} alt="" />;
  }
  return (
    <div className="twin-container">
      <div className="product-container">
        {/* <h1>Cart Items: {cart.length}</h1> */}
        {cart.map((pd) => (
          <ReviewItem product={pd} key={pd.key} removeProduct={removeProduct}></ReviewItem>
        ))}
        {thankYou}
      </div>
      <div className="cart-container">
        <Cart cart={cart}>
          <button onClick={handleProceedCheckout} className="main-button">
            Proceed Checkout
          </button>
        </Cart>
      </div>
    </div>
  );
};

export default Review;
