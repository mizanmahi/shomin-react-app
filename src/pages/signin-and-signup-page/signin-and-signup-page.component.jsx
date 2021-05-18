import React from 'react';

import Signin from '../../components/signin/signin.component';
import SignUp from '../../components/signup/sign-up.component';

import './signin-and-signup-page.style.scss';

const SignInAndSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <Signin />
            <SignUp></SignUp>
        </div>
    )
}

export default SignInAndSignUpPage;