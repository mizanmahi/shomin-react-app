import React from 'react';
import { connect } from 'react-redux';

import { ReactComponent as Cartlogo } from '../../assets/img/shopping-bag.svg';
import { toggleCart } from '../../redux/cart/cart-action';

import { createStructuredSelector } from 'reselect';
import { selectCartItemQuantity } from '../../redux/cart/cart-selector'; // selector adding

import './cart-icon.style.scss'

const CartIcon = ({ itemQuantity, toggleCart }) => {
    return (
        <div className='cart-icon' onClick={ toggleCart }>
            <Cartlogo className='shopping-icon'/>
            <span className='item-count'>{ itemQuantity }</span>
        </div>
        
    )
}

const mapDispatchToProps = dispatch =>{
    return {
        toggleCart: () => dispatch(toggleCart())
    }
}

const mapStateToProps = createStructuredSelector({

    itemQuantity: selectCartItemQuantity

})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);