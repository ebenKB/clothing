import {combineReducers} from 'redux';

import userReducer from '../redux/user/user.reducer';

// merge all reducers and export them to the store
export default combineReducers({
  user: userReducer
});
