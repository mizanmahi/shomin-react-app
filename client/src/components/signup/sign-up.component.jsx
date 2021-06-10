import { connect } from "react-redux";

import swal from "sweetalert";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import "./sign-up.style.scss";
import { signupStart } from "../../redux/user/user-action";
import { useState } from "react";

const SignUp = ({ signupStart }) => {
   const [userCredectials, setCredentials] = useState({
      displayName: "",
      password: "",
      confirmPassword: "",
      email: "",
   });
   const { displayName, password, confirmPassword, email } = userCredectials;
   const handleSubmit = async (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
         swal("Password Don't Match!", "Please input password correctly");
         return;
      }
      signupStart({ email, password, displayName });
   };

   const handleChange = (e) => {
      const { name, value } = e.target;

      setCredentials({
         ...userCredectials,
         [name]: value,
      });
   };

   return (
      <div className="sign-up">
         <h2 className="title">I do not have an account</h2>
         <span>Sign up with your email and password</span>
         <form action="#" className="sign-up-form" onSubmit={handleSubmit}>
            <FormInput
               name="displayName"
               type="text"
               value={displayName}
               label="Display name"
               handleChange={handleChange}
               required
            />
            <FormInput
               name="email"
               type="email"
               value={email}
               label="Email"
               handleChange={handleChange}
               required
            />
            <FormInput
               name="password"
               type="password"
               value={password}
               label="Password"
               handleChange={handleChange}
               required
            />
            <FormInput
               name="confirmPassword"
               type="password"
               value={confirmPassword}
               label="Confirm Password"
               handleChange={handleChange}
               required
            />
            <CustomButton type="submit">Sign Up</CustomButton>
         </form>
      </div>
   );
};

const mapDispatchToProps = (dispatch) => ({
   signupStart: (userCredentials) => dispatch(signupStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
