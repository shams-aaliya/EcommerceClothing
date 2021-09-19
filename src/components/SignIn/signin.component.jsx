import React, { Component } from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.components';
import {signInWithGoogle} from '../../firebase/firebase.util'
export class SignIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            email : '',
            password: ''
        }
    }
    
    handleClick = event => {
        event.preventDefault();
        this.setState({ email:'',  password:''})
    }

    handleChange = event => {
     const {name,value} = event.target;
     this.setState({ [name]: value})
    }
    render() {
        return (
            <div className="sign-in">
            <h2>I already have an account</h2>
            <span >Sign in with your e-mail and password</span>

            <form>
            <FormInput 
            type="email" 
            name="email" 
            value={this.state.email}  
            label="E-mail"
            handleChange={this.handleChange}
            required
            />
            
            <FormInput 
            type="password" 
            value={this.state.password} 
            name="password" 
            label="Password"
            handleChange={this.handleChange}
            required
            />
            <div className="buttons">
            <CustomButton type="submit" onClick={this.handleClick}>Sign In</CustomButton>
            <CustomButton type="submit" onClick={signInWithGoogle} isGoogleSignIn >Sign In With Google</CustomButton>
            </div>

            </form>
                
            </div>
        )
    }
}

export default SignIn