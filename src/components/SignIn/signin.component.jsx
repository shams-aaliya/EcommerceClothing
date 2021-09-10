import React, { Component } from 'react';
import './signin.styles.scss'

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
            <span>There was  some text</span>

            <form>
            <input type="email" name="email" value={this.state.email}  onChange={this.handleChange}/>
            <label>Email</label>
            <input type="password" value={this.state.password} name="password" onChange={this.handleChange}/>
            <label>Email</label>

            <input type="submit" value="Sign In" onClick={this.handleClick} />
            </form>
                
            </div>
        )
    }
}

export default SignIn