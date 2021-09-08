import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './components/pages/homepage/homepage.components.jsx';
import shop from './components/pages/shop/shop.component';

function App() {
  
  return (

    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/shop' component={shop} />

  
    </Switch>
  )
}

export default App;
