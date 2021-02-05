import React from 'react'
import './Signin.scss'
import FormInput from '../form-input/FormInput'
import Custombutton from '../custombutton/Custombutton'
import {auth, signInwithGoogle} from '../../firebase/firebase'

class Signin extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();  
        const {email, password} =this.state;

        try{
            auth.signInWithEmailAndPassword(email, password);
            this.setState({ email:'', password:''})
        }
        catch(error){
            console.log('error login', error.message);
        }
    }

    handleChange = event => {
        const {value, name} = event.target;
        this.setState({ [name]: value})
    }

    render () {
          return  (<div className='sign-in'>

                <h2> I already have an account </h2>
                <span> Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                    name='email' 
                    type='email'
                    value={this.state.email}
                    handleChange={this.handleChange} 
                    label='email' 
                    required/>

                    <FormInput 
                    name='password' 
                    type= 'password' 
                    value={this.state.password} 
                    handleChange={this.handleChange} 
                    label='password' 
                    required/>

                    <div className='buttons'>
                        <Custombutton type='submit' > Sign In </Custombutton>
                        <Custombutton onClick={signInwithGoogle} isGoogleSignIn> {''} Sign In with Google {''} </Custombutton>
                    </div>

                   

                </form>
            </div>)
    }
}

export default Signin;