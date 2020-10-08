import React from "react";

const ReviewItem = (props) => {
  // console.log(props.product.quantity);
  const { name, quantity, key, price } = props.product;
  const reviwItemStyle = {
    borderBottom: "1px solid lightgrey",
    marginBottom: "10px",
    marginLeft: "200px",
    paddingBottom: "10px",
    marginRight: "10px",
  };
  return (
    <div style={reviwItemStyle} className="review-item">
      <h4 className="product-name">{name}</h4>
      <p>Quantity: {quantity} </p>
      <p>Product ID: {key}</p>
      <p>
        <small>$ {price}</small>
      </p>
      <button className="main-button" onClick={() => props.removeProduct(key)}>
        Remove
      </button>
    </div>
  );
};

export default ReviewItem;
