import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './components/pages/homepage.components.jsx';

function App() {
  
  const Hats = () => {
    return <h1>Hats</h1>
  }
  
  return (

    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/shop/hats' component={Hats} />

  
    </Switch>
  )
}

export default App;
