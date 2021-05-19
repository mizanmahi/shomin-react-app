import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import logo from '../../assets/img/logo.png';
import CartIcon from '../cart-item/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import './header.style.scss';

import { HeaderContainer, LogoContainer, Logo, OptionsContainer, OptionLink, OptionDiv} from "./header.style";
// selectors
import { selectCartIsHidden } from '../../redux/cart/cart-selector'; 
import { selectCurrentUser } from '../../redux/user/user-selector'; 

const Header = ({ currentUser, isHidden }) => {
    return (
        <HeaderContainer>
            <LogoContainer>
                <Link to='/'>
                   <Logo src={logo} alt="Logo" className='logo'/>
                </Link>
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop' className='option'>SHOP</OptionLink>
                <OptionLink to='/contact' className='option'>CONTACT</OptionLink>
                { currentUser 
                    ? <OptionDiv className='option' onClick={ () => auth.signOut() }>SIGN OUT</OptionDiv>
                    : <OptionLink className='option' to='/signin'>SIGN IN</OptionLink>
                }
             
             <CartIcon/>
            </OptionsContainer>

             {
                 !isHidden
                 ? <CartDropdown/>
                 : null
             }

        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    isHidden: selectCartIsHidden
})
export default connect(mapStateToProps)(Header);