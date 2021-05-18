import React, { Component } from 'react';

import swal from 'sweetalert';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.style.scss'

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
        const { displayName, password, confirmPassword, email } = this.state;
        if(password !== confirmPassword){
            swal("Password Don't Match!", "Please input password correctly");
            return;
        }

        try{
            const { user } = await auth.createUserWithEmailAndPassword(email, password);
             await createUserProfileDocument(user, { displayName })
             this.setState({
                displayName: '',
                password: '',
                confirmPassword: '',
                email: ''
             })
        }catch(err){
            swal(err.message, 'Use a different email', 'warning', { button: 'Lets change that'})
        }
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

export default SignUp;