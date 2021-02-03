import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage'
import {Switch, Route, withRouter } from "react-router-dom";

const HatsPage = () => (
    <div>
        <h1> Hats Page</h1>
    </div>
)


function App() {
  return (
    <div >
      {/* <Homepage/> */}

      <Switch>
        <Route exact path='/' component={Homepage}/>
        <Route path='/shop/hats' component={HatsPage}/>
      </Switch>

      
    </div>
  );
}

export default App;
