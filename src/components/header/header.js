import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import '../../stylesheet/header.scss';
import { auth } from '../../firebase/firebase.utils';

const Header = ({currentUser}) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      {
        currentUser ?
        <div className="option" onClick={() => auth.signOut()}>Sign out</div>
        :
        <Link className="option" to="/signin">
          SIGN IN
        </Link>
      }
    </div>
  </div>
);

// function to allow us to access the state
const mapStateToProps = (state) => ({
  currentUser: state.user.currentUser
});
 
export default connect(mapStateToProps)(Header);
