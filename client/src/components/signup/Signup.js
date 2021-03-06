
import React from 'react';
import './Signup.scss'
import FormInput from '../form-input/FormInput'
import Custombutton from '../custombutton/Custombutton'
import {auth, createUserProfileDocument} from '../../firebase/firebase'


class Signup extends React.Component {
    _isMounted = false;
    constructor(props){
        super(props);
        this.state = {
            displayName:'',
            email:'',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        this._isMounted =true;

        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword) {
            alert('passwords dont match')
            return;
        }
        try
        {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName})

            if(this._isMounted)  
            {
                this.setState({
                displayName:'',
                email:'',
                password: '',
                confirmPassword: ''
            })
          }
        }
        catch(error){
                console.log('error creating user ', error.message);
        }

    }

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({ [name]: value})
    }

    componentWillUnmount(){
        this._isMounted =false;
    }

    render(){
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title'> I do not have an account </h2>
                <span> Sign up with your email and password </span>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange}
                    label = 'Display Name' required>
                    </FormInput>

                    <FormInput type='email' name='email' value={email} onChange={this.handleChange}
                    label = 'email' autoComplete='username' required>
                    </FormInput>

                    <FormInput type='password' name='password' value={password} onChange={this.handleChange}
                    label = 'password' autoComplete='new-password' required>
                    </FormInput>

                    <FormInput type='password' name='confirmPassword' value={confirmPassword} onChange={this.handleChange}
                    label = 'Confirm Password' autoComplete='new-password' required>
                    </FormInput>

                    <Custombutton type='submit'> SIGN UP </Custombutton>

                </form>
            </div>
        )
    }

}


export default Signup;