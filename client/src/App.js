import React from 'react';

import GlobalStyle from './GlobalStyle'

import Homepage from './pages/homepage/Homepage'
import Shop from './pages/shop/Shop'
import {Switch, Route, Redirect} from "react-router-dom";
import Header from './components/header/Header'
import SigninandSignup from './pages/signin-and-signup/SigninandSignup'
import {auth, createUserProfileDocument} from './firebase/firebase';
import {connect} from 'react-redux'
import setCurrentUser from './redux/user/user-action'
import {selectCurrentUser} from './redux/user/user-selector'
import Checkout from './pages/checkout/Checkout'

class  App extends React.Component{
  
    unsubscribeFromAuth = null;

    componentDidMount() {
      const {setCurrentUser} = this.props;
    
      this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {

        if(userAuth) {
          const userRef = await createUserProfileDocument(userAuth);

          userRef.onSnapshot(snapShot => {
            setCurrentUser ({
                  id: snapShot.id,
                  ...snapShot.data()
                })
          })
        }
        else {setCurrentUser(userAuth)}
      })
    }

    componentWillUnmount() {
      console.log('I am unsubscribing')
      this.unsubscribeFromAuth();
    }

  render() {
      return (
      <div >
      <GlobalStyle />
      <Header/>
        <Switch>
          <Route exact path='/' component={Homepage}/>
          <Route path='/shop' component={Shop}/>
          <Route exact path='/checkout' component={Checkout}/>
          <Route exact path='/signin' render={() => this.props.currentUser? (<Redirect to ='/'/> ) : (<SigninandSignup/>)}/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    currentUser: selectCurrentUser(state)
})

const maspDispatchToprops = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, maspDispatchToprops)(App);
