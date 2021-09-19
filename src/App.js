import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './components/pages/homepage/homepage.components.jsx';
import Header from './components/header/header.component';
import shop from './components/pages/shop/shop.component';
import SignInSignOut from './components/pages/sign-in-and-sign-out-component/sign-in-and-sign-out.component';
import { auth } from './firebase/firebase.util'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      currentUser : null
    };
  }

  Unsubscribe = null;

  componentDidMount(){
    this.Unsubscribe = auth.onAuthStateChanged(user => {
      this.setState({currentUser: user})
      console.log(user)
    });
  }

  componentWillUnmount(){
    this.Unsubscribe();
  }

  render(){

    return (
      <div>
      <Header currentUser={this.state.currentUser}/>
      <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/shop' component={shop} />
      <Route exact path='/sign-in' component={SignInSignOut} />
      
      
      </Switch>
      </div>
    )
  }
}

export default App;