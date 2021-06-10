import React, { useState } from "react";
import { connect } from "react-redux";

import FromInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom-button/custom-button.component";
import {
   googleSignInStart,
   emailSignInStart,
} from "../../redux/user/user-action.js";

import "./signin.style.scss";

const Signin = ({ emailSignInStart, googleSignInStart }) => {
   const [userCredentials, setCredentials] = useState({
      email: "",
      password: "",
   });
   const handleSubmit = async (e) => {
      e.preventDefault();
      const { email, password } = userCredentials;
      emailSignInStart({ email, password });
   };

   const handleChange = (e) => {
      const { name, value } = e.target;
      setCredentials({
         ...userCredentials,
         [name]: value,
      });
   };

   return (
      <div className="sign-in">
         <h2>I already have an account</h2>
         <span>Sign in with your email and password</span>

         <form action="#" onSubmit={handleSubmit}>
            <FromInput
               type="email"
               name="email"
               label="email"
               value={userCredentials.email}
               id="email"
               handleChange={handleChange}
            />
            {/* <label htmlFor="email">Email</label> */}

            <FromInput
               type="password"
               name="password"
               value={userCredentials.password}
               label="password"
               handleChange={handleChange}
               id="password"
            />
            {/* <label htmlFor="password">Password</label> */}
            <div className="custom-button-container">
               <CustomButton type="submit" onClick={handleSubmit}>
                  Sign In
               </CustomButton>
               <CustomButton
                  type="button"
                  onClick={googleSignInStart}
                  isGoogleButton={true}
               >
                  Sign In With Google
               </CustomButton>
            </div>
         </form>
      </div>
   );
};

const mapDispatchToProps = (dispatch) => ({
   googleSignInStart: () => dispatch(googleSignInStart()),
   emailSignInStart: (emailAndPassword) =>
      dispatch(emailSignInStart(emailAndPassword)),
});

export default connect(null, mapDispatchToProps)(Signin);
