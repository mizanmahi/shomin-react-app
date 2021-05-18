import React from "react";
import { connect } from "react-redux";

import { addItem, decreaseCartItem } from "../../redux/cart/cart-action";
import { removeCartItem } from "../../redux/cart/cart-action";

import "./checkout-item.style.scss";

const CheckoutItem = ({ item, dispatch }) => {
  const { name, imageUrl, price, quantity, id } = item;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="Product" />
      </div>
      <span className="name">{name}</span>

      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(decreaseCartItem(item))}>
          &#45;
        </div>

        <div className="value">{quantity}</div>

        <div className="arrow" onClick={() => dispatch(addItem(item))}>
          &#43;
        </div>
      </span>

      <span className="price"> {price} </span>
      <div className="remove-button">
        <span onClick={() => dispatch(removeCartItem(id))}>&#10005;</span>
      </div>
    </div>
  );
};

export default connect()(CheckoutItem); // explicitly binds dipatch to the component
