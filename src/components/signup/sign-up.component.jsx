import React, { Component } from 'react';
import { connect } from "react-redux";

import swal from 'sweetalert';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import './sign-up.style.scss'
import { signupStart } from '../../redux/user/user-action';

class SignUp extends Component {
    constructor(){
        super();

        this.state = {
            displayName: '',
            password: '',
            confirmPassword: '',
            email: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();
        const { signupStart } = this.props;
        const { displayName, password, confirmPassword, email } = this.state;
        if(password !== confirmPassword){
            swal("Password Don't Match!", "Please input password correctly");
            return;
        }
        signupStart({ email, password, displayName})

    }

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({
            [name]: value
        })
    }

    render (){
        const { displayName, password, confirmPassword, email } = this.state;
        return (
           <div className='sign-up'>
               <h2 className='title'>I do not have an account</h2>
               <span>Sign up with your email and password</span>
               <form action="#" className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput 
                        name='displayName'
                        type='text'
                        value={ displayName }
                        label='Display name'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        name='email'
                        type='email'
                        value={ email }
                        label='Email'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        name='password'
                        type='password'
                        value={ password }
                        label='Password'
                        handleChange={this.handleChange}
                        required
                    />
                    <FormInput 
                        name='confirmPassword'
                        type='password'
                        value={ confirmPassword }
                        label='Confirm Password'
                        handleChange={this.handleChange}
                        required
                    />
                    <CustomButton type='submit'>
                        Sign Up
                    </CustomButton>
               </form>
           </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    signupStart: (userCredentials) => dispatch(signupStart(userCredentials))
})

export default connect(null, mapDispatchToProps)(SignUp);