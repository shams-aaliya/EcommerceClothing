import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import HomePage from './components/pages/homepage/homepage.components.jsx';
import Header from './components/header/header.component';
import shop from './components/pages/shop/shop.component';

function App() {
  
  return (
    <div>
    <Header />
    <Switch>
    <Route exact path='/' component={HomePage} />
    <Route exact path='/shop' component={shop} />
    
    
    </Switch>
    </div>
  )
}

export default App;
