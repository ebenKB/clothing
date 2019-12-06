import {combineReducers} from 'redux';

import userReducer from '../redux/user/user.reducer';
import cartReducer from './cart/cart.reducer';

// merge all reducers and export them to the store
export default combineReducers({
  user: userReducer,
  cart: cartReducer,
});
