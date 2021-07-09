import React, { useEffect } from "react";
import {
   Route,
   Switch,
   BrowserRouter as Router,
   Redirect,
} from "react-router-dom";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectCurrentUser } from "./redux/user/user-selector";

import { checkUserSession } from "./redux/user/user-action";

// pages
import Header from "./components/header/header.component.jsx";
import HomePage from "./pages/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/signin-and-signup-page/signin-and-signup-page.component.jsx";
import CheckoutPage from "./pages/checkout/checkout-page.component";
import CollectionPage from "./pages/collection/collection.component";

// css
import { GlobalStyles } from "./globalStyles";

const App = ({ checkUserSession, currentUser }) => {
   useEffect(() => {
      checkUserSession();
   }, [checkUserSession]);

   return (
      <Router>
         <div className="App">
            <Header />
            <Switch>
               <Route exact path="/" component={HomePage} />
               <Route path="/shop" component={ShopPage} />
               <Route
                  exact
                  path="/signin"
                  render={() =>
                     currentUser ? <Redirect to="/" /> : <SignInAndSignUpPage />
                  }
               />

               <Route exact path="/checkout" component={CheckoutPage} />
               <Route exact path="/collections" component={CollectionPage} />
            </Switch>
         </div>
         <GlobalStyles/>
      </Router>
   );
};

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
});

const mapDispatchToprops = (dispatch) => {
   return {
      checkUserSession: () => dispatch(checkUserSession()),
   };
};

export default connect(mapStateToProps, mapDispatchToprops)(App);
