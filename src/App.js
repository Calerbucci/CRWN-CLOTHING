import React from 'react';
import './App.css';
import Homepage from './pages/homepage/Homepage'
import Shop from './pages/shop/Shop'
import {Switch, Route} from "react-router-dom";
import Header from './components/header/Header'
import SigninandSignup from './pages/signin-and-signup/SigninandSignup'
import {auth, createUserProfileDocument} from './firebase/firebase';



class  App extends React.Component{

    constructor() {
      super();

      this.state = {
        currentUser: null
      }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
    
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
              this.setState({
                currentUser: {
                  id: snapShot.id,
                  ...snapShot.data()
                }
              })
          })
        }
        else {this.setState({currentUser:userAuth})}
      })
    }

    componentWillUnmount() {
      this.unsubscribeFromAuth();
    }

  render() {
      return (
      <div >
      <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route exact path='/shop' component={Shop}/>
          <Route exact path='/signin' component={SigninandSignup}/>
        </Switch>
      </div>
    );
  }
  
}

export default App;
