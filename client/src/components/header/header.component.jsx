import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import logo from "../../assets/img/logo.png";
import CartIcon from "../cart-item/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";


import {
   HeaderContainer,
   LogoContainer,
   Logo,
   OptionsContainer,
   OptionLink,
} from "./header.style";
// selectors
import { selectCartIsHidden } from "../../redux/cart/cart-selector";
import { selectCurrentUser } from "../../redux/user/user-selector";
import { signoutStart } from "../../redux/user/user-action";

const Header = ({ currentUser, isHidden, signoutStart }) => {
   return (
      <HeaderContainer>
         <LogoContainer>
            <Link to="/">
               <Logo src={logo} alt="Logo" className="logo" />
            </Link>
         </LogoContainer>
         <OptionsContainer>
            <OptionLink to="/shop" className="option">
               SHOP
            </OptionLink>
            <OptionLink to="/contact" className="option">
               CONTACT
            </OptionLink>
            {currentUser ? (
               <OptionLink as="div" className="option" onClick={signoutStart}>
                  SIGN OUT
               </OptionLink>
            ) : (
               <OptionLink className="option" to="/signin">
                  SIGN IN
               </OptionLink>
            )}

            <CartIcon />
         </OptionsContainer>

         {!isHidden ? <CartDropdown /> : null}
      </HeaderContainer>
   );
};

//createStructuredSelector automatically pass the global state in the individual selector 
const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
   isHidden: selectCartIsHidden,
});

// const mapStateToProps=  state => {
//    return {
//       currentUser: selectCurrentUser(state),
//       isHidden: selectCartIsHidden(state)
//    }
// } 

const mapDispatchToProps = dispatch => ({
   signoutStart: () => dispatch(signoutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
