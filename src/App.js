import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage'
import Shop from './pages/shop/Shop'
import {Switch, Route} from "react-router-dom";
import Header from './components/header/Header'
import SigninandSignup from './pages/signin-and-signup/SigninandSignup'




function App() {
  return (
    <div >
    <Header/>
      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route exact path='/shop' component={Shop}/>
        <Route exact path='/signin' component={SigninandSignup}/>
      </Switch>
    </div>
  );
}

export default App;
