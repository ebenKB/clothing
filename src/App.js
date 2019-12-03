import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage';
import ShopPage from './pages/shop';
import Header from './components/header/header';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up';
import { auth } from './firebase/firebase.utils';
class App extends React.Component{
  constructor() {
    super();
    this.state={
      currentUser: null,
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
   this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
     this.setState({
       currentUser: user,
     });
     console.log( user)
   });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        {/* <switch> */}
          <Route exact path='/' component={Homepage} />
          <Route exact path='/shop' component={ShopPage} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        {/* </switch> */}
      </div>
    );
  }
}

export default App;
