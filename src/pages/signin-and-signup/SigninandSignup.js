import React from 'react'
import './SigninandSignup.scss';
import Signin from '../../components/signin/Signin'
import Signup from '../../components/signup/Signup'

function SigninandSignup() {
    return (
        <div className='sign-in-and-sign-up'>
           <Signin/>
           <Signup/>
        </div>
    )
}

export default SigninandSignup;
