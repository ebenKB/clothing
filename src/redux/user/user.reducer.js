// manages the state of the user
// a reducer recieves an action and a payload to update the state

// Set the default initial state for the current user
const INITIAL_STATE = {
  currentUser : null
}

// if the state is not provided, set it to the initial state using default param value
const userReducer = (state = INITIAL_STATE, action) =>  {
  switch(action.type) {
    case 'SET_CURRENT_USER':
        return {
          ...state,
          currentUser:action.payload
        }

        default: return state;
  }
}

export default userReducer;
