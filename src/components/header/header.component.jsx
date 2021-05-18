import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import logo from '../../assets/img/logo.png';
import CartIcon from '../cart-item/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.style.scss'
// selectors
import { selectCartIsHidden } from '../../redux/cart/cart-selector'; 
import { selectCurrentUser } from '../../redux/user/user-selector'; 

const Header = ({ currentUser, isHidden }) => {
    return (
        <div className='header'>
            <div className="logo-container">
                <Link to='/'>
                   <img src={logo} alt="Logo" className='logo'/>
                </Link>
            </div>
            <div className="options">
                <Link to='/shop' className='option'>SHOP</Link>
                <Link to='/contact' className='option'>CONTACT</Link>
                { currentUser 
                    ? <div className='option' onClick={ () => auth.signOut() }>Sign Out</div>
                    : <Link className='option' to='/signin'>Sign In</Link>
                }
             
             <CartIcon/>
            </div>

             {
                 !isHidden
                 ? <CartDropdown/>
                 : null
             }

        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isHidden: selectCartIsHidden
})
export default connect(mapStateToProps)(Header);