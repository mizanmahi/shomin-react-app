import React from "react";
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
import "./App.css";

class App extends React.Component {
   componentDidMount() {
      const { checkUserSession } = this.props;
      checkUserSession();
      //    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      //       if (userAuth) {
      //          const userRef = await createUserProfileDocument(userAuth);
      //          userRef.onSnapshot((snapshot) => {
      //             setCurrentUser({
      //                id: snapshot.id,
      //                ...snapshot.data(),
      //             });
      //          });
      //       } else {
      //          setCurrentUser(userAuth);
      //       }
      //    });
   }

   componentWillUnmount() {}

   render() {
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
                        this.props.currentUser ? (
                           <Redirect to="/" />
                        ) : (
                           <SignInAndSignUpPage />
                        )
                     }
                  />

                  <Route exact path="/checkout" component={CheckoutPage} />
                  <Route exact path="/collections" component={CollectionPage} />
               </Switch>
            </div>
         </Router>
      );
   }
}

const mapStateToProps = createStructuredSelector({
   currentUser: selectCurrentUser,
});

const mapDispatchToprops = (dispatch) => {
   return {
      checkUserSession: () => dispatch(checkUserSession()),
   };
};

export default connect(mapStateToProps, mapDispatchToprops)(App);
