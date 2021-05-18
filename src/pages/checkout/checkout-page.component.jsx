import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectTotalPrice } from '../../redux/cart/cart-selector';

import CheckoutItem from '../../components/checkout-item/checkout-item.component';

import './checkout-page.style.scss';
import StripeCheckoutButton from '../../components/stripe-button/stripe.button.component';

const CheckoutPage = ({ cartItems, total })  => {
    return (
        <div className='checkout-page'>
           <div className='checkout-header'>
               <div className="header-block">
                   <span>Product</span>
               </div>
               <div className="header-block">
                   <span>Description</span>
               </div>
               <div className="header-block">
                   <span>Quantity</span>
               </div>
               <div className="header-block">
                   <span>Price</span>
               </div>
               <div className="header-block">
                   <span>Remove</span>
               </div>
               
           </div>
           {
               cartItems.map(item => <CheckoutItem item={item} key={item.id}/>)
           }
           <div className="total">
           <span>Total: ${ total }</span>
           </div>
           <StripeCheckoutButton price={total}/>
          <div className="demo-card-info">
          <p>For testing the payment use this demo card details:</p>
           <span>*4242 4242 4242 4242 Exp: 10/70 CVV: 123*</span>
          </div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectTotalPrice
})

export default connect(mapStateToProps)(CheckoutPage);