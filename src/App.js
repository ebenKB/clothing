import React from 'react';
import {Route} from 'react-router-dom';
import './App.css';
import Homepage from './pages/homepage';
import ShopPage from './pages/shop';

function App() {
  return (
    <div>
      <switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/shop' component={ShopPage} />
      </switch>
    </div>
  );
}

export default App;
