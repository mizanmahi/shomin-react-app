import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-items/cart-itmes.component";
import { withRouter } from 'react-router-dom';

import { selectCartItems } from "../../redux/cart/cart-selector";

import { createStructuredSelector } from "reselect";

import { toggleCart } from '../../redux/cart/cart-action';

import "./cart-dropdown.style.scss";

const CartDropdown = ({ items, history, toggleCart }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
          {items.length
            ? items.map((item) => {
                return <CartItem key={item.id} item={item} />;
            })
            : <span className='empty-message'>Your Cart Item Is Empty</span>
          }
        </div>

      <CustomButton onClick={() => {
        history.push('/checkout');
        toggleCart()
      }} > GO TO CHECKOUT </CustomButton>
    </div>
  );
};

const mapStateToprops = createStructuredSelector({
  items: selectCartItems,
});

const mapDispatchToProps = dispatch => {
  return {
    toggleCart: () => dispatch(toggleCart())
  }
}

export default withRouter(connect(mapStateToprops, mapDispatchToProps)(CartDropdown));
