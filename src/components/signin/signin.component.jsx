import React, { Component } from "react";
import { connect } from "react-redux";

import FromInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {
   googleSignInStart,
   emailSignInStart,
} from "../../redux/user/user-action.js";

import "./signin.style.scss";

class Signin extends Component {
   constructor(props) {
      super(props);

      this.state = {
         email: "",
         password: "",
      };
   }

   handleSubmit = async (e) => {
      e.preventDefault();
      const { email, password } = this.state;
      const { emailSignInStart } = this.props;
      emailSignInStart({ email, password });
   };

   handleChange = (e) => {
      const { name, value } = e.target;
      this.setState({
         [name]: value,
      });
   };

   render() {
      return (
         <div className="sign-in">
            <h2>I already have an account</h2>
            <span>Sign in with your email and password</span>

            <form action="#" onSubmit={this.handleSubmit}>
               <FromInput
                  type="email"
                  name="email"
                  label="email"
                  value={this.state.email}
                  id="email"
                  handleChange={this.handleChange}
               />
               {/* <label htmlFor="email">Email</label> */}

               <FromInput
                  type="password"
                  name="password"
                  value={this.state.password}
                  label="password"
                  handleChange={this.handleChange}
                  id="password"
               />
               {/* <label htmlFor="password">Password</label> */}
               <div className="custom-button-container">
                  <CustomButton type="submit" onClick={this.handleSubmit}>
                     Sign In
                  </CustomButton>
                  <CustomButton
                     type="button"
                     onClick={this.props.googleSignInStart}
                     isGoogleButton={true}
                  >
                     Sign In With Google
                  </CustomButton>
               </div>
            </form>
         </div>
      );
   }
}

const mapDispatchToProps = (dispatch) => ({
   googleSignInStart: () => dispatch(googleSignInStart()),
   emailSignInStart: (emailAndPassword) =>
      dispatch(emailSignInStart(emailAndPassword)),
});

export default connect(null, mapDispatchToProps)(Signin);
